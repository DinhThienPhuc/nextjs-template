import "assets/styles/reset.css";
import "assets/styles/globals.css";

import { AppPropsCustomized } from "utils/interfaces";
import Head from "next/head";
import LayoutDefault from "layouts/default";

function MyApp({ Component, pageProps }: AppPropsCustomized) {
  // Use the layout defined at the page level, or else use default layout
  const getLayout =
    Component.getLayout ?? ((page) => <LayoutDefault>{page}</LayoutDefault>);

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
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
