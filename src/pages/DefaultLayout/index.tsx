import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink, Outlet } from "react-router-dom";
import { useTheme } from "styled-components";
import coffeeLogo from '../../assets/coffee-logo.svg'
import { Header, Wrapper, Location } from "./styles";


export function DefaultLayout() {
  const defaultTheme = useTheme()
  return (
    <Wrapper>
      <Header>
        <NavLink to="/" className="logo">
          <img src={coffeeLogo} alt="Coffee Delivery" />
        </NavLink>
        <div>
          <Location>
            <MapPin color={defaultTheme["purple-500"]} weight="fill" size={20} className="map_icon" />
            Porto Alegre, RS
          </Location>
          <NavLink to="/checkout" className="cart_btn" data-count="3">
            <ShoppingCart color={defaultTheme["yellow-700"]} weight="fill" size={20} />
          </NavLink>
        </div>
      </Header>
      <Outlet />
    </Wrapper>
  )
}