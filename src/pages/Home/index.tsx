import { MainGrid } from "../../styles/global";
import { Banner } from "./Banner";
import { Products } from "./Products";

export function Home() {
  return (
    <MainGrid>
      <Banner />
      <Products />
    </MainGrid>
  )
}