import styled from "styled-components";

export const Styled = {
  Navbar: styled.nav`
    transition: all 700ms ease-in-out;
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rem;
    height: 50px;
    background-color: transparent;
    border-bottom: 1px solid #33333340;
    backdrop-filter: blur(0.5rem);
    z-index: 100;
  `,
  Logo: styled.div`
    cursor: pointer;
  `,
  Right: styled.div`
    display: flex;
    align-items: center;
  `,
  Globe: styled.span`
    display: flex;
    align-items: center;
    border-left: 1px solid #f0e6d2;
    padding-left: 1rem;
    margin-left: 1rem;
  `,
  ThemeSwitcher: styled.span`
    display: flex;
    align-items: center;
    margin-left: 1rem;
  `,
  Item: styled.span`
    position: relative;
    text-transform: uppercase;
    font-weight: 500;
    padding: 0 1rem;
    cursor: pointer;

    &:hover {
      &:after {
        content: "";
        position: absolute;
        left: 10%;
        bottom: -0.5rem;
        border-radius: 0.25rem;
        width: 80%;
        height: 0.1875rem;
        background-color: #0bc4e2;
      }
    }
  `,
};
