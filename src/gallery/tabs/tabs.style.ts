/* GALLERY COMPONENT STYLES: TABS
   ========================================================================== */

import styled, { css } from "styled-components";

const Styled = {
  Tabs: styled.div``,
  TabLabels: styled.div<{ isVertical: boolean }>`
    ${({ isVertical }) => {
      if (!isVertical) {
        return css`
          overflow: hidden;
        `;
      }
      return css`
        float: left;
        width: 30%;
        height: 300px;
      `;
    }};
  `,
  TabLabel: styled.div<{ isActivated: boolean; isVertical: boolean }>`
    transition: all 300ms ease-in-out;
    cursor: pointer;
    transition: 0.3s;
    font-size: 17px;
    color: rgba(255, 255, 255, 0.7);
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);

    ${({ isVertical }) => {
      if (!isVertical) {
        return css`
          padding: 12px 16px;
          float: left;
        `;
      }
      return css`
        display: block;
        padding: 22px 16px;
        width: 100%;
        text-align: left;
      `;
    }};

    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 3px;
      bottom: 0;
      left: 0;
      border-radius: 3px;
      background-color: transparent;
    }

    ${({ isActivated }) => {
      if (isActivated) {
        return css`
          position: relative;
          color: rgb(144, 202, 249);

          &::after {
            background-color: rgb(144, 202, 249);
          }
        `;
      }
    }}
  `,
  TabContent: styled.div<{ isVertical: boolean }>`
    ${({ isVertical }) => {
      if (!isVertical) {
        return css`
          padding: 24px;
          border-top: none;
        `;
      }
      return css`
        float: left;
        padding: 0px 12px;
        width: 70%;
        border-left: none;
        height: 300px;
      `;
    }};
  `,
};

export default Styled;
