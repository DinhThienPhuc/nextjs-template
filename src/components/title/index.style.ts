import { BORDER_WIDTH } from "utils/styles";
import colors from "utils/colors";
import styled from "styled-components";

const Styled = {
  Title: styled.h1`
    display: flex;
    align-items: center;
    font-size: 2rem;
    font-weight: 600;
    color: #937341;
  `,
  CustomSquare: styled.span`
    position: relative;
    display: inline-block;
    width: 0.75rem;
    height: 0.75rem;
    border: ${BORDER_WIDTH} solid ${colors["98782b"]};
    transform: rotate(45deg);

    &:first-of-type {
      margin-right: 2rem;
    }

    &:last-of-type {
      margin-left: 1.5rem;
    }

    &::after {
      position: absolute;
      box-sizing: border-box;
      top: -0.4375rem;
      left: 0.3125rem;
      content: "";
      width: 0.75rem;
      height: 0.75rem;
      border: ${BORDER_WIDTH} solid ${colors["98782b"]};
    }
  `,
};

export default Styled;
