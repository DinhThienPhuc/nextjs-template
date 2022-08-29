/* VIEW COMPONENT: HOME
   ========================================================================== */

import { Accordion } from "gallery";

const ViewHome = () => {
  return (
    <>
      {"Home"}
      <br />
      <br />
      <br />
      <br />
      <Accordion
        panels={[
          {
            label: "item1",
            value: "item1",
          },
          {
            label: "item2",
            value: "item2",
          },
          {
            label: "item3",
            value: "item3",
          },
        ]}
      />
    </>
  );
};

export default ViewHome;
