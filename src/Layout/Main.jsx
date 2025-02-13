import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Outlet/>
            <Footer />
            {/* /jkj */}
        </div>
    );
};

export default Main;