import { Product } from "./Product";
import { ProductsList } from "./styles";
import { productsData } from '../../../../products'

export function Products() {
  console.log(productsData)
  return (
    <ProductsList>
      <h2>Nossos cafés</h2>

      <ul>
        {
          productsData.map((item) => {
            return (
              <Product key={item.id} {...item} />
            )
          })
        }

      </ul>
    </ProductsList>
  )
}