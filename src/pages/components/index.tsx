import Head from "next/head";
import { NextPageCustomized } from "utils/interfaces";

const PageComponents: NextPageCustomized = () => {
  return <>Component homepage</>;
};

PageComponents.getHead = () => {
  return (
    <Head>
      <title>Components - Zoom</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default PageComponents;
