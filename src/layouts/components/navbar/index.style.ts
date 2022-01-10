import colors from "utils/colors";
import styled from "styled-components";

const Styled = {
  Navbar: styled.nav`
    display: flex;
    align-items: center;
    padding: 0 100px;
    height: 72px;
    border-bottom: 1px solid ${colors["eaeaea"]};
  `,
};

export default Styled;
