import { useAuth0 } from "@auth0/auth0-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { buttonClick } from "@/Animations";

const UsernameMenu = () => {
    const {user, logout} = useAuth0();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-black gap-2">
              <motion.button {...buttonClick}>
                <Avatar>
                    <AvatarImage src={user?.picture} />
                </Avatar>
               </motion.button>

            </DropdownMenuTrigger>
            <DropdownMenuContent>
            <DropdownMenuItem>
                <Link to="/manage-restaurant" className="font-goliMedium hover:text-black">
                  Manage Restaurant
                </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <Link to="/user-profile" className="font-goliMedium hover:text-black">
                  User Profile
                </Link>
                </DropdownMenuItem>
                <Separator/>
                <DropdownMenuItem>
                    <Button onClick={()=>logout()} className="font-goliMedium flex flex-1 font-bold bg-black">
                    Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    );
};

export default UsernameMenu;