import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 2rem auto;

  display: grid;
  grid-template-columns: 1fr 70rem 1fr;
`;

const NotificationBall = `
  content: attr(data-count);

  min-width: 16px;
  min-height: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -10px;
  right: -10px;

  padding: 2px;

  font-size: 12px;
  border-radius: 50%;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  grid-column: 2;

  width: 100%;

  .logo {
    width: 5.25rem;
  }

  div {
    display: flex;
    align-items: center;

    .cart_btn {
      background: ${(props) => props.theme["yellow-100"]};
      color: ${(props) => props.theme.white};

      margin-right: 0.75rem;
      padding: 10px 8px 6px 8px;
      border-radius: 8px;

      position: relative;
      transition: all 0.2s ease-out;

      &:hover {
        background: ${(props) => props.theme["yellow-500"]};
        svg {
          fill: ${(props) => props.theme.white};
        }
      }

      &::before {
        ${NotificationBall}
        background: ${(props) => props.theme["yellow-700"]};
      }
    }
  }
`;

export const Location = styled.p`
  background: ${(props) => props.theme["purple-100"]};
  color: ${(props) => props.theme["purple-700"]};

  display: flex;
  align-items: center;

  margin-right: 0.75rem;
  padding: 10px 8px;
  border-radius: 8px;

  .map_icon {
    margin-right: 0.25rem;
  }
`;
