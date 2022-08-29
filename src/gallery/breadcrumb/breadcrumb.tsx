/* GALLERY COMPONENT: BREADCRUMB - https://www.w3schools.com/howto/howto_css_breadcrumbs.asp
   ========================================================================== */

import { ReactNode, useMemo } from "react";

import Link from "next/link";
import Styled from "./breadcrumb.style";
import cx from "classnames";
import useWhyDidYouUpdate from "hooks/useWhyDidYouUpdate";

interface IItem {
  path: string;
  label: ReactNode | string;
}

interface IProps {
  className?: string;
  separator?: ReactNode | string;
  items?: IItem[];
  activePath?: string;
}

const Breadcrumb = (props: IProps) => {
  const { className, separator, items, activePath } = props;

  const customSlash = useMemo(() => {
    if (separator) {
      return <Styled.Slash>{separator}</Styled.Slash>;
    }
    return <Styled.Slash>/</Styled.Slash>;
  }, [separator]);

  const content = useMemo(() => {
    if (!items || !items.length) {
      return [];
    }
    return items.map((item, index) => {
      return (
        <>
          {index ? customSlash : null}
          <Styled.Item key={item.path}>
            {activePath === item.path ? (
              item.label
            ) : (
              <Link href={item.path}>{item.label}</Link>
            )}
          </Styled.Item>
        </>
      );
    });
  }, [activePath, customSlash, items]);

  useWhyDidYouUpdate("Breadcrumb", props);

  return (
    <Styled.Breadcrumb className={cx("breadcrumb", className)}>
      {content}
    </Styled.Breadcrumb>
  );
};

export default Breadcrumb;
