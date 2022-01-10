import Img from "components/img";
import LogoWebp from "assets/logo.webp";
import Styled from "./index.style";

const Navbar = () => {
  return (
    <Styled.Navbar>
      <Img src={LogoWebp} alt="logo" width={52} height={52} />
    </Styled.Navbar>
  );
};

export default Navbar;
