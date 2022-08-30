/* VIEW COMPONENT: HOME
   ========================================================================== */

import { Badge } from "gallery";
import Icons from "assets/icons";

const ViewHome = () => {
  return (
    <>
      {"Home"}
      <br />
      <br />
      <br />
      <br />
      <Badge counter={120000} max={9999}>
        <Icons.Bell width={24} height={24} />
      </Badge>
    </>
  );
};

export default ViewHome;
