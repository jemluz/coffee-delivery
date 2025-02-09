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

  border-bottom: 1px solid ${(props) => props.theme["gray-500"]};
  padding-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem;
  }

  &+section {
    margin-top: 1.5rem;
  }

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

export const TotalCalculations = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1.5rem;
  padding: 0px .2rem;

  p {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 0.5rem;

    font-size: .9rem;
  }

  p:last-child {
    font-size: 1.2rem;
    font-weight: bold;

    margin-top: .4rem;
  }
`

export const ConfirmOrderButton = styled.button`
  background: ${(props) => props.theme["yellow-500"]};
  border: 1px solid ${(props) => props.theme["yellow-500"]};
  border-radius: 5px;

  color: ${(props) => props.theme["white"]};
  font-weight: bold;
  font-size: .8rem;
  text-transform: uppercase;

  padding: .8rem .5rem;
  margin-top: .8rem;

  &:hover {
    cursor: pointer;

    background: ${(props) => props.theme["yellow-700"]};
    border-color: ${(props) => props.theme["yellow-500"]};
  }
`