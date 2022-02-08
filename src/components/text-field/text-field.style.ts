/* COMPONENT STYLES: TEXT_FIELD
   ========================================================================== */

import styled, { css } from "styled-components";

const Styled = {
  TextField: styled.div`
    position: relative;
  `,
  PreIcon: styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.75rem;
  `,
  PostIcon: styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.75rem;
  `,
  Input: styled.input<{ hasPreIcon: boolean; hasPostIcon: boolean }>`
    border: 1px solid #937341;
    outline: none !important;
    color: #c4b998;
    background-color: #121212;
    border-radius: 0.5rem;
    width: 100%;
    padding: 0.75rem 1.5rem;

    ${({ hasPreIcon }) =>
      hasPreIcon &&
      css`
        padding-left: 3rem;
      `};
    ${({ hasPostIcon }) =>
      hasPostIcon &&
      css`
        padding-right: 3rem;
      `};
  `,
};

export default Styled;
