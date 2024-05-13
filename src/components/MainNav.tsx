import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from '@auth0/auth0-react';
import UsernameMenu from "./UsernameMenu";
import { motion } from "framer-motion";
import { buttonClick } from "@/Animations";

const MainNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <span className="flex space-x-2 items-center">
        {isAuthenticated ? (
          <>
            <Link to="/order-status" className="text-white font-goliSemiBold bg-black">
              Order Status
              </Link>
            <UsernameMenu />
          </>
        ) : (
          <motion.button {...buttonClick}>
          <Button id="HomeLogin" variant="ghost" className="text-white font-goliBold bg-black">
            <Link to="/Login" className="flex">
              Login
            </Link>
          </Button>
          </motion.button>
        )}
      </span>
    </>
  );
}

export default MainNav;
