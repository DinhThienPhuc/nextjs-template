/* COMPONENT STYLE: INPUT
   ========================================================================== */

import styled, { css } from "styled-components";

import { DEFAULT_LAYOUT_SIZE } from "containers/layouts/default.utils";

const iconStyle = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.gray["100"]};
  width: 24px;
  height: 24px;
`;

const Styled = {
  Input: styled.div<{ hasLeftIcon: boolean; hasRightIcon: boolean }>`
    position: relative;
    width: 100%;
    /* height: ${Math.min(DEFAULT_LAYOUT_SIZE.HEADER_HEIGHT, 52)}px; */
    /* background: rgba(205, 205, 205, 0.25); */
    /* border-radius: 14px; */
    height: 30px;
    overflow: hidden;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray["100"]};

    /* & .input-box {
      position: absolute;
      outline: none;
      width: 100%;
      height: 100%;
      border: none;
      background-color: transparent;
      padding-left: ${({ hasLeftIcon }) => (hasLeftIcon ? "56px" : "24px")};
      padding-right: ${({ hasRightIcon }) => (hasRightIcon ? "56px" : "24px")};
    } */
  `,
  InputBox: styled.input<{ hasLeftIcon: boolean; hasRightIcon: boolean }>`
    position: absolute;
    outline: none;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    padding-left: ${({ hasLeftIcon }) => (hasLeftIcon ? "56px" : "0px")};
    padding-right: ${({ hasRightIcon }) => (hasRightIcon ? "56px" : "0px")};
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.black["300"]};

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray["100"]};
    }
  `,
  IconLeft: styled.div`
    ${iconStyle};
    left: 24px;
  `,
  IconRight: styled.div`
    ${iconStyle};
    left: 24px;
  `,
};

export default Styled;
