import styled from "@emotion/styled";

const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  svg {
    width: 48px;
    height: 48px;
  }

  circle {
    stroke: #b8b4cc;
  }

  path {
    stroke: #b8b4cc;
    fill: #b8b4cc;
  }

  &.close {
    position: absolute;
    width: 100%;
    height: 48px;
    top: 24px;
    right: 0;
  }
`;

export default MenuButton;
