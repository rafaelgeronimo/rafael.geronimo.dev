import { Client } from '@notionhq/client'
import { BlogPost, PostPage } from '../../@types/schema'
import { NotionToMarkdown } from 'notion-to-md'
require('dotenv').config();
export default class NotionService {
  client: Client
  n2m: NotionToMarkdown

  constructor() {
    this.client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN })
    this.n2m = new NotionToMarkdown({ notionClient: this.client })
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    const database = process.env.NOTION_BLOG_DATABASE_ID ?? ''
    const response = await this.client.databases.query({
      database_id: database,
      filter: {
        property: 'Published',
        checkbox: {
          equals: true
        }
      },
      sorts: [
        {
          property: 'PostDate',
          direction: 'descending'
        }
      ]
    });

    return response.results.map(res => {
      return NotionService.pageToPostTransformer(res)
    })
  }

  async getSingleBlogPost(slug: string): Promise<PostPage> {
    let post, markdown
    const database = process.env.NOTION_BLOG_DATABASE_ID ?? ''
    const response = await this.client.databases.query({
      database_id: database,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug
        },
        // or: [
        //   {
        //     property: 'Slug',
        //     text: {
        //       equals: slug
        //     }
        //   } as any
        // ]      
        // formula: {
        //   text: {
        //     equals: slug
        //   }
        // },
        // adicionar opções para as tags aqui
      },
      sorts: [
        {
          property: 'Updated',
          direction: 'descending'
        }
      ]
    });

    if (!response.results[0]) {
      throw 'No results available'
    }
    const page = response.results[0]
    const mdBlocks = await this.n2m.pageToMarkdown(page.id)
    markdown = this.n2m.toMarkdownString(mdBlocks)
    post = NotionService.pageToPostTransformer(page)

    return {
      post,
      markdown
    }
  }

  private static pageToPostTransformer(page: any): BlogPost {
    let cover = page.cover
    switch (cover.type) {
      case 'file':
        cover = page.cover.filter
        break
      case 'external':
        cover = page.cover.external.url
        break
      default:
        cover = ''
    }

    return {
      id: page.id,
      cover: cover,
      title: page.properties.Name.title[0].plain_text,
      author: page.properties.Author.people[0].name,
      avatar: page.properties.Author.people[0].avatar_url,
      tags: page.properties.Tags.multi_select,
      description: page.properties.Description.rich_text[0].plain_text,
      // date: page.properties.Updated.last_edited_time,
      date: page.properties.PostDate.date,
      // date: page.properties.Created.created_time,
      slug: page.properties.Slug.formula.string
    }
  }
}
