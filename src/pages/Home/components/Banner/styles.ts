import styled, { css } from "styled-components";
import bannerBg from '../../../../assets/banner-bg.png'
import { defaultTheme } from "../../../../styles/defaultTheme";

export type BenefitsColors = 'orange' | 'yellow' | 'brown' | 'purple';

interface BenefitsProps {
  color: BenefitsColors;
}

const benefitsColors = {
  orange: defaultTheme["yellow-700"],
  yellow: defaultTheme["yellow-500"],
  brown: defaultTheme["brown-500"],
  purple: defaultTheme["purple-500"]
}

export const BannerContainer = styled.div`
  background-image: url(${bannerBg});
  background-repeat: no-repeat;
  background-size: cover;

  height: 544px;
  width: 100vw;

  grid-column: 1 / 4;

  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3.5rem;
  justify-content: space-between;
  align-items: center;

  padding: 5.875rem calc((100vw - 70rem) / 2);
`

export const RightSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Title = styled.div`
  margin-bottom: 3.125rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 3.5rem;

    color: ${(props) => props.theme["brown-900"]};
  }

  p {
    margin-top: 16px;
    font-size: 1.25rem;
  }
`

export const BenefitsList = styled.div`
  display: flex;
  gap: 2.5rem;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const Benefit = styled.span<BenefitsProps>`
  display: flex;
  align-items: center;

  ${(props) => {
    return css`
      span {
        background-color: ${benefitsColors[props.color]};
        padding: 10px;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        width: fit-content;
        margin-right: .75rem;
      }
    `
  }}
`

export const CoffeeImg = styled.img`
  width: 29.75rem;
`