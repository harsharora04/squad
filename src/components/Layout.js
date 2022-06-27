import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
const Layout = () => {
return (
    <div className="flex">
        <Sidebar />
        <main className="min-h-screen w-[calc(100%-296px)] bg-custom py-10 px-8 box-border flex-1">
          <Outlet />
        </main>
    </div>    
)
}

export default Layout;