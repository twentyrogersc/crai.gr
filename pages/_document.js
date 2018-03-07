import Document, { Head, Main as NextMain, NextScript } from 'next/document'
import styled, { ServerStyleSheet } from 'styled-components'

const Html = styled.html`
  align-items: center;
  display: flex;
  margin: 0;
  min-height: 100%;
  padding: 0;
`

const Body = styled.body`
  box-sizing: border-box;
  font: 400 16px/24px 'Oxygen', sans-serif;
  margin: 0 auto;
  max-width: 700px;
  min-width: 280px;
  padding: 40px 20px;
  width: 100%;
`

export default class extends Document {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<NextMain />)
    const style = sheet.getStyleElement()

    return (
      <Html>
        <Head>
          <title>Craig Rogers</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Oxygen:400,700|Rufina:700"
            rel="stylesheet"
          />
          {style}
        </Head>
        <Body>
          {main}

          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-62375230-1', 'auto');ga('send', 'pageview');`
            }}
          />
        </Body>
      </Html>
    )
  }
}
