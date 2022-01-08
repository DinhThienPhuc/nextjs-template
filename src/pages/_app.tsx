import LayoutDefault from "layouts";
import { AppPropsWithLayout } from "utils/interfaces";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, or else use default layout
  const getLayout =
    Component.getLayout ?? ((page) => <LayoutDefault>{page}</LayoutDefault>);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
