import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navber/Navbar";

 

const MainLayout = () => {
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