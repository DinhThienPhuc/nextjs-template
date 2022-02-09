/* ROOT COMPONENT: _APP
   ========================================================================== */

import "assets/styles/reset.css";
import "assets/styles/global.css";

import { ErrorBoundary } from "modules";
import Head from "next/head";
import LayoutDefault from "layouts/default";
import { TAppPropsCustomized } from "utils/interfaces";
import { ThemesProvider } from "services/styled-themes";
import { reload } from "utils/functions";

function MyApp({ Component, pageProps }: TAppPropsCustomized) {
  /**
   * Use the layout defined at the page level, or else use default layout
   */
  const getLayout =
    Component.getLayout ??
    ((page: JSX.Element) => <LayoutDefault>{page}</LayoutDefault>);

  /**
   * Use the head defined at the page level, or else use default head
   */
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
