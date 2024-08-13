import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { MainGrid } from "../../styles/global";
import { UF_states } from "../../utils/states";
import { CompleteOrder, EditItem, FormLabel, ItemInfo, NameAndPrice, NewOrderForm, OrderOverview, Quantity, Remove, SelectedCoffes, SelectedItem } from "./styles";
import { defaultTheme } from "../../styles/defaultTheme";
import { Controller, useForm } from "react-hook-form";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { uid } from "../../utils/coffeUtils";
import { DeliveryAdress } from "./components/DeliveryAdress.styles";
import { PaymentOptions, PaymentType, PaymentTypeButton } from "./components/PaymentOptions.styles";
import { useState } from "react";
import { productsData } from "../../utils/products";

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
  } = useForm<NewOrderFormData>({
    resolver: zodResolver(NewOrderSchema)
  })

  const [selectedItems, setSelectedItems] = useState([productsData[0], productsData[1]])

  async function handleNewOrderFormSubmit(data: NewOrderFormData) {
    console.log(data)
  }

  function formatPrice(value: number) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  }

  return (
    <MainGrid>
      <NewOrderForm onSubmit={handleSubmit(handleNewOrderFormSubmit)}>
        <CompleteOrder>Complete o seu pedido</CompleteOrder>

        <DeliveryAdress>
          <FormLabel>
            <MapPinLine size={24} color={defaultTheme["yellow-700"]} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FormLabel>

          <label className="cep">
            <input type="number" placeholder="CEP" id="" {...register('adress.postalCode')}/>
          </label>

          <label className="street">
            <input type="text" placeholder="Rua" id="" {...register('adress.street')}/>
          </label>

          <label className="number_and_info">
            <input type="text" placeholder="Número" id="" {...register('adress.number')}/>
            <input type="text" placeholder="Complemento" id="" {...register('adress.additionalInfo')}/>
          </label>

          <label className="neighborhood_city_and_uf">
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
          </label>

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
              return (
                <PaymentType
                  onValueChange={field.onChange}
                  value={String(field.value)}
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


        <SelectedCoffes>Cafés selecionados</SelectedCoffes>
        <OrderOverview>

            {selectedItems.map(coffe => {
              return <SelectedItem>
                <img src={coffe.imgUrl} alt="" />
                <ItemInfo>
                  <NameAndPrice>
                    <p>{coffe.name}</p>
                    <strong>{formatPrice(coffe.price)}</strong>
                  </NameAndPrice>
                  <EditItem>
                    <Quantity>
                      <button>
                        <Minus color={defaultTheme["purple-500"]}/>
                      </button>

                      <input type="text" value={1}/>

                      <button>
                        <Plus color={defaultTheme["purple-500"]}/>
                      </button>
                    </Quantity>
                    <Remove>
                      <Trash color={defaultTheme["purple-500"]}/>
                    </Remove>
                  </EditItem>
                </ItemInfo>
              </SelectedItem>
            })}

        </OrderOverview>

      </NewOrderForm>
    </MainGrid>
  )
}