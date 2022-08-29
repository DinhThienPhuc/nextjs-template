/* VIEW COMPONENT: HOME
   ========================================================================== */

import { Breadcrumb } from "gallery";

const ViewHome = () => {
  return (
    <>
      {"Home"}
      <br />
      <br />
      <br />
      <br />
      <Breadcrumb
        activePath="/item3"
        items={[
          {
            label: "item1",
            path: "/item1",
          },
          {
            label: "item2",
            path: "/item2",
          },
          {
            label: "item3",
            path: "/item3",
          },
        ]}
      />
    </>
  );
};

export default ViewHome;
