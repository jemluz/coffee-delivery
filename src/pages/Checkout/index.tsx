import { MainGrid } from "../../styles/global";
import { CheckoutGrid, CompleteOrderForm, DeliveryAdress, FormLabel, OrderOverview, PaymentOptions } from "./styles";

export function Checkout() {
  return (
    <MainGrid>
      <CheckoutGrid>
        <CompleteOrderForm>
          <DeliveryAdress>
            <FormLabel>
              <img src="" alt="" />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormLabel>

            <div>
              <input type="number" name="cep" id="" />
            </div>
            <div>
              <input type="text" name="street" id="" />
            </div>
            <div>
              <input type="text" name="number" id="" />
              <input type="text" name="additional info" id="" />
            </div>
            <div>
              <input type="text" name="neighborhood" id="" />
              <input type="text" name="city" id="" />
              <input type="text" name="uf" id="" />
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