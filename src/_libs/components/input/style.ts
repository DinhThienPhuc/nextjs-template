import styled, { css } from "styled-components";

import { INPUT_VARIANT } from "./constants";
import { TInputVariant } from "./types";
import { getVariantStyleModifier } from "_libs/utils";

const inputPaddingModify = (props: {
  hasPreAdorment: boolean;
  hasPostAdorment: boolean;
  variant: TInputVariant;
}) => {
  let paddingLeftStyle = 0;
  let paddingRightStyle = 0;
  const offset = props?.variant === INPUT_VARIANT.STANDARD ? 0 : 14;

  if (props?.hasPreAdorment) {
    paddingLeftStyle = 32 + offset;
  } else {
    paddingLeftStyle = offset;
  }
  if (props?.hasPostAdorment) {
    paddingRightStyle = 32 + offset;
  } else {
    paddingRightStyle = offset;
  }
  return css`
    padding: 16px ${paddingRightStyle}px 16px ${paddingLeftStyle}px;
  `;
};

export const Styled = {
  Container: styled.div<{
    fullWidth: boolean;
    disabled: boolean;
    variant: TInputVariant;
  }>`
    transition: all 200ms ease-in-out;
    position: relative;
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "210px")};
    height: 56px;
    border-radius: 4px;
    ${getVariantStyleModifier};
  `,
  Input: styled.input<{
    variant: TInputVariant;
    hasPreAdorment: boolean;
    hasPostAdorment: boolean;
  }>`
    transition: all 200ms ease-in-out;
    width: 100%;
    height: 44px;
    margin-top: 12px;
    background-color: transparent;
    color: #ffffff;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    ${inputPaddingModify};

    &:focus-visible {
      outline: none;
    }

    &:disabled {
      color: #ffffff80;
    }
  `,
};
