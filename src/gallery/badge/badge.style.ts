/* GALLERY COMPONENT STYLES: BADGE
   ========================================================================== */

import styled from "styled-components";

const Styled = {
  Badge: styled.div`
    position: relative;
    width: fit-content;
    height: fit-content;
  `,
  Circle: styled.span`
    position: absolute;
    height: 20px;
    min-width: 20px;
    padding: 0px 6px;
    line-height: 20px;
    border-radius: 10px;
    top: 0px;
    right: 0px;
    transform: translate(50%, -50%);
    background-color: rgb(144, 202, 249);
    font-size: 12px;
    color: rgba(0, 0, 0, 0.87);
  `,
};

export default Styled;
