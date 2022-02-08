/* ROOT COMPONENT: _APP
   ========================================================================== */

import "assets/styles/reset.css";
import "assets/styles/globals.css";

import Head from "next/head";
import LayoutComponent from "layouts/component";
import { TAppPropsCustomized } from "utils/interfaces";
import { ThemesProvider } from "services/styled-themes";

function MyApp({ Component, pageProps }: TAppPropsCustomized) {
  /**
   * Use the layout defined at the page level, or else use component layout (temporary)
   * TODO: Need to change to use default layout instead of component layout
   */
  const getLayout =
    Component.getLayout ??
    ((page: JSX.Element) => <LayoutComponent>{page}</LayoutComponent>);

  // Use the head defined at the page level, or else use default head
  const getHead =
    Component.getHead ??
    (() => (
      <Head>
        <title>Nextjs Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    ));

  return (
    <>
      {getHead()}
      {/* Use ThemeProvider when themes switching is needed */}
      <ThemesProvider>{getLayout(<Component {...pageProps} />)}</ThemesProvider>

      {/* Or else use plain component as below */}
      {/* {getLayout(<Component {...pageProps} />)} */}
    </>
  );
}

export default MyApp;
