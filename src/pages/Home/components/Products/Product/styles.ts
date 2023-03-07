import styled from "styled-components";

export const ProductContainer = styled.li`
  background: ${(p) => p.theme["gray-200"]};
  border-radius: 6px 36px;

  width: fit-content;
  padding: 20px;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    margin-top: -40px;
    margin-bottom: 12px;
  }

  h4 {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 1.25rem;

    margin-top: 16px;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.875rem;
    max-width: 216px;
    text-align: center;
  }
`

export const TagsContainer = styled.div`
  display: flex;
`

export const Tag = styled.span`
  background: ${(p) => p.theme["yellow-100"]};
  color: ${(p) => p.theme["yellow-700"]};

  border-radius: 100px;
  padding: 4px 8px;

  text-transform: uppercase;
  font-size: 0.625rem;

  &+span {
    margin-right: 4px;
  }
`

export const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;

  p > strong {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 1.5rem;
  }

  div {
    display: flex;
    align-items: center;

    input {
      background: ${(p) => p.theme["gray-400"]};
      border-radius: 6px;
      border: none;
      outline: none;
      margin-right: 8px;
      text-align: center;

      height: 100%;
      width: 72px;
    }

    button {
      background: ${(p) => p.theme["purple-700"]};
      border-radius: 6px;
      padding: 8px 10px;
      border: none;
    }
  }  
`