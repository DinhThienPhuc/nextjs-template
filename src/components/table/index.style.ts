import styled, { css } from "styled-components";

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
    border: 0.0625rem solid ${colors["000000"]};
  `,
  Caption: styled.caption``,
  THead: styled.thead``,
  TBody: styled.tbody``,
  Tr: styled.tr``,
  Th: styled.th`
    border: 0.0625rem solid ${colors["000000"]};
    padding: 0.75rem;
  `,
  Td: styled.td`
    border: 0.0625rem solid ${colors["000000"]};
    padding: 0.75rem;
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
        color: ${colors["98782b"]};
      `}
  `,
  SortDown: styled(ChevronDownSvg)<{ $isActive: boolean }>`
    width: 1rem;
    height: 1rem;
    margin-top: -0.25rem;
    ${({ $isActive }) =>
      $isActive &&
      css`
        color: ${colors["98782b"]};
      `}
  `,
};

export default Styled;
