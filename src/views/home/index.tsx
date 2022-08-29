/* VIEW COMPONENT: HOME
   ========================================================================== */

import { Switch } from "gallery";
import { useState } from "react";

const ViewHome = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <>
      {"Home"}
      <br />
      <br />
      <br />
      <br />
      <Switch
        checked={checked}
        onChange={handleChange}
        preText={"Off"}
        postText={"On"}
        // disabled
      />
    </>
  );
};

export default ViewHome;
