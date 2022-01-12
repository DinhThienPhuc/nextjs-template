import { NAVBAR_HEIGHT, SIDEBAR_WIDTH } from "utils/styles";

import styled from "styled-components";

const Styled = {
  Main: styled.main`
    display: flex;
    min-height: calc(100vh - ${NAVBAR_HEIGHT});
  `,
  Content: styled.section`
    padding: 0.75rem;
    width: calc(100vw - ${SIDEBAR_WIDTH});
  `,
};

export default Styled;
