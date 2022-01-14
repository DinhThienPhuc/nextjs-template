import Head from "next/head";
import { NextPageCustomized } from "utils/interfaces";

const PageTimeline: NextPageCustomized = () => {
  return <>Timeline</>;
};

PageTimeline.getHead = () => {
  return (
    <Head>
      <title>More/Timeline - Zoom</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default PageTimeline;
