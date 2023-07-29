import { ShoppingCartSimple } from "phosphor-react"
import { ProductModel } from "../../../models/interfaces"
import { Counter, ProductContainer, ProductInfo, ProductPrice, Tag, TagsContainer } from "./styles"
import { useEffect, useState } from "react"
import { uid } from "../../../utils/coffeUtils"

export function Product(props: ProductModel) {
  const [units, setUnits] = useState(0)

  function addUnit() {
    setUnits((units) => {
      return units + 1
    })
  }

  function removeUnit() {
    setUnits((units) => {
      return units - 1
    })
  }

  return (
    <ProductContainer>
      <ProductInfo>
        <img src={props.imgUrl} alt="" />

        <TagsContainer>
          {props.type.map((type) => {
            let uniqId = uid()
            return <Tag key={uniqId} >{type}</Tag>
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
          <Counter>
            <span className="minus" onClick={removeUnit}>-</span>
            <input
              type="number"
              id="amount"
              placeholder="1"
              max={100}
              value={units}
              onChange={(event) => {
                const newValue = event.target.value
                setUnits(
                  parseInt(newValue)
                )
              }}
            // {...register('unit', { valueAsNumber: true })}
            />
            <span className="plus" onClick={addUnit}>+</span>
          </Counter>

          <button>
            <ShoppingCartSimple size={22} weight="fill" color="#fff" />
          </button>
        </div>

      </ProductPrice>
    </ProductContainer>
  )
}