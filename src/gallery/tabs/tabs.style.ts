/* GALLERY COMPONENT STYLES: TABS
   ========================================================================== */

import styled, { css } from "styled-components";

const Styled = {
  Tabs: styled.div``,
  TabLabels: styled.div<{ isVertical: boolean }>`
    border: 1px solid #ccc;
    background-color: #f1f1f1;

    ${({ isVertical }) =>
      isVertical
        ? css`
            float: left;
            width: 30%;
            height: 300px;
          `
        : css`
            overflow: hidden;
          `};
  `,
  TabLabel: styled.button<{ isActivated: boolean; isVertical: boolean }>`
    background-color: inherit;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    font-size: 17px;

    ${({ isVertical }) =>
      isVertical
        ? css`
            display: block;
            padding: 22px 16px;
            width: 100%;
            text-align: left;
          `
        : css`
            padding: 14px 16px;
            float: left;
          `};

    &:hover {
      background-color: #ddd;
    }

    ${({ isActivated }) =>
      isActivated &&
      css`
        background-color: #ccc;
      `}
  `,
  TabContent: styled.div<{ isVertical: boolean }>`
    ${({ isVertical }) =>
      isVertical
        ? css`
            float: left;
            padding: 0px 12px;
            border: 1px solid #ccc;
            width: 70%;
            border-left: none;
            height: 300px;
          `
        : css`
            padding: 6px 12px;
            border: 1px solid #ccc;
            border-top: none;
          `};
  `,
};

export default Styled;
