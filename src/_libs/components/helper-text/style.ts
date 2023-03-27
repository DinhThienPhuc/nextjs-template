import { HELPER_TEXT_VARIANT } from "./constants";
import { THelperTextVariant } from "./types";
import styled from "styled-components";

export const Styled = {
  Container: styled.div<{
    variant: THelperTextVariant;
  }>`
    position: absolute;
    color: #ffffffb3;
    font-weight: 400;
    font-size: 12px;
    bottom: -20px;
    left: ${({ variant }) =>
      variant === HELPER_TEXT_VARIANT.STANDARD ? "0px" : "14px"};
  `,
};
