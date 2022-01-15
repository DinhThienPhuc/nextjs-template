import Styled from "./index.style";
import { useMemo } from "react";

interface IProps {
  items?: any[] | undefined;
}

const TableOfContent = ({ items }: IProps) => {
  const JSXTableOfContent = useMemo(() => {
    return items?.map((item) => {
      return (
        <a href={`#{item.id}`} key={item.id}>
          <li>{item.label}</li>
        </a>
      );
    });
  }, [items]);

  if (!items) {
    return null;
  }

  return (
    <Styled.TableOfContent>
      <ul>{JSXTableOfContent}</ul>
    </Styled.TableOfContent>
  );
};

export default TableOfContent;
