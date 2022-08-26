import styled, { css } from "styled-components";

const Styled = {
  Container: styled.div`
    display: flex;
    align-items: center;
  `,
  Slider: styled.div<{
    width: number;
    height: number;
  }>`
    position: relative;
    cursor: pointer;

    ${({ width, height }) => css`
      width: ${width}px;
      height: ${height}px;
    `};
  `,
  Track: styled.div<{
    width: number;
    height: number;
    checked: boolean;
  }>`
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
  `,
  Circle: styled.div<{
    checked: boolean;
    width: number;
    height: number;
    size: number;
  }>`
    transition: all 250ms ease-in-out;
    position: absolute;

    ${({ height, size }) => css`
      width: ${size}px;
      height: ${size}px;
      border-radius: ${size / 2}px;
      left: ${height / 2 - size / 2}px;
      top: ${height / 2 - size / 2}px;
    `};

    ${({ checked, width, height }) =>
      checked
        ? css`
            background-color: rgb(144, 202, 249);
            transform: translateX(${width - height}px);
          `
        : css`
            background-color: rgb(224, 224, 224);
          `};

    &:hover {
      box-shadow: ${({ checked }) =>
        checked
          ? "0 0 0 9px rgba(144, 202, 249, 0.08)"
          : "0 0 0 9px rgba(255, 255, 255, 0.08)"};
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
