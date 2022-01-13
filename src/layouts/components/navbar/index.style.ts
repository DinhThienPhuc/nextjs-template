import { BORDER_WIDTH, NAVBAR_HEIGHT } from "utils/styles";

import colors from "utils/colors";
import styled from "styled-components";

const Styled = {
  Navbar: styled.nav`
    display: flex;
    align-items: center;
    padding: 0 10rem;
    height: ${NAVBAR_HEIGHT};
    background-color: ${colors["111111"]};
    border-bottom: ${BORDER_WIDTH} solid ${colors["33333340"]};
  `,
};

export default Styled;
