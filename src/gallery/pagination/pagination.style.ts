/* COMPONENT STYLES: PAGINATION
   ========================================================================== */

import { TVariant, VARIANT } from "./pagination.utils";
import styled, { css } from "styled-components";

const defaultItemStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0px 3px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

const modifySize = (size: number) => {
  return css`
    width: ${size}px;
    height: ${size}px;
  `;
};

const modifyVariant = (variant: TVariant) => {
  if (variant === VARIANT.OUTLINED) {
    return css`
      border-radius: 50%;
      border: 1px solid rgba(255, 255, 255, 0.23);
    `;
  }
  if (variant === VARIANT.ROUNDED) {
    return css`
      border-radius: 4px;
    `;
  }
  return css`
    border-radius: 50%;
  `;
};

const modifyActiveDisable = (
  disabled: boolean | undefined,
  isActive?: boolean,
) => {
  if (isActive) {
    if (disabled) {
      return css`
        pointer-events: none;
        cursor: default;
        opacity: 0.38;
        background-color: rgba(255, 255, 255, 0.16);
      `;
    }
    return css`
      background-color: rgba(255, 255, 255, 0.16);
    `;
  } else {
    if (disabled) {
      return css`
        pointer-events: none;
        cursor: default;
        opacity: 0.38;
      `;
    }
  }
};

const Styled = {
  Container: styled.ul`
    display: flex;
  `,
  Item: styled.li<{
    disabled: boolean;
    variant: TVariant;
    isActive?: boolean;
    size: number;
  }>`
    ${defaultItemStyle};
    ${({ variant }) => modifyVariant(variant)};
    ${({ size }) => modifySize(size)};
    ${({ disabled, isActive }) => modifyActiveDisable(disabled, isActive)};
  `,
};

export default Styled;
