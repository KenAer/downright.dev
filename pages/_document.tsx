import { Html, Head, Main, NextScript } from 'next/document'

import Document, { DocumentContext, DocumentInitialProps } from 'next/document'
import Header from '../components/navbar'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
        <Html lang="en">
            <Head>
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=EB+Garamond" />
            <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Cabin" />
            </Head>
            <body className="bg-neutral-900">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
  }
}

export default MyDocument