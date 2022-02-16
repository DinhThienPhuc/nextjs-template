/* GALLERY COMPONENT STYLES: TOP_NAVIGATION
   ========================================================================== */

import styled, { css } from "styled-components";

import { MenuIcon } from "gallery";

const Styled = {
  TopNav: styled.div`
    overflow: hidden;
    background-color: #333;
  `,
  Item: styled.a`
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;

    &:hover {
      background-color: #ddd;
      color: black;
    }
  `,
  MenuIcon: styled(MenuIcon)`
    display: none;

    @media screen and (max-width: 600px) {
      float: right;
      display: block;
    }
  `,
};

export default Styled;
