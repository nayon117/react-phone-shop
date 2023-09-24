import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navber/Navbar";
import { useEffect } from "react";

 

const MainLayout = () => {
    const loc = useLocation()
    useEffect(() => {
        if (loc.pathname === '/') {
            document.title='phone-shop-Home'
        }
        else {
            document.title = `phone-shop ${loc.pathname.replace("/","-")}`
        }
        if (loc.state) {
            document.title = `${loc.state}`
        }
    },[loc.pathname,loc.state])
    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 ">
            <Navbar> </Navbar>
            <div className="py-10">
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayout;