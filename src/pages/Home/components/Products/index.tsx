import { Product } from "./Product";
import { ProductsList } from "./styles";
import { productsData } from '../../../../utils/products'
import { useEffect, useState } from "react";

export function Products() {
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