import Head from "next/head";
import { INextPageCustomized } from "utils/interfaces";
import SectionInput from "sections/input";

const PageComponentInput: INextPageCustomized = () => {
  return <SectionInput />;
};

PageComponentInput.getHead = () => {
  return (
    <Head>
      <title>Component Input - Zoom</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default PageComponentInput;
