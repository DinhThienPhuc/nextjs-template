/* COMPONENT STYLES: TOP_NAVIGATION
   ========================================================================== */

import styled, { css } from "styled-components";

import { MenuIcon } from "components";

const Styled = {
  TopNav: styled.div`
    position: relative;
    overflow: hidden;
    background-color: #333;

    @media screen and (min-width: 600px) {
      position: unset;
    }
  `,
  Item: styled.a<{ isMobileMenuOpen: boolean }>`
    display: block;
    text-align: left;
    color: #f2f2f2;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;

    &:not(:first-of-type) {
      ${({ isMobileMenuOpen }) =>
        isMobileMenuOpen
          ? css`
              display: block;
              text-align: left;
            `
          : css`
              display: none;
            `};
    }

    @media screen and (min-width: 600px) {
      float: left;
      text-align: center;

      &:not(:first-of-type) {
        display: block;
      }
    }

    &:hover {
      background-color: #dddddd;
      color: black;
    }
  `,
  MenuIcon: styled(MenuIcon)`
    position: absolute;
    right: 16px;
    top: 8px;

    .line {
      background-color: #dddddd;
    }

    @media screen and (min-width: 600px) {
      display: none;
    }
  `,
};

export default Styled;
