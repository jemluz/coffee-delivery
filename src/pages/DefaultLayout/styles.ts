import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 46rem;
  margin: 2rem auto;

  display: grid;
  /* align-items: space-between; */
  /* justify-content: space-between; */
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  div {
    display: flex;
    align-items: center;

    .cart_btn {
      background: ${(props) => props.theme["yellow-100"]};
      color: ${(props) => props.theme["yellow-700"]};

      margin-right: .75rem;
      padding: 8px 8px;
      border-radius: 8px;

      position: relative;

      &::before {
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

        background: ${(props) => props.theme["yellow-700"]};
        color: ${(props) => props.theme.white}
      }
    }
  }
`

export const Location = styled.p`
  background: ${(props) => props.theme["purple-100"]};
  color: ${(props) => props.theme["purple-700"]};

  display: flex;
  align-items: center;

  margin-right: .75rem;
  padding: 10px 8px;
  border-radius: 8px;

  .map_icon {
    margin-right: .25rem;
  }
`