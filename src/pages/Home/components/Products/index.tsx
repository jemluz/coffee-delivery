import { Product } from "./Product";
import { ProductsList } from "./styles";

export function Products() {
  return (
    <ProductsList>
      <h2>Nossos cafés</h2>

      <ul>
        <Product />
      </ul>
    </ProductsList>
  )
}