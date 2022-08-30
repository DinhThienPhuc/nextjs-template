/* GALLERY COMPONENT STYLES: ALERT
   ========================================================================== */

import { SEVERITY, TSeverity } from "./alert.utils";
import styled, { css } from "styled-components";

const Styled = {
  Alert: styled.div<{ severity: TSeverity; hasTitle: boolean }>`
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 16px;
    font-weight: 400;

    & > .alert-panel-left {
      display: flex;
      align-items: center;
    }

    & > .alert-panel-left {
      display: flex;
      align-items: center;
    }

    ${({ severity }) => {
      if (severity === SEVERITY.SUCCESS) {
        return css`
          background-color: rgb(12, 19, 13);
          color: rgb(204, 232, 205);
        `;
      }
      if (severity === SEVERITY.ERROR) {
        return css`
          background-color: rgb(22, 11, 11);
          color: rgb(244, 199, 199);
        `;
      }
      if (severity === SEVERITY.WARNING) {
        return css`
          background-color: rgb(25, 18, 7);
          color: rgb(255, 226, 183);
        `;
      }
      return css`
        background-color: rgb(7, 19, 24);
        color: rgb(184, 231, 251);
      `;
    }};
  `,
  Content: styled.div``,
  Title: styled.div`
    font-size: 16px;
    font-weight: 500;
  `,
  Icon: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    margin: 3px 12px 3px 0px;

    &.alert-icon-tail {
      transition: all 300ms ease-in-out;
      width: 30px;
      height: 30px;
      padding: 6px;
      cursor: pointer;
      margin: 3px 0px;
      border-radius: 50%;
    }

    &.alert-icon-tail:hover {
      background-color: rgba(144, 202, 249, 0.08);
    }
  `,
};

export default Styled;
