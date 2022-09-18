/* VIEW COMPONENT: HOME
   ========================================================================== */

import { Button } from "components";
import Icons from "assets/icons";

const ViewHome = () => {
  return (
    <>
      {"Home"}
      <br />
      <br />
      <br />
      <br />
      {/* <Alert
        severity="info"
        title="Success"
        onClose={() => {}}
        variant={"outlined"}
      >
        This is an error alert — check it out!
      </Alert> */}
      <Button>Add</Button>
      <br />
      <Button variant="contained">Add</Button>
      <br />
      <Button variant="outlined">Add</Button>
      <br />
      <Button
        variant="contained"
        startIcon={<Icons.Activity width={14} height={14} />}
        endIcon={<Icons.AlertCircle width={14} height={14} />}
        loading
      >
        Add
      </Button>
    </>
  );
};

export default ViewHome;
