import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const NewOrderForm = styled.form`
  margin-top: 3rem;
  grid-column: 2 / 3;

  display: grid;
  grid-template-columns: 40rem 28rem;
  column-gap: 2rem;
`;

export const CompleteOrder = styled.h3`
  font-family: "Baloo 2", cursive;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

export const FormLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SelectedCoffes = styled.h3`
  font-family: "Baloo 2", cursive;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;

  grid-column: 2 / 3;
  grid-row: 1 / 2;
`;

export const OrderOverview = styled.section`
  background-color: ${(props) => props.theme["gray-200"]};

  display: flex;
  flex-direction: column;

  grid-column: 2 / 3;
  grid-row: 2 / auto;

  border-radius: 10px 30px 10px 30px;

  padding: 2.5rem;
`;

export const SelectedItem = styled.section`
  display: flex;
  align-items: space-between;

  width: 100%;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }

  margin-bottom: 2rem;
`;

export const ItemInfo = styled.div`
width: 100%;
`

export const NameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1rem;

  }

  strong {
    font-size: 1.2rem;
  }
`

export const EditItem = styled.div`
  display: flex;
  margin-top: .5rem;
`

export const Quantity = styled.div`

  margin-right: 1rem;

  button {
    background: ${(props) => props.theme["gray-400"]};
    border: 1px solid ${(props) => props.theme["gray-400"]};
    padding: .5rem;
    z-index: 10;

    &:hover {
      cursor: pointer;
    }

    &:first-child {
      border-radius: 5px 0px 0px 5px;
    }

    &:last-child {
      border-radius: 0px 5px 5px 0px;
    }
  }

  input {
    background: ${(props) => props.theme["gray-400"]};
    border: 1px solid ${(props) => props.theme["gray-400"]};
    max-width: 3rem;
    text-align: center;

    padding: .5rem;
    z-index: 90;
  }

`
export const Remove = styled.button`
  background: ${(props) => props.theme["gray-400"]};
  border: 1px solid ${(props) => props.theme["gray-400"]};
  padding: .5rem;

  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`
