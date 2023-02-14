import { Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <div>
      <p>Deafult layout</p>
      <Outlet />
    </div>
  )
}