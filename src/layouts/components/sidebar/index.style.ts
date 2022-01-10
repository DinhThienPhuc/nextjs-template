import colors from "utils/colors";
import styled from "styled-components";

const Styled = {
  Sidebar: styled.aside`
    width: 240px;
    height: calc(100vh - 72px);
    border-right: 1px solid ${colors["eaeaea"]};
    padding: 12px 0 0 12px;
  `,
  SidebarItem: styled.li`
    cursor: pointer;
    margin: 10px 0;
  `,
};

export default Styled;
