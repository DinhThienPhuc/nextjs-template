import Head from "next/head";
import { NextPageCustomized } from "utils/interfaces";
import SectionTable from "sections/table";

const PageComponentTable: NextPageCustomized = () => {
  return <SectionTable />;
};

PageComponentTable.getHead = () => {
  return (
    <Head>
      <title>Component Table - Zoom</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default PageComponentTable;
