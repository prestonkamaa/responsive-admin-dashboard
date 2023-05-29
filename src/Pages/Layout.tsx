import { Outlet } from "react-router-dom"
import SideBarMenu from "../Components/Sidebar/SideBarMenu"

export default function Layout() {
  return (
    <div>

    <div className="flex lg:flex-nowrap flex-wrap h-screen">
      <div className=" lg:w-1/5 w-full overflow-y-auto scrollbar-none hover:scrollbar-thin"> 
        <SideBarMenu />
      </div>

      <div className="lg:w-4/5 w-full overflow-y-auto">
        <Outlet />
      </div>
    </div>

    </div>
  )
}
