import styled, { css } from "styled-components";

import ChevronDownSvg from "assets/icons/chevron-down.svg";
import ChevronUpSvg from "assets/icons/chevron-up.svg";

const Styled = {
  Container: styled.div`
    width: 100%;
    overflow-x: auto;
  `,
  Table: styled.table`
    display: table;
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #31271e;
  `,
  Caption: styled.caption``,
  THead: styled.thead``,
  TBody: styled.tbody``,
  Tr: styled.tr``,
  Th: styled.th`
    border: 1px solid #31271e;
    padding: 0.75rem;
    text-align: left;
  `,
  Td: styled.td`
    border: 1px solid #31271e;
    padding: 0.75rem;
    text-align: left;
  `,
  SortWrap: styled.span`
    display: flex;
    align-items: center;
  `,
  Sort: styled.span`
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
  `,
  SortUp: styled(ChevronUpSvg)<{ $isActive: boolean }>`
    width: 1rem;
    height: 1rem;
    margin-bottom: -0.25rem;
    ${({ $isActive }) =>
      $isActive &&
      css`
        color: #0bc4e2;
      `}
  `,
  SortDown: styled(ChevronDownSvg)<{ $isActive: boolean }>`
    width: 1rem;
    height: 1rem;
    margin-top: -0.25rem;
    ${({ $isActive }) =>
      $isActive &&
      css`
        color: #0bc4e2;
      `}
  `,
};

export default Styled;
