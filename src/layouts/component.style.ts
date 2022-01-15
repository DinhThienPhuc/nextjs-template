import { MAIN_MAX_WIDTH, NAVBAR_HEIGHT, SIDEBAR_WIDTH } from "utils/styles";

import styled from "styled-components";

const Styled = {
  LayoutComponent: styled.div``,
  Main: styled.main`
    display: flex;
    min-height: calc(100vh - ${NAVBAR_HEIGHT});
    padding-top: ${NAVBAR_HEIGHT};
  `,
  Content: styled.section`
    padding: 0.5rem 1.5rem 3rem;
    margin: 0 auto;

    @media only screen and (min-width: 1024px) {
      width: calc(100% - ${SIDEBAR_WIDTH});
      margin-left: ${SIDEBAR_WIDTH};
    }

    @media only screen and (min-width: 1280px) {
      width: calc(100% - ${SIDEBAR_WIDTH} - ${SIDEBAR_WIDTH});
    }

    @media only screen and (min-width: 1440px) {
      width: ${MAIN_MAX_WIDTH};
      margin-left: calc((100% - ${MAIN_MAX_WIDTH}) / 2);
    }
  `,
};

export default Styled;
