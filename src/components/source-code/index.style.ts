import styled, { css } from "styled-components";

import { BORDER_WIDTH } from "utils/styles";
import CodeSvg from "assets/icons/code.svg";
import CopySvg from "assets/icons/copy.svg";
import GithubSvg from "assets/icons/github.svg";
import colors from "utils/colors";

const Styled = {
  Actions: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;
  `,
  FilesGroup: styled.div`
    display: flex;
  `,
  File: styled.div<{ $isSelected: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2rem;
    border: ${BORDER_WIDTH} solid
      ${({ $isSelected }) =>
        $isSelected ? colors["0bc4e2"] : colors["f0e6d2"]};
    font-size: 0.6rem;
    color: ${colors["000000"]};
    font-weight: 500;
    cursor: pointer;

    &:first-of-type {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }

    &:last-of-type {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  `,
  FileInner: styled.div<{ $isSelected: boolean }>`
    width: 1.6rem;
    height: 1.4rem;
    background: ${({ $isSelected }) =>
      $isSelected ? colors["0bc4e2"] : colors["f0e6d2"]};
    border-radius: 0.1rem;
    display: flex;
    align-items: end;
    justify-content: end;
  `,
  Copy: styled(CopySvg)`
    width: 1rem;
    height: 1rem;
    margin-left: 0.75rem;
    cursor: pointer;
  `,
  Github: styled(GithubSvg)`
    width: 1rem;
    height: 1rem;
    margin-left: 0.75rem;
    cursor: pointer;
  `,
  Code: styled(CodeSvg)<{ $isActive: boolean }>`
    width: 1rem;
    height: 1rem;
    cursor: pointer;
    ${({ $isActive }) =>
      $isActive &&
      css`
       stroke: ${colors["0bc4e2"]}}
      `};
  `,
};

export default Styled;
