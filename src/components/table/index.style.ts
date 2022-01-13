import styled, { css } from "styled-components";

import { BORDER_WIDTH } from "utils/styles";
import ChevronDownSvg from "assets/icons/chevron-down.svg";
import ChevronUpSvg from "assets/icons/chevron-up.svg";
import colors from "utils/colors";

const Styled = {
  Container: styled.div`
    overflow-x: auto;
  `,
  Table: styled.table`
    display: table;
    border-collapse: collapse;
    width: 100%;
    border: ${BORDER_WIDTH} solid ${colors["31271e"]};
  `,
  Caption: styled.caption``,
  THead: styled.thead``,
  TBody: styled.tbody``,
  Tr: styled.tr``,
  Th: styled.th`
    border: ${BORDER_WIDTH} solid ${colors["31271e"]};
    padding: 0.75rem;
    text-align: left;
  `,
  Td: styled.td`
    border: ${BORDER_WIDTH} solid ${colors["31271e"]};
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
        color: ${colors["0bc4e2"]};
      `}
  `,
  SortDown: styled(ChevronDownSvg)<{ $isActive: boolean }>`
    width: 1rem;
    height: 1rem;
    margin-top: -0.25rem;
    ${({ $isActive }) =>
      $isActive &&
      css`
        color: ${colors["0bc4e2"]};
      `}
  `,
};

export default Styled;
