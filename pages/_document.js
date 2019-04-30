import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const resetStyles = `
  *, *:after, *:before {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
  }
`

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(Component => props => sheet.collectStyles(<Component {...props} />))

    const styleElements = sheet.getStyleElement()
    return { ...page, styleElements }
  }

  render () {
    const { styleElements } = this.props

    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
          <meta name="author" content="RAR" />
          <style dangerouslySetInnerHTML={{ __html: resetStyles }} />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico"/>
          {styleElements}
        </Head>

        <body>
          <div className="root">
            <Main />
          </div>

          <NextScript />
        </body>
      </html>

    )
  }
}
