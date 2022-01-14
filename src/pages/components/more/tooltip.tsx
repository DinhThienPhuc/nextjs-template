import Head from "next/head";
import { NextPageCustomized } from "utils/interfaces";
import SectionTooltip from "sections/tooltip";

const PageTooltip: NextPageCustomized = () => {
  return <SectionTooltip />;
};

PageTooltip.getHead = () => {
  return (
    <Head>
      <title>More/Tooltip - Zoom</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default PageTooltip;
