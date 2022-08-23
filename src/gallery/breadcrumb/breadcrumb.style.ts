/* GALLERY COMPONENT STYLES: BREADCRUMB
   ========================================================================== */

import styled from "styled-components";

const Styled = {
  Container: styled.ul`
    display: flex;
    align-items: center;
    padding: 10px 16px;
    list-style: none;
    background-color: #eee;
  `,
  Item: styled.li`
    display: inline;
    font-size: 18px;
    color: #222222;

    & > a {
      color: #0275d8;
      text-decoration: none;
    }

    &:hover > a {
      color: #01447e;
    }
  `,
  Slash: styled.div`
    color: #222222;
    margin: 0 5px;
  `,
};

export default Styled;
