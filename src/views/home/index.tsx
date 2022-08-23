/* VIEW COMPONENT: HOME
   ========================================================================== */

import { Pagination } from "gallery";

const ViewHome = () => {
  return (
    <>
      {"Home"}

      <Pagination totalPages={10} page={1} />
    </>
  );
};

export default ViewHome;
