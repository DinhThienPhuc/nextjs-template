import Head from "next/head";
import { NextPageCustomized } from "utils/interfaces";

const PageComponents: NextPageCustomized = () => {
  return <>Component homepage</>;
};

PageComponents.getHead = () => {
  return (
    <Head>
      <title>Components - Zoom</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default PageComponents;