import styled from "styled-components";

export const ProductsList = styled.section`
  display: grid;

  grid-column: 2 / 3;

  h2 {
    margin: 2rem 0;
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    gap: 2rem
  }
`