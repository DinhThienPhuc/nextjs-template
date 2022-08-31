/* COMPONENT STYLES: MENU_ICON
   ========================================================================== */

import styled, { css } from "styled-components";

const Styled = {
  MenuIcon: styled.div<{ isActivated: boolean }>`
    &:hover {
      cursor: pointer;
    }

    .line {
      width: 35px;
      height: 5px;
      background-color: white;
      margin: 6px 0;
      transition: all 400ms ease-in-out;
      border-radius: 4px;
    }

    .line.first {
      ${({ isActivated }) =>
        isActivated &&
        css`
          transform: rotate(-45deg) translate(-9px, 6px);
        `}
    }

    .line.second {
      ${({ isActivated }) =>
        isActivated &&
        css`
          opacity: 0;
        `}
    }

    .line.third {
      ${({ isActivated }) =>
        isActivated &&
        css`
          transform: rotate(45deg) translate(-8px, -8px);
        `}
    }
  `,
};

export default Styled;
