import { BUTTON_SIZE, BUTTON_VARIANT } from "./constants";
import { TButtonSize, TButtonVariant } from "./types";
import styled, { css } from "styled-components";

const sizeModify = (props: { size: TButtonSize; variant: TButtonVariant }) => {
  if (props?.size === BUTTON_SIZE["SMALL"]) {
    return css`
      height: 24px;
      padding: 0 16px;
    `;
  }
  if (props?.size === BUTTON_SIZE["MEDIUM"]) {
    return css`
      height: 36px;
      padding: 0 20px;
    `;
  }
  return css`
    height: 48px;
    padding: 0 24px;
  `;
};

const variantModify = (props: {
  size: TButtonSize;
  variant: TButtonVariant;
}) => {
  if (props?.variant === BUTTON_VARIANT["CONTAINED"]) {
    return css`
      color: rgba(0, 0, 0, 0.87);
      background-color: rgb(144, 202, 249);
      border: 1px solid rgb(144, 202, 249);

      &:hover {
        background-color: rgb(66, 165, 245);
      }
    `;
  }
  if (props?.variant === BUTTON_VARIANT["OUTLINED"]) {
    return css`
      color: rgb(144, 202, 249);
      background-color: transparent;
      border: 1px solid rgba(144, 202, 249, 0.5);

      &:hover {
        background-color: rgba(144, 202, 249, 0.08);
        border: 1px solid rgb(144, 202, 249);
      }
    `;
  }
  return css`
    color: rgb(144, 202, 249);
    background-color: transparent;
    border: 1px solid transparent;

    &:hover {
      background-color: rgba(144, 202, 249, 0.08);
    }
  `;
};

const Styled = {
  Container: styled.button<{ size: TButtonSize; variant: TButtonVariant }>`
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    background-color: transparent;
    box-shadow: none;
    outline: none;
    overflow: hidden;
    border-radius: 4px;
    min-width: 64px;
    padding: 6px 12px;
    font-weight: 500;
    cursor: pointer;
    ${sizeModify};
    ${variantModify};

    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
    }
  `,
};

export default Styled;
