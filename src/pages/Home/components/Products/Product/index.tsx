import { ProductModel } from "../../../../../models/interfaces"
import { ProductContainer, ProductInfo, Tag, TagsContainer } from "./styles"

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

      <div>
        <p>
          R$<strong>{props.price}</strong>
        </p>

        <input
          type="number"
          id="amount"
          placeholder="1"
          step={5}
          min={1}
          max={30}
        // {...register('minutesAmount', { valueAsNumber: true })}
        />
      </div>
    </ProductContainer>
  )
}