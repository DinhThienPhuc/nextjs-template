import { TVariant } from "../definations/types";
import { VARIANT } from "../constants/base";
import { css } from "styled-components";

export const getVariantStyleModifier = (props: {
  variant: TVariant;
  disabled: boolean;
}) => {
  if (props?.variant === VARIANT["OUTLINED"]) {
    if (!props?.disabled) {
      return css`
        border: 1px solid #ffffff3b;

        &:hover {
          border: 1px solid #ffffff;
        }

        &:focus,
        &:focus-visible,
        &:focus-within {
          border: 1px solid #90caf9;
        }
      `;
    }
    return css`
      border: 1px solid #ffffff80;
    `;
  }

  if (props?.variant === VARIANT["FILLED"]) {
    if (!props?.disabled) {
      return css`
        border-bottom: 1px solid #ffffffb3;
        background-color: #ffffff17;

        &:hover {
          border-bottom: 1px solid #ffffff;
          background-color: #ffffff21;
        }

        &:focus,
        &:focus-visible,
        &:focus-within {
          border-bottom: 1px solid #90caf9;
        }
      `;
    }
    return css`
      border-bottom: 1px solid #ffffff80;
      background-color: #ffffff17;
    `;
  }

  if (!props?.disabled) {
    return css`
      border-bottom: 1px solid #ffffffb3;

      &:hover {
        border-bottom: 1px solid #ffffff;
      }

      &:focus,
      &:focus-visible,
      &:focus-within {
        border-bottom: 1px solid #90caf9;
      }
    `;
  }
  return css`
    border-bottom: 1px solid #ffffff80;
  `;
};

export const getLabelStyleModifier = (props: {
  variant: TVariant;
  isLabelCollapsed: boolean;
}) => {
  if (props?.variant === VARIANT["STANDARD"]) {
    if (props?.isLabelCollapsed) {
      return css`
        font-size: 12px;
        top: 12px;
        left: 0px;
        color: #90caf9;
      `;
    }
    return css`
      left: 0px;
    `;
  }
  if (props?.isLabelCollapsed) {
    return css`
      font-size: 12px;
      top: 12px;
      left: 14px;
      color: #90caf9;
    `;
  }
  return css`
    left: 14px;
  `;
};
