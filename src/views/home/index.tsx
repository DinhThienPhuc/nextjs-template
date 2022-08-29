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
            label: "label 1",
            value: "Value 1",
          },
          {
            label: "label 1",
            value: "Value 1",
          },
        ]}
      />
    </>
  );
};

export default ViewHome;
