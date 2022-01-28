import "assets/styles/reset.css";
import "assets/styles/globals.css";

import Head from "next/head";
import { IAppPropsCustomized } from "utils/interfaces";
import LayoutComponent from "layouts/component";
import { ThemesProvider } from "services/styled-themes";

function MyApp({ Component, pageProps }: IAppPropsCustomized) {
  // Use the layout defined at the page level, or else use component layout (temporary)
  // TODO: Need to change to use default layout instead of component layout
  const getLayout =
    Component.getLayout ??
    ((page) => <LayoutComponent>{page}</LayoutComponent>);

  // Use the head defined at the page level, or else use default head
  const getHead =
    Component.getHead ??
    (() => (
      <Head>
        <title>Zoom</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
    ));

  return (
    <>
      {getHead()}
      <ThemesProvider>{getLayout(<Component {...pageProps} />)}</ThemesProvider>
    </>
  );
}

export default MyApp;
