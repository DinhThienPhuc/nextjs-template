/* GALLERY COMPONENT STYLES: ACCORDION
   ========================================================================== */

import styled from "styled-components";

const Styled = {
  Accordion: styled.div``,
  Label: styled.button`
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
  `,
  Value: styled.div<{ isOpen: boolean }>`
    padding: 0 18px;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    background-color: transparent;
    overflow: hidden;
  `,
};

export default Styled;
