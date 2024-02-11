import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";
import ToTop from "./Shared/ToTop/ToTop";

const MainLayout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <div className="fixed z-[99999] right-8 bottom-12">
                <ToTop></ToTop>
            </div>
        </div>
    );
};

export default MainLayout;