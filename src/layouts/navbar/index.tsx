import { useCallback, useMemo, useRef, useState } from "react";

import GlobeSvg from "assets/icons/globe.svg";
import Img from "components/img";
import Link from "next/link";
import LogoPng from "assets/logo.png";
import { NAVBAR_ROUTES } from "utils/routes";
import Styled from "./index.style";
import useEventListener from "hooks/useEventListener";

const Navbar = () => {
  const [isScrollBelow, setScrollBelow] = useState<boolean>(false);
  const isScrollBelowRef = useRef<boolean>(false);

  const JSXNavbarRoutes = useMemo(() => {
    return NAVBAR_ROUTES.map((item) => {
      return (
        <Link key={item.route} href={item.route} passHref>
          <Styled.Item>{item.label}</Styled.Item>
        </Link>
      );
    });
  }, []);

  const handleScroll = useCallback((e: Event) => {
    const target = e.currentTarget as Window;
    if (target.scrollY >= 80 && !isScrollBelowRef.current) {
      setScrollBelow(true);
      isScrollBelowRef.current = true;
    } else if (target.scrollY < 80 && isScrollBelowRef.current) {
      setScrollBelow(false);
      isScrollBelowRef.current = false;
    }
  }, []);

  useEventListener("scroll", handleScroll);

  return (
    <Styled.Navbar isScrollBelow={isScrollBelow}>
      <Link href={"/"} passHref>
        <div>
          <Img src={LogoPng} alt="logo" width={75} height={52} />;
        </div>
      </Link>
      <Styled.Right>
        {JSXNavbarRoutes}
        <Styled.Globe>
          <GlobeSvg width={18} height={18} />
        </Styled.Globe>
      </Styled.Right>
    </Styled.Navbar>
  );
};

export default Navbar;
