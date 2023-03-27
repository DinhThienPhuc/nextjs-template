import { POST_ADORMENT_VARIANT } from "./constants";
import { TPostAdormentVariant } from "./types";
import styled from "styled-components";

const Styled = {
  Container: styled.div<{
    variant: TPostAdormentVariant;
  }>`
    position: absolute;
    top: calc(50% + 6px);
    transform: translateY(-50%);
    right: ${({ variant }) =>
      variant === POST_ADORMENT_VARIANT.STANDARD ? "0px" : "14px"};
  `,
};

export default Styled;
