import styled, { css } from "styled-components";

import colors from "utils/colors";

const Styled = {
  Sidebar: styled.aside`
    width: 16rem;
    height: calc(100vh - 4.5rem);
    border-right: 0.0625rem solid ${colors["eaeaea"]};
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
