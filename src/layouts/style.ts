import styled from "styled-components";

export const Styled = {
  LayoutComponent: styled.div`
    background: url(/background.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  `,
  Main: styled.main`
    min-height: 100vh;
    padding-top: 50px;
  `,
};
