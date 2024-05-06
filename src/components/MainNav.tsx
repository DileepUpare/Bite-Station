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
          <UsernameMenu />
        ) : (
          <motion.button {...buttonClick}>
          <Button variant="ghost" className="text-white font-bold hover:text-black hover:bg-white">
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
