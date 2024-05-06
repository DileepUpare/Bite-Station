import loginvideo from '../Assets/videos/loginvideo.webm';
import { Button } from "@/components/ui/button"
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import logo from "../Assets/images/Project Logo.png";
import { motion } from 'framer-motion';
import { buttonClick } from '@/Animations';

export function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="w-screen h-screen relative overflow-hidden flex">
      <div className="w-full h-full relative overflow-hidden flex">
        {/* Video Background */}
        <video src={loginvideo} className="w-full h-full object-cover absolute z-10 top-0 left-0 " autoPlay loop muted />

        {/* Glassmorphic Container */}
        <div className="absolute z-20 top-0 left-0 h-full md:w-1/3 bg-opacity-0 backdrop-filter backdrop-blur-lg p-5 rounded-lg shadow-lg flex items-center justify-center md:flex">
          <div className="mx-auto grid gap-6">
            <div className="grid gap-2 text-center">
              <img src={logo} alt="Logo" className="py-0 h-24 mx-auto" />
              <p className="text-white">
                This is "Bite Station"  <br/>
                Online Food Ordering Web Application.           
              </p>
            </div>
            <div className="mt-4 text-center text-sm">
           
            <motion.button {...buttonClick}>
              <Button type="submit" className="w-70 bg-black text-white ">
              <Link to="/Login" onClick={async()=> await loginWithRedirect()}>
              Get Started
              </Link>
              </Button>
              </motion.button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
