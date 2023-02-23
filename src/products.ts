import { ProductModel } from "./models/interfaces";

import Expresso from './assets/coffee/Type=Expresso.png'
import Americano from './assets/coffee/Type=Americano.png'
import Cremoso from './assets/coffee/Type=Expresso Cremoso.png'
import Gelado from './assets/coffee/Type=Café Gelado.png'
import CafeComLeite from './assets/coffee/Type=Café com Leite.png'
import Latte from './assets/coffee/Type=Latte.png'
import Capuccino from './assets/coffee/Type=Capuccino.png'
import Macchiato from './assets/coffee/Type=Macchiato.png'
import Mochaccino from './assets/coffee/Type=Mochaccino.png'
import ChocolateQuente from './assets/coffee/Type=Chocolate Quente.png'
import Cubano from './assets/coffee/Type=Cubano.png'
import Havaiano from './assets/coffee/Type=Havaiano.png'
import Arabe from './assets/coffee/Type=Árabe.png'
import Irlandes from './assets/coffee/Type=Irlandês.png'

export const products: ProductModel[] = [
  {
    id: String(new Date().getTime()),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    imgUrl: Expresso,
    type: [
      'tradicional',
    ],
    price: 9.90
  },
  {
    id: String(new Date().getTime()),
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    imgUrl: Americano,
    type: [
      'tradicional',
    ],
    price: 9.90
  },
  {
    id: String(new Date().getTime()),
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    imgUrl: Cremoso,
    type: [
      'tradicional',
    ],
    price: 9.90
  },
  {
    id: String(new Date().getTime()),
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    imgUrl: Gelado,
    type: [
      'tradicional',
      'gelado'
    ],
    price: 9.90
  },
  {
    id: String(new Date().getTime()),
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    imgUrl: CafeComLeite,
    type: [
      'tradicional',
      'com leite'
    ],
    price: 9.90
  },
  {
    id: String(new Date().getTime()),
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    imgUrl: Latte,
    type: [
      'tradicional',
      'com leite'
    ],
    price: 9.90
  },
  {
    id: String(new Date().getTime()),
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    imgUrl: Capuccino,
    type: [
      'tradicional',
      'com leite'
    ],
    price: 9.90
  },
  {
    id: String(new Date().getTime()),
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    imgUrl: Macchiato,
    type: [
      'tradicional',
      'com leite'
    ],
    price: 9.90
  },
  {
    id: String(new Date().getTime()),
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    imgUrl: Mochaccino,
    type: [
      'tradicional',
      'com leite'
    ],
    price: 9.90
  },
  {
    id: String(new Date().getTime()),
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    imgUrl: ChocolateQuente,
    type: [
      'especial',
      'com leite'
    ],
    price: 9.90
  },
  {
    id: String(new Date().getTime()),
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    imgUrl: Cubano,
    type: [
      'especial',
      'alcoólico',
      'gelado'
    ],
    price: 9.90
  },
  {
    id: String(new Date().getTime()),
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    imgUrl: Havaiano,
    type: [
      'especial',
    ],
    price: 9.90
  },
  {
    id: String(new Date().getTime()),
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    imgUrl: Arabe,
    type: [
      'especial',
    ],
    price: 9.90
  },
  {
    id: String(new Date().getTime()),
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    imgUrl: Irlandes,
    type: [
      'especial',
      'alcoólico'
    ],
    price: 9.90
  }
]