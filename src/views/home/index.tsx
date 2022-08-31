/* VIEW COMPONENT: HOME
   ========================================================================== */

import { Alert } from "gallery";

const ViewHome = () => {
  return (
    <>
      {"Home"}
      <br />
      <br />
      <br />
      <br />
      <Alert
        severity="info"
        title="Success"
        onClose={() => {}}
        variant={"outlined"}
      >
        This is an error alert — check it out!
      </Alert>
    </>
  );
};

export default ViewHome;
