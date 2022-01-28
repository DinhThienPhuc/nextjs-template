import { BORDER_WIDTH, NAVBAR_HEIGHT } from "utils/styles";

import colors from "utils/colors";
import styled from "styled-components";

const Styled = {
  Navbar: styled.nav<{ isScrollBelow: boolean }>`
    transition: all 700ms ease-in-out;
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rem;
    height: ${NAVBAR_HEIGHT};
    background-color: ${({ isScrollBelow }) =>
      isScrollBelow ? colors["131415bf"] : "transparent"};
    border-bottom: ${BORDER_WIDTH} solid ${colors["33333340"]};
    backdrop-filter: blur(0.5rem);
    z-index: 100;
  `,
  Logo: styled.div`
    cursor: pointer;
  `,
  Right: styled.div`
    display: flex;
    align-items: center;
  `,
  Globe: styled.span`
    display: flex;
    align-items: center;
    border-left: ${BORDER_WIDTH} solid ${colors["f0e6d2"]};
    padding-left: 1rem;
    margin-left: 1rem;
  `,
  ThemeSwitcher: styled.span`
    display: flex;
    align-items: center;
    margin-left: 1rem;
  `,
  Item: styled.span`
    position: relative;
    text-transform: uppercase;
    font-weight: 500;
    padding: 0 1rem;
    cursor: pointer;

    &:hover {
      &:after {
        content: "";
        position: absolute;
        left: 10%;
        bottom: -0.5rem;
        border-radius: 0.25rem;
        width: 80%;
        height: 0.1875rem;
        background-color: ${colors["0bc4e2"]};
      }
    }
  `,
};

export default Styled;
