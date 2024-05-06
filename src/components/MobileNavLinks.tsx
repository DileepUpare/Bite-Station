import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';
import { buttonClick } from '@/Animations';

const MobileNavLinks = () => {
  const { logout } = useAuth0();

  return (
    <>
      <Link to="/home" className="font-medium hover:text-black">Home</Link>
      <Link to="/user-profile" className="flex bg-white items-center font-medium hover:text-black">
        User-Profile
      </Link>
      <Link to="/manage-restaurant" className="font-medium hover:text-black">
        Manage Restaurant
      </Link>
      <Link to="/contact" className="font-medium hover:text-black">Contact</Link>
      <Link to="/aboutus" className="font-medium hover:text-black">About Us</Link>
      
      <motion.button {...buttonClick}>
      <Button onClick={() => logout()} className="flex items-center font-bold hover:bg-gray-500">
        Log Out
      </Button>
      </motion.button>
    </>
  );
}

export default MobileNavLinks;
