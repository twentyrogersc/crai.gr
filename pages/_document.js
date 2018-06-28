import { normalize } from 'polished'
import NextDocument, { Head, Main, NextScript } from 'next/document'
import styled, { ServerStyleSheet, injectGlobal } from 'styled-components'

injectGlobal`
  ${normalize()}

  *, *:before, *:after {
    box-sizing: border-box;
  }
`

const HTML = styled.html`
  font: 400 1em/1.4em 'Oxygen', sans-serif;
  -webkit-font-smoothing: antialiased;

  @media print {
    font-size: 0.9em;
    line-height: 1.4em;
    max-width: 600px;
  }
`

export default class Document extends NextDocument {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <HTML>
        <Head>
          <title>Craig Rogers</title>
          <link href="https://fonts.googleapis.com/css?family=Oxygen:400,700" rel="stylesheet" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-62375230-1', 'auto');ga('send', 'pageview');`
            }}
          />
        </body>
      </HTML>
    )
  }
}
