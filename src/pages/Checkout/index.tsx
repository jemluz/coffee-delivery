import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { MainGrid } from "../../styles/global";
import { UF_states } from "../../utils/states";
import { CheckoutGrid, CompleteOrderForm, DeliveryAdress, FormLabel, Heading3, OrderOverview, PaymentOptions } from "./styles";
import { defaultTheme } from "../../styles/defaultTheme";

export function Checkout() {
  return (
    <MainGrid>
      <CheckoutGrid>
        <CompleteOrderForm>
          <Heading3>Complete o seu pedido</Heading3>

          <DeliveryAdress>
            <FormLabel>
              <MapPinLine size={24} color={defaultTheme["yellow-700"]} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormLabel>

            <div className="cep">
              <input type="number" name="cep" placeholder="CEP" id="" />
            </div>
            <div className="street">
              <input type="text" name="street" placeholder="Rua" id="" />
            </div>
            <div className="number_and_info">
              <input type="text" name="number" placeholder="Número" id="" />
              <input type="text" name="additional_info" placeholder="Complemento" id="" />
            </div>
            <div className="neighborhood_city_and_uf">
              <input type="text" name="neighborhood" placeholder="Bairro" id="" />
              <input type="text" name="city" placeholder="Cidade" id="" />
              <select name="uf" id="" >
                <option value="UF" selected disabled>UF</option>
                {
                  UF_states.map(uf => {
                    return <option value={uf.acronym}>{uf.acronym}</option>
                  })
                }
              </select>
            </div>
          </DeliveryAdress>

          <PaymentOptions>
            <FormLabel>
              <CurrencyDollar size={24} color={defaultTheme["purple-500"]} />
              <div>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </FormLabel>

            <select name="payment_method" id="">
              <option value="credit_card">Cartão de crédito</option>
              <option value="debit_card">cartão de débito</option>
              <option value="cash">Dinheiro</option>
            </select>
          </PaymentOptions>
        </CompleteOrderForm>

        <OrderOverview>

        </OrderOverview>
      </CheckoutGrid>
    </MainGrid>
  )
}