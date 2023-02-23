export interface ProductProps {
  id: number
  imgUrl: string
  type: string[]
  name: string
  description: string
  price: number
}

export function Product(props: ProductProps) {
  return (
    <li>
      <div>
        <img src={props.imgUrl} alt="" />

        <div>
          {props.type.map((type) => {
            return <span key={props.id} >{type}</span>
          })}
        </div>

        <h4>{props.name}</h4>
        <p>{props.description}</p>
      </div>

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
    </li>
  )
}