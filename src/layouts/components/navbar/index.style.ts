import colors from "utils/colors";
import styled from "styled-components";

const Styled = {
  Navbar: styled.nav`
    display: flex;
    align-items: center;
    padding: 0 10rem;
    height: 4.5rem;
    border-bottom: 0.0625rem solid ${colors["eaeaea"]};
  `,
};

export default Styled;
