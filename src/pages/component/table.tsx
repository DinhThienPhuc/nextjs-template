import Head from "next/head";
import { INextPageCustomized } from "utils/interfaces";
import LayoutComponent from "layouts/component";
import { ReactElement } from "react";
import SectionTable from "sections/table";

const PageComponentTable: INextPageCustomized = () => {
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

PageComponentTable.getLayout = (page: ReactElement) => {
  return (
    <LayoutComponent
      tableOfContent={[
        { label: "System Requirements", id: "system-requirements" },
        { label: "Local related", id: "local-related" },
        { label: "Example", id: "example" },
        { label: "Source code", id: "source-code" },
        { label: "Props", id: "props" },
      ]}
    >
      {page}
    </LayoutComponent>
  );
};

export default PageComponentTable;
