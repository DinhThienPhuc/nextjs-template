/* GALLERY COMPONENT STYLES: MENU_ICON
   ========================================================================== */

import styled, { css } from "styled-components";

const Styled = {
  MenuIcon: styled.div<{ isActivated: boolean }>`
    .line {
      width: 35px;
      height: 5px;
      background-color: #333;
      margin: 6px 0;
      transition: 0.4s;
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
