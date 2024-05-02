import { Link } from "react-router-dom";
import HeaderLogo from "../Assets/images/Project Logo.png";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="py-2 z-20 backdrop-filter backdrop-blur-lg">
        <div className="container mx-auto flex justify-between items-center px-4">
            <Link to="/" >
            <img src={HeaderLogo} className="h-10 md:h-12 mr-4" /> 
            </Link>
            <div className="md:hidden">
                <MobileNav/>
            </div>
            <div className="hidden md:block">
                <MainNav/>
            </div>
        </div>
    </div>
  )
}

export default Header;
