import "assets/styles/reset.css";
import "assets/styles/global.css";

import { ErrorBoundary } from "modules";
import Head from "next/head";
import { Layout } from "layouts";
import { TAppPropsCustomized } from "utils";
import { ThemesProvider } from "services";
import { reload } from "utils";

function MyApp({ Component, pageProps }: TAppPropsCustomized) {
  const getLayout =
    Component.getLayout ?? ((page: JSX.Element) => <Layout>{page}</Layout>);

  const getHead =
    Component.getHead ??
    (() => (
      <Head>
        <title>Nextjs Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    ));

  return (
    <ErrorBoundary onReset={reload}>
      <>
        {getHead()}
        {/* Use ThemeProvider when themes switching is needed */}
        <ThemesProvider>
          {getLayout(<Component {...pageProps} />)}
        </ThemesProvider>

        {/* Or else use plain component as below */}
        {/* {getLayout(<Component {...pageProps} />)} */}
      </>
    </ErrorBoundary>
  );
}

export default MyApp;
