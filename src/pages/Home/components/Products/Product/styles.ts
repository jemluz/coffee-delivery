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

    button {
      background: ${(p) => p.theme["purple-700"]};
      border-radius: 6px;
      padding: 8px 10px;
      border: none;
      margin-left: 12px;

      &:hover {
        cursor: pointer;
        background: ${(p) => p.theme["purple-800"]};
      }
    }
  }  
`

export const Counter = styled.div`
  display: flex;

  input {
    background: ${(p) => p.theme["gray-400"]};
    border: none;
    outline: none;
    text-align: center;

    height: 32px;
    width: 28px;
  }

  /* Hide arrows -> Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Hide arrows ->Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }

  .minus {
    border-radius: 6px 0px 0px 6px;
  }

  .plus {
    border-radius: 0px 6px 6px 0px;
  }

  .minus, .plus {
    cursor: pointer;
    display: flex;
    align-items: center;
    /* width: 24px; */
    height:32px;
    background: ${(p) => p.theme["gray-400"]};;
    padding:8px 5px;
    border:1px solid #ddd;
  }
`