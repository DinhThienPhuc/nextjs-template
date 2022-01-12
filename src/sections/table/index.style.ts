import Table from "components/table";
import styled from "styled-components";

const Styled = {
  TableProps: styled(Table)`
    .table-head,
    .table-cell {
      border-left: none;
      border-right: none;
    }
  ` as typeof Table,
  Property: styled.span`
    font-weight: 600;
  `,
};

export default Styled;
