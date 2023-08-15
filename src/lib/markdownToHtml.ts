import { stringify } from 'querystring';
import { remark } from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown: string) {  
  // console.log('MARKDOWN ANTES DE PASSAR PELO REMARK', markdown);
  
  const result = await remark().use(html).process(markdown)
  // console.log('MARKDOWN DEPOIS DE PASSAR PELO REMARK', result);
  console.log('MARKDOWN .toString():', result)
  
  return result.toString()
  // return JSON.stringify(result)
}
