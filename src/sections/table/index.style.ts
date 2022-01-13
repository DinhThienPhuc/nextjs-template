import Table from "components/table";
import colors from "utils/colors";
import styled from "styled-components";

const Styled = {
  TableProps: styled(Table)`
    &.table {
      border: none;
    }
    .table-head {
      border: none;
      border-bottom: 0.125rem solid ${colors["31271e"]};
    }

    .table-cell {
      border-left: none;
      border-right: none;
    }
  ` as typeof Table,
  Property: styled.span`
    font-weight: 400;
  `,
  List: styled.ul`
    list-style-type: circle;
  `,
};

export default Styled;
