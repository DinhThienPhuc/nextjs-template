/* VIEW COMPONENT: HOME
   ========================================================================== */

import { Pagination } from "gallery";

const ViewHome = () => {
  return (
    <>
      {"Home"}

      <Pagination totalPages={10} showFirstButton showLastButton />
    </>
  );
};

export default ViewHome;
