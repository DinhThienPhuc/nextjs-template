import { MAIN_MAX_WIDTH, NAVBAR_HEIGHT, SIDEBAR_WIDTH } from "utils/styles";
import styled, { css } from "styled-components";

import colors from "utils/colors";

const Styled = {
  TableOfContent: styled.div`
    position: fixed;
    top: ${NAVBAR_HEIGHT};
    right: 0;
    width: ${SIDEBAR_WIDTH};
    min-height: calc(100vh - ${NAVBAR_HEIGHT});
    padding: 1rem 1.5rem;

    @media only screen and (min-width: 1440px) {
      right: calc((100% - ${MAIN_MAX_WIDTH}) / 2 - ${SIDEBAR_WIDTH});
    }
  `,
  Wrap: styled.ul`
    padding-left: 0;
    margin-left: 1.5rem;
  `,
  Item: styled.li<{ isActive: boolean }>`
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      color: ${colors["0bc4e2"]};
    }

    ${({ isActive }) =>
      isActive &&
      css`
        color: ${colors["0bc4e2"]};
      `};
  `,
  ItemLabel: styled.span`
    margin-left: 0.5rem;
  `,
};

export default Styled;
