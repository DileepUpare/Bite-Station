import { Link } from "react-router-dom";
import HeaderLogo from "../Assets/images/Project Logo.png";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="bg-dot-black py-2 z-20 backdrop-filter backdrop-blur-sm mb-8">
        <div className="container mx-auto flex justify-between items-center px-4">
            <Link to="/" >
            <img src={HeaderLogo} className="md:h-12 mt-4 size-50 ml-[1vw] mr-4 h-9" /> 
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
