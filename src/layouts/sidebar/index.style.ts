import {
  BORDER_WIDTH,
  BORDER_WIDTH_NEGATIVE,
  MAIN_MAX_WIDTH,
  NAVBAR_HEIGHT,
  SIDEBAR_WIDTH,
} from "utils/styles";
import styled, { css } from "styled-components";

import colors from "utils/colors";

const Styled = {
  Sidebar: styled.aside`
    position: fixed;
    width: ${SIDEBAR_WIDTH};
    min-height: calc(100vh - ${NAVBAR_HEIGHT});
    padding: 1rem;

    @media only screen and (min-width: 1440px) {
      left: calc((100% - ${MAIN_MAX_WIDTH}) / 2 - ${SIDEBAR_WIDTH});
    }
  `,
  SidebarItemGroup: styled.ul`
    padding: 0;
    border-left: ${BORDER_WIDTH} solid ${colors["31271e"]};
  `,
  SidebarItem: styled.li<{ isActive: boolean }>`
    cursor: pointer;
    padding-left: 2rem;
    margin-left: ${BORDER_WIDTH_NEGATIVE};
    ${({ isActive }) =>
      isActive &&
      css`
        color: ${colors["0bc4e2"]};
        border-left: ${BORDER_WIDTH} solid ${colors["0bc4e2"]};
        font-weight: 500;
      `};

    &:hover {
      color: ${colors["0bc4e2"]};
      border-left: ${BORDER_WIDTH} solid ${colors["0bc4e2"]};
    }
  `,
};

export default Styled;
