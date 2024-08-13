import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const PaymentOptions = styled.section`
  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 6px;

  grid-column: 1 / 2;

  margin-top: 0.75rem;
  padding: 2.5rem;

  /* <Formlabel /> */
  div:first-child {
    margin-bottom: 2rem;
  }

  h3 {
    font-weight: 400;
    font-size: 1rem;
  }

  p {
    font-size: 0.9rem;
  }
`;

export const PaymentType = styled(RadioGroup.Root)`
  display: flex;
  gap: 1rem;
  margin-top: 0%.5rem;
`;

export const PaymentTypeButton = styled(RadioGroup.Item)`
  background: ${(props) => props.theme["gray-400"]};
  color: ${(props) => props.theme["brown-500"]};

  padding: 1rem;
  border-radius: 6px;

  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  cursor: pointer;
  border: 0;

  text-transform: uppercase;
  font-size: 0.75rem;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["purple-700"]};
  }

  svg {
    color: ${(props) => props.theme["purple-500"]};
  }

  &[data-state="unchecked"]:hover {
    transition: all 0.5s;
    background: ${(props) => props.theme["gray-500"]};
  }

  &[data-state="checked"] {
    color: ${(props) => props.theme["gray-100"]};
    background: ${(props) => props.theme["purple-500"]};
    outline: ${(props) => props.theme["purple-500"]};

    svg {
      color: ${(props) => props.theme["gray-100"]};
    }
  }
`;