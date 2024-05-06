import { CartItem } from "@/Pages/DetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { TrashIcon } from "lucide-react";

type Props = {
   restaurant: Restaurant;
   cartItems: CartItem[];
   removeFromCart: (cartItem: CartItem)=> void;
}

const OrderSummary = ({restaurant, cartItems, removeFromCart}: Props) => {
  
    const getTotalCost = ()=> {
        const totalInPaise = cartItems.reduce((total, cartItem)=> total + cartItem.price * cartItem.quantity,
         0);

     
         const totalWithDelivery = totalInPaise + restaurant.deliveryPrice

         return (totalWithDelivery / 100).toFixed(2);
    };
 
    return (
    <>
      <CardHeader>
         <CardTitle className="text-xl text-white font-bold tracking-tight justify-between" >
           <div className="space-x-[25vw] md:space-x-[10vw]">
            <span>Your Order</span>
            <span>₹{getTotalCost()}</span>
           </div>
           
         </CardTitle>
      </CardHeader>
      <CardContent className="text-white flex flex-col gap-5">
         {cartItems.map((item)=>(
            <div className="flex justify-between">
                <span>
                    <Badge variant="outline" className="mr-2 text-white">
                      {item.quantity}
                    </Badge>
                    {item.name}
                </span>
                <span className="flex items-center gap-8">
                    <TrashIcon className="cursor-pointer" color="red" size={20} onClick={()=> removeFromCart(item)}/>
                  ₹{((item.price * item.quantity) / 100).toFixed(2)}
                </span>
            </div>
         ))}
         <Separator className="bg-slate-500"/>
         <div className="flex justify-between">
            <span>Delivery</span>
            <span>₹{(restaurant.deliveryPrice / 100).toFixed(2)}</span>
         </div>
         <Separator className="bg-slate-500"/>
      </CardContent>
    </>
  );
};

export default OrderSummary;