/* GALLERY COMPONENT STYLES: SWITCH
   ========================================================================== */

import styled, { css } from "styled-components";

const Styled = {
  Container: styled.div`
    display: flex;
    align-items: center;
  `,
  Slider: styled.div<{
    width: number;
    height: number;
    disabled: boolean;
    checked: boolean;
    size: number;
  }>`
    position: relative;

    ${({ width, height }) => css`
      width: ${width}px;
      height: ${height}px;
    `};

    ${({ disabled }) =>
      !disabled &&
      css`
        cursor: pointer;
      `};

    & .track {
      position: absolute;

      ${({ width, height }) => css`
        width: ${width}px;
        height: ${height}px;
        border-radius: ${height / 2}px;
      `};

      ${({ checked }) =>
        checked
          ? css`
              background-color: rgb(144, 202, 249);
              opacity: 0.5;
            `
          : css`
              background-color: rgb(255, 255, 255);
              opacity: 0.3;
            `};

      ${({ disabled }) =>
        disabled &&
        css`
          opacity: 0.2;
        `};
    }

    & .circle {
      transition: all 250ms ease-in-out;
      position: absolute;

      ${({ height, size }) => css`
        width: ${size}px;
        height: ${size}px;
        border-radius: ${size / 2}px;
        left: ${height / 2 - size / 2}px;
        top: ${height / 2 - size / 2}px;
      `};

      ${({ checked, disabled, width, height }) => {
        if (checked) {
          return css`
            background-color: ${disabled
              ? "rgb(64, 90, 112)"
              : "rgb(144, 202, 249)"};
            transform: translateX(${width - height}px);
          `;
        }
        return css`
          background-color: ${disabled
            ? "rgb(117, 117, 117)"
            : "rgb(224, 224, 224)"};
        `;
      }};

      &:hover {
        ${({ checked, disabled }) => {
          if (!disabled) {
            return checked
              ? css`
                  box-shadow: 0 0 0 9px rgba(144, 202, 249, 0.08);
                `
              : css`
                  box-shadow: 0 0 0 9px rgba(255, 255, 255, 0.08);
                `;
          }
        }};
      }
    }
  `,
  PreText: styled.span`
    margin-right: 12px;
  `,
  PostText: styled.span`
    margin-left: 12px;
  `,
};

export default Styled;
