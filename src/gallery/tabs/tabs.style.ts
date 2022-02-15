/* GALLERY COMPONENT STYLES: TABS
   ========================================================================== */

import styled, { css } from "styled-components";

const Styled = {
  TabLabels: styled.div`
    overflow: hidden;
    border: 1px solid #ccc;
    background-color: #f1f1f1;
  `,
  TabLabel: styled.button<{ isActivated: boolean }>`
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 17px;

    &:hover {
      background-color: #ddd;
    }

    ${({ isActivated }) =>
      isActivated &&
      css`
        background-color: #ccc;
      `}
  `,
  TabContent: styled.div`
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-top: none;
  `,
};

export default Styled;
