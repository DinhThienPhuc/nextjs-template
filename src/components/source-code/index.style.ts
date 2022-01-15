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
  HeaderLeft: styled.div`
    display: flex;
    align-items: center;
  `,
  FilesGroup: styled.div`
    display: flex;
    margin-left: 0.75rem;
  `,
  File: styled.div<{ $isSelected: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: ${BORDER_WIDTH} solid
      ${({ $isSelected }) =>
        $isSelected ? colors["0bc4e2"] : colors["f0e6d2"]};
    font-size: 0.6rem;
    color: ${({ $isSelected }) =>
      $isSelected ? colors["0bc4e2"] : colors["f0e6d2"]};
    font-weight: 500;
    cursor: pointer;
    margin-right: 0.5rem;
    border-radius: 50%;
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
