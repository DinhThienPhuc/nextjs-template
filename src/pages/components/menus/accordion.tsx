import Head from "next/head";
import { NextPageCustomized } from "utils/interfaces";
import SectionAccordion from "sections/accordion";

const PageAccordion: NextPageCustomized = () => {
  return <SectionAccordion />;
};

PageAccordion.getHead = () => {
  return (
    <Head>
      <title>Menus/Accordion - Zoom</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default PageAccordion;
