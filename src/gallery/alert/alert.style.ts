/* COMPONENT STYLES: ALERT
   ========================================================================== */

import { SEVERITY, TSeverity, TVariant, VARIANT } from "./alert.utils";
import styled, { css } from "styled-components";

const Styled = {
  Alert: styled.div<{
    severity: TSeverity;
    hasTitle: boolean;
    variant: TVariant;
    isClosed: boolean;
  }>`
    border-radius: 4px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 16px;
    font-weight: 400;

    & > .alert-panel-left {
      ${({ hasTitle }) => {
        if (!hasTitle) {
          return css`
            display: flex;
            align-items: center;
          `;
        } else {
          return css`
            display: flex;
            align-items: flex-start;
          `;
        }
      }};
    }

    ${({ severity, variant }) => {
      if (severity === SEVERITY.SUCCESS) {
        if (variant === VARIANT.OUTLINED) {
          return css`
            border: 1px solid rgb(129, 199, 132);
            color: rgb(204, 232, 205);
          `;
        }
        if (variant === VARIANT.FILLED) {
          return css`
            background-color: rgb(56, 142, 60);
            color: rgb(255, 255, 255);
          `;
        }
        return css`
          background-color: rgb(12, 19, 13);
          color: rgb(204, 232, 205);
        `;
      }
      if (severity === SEVERITY.ERROR) {
        if (variant === VARIANT.OUTLINED) {
          return css`
            border: 1px solid rgb(229, 115, 115);
            color: rgb(244, 199, 199);
          `;
        }
        if (variant === VARIANT.FILLED) {
          return css`
            background-color: rgb(211, 47, 47);
            color: rgb(255, 255, 255);
          `;
        }
        return css`
          background-color: rgb(22, 11, 11);
          color: rgb(244, 199, 199);
        `;
      }
      if (severity === SEVERITY.WARNING) {
        if (variant === VARIANT.OUTLINED) {
          return css`
            border: 1px solid rgb(255, 183, 77);
            color: rgb(255, 226, 183);
          `;
        }
        if (variant === VARIANT.FILLED) {
          return css`
            background-color: rgb(245, 124, 0);
            color: rgba(0, 0, 0, 0.87);
          `;
        }

        return css`
          background-color: rgb(25, 18, 7);
          color: rgb(255, 226, 183);
        `;
      }

      if (variant === VARIANT.OUTLINED) {
        return css`
          border: 1px solid rgb(79, 195, 247);
          color: rgb(184, 231, 251);
        `;
      }
      if (variant === VARIANT.FILLED) {
        return css`
          background-color: rgb(2, 136, 209);
          color: rgb(255, 255, 255);
        `;
      }
      return css`
        background-color: rgb(7, 19, 24);
        color: rgb(184, 231, 251);
      `;
    }};

    ${({ isClosed }) => {
      if (isClosed) {
        return css`
          display: none;
        `;
      }
    }}
  `,
  Content: styled.div``,
  Title: styled.div`
    font-size: 16px;
    font-weight: 500;
  `,
  Icon: styled.div<{ severity?: TSeverity }>`
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
