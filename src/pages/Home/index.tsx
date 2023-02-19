import { Banner } from "./components/Banner";
import { Products } from "./components/Products";
import { Main } from "./styles";

export function Home() {
  return (
    <Main>
      <Banner />
      <Products />
    </Main>
  )
}