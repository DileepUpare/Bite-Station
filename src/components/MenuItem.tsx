import type { MenuItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { motion } from "framer-motion";
import { buttonClick } from "@/Animations";

type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {
   return(
    <motion.button {...buttonClick} className="text-left">
    <Card className="cursor-pointer bg-gray-100 md:ml-[-8vw]" onClick={addToCart}>
         <CardHeader>
            <CardTitle className=" md:text-2xl">{menuItem.name}</CardTitle>
         </CardHeader>
         <CardContent className="font-bold">
          ₹{(menuItem.price / 100).toFixed(2)}
         </CardContent>
    </Card>
    </motion.button>
   )
};

export default MenuItem;