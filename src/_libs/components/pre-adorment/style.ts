import { PRE_ADORMENT_VARIANT } from "./constants";
import { TPreAdormentVariant } from "./types";
import styled from "styled-components";

const Styled = {
  Container: styled.div<{
    variant: TPreAdormentVariant;
  }>`
    position: absolute;
    top: calc(50% + 6px);
    transform: translateY(-50%);
    left: ${({ variant }) =>
      variant === PRE_ADORMENT_VARIANT.STANDARD ? "0px" : "14px"};
  `,
};

export default Styled;
