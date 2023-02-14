import { ShoppingCart } from "phosphor-react";
import { NavLink, Outlet } from "react-router-dom";
import coffeeLogo from '../../assets/coffee-logo.svg'


export function DefaultLayout() {
  return (
    <div>
      <header>
        <NavLink to="/">
          <img src={coffeeLogo} alt="Coffee Delivery" />
        </NavLink>
        <NavLink to="/checkout">
          <ShoppingCart size={24} weight="fill" />
        </NavLink>
      </header>
      <Outlet />
    </div>
  )
}