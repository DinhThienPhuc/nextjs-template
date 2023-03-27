import Document, {
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet: ServerStyleSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const enhanceApp = (App: any) => (props: any) =>
      sheet.collectStyles(<App {...props} />);

    try {
      ctx.renderPage = () => originalRenderPage({ enhanceApp });

      const initialProps: DocumentInitialProps = await Document.getInitialProps(
        ctx,
      );

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  /**
   * Import default some fonts to Head. Feel free to add/update/remove the fonts below
   */
  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Generated by create next app" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={"anonymous"}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Mali:wght@200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
