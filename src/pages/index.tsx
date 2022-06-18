/* PAGE COMPONENT: HOME
   ========================================================================== */

import { TNextPageCustomized } from "utils/interfaces";
import { TopNavigation } from "gallery";
import ViewHome from "views/home";

const PageHome: TNextPageCustomized = () => {
  return (
    <>
      <ViewHome />
      <TopNavigation
        items={[
          {
            label: "Tab 1",
            href: "#ahie",
          },
          {
            label: "Tab 2",
            href: "#ahihi",
          },
        ]}
      />
    </>
  );
};

export default PageHome;
