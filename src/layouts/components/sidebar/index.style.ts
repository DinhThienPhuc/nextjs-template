import { BORDER_WIDTH, NAVBAR_HEIGHT, SIDEBAR_WIDTH } from "utils/styles";
import styled, { css } from "styled-components";

import colors from "utils/colors";

const Styled = {
  Sidebar: styled.aside`
    width: ${SIDEBAR_WIDTH};
    height: calc(100vh - ${NAVBAR_HEIGHT});
    border-right: ${BORDER_WIDTH} solid ${colors["eaeaea"]};
    padding: 0.75rem 0 0 0.75rem;
  `,
  SidebarItem: styled.li<{ isActive: boolean }>`
    transition: all 300ms ease-in-out;
    cursor: pointer;
    ${({ isActive }) =>
      isActive &&
      css`
        color: ${colors["98782b"]};
      `};
  `,
  Label: styled.label<{ isActive: boolean }>`
    transition: all 300ms ease-in-out;
    ${({ isActive }) =>
      isActive &&
      css`
        color: ${colors["98782b"]};
      `};
  `,
};

export default Styled;
