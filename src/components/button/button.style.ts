/* BUTTON COMPONENT STYLES
   ========================================================================== */

import { TVariant, VARIANT } from "./button.utils";
import styled, { css, keyframes } from "styled-components";

const scaleOut = keyframes`
  ${css`
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  `}
`;

const styleModify = (props: any) => {
  if (props?.variant === VARIANT.CONTAINED) {
    return css`
      color: rgba(0, 0, 0, 0.87);
      background-color: rgb(144, 202, 249);

      &:not(:disabled):hover {
        background-color: rgb(66, 165, 245);
      }

      &:disabled {
        color: rgba(255, 255, 255, 0.3);
        background-color: rgba(255, 255, 255, 0.12);
        cursor: default;
      }
    `;
  }
  if (props?.variant === VARIANT.OUTLINED) {
    return css`
      color: rgb(144, 202, 249);
      background-color: transparent;
      border: 1px solid rgba(144, 202, 249, 0.5);
      padding: 5px 15px;

      &:not(:disabled):hover {
        border: 1px solid rgb(144, 202, 249);
        background-color: rgba(144, 202, 249, 0.08);
      }

      &:disabled {
        color: rgba(255, 255, 255, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.12);
        cursor: default;
      }
    `;
  }
  return css`
    color: rgb(144, 202, 249);
    background-color: transparent;

    &:not(:disabled):hover {
      background-color: rgba(144, 202, 249, 0.08);
    }

    &:disabled {
      color: rgba(255, 255, 255, 0.3);
      cursor: default;
    }
  `;
};

const Styled = {
  Button: styled.button<{ variant: TVariant }>`
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    outline: 0px;
    border: 0px;
    margin: 0px;
    box-shadow: none;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    min-width: 64px;
    padding: 6px 8px;
    border-radius: 4px;
    ${styleModify};

    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
    }
  `,
  Text: styled.span``,
  ButtonIcon: styled.span`
    display: flex;
    align-items: center;

    &:first-of-type {
      margin-right: 8px;
    }

    &:last-of-type {
      margin-left: 8px;
    }
  `,
  Loading: styled.span`
    width: 14px;
    height: 14px;
    margin: 0 auto;
    background-color: #333;
    border-radius: 100%;
    animation: ${scaleOut} 1s infinite ease-in-out;
  `,
};

export default Styled;
