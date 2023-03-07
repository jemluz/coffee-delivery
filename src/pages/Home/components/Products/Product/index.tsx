import { ShoppingCartSimple } from "phosphor-react"
import { ProductModel } from "../../../../../models/interfaces"
import { ProductContainer, ProductInfo, ProductPrice, Tag, TagsContainer } from "./styles"

export function Product(props: ProductModel) {
  return (
    <ProductContainer>
      <ProductInfo>
        <img src={props.imgUrl} alt="" />

        <TagsContainer>
          {props.type.map((type) => {
            return <Tag key={props.id} >{type}</Tag>
          })}
        </TagsContainer>

        <h4>{props.name}</h4>
        <p>{props.description}</p>
      </ProductInfo>

      <ProductPrice>
        <p>
          R$ <strong>{props.price.toFixed(2)}</strong>
        </p>

        <div>
          <input
            type="number"
            id="amount"
            placeholder="1"
            step={5}
            min={1}
            max={30}
          // {...register('minutesAmount', { valueAsNumber: true })}
          />

          <button>
            <ShoppingCartSimple size={22} weight="fill" color="#fff" />
          </button>
        </div>

      </ProductPrice>
    </ProductContainer>
  )
}