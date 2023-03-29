import { TLabelVariant } from "./types";
import { getLabelStyleModifier } from "@phantomthief/react-mui.utils";
import styled from "styled-components";

export const Styled = {
  Container: styled.div<{
    variant: TLabelVariant;
    isLabelCollapsed: boolean;
    disabled: boolean;
  }>`
    transition: all 200ms ease-in-out;
    position: absolute;
    font-size: 16px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ disabled }) => (disabled ? "#ffffff80" : "#ffffff")};
    pointer-events: none;
    ${getLabelStyleModifier};
  `,
};
