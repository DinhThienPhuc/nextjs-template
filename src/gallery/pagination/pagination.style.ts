/* GALLERY COMPONENT STYLES: BREADCRUMB
   ========================================================================== */

import styled, { css } from "styled-components";

const defaultItemStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0px 3px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

const Styled = {
  Container: styled.ul`
    display: flex;
  `,
  PrevIcon: styled.li`
    ${defaultItemStyle};
  `,
  NextIcon: styled.li`
    ${defaultItemStyle};
  `,
  Item: styled.li`
    ${defaultItemStyle};
  `,
};

export default Styled;
