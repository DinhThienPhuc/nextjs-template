import { useEffect, useMemo, useState } from "react";

import Styled from "./index.style";
import { useRouter } from "next/router";

const TableOfContent = () => {
  const router = useRouter();
  const [subTitles, setSubTitles] = useState<string[]>([]);

  useEffect(() => {
    const defaultContent = document.querySelector("#default-content");
    const subTitleNodes = defaultContent?.querySelectorAll("h2");
    const subTitles: string[] = [];

    for (let i = 0; i < (subTitleNodes?.length ?? 0); i++) {
      subTitles.push(subTitleNodes?.[i]?.innerText || "");
    }

    setSubTitles(subTitles);
  }, [router.asPath]);

  const JSXTableOfContent = useMemo(() => {
    return subTitles.map((subTitle) => {
      return <li key={subTitle}>{subTitle}</li>;
    });
  }, [subTitles]);

  return (
    <Styled.TableOfContent>
      <ul>{JSXTableOfContent}</ul>
    </Styled.TableOfContent>
  );
};

export default TableOfContent;
