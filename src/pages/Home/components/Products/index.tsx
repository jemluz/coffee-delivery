import { ProductsList } from "./styles";

export function Products() {
  return (
    <ProductsList>
      <h2>Nossos cafés</h2>

      <ul>
        <li>
          <div>
            <img src="" alt="" />
            <span></span>
            <h4></h4>
            <p></p>
          </div>

          <div>
            <p>
              R$<strong>9.90</strong>
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
        </li>
      </ul>
    </ProductsList>
  )
}