import LayoutHome from "layouts/home";
import { NextPageCustomized } from "utils/interfaces";
import { ReactElement } from "react";
import SectionHome from "sections/home";

const PageHome: NextPageCustomized = () => {
  return (
    <>
      <SectionHome />
    </>
  );
};

PageHome.getLayout = (page: ReactElement) => {
  return <LayoutHome>{page}</LayoutHome>;
};

export default PageHome;
