/* VIEW COMPONENT: HOME
   ========================================================================== */

import { Tabs } from "gallery";

const ViewHome = () => {
  return (
    <>
      {"Home"}
      <br />
      <br />
      <br />
      <br />
      <Tabs
        panels={[
          {
            label: "tab1",
            content: "ahihi",
            id: "tab1",
          },
          {
            label: "tab2",
            content: "tab2",
            id: "tab2",
            disabled: true,
          },
          {
            label: "tab3",
            content: "tab3",
            id: "tab3",
          },
        ]}
      />
    </>
  );
};

export default ViewHome;
