import styled from "styled-components";

export const Styled = {
  Container: styled.nav`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 56px;
    background-color: #121212;
    width: 100%;
  `,
  Title: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 33%;
  `,
  LeftButton: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 33%;
  `,
  RightButton: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 33%;
  `,
};
