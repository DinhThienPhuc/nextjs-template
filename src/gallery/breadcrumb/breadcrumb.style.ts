/* GALLERY COMPONENT STYLES: BREADCRUMB
   ========================================================================== */

import styled from "styled-components";

const Styled = {
  Breadcrumb: styled.ul`
    display: flex;
    align-items: center;
    padding: 10px 16px;
    list-style: none;
  `,
  Item: styled.li`
    display: inline;
    font-size: 18px;
    color: rgb(255, 255, 255);

    & > a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
    }

    &:hover > a {
      text-decoration: underline;
    }
  `,
  Slash: styled.div`
    color: rgba(255, 255, 255, 0.7);
    margin: 0 8px;
  `,
};

export default Styled;
