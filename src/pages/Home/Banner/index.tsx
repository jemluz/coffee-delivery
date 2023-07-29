import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { defaultTheme } from "../../../styles/defaultTheme";
import { BannerContainer, Benefit, BenefitsList, CoffeeImg, Column, RightSection, Title } from "./styles";
import coffeeBaner from '../../../assets/coffee-banner.png'

export function Banner() {
  return (
    <BannerContainer>
      <RightSection>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</p>
        </Title>

        <BenefitsList>
          <Column>
            <Benefit color="orange">
              <span>
                <ShoppingCart weight="fill" color={defaultTheme.white} size={16} />
              </span>
              Compra simples e segura
            </Benefit>
            <Benefit color="yellow">
              <span>
                <Timer weight="fill" color={defaultTheme.white} size={16} />
              </span>
              Entrega rápida e rastreada
            </Benefit>
          </Column>

          <Column>
            <Benefit color="brown">
              <span>
                <Package weight="fill" color={defaultTheme.white} size={16} />
              </span>
              Embalagem mantém o café intacto
            </Benefit>
            <Benefit color="purple">
              <span>
                <Coffee weight="fill" color={defaultTheme.white} size={16} />
              </span>
              O café chega fresquinho até você
            </Benefit>
          </Column>
        </BenefitsList>
      </RightSection>
      <CoffeeImg src={coffeeBaner} alt="" />
    </BannerContainer>
  )
}