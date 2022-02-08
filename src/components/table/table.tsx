/* COMPONENT: TABLE
   ========================================================================== */

import { IColumn, IProps, sortOrder } from "./table.utils";
import { useCallback, useMemo } from "react";

import Styled from "./table.style";
import cx from "classnames";

const Table = <Data extends unknown>({
  caption,
  className,
  data,
  columns,
  onSort,
  sort,
}: IProps<Data>) => {
  const handleSort = useCallback(
    (field: string) => {
      return () => {
        if (field !== sort?.field) {
          onSort?.({
            field,
            value: "asc",
          });
          return;
        }

        const currentSortIndex = sortOrder.indexOf(sort?.value);
        let nextSortIndex =
          currentSortIndex === sortOrder.length - 1 ? 0 : currentSortIndex + 1;
        onSort?.({
          field,
          value: sortOrder[nextSortIndex],
        });
      };
    },
    [onSort, sort?.field, sort?.value],
  );

  const renderTableHeader = useMemo(() => {
    return columns.map((col: IColumn<Data>) => (
      <Styled.Th key={col.field} className="table-head">
        {col.isSort ? (
          <Styled.SortWrap>
            {col.headerName}
            <Styled.Sort className="sort" onClick={handleSort(col.field)}>
              <Styled.SortUp
                $isActive={
                  sort?.field === col.field && sort?.value === sortOrder[0]
                }
              />
              <Styled.SortDown
                $isActive={
                  sort?.field === col.field && sort?.value === sortOrder[1]
                }
              />
            </Styled.Sort>
          </Styled.SortWrap>
        ) : (
          col.headerName
        )}
      </Styled.Th>
    ));
  }, [columns, handleSort, sort?.field, sort?.value]);

  const renderRow = useCallback(
    (data: Data) => {
      const row = columns.map((colFormat: IColumn<Data>) => {
        return (
          <Styled.Td key={colFormat.field} className="table-cell">
            {colFormat.renderCell?.({
              value: data[colFormat.field as keyof Data],
              cellData: data,
            })}
          </Styled.Td>
        );
      });
      return row;
    },
    [columns],
  );

  const renderTableBodyRows = useMemo(() => {
    return data.map((obj: Data, index: number) => {
      return <Styled.Tr key={index}>{renderRow(obj)}</Styled.Tr>;
    });
  }, [data, renderRow]);

  return (
    <Styled.Container>
      <Styled.Table className={cx("table", className)}>
        {caption && (
          <Styled.Caption className="table-caption">{caption}</Styled.Caption>
        )}
        <Styled.THead>
          <Styled.Tr>{renderTableHeader}</Styled.Tr>
        </Styled.THead>
        <Styled.TBody>{renderTableBodyRows}</Styled.TBody>
      </Styled.Table>
    </Styled.Container>
  );
};

export default Table;
