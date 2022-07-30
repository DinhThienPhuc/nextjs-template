/* PAGE COMPONENT: HOME
   ========================================================================== */

import { Img } from "components";
import { TNextPageCustomized } from "utils/interfaces";
import ViewHome from "views/home";
import { requestWithoutJwt } from "services/axios-requests/requests";
import useAxiosRequest from "hooks/useAxiosRequest";

const PageHome: TNextPageCustomized = () => {
  const { loading, error, data } = useAxiosRequest(
    "https://dog.ceo/api/breeds/image/random",
    requestWithoutJwt.get,
  );

  if (loading) {
    return <>Loading ...</>;
  }

  if (error?.code) {
    return <>Error: {error.message}</>;
  }

  console.log("data", data);

  return (
    <>
      <ViewHome />
      {data && (
        <Img src={data.message} alt={data.message} width={200} height={300} />
      )}
    </>
  );
};

export default PageHome;
