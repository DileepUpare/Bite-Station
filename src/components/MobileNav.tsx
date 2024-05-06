import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react"
import { Avatar, AvatarImage } from "./ui/avatar";
import MobileNavLinks from "./MobileNavLinks";
import { buttonClick } from "@/Animations";
import { motion } from "framer-motion";

const MobileNav = () => {
  const { isAuthenticated,loginWithRedirect,user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (<span className="flex items-center gap-2">
          <motion.button {...buttonClick}>
            <Avatar>
              <AvatarImage src={user?.picture} />
            </Avatar>
            </motion.button>
          </span>) : (<span>Welcome!!</span>)}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
        {isAuthenticated? (<MobileNavLinks/>) : (
            <motion.button {...buttonClick}>
            <Button  onClick={async()=> await loginWithRedirect()} className="flex-1 font-bold bg-black">Login</Button>
            </motion.button>
          )} 
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;