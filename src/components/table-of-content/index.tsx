import ChevronRightSvg from "assets/icons/chevron-right.svg";
import { ITableContentItems } from "utils/interfaces";
import Link from "next/link";
import Styled from "./index.style";
import { useMemo } from "react";

interface IProps {
  items?: ITableContentItems[] | undefined;
}

const TableOfContent = ({ items }: IProps) => {
  const JSXTableOfContent = useMemo(() => {
    return items?.map((item) => {
      return (
        <Link href={`#${item.id}`} key={item.id} passHref>
          <Styled.Item>
            <ChevronRightSvg width={14} height={14} />
            <span>{item.label}</span>
          </Styled.Item>
        </Link>
      );
    });
  }, [items]);

  if (!items) {
    return null;
  }

  return (
    <Styled.TableOfContent>
      <h2>On this page</h2>
      <Styled.Wrap>{JSXTableOfContent}</Styled.Wrap>
    </Styled.TableOfContent>
  );
};

export default TableOfContent;
