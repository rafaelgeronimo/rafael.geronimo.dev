import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { GA_TRACKING_ID } from "../utils/gtag";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx)
      return {...initialProps}
  }
  render () {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Mada:wght@400;600&display=swap" rel="stylesheet"></link>
          <meta name="title" content="Rafael Gerônimo"/>
          <meta name="description" content="Desenvolvedor web em um foguete rumo à grandes conquistas."/>
          <meta name="keywords" content="rafael geronimo, desenvolvedor, programador, web development, sistemas, dev"/>
          <meta name="robots" content="index, follow"/>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
          <meta name="language" content="Portuguese"/>
          <meta name="revisit-after" content="2 days"/>
          <meta name="author" content="Rafael Gerônimo"/>
          {/* <title>Rafael Gerônimo</title> */}
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
