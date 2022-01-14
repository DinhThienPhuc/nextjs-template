import { MAIN_MAX_WIDTH, NAVBAR_HEIGHT, SIDEBAR_WIDTH } from "utils/styles";

import styled from "styled-components";

const Styled = {
  TableOfContent: styled.div`
    position: fixed;
    right: 0;
    width: ${SIDEBAR_WIDTH};
    min-height: calc(100vh - ${NAVBAR_HEIGHT});
    padding: 1rem;

    @media only screen and (min-width: 1440px) {
      right: calc((100% - ${MAIN_MAX_WIDTH}) / 2 - ${SIDEBAR_WIDTH});
    }
  `,
};

export default Styled;
