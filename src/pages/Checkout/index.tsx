import { MainGrid } from "../../styles/global";
import { CheckoutGrid, CompleteOrderForm, DeliveryAdress, FormLabel, OrderOverview, PaymentOptions } from "./styles";

export function Checkout() {
  return (
    <MainGrid>
      <CheckoutGrid>
        <CompleteOrderForm>
          <h3>Complete o seu pedido</h3>

          <DeliveryAdress>
            <FormLabel>
              <img src="" alt="" />
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
              <input type="text" name="uf" placeholder="UF" id="" />
            </div>
          </DeliveryAdress>

          <PaymentOptions>
            <FormLabel>
              <img src="" alt="" />
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