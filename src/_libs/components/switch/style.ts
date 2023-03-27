import styled from "styled-components";

const Styled = {
  Container: styled.div`
    display: flex;
    align-items: center;
  `,
  Pad: styled.div<{ isOn: boolean; disabled: boolean }>`
    position: relative;
    transition: all 200ms ease-in-out;
    width: 34px;
    height: 14px;
    border-radius: 7px;
    background-color: ${({ isOn, disabled }) => {
      if (disabled) {
        if (isOn) {
          return "rgb(144, 202, 249, 0.2)";
        }
        return "rgb(255, 255, 255, 0.2)";
      }
      if (isOn) {
        return "rgb(144, 202, 249, 0.5)";
      }
      return "rgb(255, 255, 255, 0.5)";
    }};

    &::after {
      position: absolute;
      pointer-events: none;
      transition: all 200ms ease-in-out;
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${({ isOn, disabled }) => {
        if (disabled) {
          if (isOn) {
            return "rgb(64, 90, 112)";
          }
          return "rgb(117, 117, 117)";
        }
        if (isOn) {
          return "rgb(144, 202, 249)";
        }
        return "rgb(224, 224, 224)";
      }};
      transform: ${({ isOn }) =>
        isOn ? "translate(17px, -3px)" : "translate(-3px, -3px)"};
    }

    & > input {
      position: absolute;
      height: 20px;
      width: 34px;
      top: -3px;
      opacity: 0;
    }
  `,
  LeftLabel: styled.div`
    margin-right: 8px;
  `,
  RightLabel: styled.div`
    margin-left: 8px;
  `,
};

export default Styled;
