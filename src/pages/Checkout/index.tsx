import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { MainGrid } from "../../styles/global";
import { UF_states } from "../../utils/states";
import { CheckoutGrid, CompleteOrderForm, DeliveryAdress, FormLabel, Heading3, OrderOverview, PaymentOptions, PaymentType, PaymentTypeButton } from "./styles";
import { defaultTheme } from "../../styles/defaultTheme";
import { Controller, useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const adressSchema = zod.object({
  postalCode: zod.number(),
  street: zod.string(),
  number: zod.string(),
  additionalInfo: zod.string(),
  neightborhood: zod.string(),
  city: zod.string(),
  uf: zod.string(),
})

const paymentSchema = zod.object({
  type: zod.enum(['credit', 'debit', 'cash'])
})

const itemSchema = zod.object({
  name: zod.string(),
  price: zod.number(),
  quantity: zod.number(),
})

const newOrderSchema = zod.object({
  adress: adressSchema,
  payment: paymentSchema,
  items: zod.array(itemSchema)
})

type newOrderFormInputs = zod.infer<typeof newOrderSchema>;

export function Checkout() {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<newOrderFormInputs>({
    resolver: zodResolver(newOrderSchema),
    defaultValues: {
      payment: {
        type: 'credit'
      }
    }
  })

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

            <Controller
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
            />
          </PaymentOptions>
        </CompleteOrderForm>

        <OrderOverview>

        </OrderOverview>
      </CheckoutGrid>
    </MainGrid>
  )
}