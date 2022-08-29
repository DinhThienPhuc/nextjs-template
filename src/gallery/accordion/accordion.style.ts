/* GALLERY COMPONENT STYLES: ACCORDION
   ========================================================================== */

import styled, { css } from "styled-components";

import Icons from "assets/icons";

const Styled = {
  Accordion: styled.div``,
  Panel: styled.div<{ disabled: boolean }>`
    background-color: rgb(18, 18, 18);
    color: rgb(255, 255, 255);
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
      rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.05),
      rgba(255, 255, 255, 0.05)
    );
    cursor: pointer;

    &:first-of-type {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    &:last-of-type {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    &:not(:first-of-type) {
      border-top: 1px solid rgba(255, 255, 255, 0.12);
      margin-top: 4px;
    }

    ${({ disabled }) => {
      if (disabled) {
        return css`
          pointer-events: none;
          background-color: rgba(255, 255, 255, 0.12); ;
        `;
      }
    }};
  `,
  Label: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    padding: 16px;
    width: 100%;
    outline: none;
    font-size: 15px;
    transition: 0.4s;
  `,
  Value: styled.div<{ isOpen: boolean }>`
    padding: 16px;
    background-color: transparent;
    overflow: hidden;

    ${({ isOpen }) => {
      if (!isOpen) {
        return css`
          display: none;
        `;
      }
      return css`
        display: block;
      `;
    }};
  `,
  ExpandIcon: styled(Icons.ChevronDown)<{ isOpen: boolean }>`
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 18px;
    height: 18px;
    ${({ isOpen }) => {
      if (isOpen) {
        return css`
          transform: rotate(-180deg);
        `;
      }
    }};
  `,
};

export default Styled;
