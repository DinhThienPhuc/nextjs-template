/* PAGE COMPONENT: HOME
   ========================================================================== */

import { TNextPageCustomized } from "utils/interfaces";
import TopNavigation from "gallery/top-navigation/top-navigation";
import ViewHome from "views/home";

const PageHome: TNextPageCustomized = () => {
  return (
    <>
      <ViewHome />
      <TopNavigation />
    </>
  );
};

export default PageHome;
