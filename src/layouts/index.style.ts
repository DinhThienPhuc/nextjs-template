import {
  MAIN_CONTENT_OFFSET,
  NAVBAR_HEIGHT,
  SIDEBAR_WIDTH,
} from "utils/styles";

import styled from "styled-components";

const Styled = {
  LayoutDefaultContainer: styled.div`
    overflow-x: hidden;
  `,
  BackgroundLight: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 500%;
    pointer-events: none;
  `,
  Main: styled.main`
    display: flex;
    min-height: calc(100vh - ${NAVBAR_HEIGHT});
    padding-top: ${NAVBAR_HEIGHT};
  `,
  Content: styled.section`
    padding: 0.5rem 1.5rem 3rem;
    width: calc(100% - ${MAIN_CONTENT_OFFSET});
    margin-left: ${SIDEBAR_WIDTH};
  `,
};

export default Styled;
