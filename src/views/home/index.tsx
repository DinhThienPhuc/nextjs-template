/* VIEW COMPONENT: HOME
   ========================================================================== */

import { Breadcrumb } from "gallery";

const ViewHome = () => {
  return (
    <>
      {"Home"}

      <Breadcrumb
        activePath="/item3"
        items={[
          {
            path: "/item1",
            label: "item1",
          },
          {
            path: "/item2",
            label: "item2",
          },
          {
            path: "/item3",
            label: "item3",
          },
        ]}
      />
    </>
  );
};

export default ViewHome;
