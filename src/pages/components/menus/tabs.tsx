import Head from "next/head";
import { NextPageCustomized } from "utils/interfaces";

const PageTabs: NextPageCustomized = () => {
  return <>PageTabs</>;
};

PageTabs.getHead = () => {
  return (
    <Head>
      <title>Menus/Tabs - Zoom</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default PageTabs;
