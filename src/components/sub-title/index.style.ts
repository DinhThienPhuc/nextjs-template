import { BORDER_WIDTH } from "utils/styles";
import colors from "utils/colors";
import styled from "styled-components";

const Styled = {
  CustomDot: styled.span`
    position: relative;
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    border: ${BORDER_WIDTH} solid ${colors["98782b"]};
    margin-right: 0.5rem;

    &::after {
      position: absolute;
      top: 0.0625rem;
      left: 0.0625rem;
      content: "";
      width: 0.5rem;
      height: 0.5rem;
      background: ${colors["f0e6d2"]};
      border-radius: 50%;
    }
  `,
};

export default Styled;
