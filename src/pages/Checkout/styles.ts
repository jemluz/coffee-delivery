import styled from "styled-components";

export const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: 40rem 28rem;
  gap: 2rem;
`;

export const CompleteOrderForm = styled.div``;

export const FormLabel = styled.div``;

export const DeliveryAdress = styled.section`
  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 6px;

  padding: 2.5rem;
  display: grid;
  width: fit-content;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2.75rem 2.75rem 2.75rem 2.75rem;
  gap: 0.75rem;

  div:first-child {
    grid-column: 1 / 4;
    grid-row: 1 / 2;

    margin-bottom: 2rem;
  }

  div > input,
  div > select {
    height: 2.75rem;
    background-color: ${(props) => props.theme["gray-300"]};
    border: 1px solid ${(props) => props.theme["gray-400"]};
    border-radius: 4px;
    padding-left: 0.75rem;
  }

  .cep {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .street {
    grid-column: 1 / 4;
    grid-row: 3 / 4;

    display: flex;

    input {
      flex-grow: 1;
    }
  }

  .number_and_info {
    grid-column: 1 / 4;
    grid-row: 4 / 5;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.75rem;

    input:first-child {
      grid-column: 1 / 2;
      width: 12.5rem;
    }

    input[name="additional_info"] {
      grid-column: 2 / 4;
    }
  }

  .neighborhood_city_and_uf {
    grid-column: 1 / 4;
    grid-row: 5 / 6;

    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: 0.75rem;

    input:first-child {
      grid-column: 1 / 2;
      width: 12.5rem;
    }

    input:nth-child(2) {
      grid-column: 2 / 3;
      width: 17.25rem;
      flex-grow: 1;
    }

    select {
      grid-column: 3 / 4;
      width: 3.75rem;
      padding-left: 0.3rem;

      option:first {
        color: ${(props) => props.theme["brown-300"]};
      }
    }
  }
`;

export const PaymentOptions = styled.section`
  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 6px;

  margin-top: 0.75rem;
  padding: 2.5rem;
`;

export const OrderOverview = styled.section``;
