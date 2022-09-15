/* BUTTON COMPONENT STYLES
   ========================================================================== */

import { Color, Size } from "./button.utils";
import styled, { css } from "styled-components";

const sizeModify = (props: any) => {
  if (props?.size === Size.Small) {
    return css`
      height: 24px;
      padding: 0 16px;
      border-radius: 12px;
    `;
  }
  if (props?.size === Size.Medium) {
    return css`
      height: 36px;
      padding: 0 20px;
      border-radius: 18px;
    `;
  }
  return css`
    height: 48px;
    padding: 0 24px;
    border-radius: 24px;
  `;
};

const colorModify = (props: any) => {
  if (props?.color === Color.Error) {
    return css`
      color: ${({ theme }) => theme.colors.red};
      border: 1px solid ${({ theme }) => theme.colors.red};
    `;
  }
  return css`
    border: 1px solid ${({ theme }) => theme.colors.gray1};
  `;
};

const Styled = {
  Container: styled.button<{ size: Size; color: Color }>`
    transition: all 0.2s ease;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: none;
    outline: none;
    overflow: hidden;
    cursor: pointer;
    ${sizeModify};
    ${colorModify};

    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
    }
  `,
  Text: styled.span``,
};

export default Styled;
