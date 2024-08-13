import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { MainGrid } from "../../styles/global";
import { UF_states } from "../../utils/states";
import { CheckoutGrid, DeliveryAdress, FormLabel, Heading3, NewOrderForm, OrderOverview, PaymentOptions, PaymentType, PaymentTypeButton } from "./styles";
import { defaultTheme } from "../../styles/defaultTheme";
import { Controller, useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { uid } from "../../utils/coffeUtils";

const NewOrderSchema = zod.object({
  adress: zod.object({
    postalCode: zod.number(),
    street: zod.string(),
    number: zod.string(),
    additionalInfo: zod.string(),
    neightborhood: zod.string(),
    city: zod.string(),
    uf: zod.string(),
  }),
  payment: zod.object({
    type: zod.enum(['credit', 'debit', 'cash'])
  }),
  items: zod.array(zod.object({
    id: zod.string(),
    name: zod.string(),
    price: zod.number(),
    quantity: zod.number(),
  }))
})

type NewOrderFormData = zod.infer<typeof NewOrderSchema>;

export function Checkout() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<NewOrderFormData>()

  async function handleNewOrderFormSubmit(data: NewOrderFormData) {
    console.log(data)
  }

  return (
    <MainGrid>
      <CheckoutGrid>
        <NewOrderForm onSubmit={handleSubmit(handleNewOrderFormSubmit)}>
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
              <input type="number" placeholder="CEP" id="" {...register('adress.postalCode')}/>
            </div>
            <div className="street">
              <input type="text" placeholder="Rua" id="" {...register('adress.street')}/>
            </div>
            <div className="number_and_info">
              <input type="text" placeholder="Número" id="" {...register('adress.number')}/>
              <input type="text" placeholder="Complemento" id="" {...register('adress.additionalInfo')}/>
            </div>
            <div className="neighborhood_city_and_uf">
              <input type="text" placeholder="Bairro" id="" {...register('adress.neightborhood')}/>
              <input type="text" placeholder="Cidade" id="" {...register('adress.city')}/>
              <select id="" {...register('adress.uf')}>
                <option defaultValue="UF" disabled>UF</option>
                {
                  UF_states.map(uf => {
                    return <option key={uid()} value={uf.acronym}>{uf.acronym}</option>
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

            {/* <Controller
              control={control}
              name="payment"
              render={({ field }) => {
                console.log(field)
                return (
                  <PaymentType
                    onValueChange={field.onChange}
                    value={field.value.type}
                  >
                    <PaymentTypeButton value="credit">
                      <CreditCard size={24} />
                      Cartão de crédito
                    </PaymentTypeButton>
                    <PaymentTypeButton value="debit">
                      <Bank size={24} />
                      Cartão de débito
                    </PaymentTypeButton>
                    <PaymentTypeButton value="cash">
                      <Money size={24} />
                      Dinheiro
                    </PaymentTypeButton>
                  </PaymentType>
                )
              }}
            /> */}
          </PaymentOptions>

          <OrderOverview>

          </OrderOverview>

          <button type="submit">nova ordem</button>
        </NewOrderForm>

      </CheckoutGrid>
    </MainGrid>
  )
}