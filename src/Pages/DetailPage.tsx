import { UserFormData } from "@/Forms/User-Profile-Form/UserProfileForm";
import { useCreateCheckoutSession } from "@/api/OrderApi";
import { useGetRestaurant } from "@/api/SearchRestaurantApi";
import CheckOutButton from "@/components/CheckOutButton";
import MenuItem from "@/components/MenuItem";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardFooter } from "@/components/ui/card";
import { MenuItem as MenuItemType} from "@/types";
import { Spinner } from "@material-tailwind/react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type CartItem = {
   _id: string;
   name: string;
   price: number;
   quantity: number;
}

const DetailPage = () => {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurant(restaurantId);
  const { createCheckoutSession, isLoading: isCheckoutLoading } = useCreateCheckoutSession();

  const [cartItems, setCartItems] = useState<CartItem[]>(()=>{
    const storedCartItems = sessionStorage.getItem(`cartItems-${restaurantId}`);
    return storedCartItems ? JSON.parse(storedCartItems): [];
  });

  const addToCart = (menuItem: MenuItemType) => {
    setCartItems((prevCartItems)=> {

        //1. Check if the item is already in the cart:
        const existingCartItem = prevCartItems.find((cartItem)=> cartItem._id === menuItem._id);

        let updatedCartItems;

        //2. If item is in cart, update the quantity:
        if(existingCartItem){
           updatedCartItems = prevCartItems.map((cartItem)=>
             cartItem._id === menuItem._id 
             ? {...cartItem, quantity: cartItem.quantity + 1}
             : cartItem
           );
        }

        //3. If item is not in cart, add it as a new item:
        else{
          updatedCartItems = [
            ...prevCartItems, {
               _id: menuItem._id,
               name:menuItem.name,
               price: menuItem.price,
               quantity: 1,
            }
          ]
        }
       
      sessionStorage.setItem(`cartItems-${restaurantId}`, JSON.stringify(updatedCartItems));
        
      return updatedCartItems;
    });  
  };

  const removeFromCart = (cartItem: CartItem)=> {
    setCartItems((prevCartItems)=>{
         const updatedCartItems = prevCartItems.filter(
          (item)=>cartItem._id!== item._id
        );

       sessionStorage.setItem(`cartItems-${restaurantId}`, JSON.stringify(updatedCartItems));

        return updatedCartItems;
    })
  };

 const onCheckout = async (userFormData: UserFormData) => {
    if(!restaurant){
      return;
    }

    const checkoutData = {
      cartItems: cartItems.map((cartItem)=> ({
         menuItemId: cartItem._id,
         name: cartItem.name,
         quantity: cartItem.quantity.toString(),
      })),

      restaurantId: restaurant?._id,
      deliveryDetails: {
        name: userFormData.name,
        addressLine1: userFormData.addressLine1,
        city: userFormData.city,
        country: userFormData.country,
        email: userFormData.email as string
      }
    };

    const data = await createCheckoutSession(checkoutData)
    window.location.href = data.url;
  };

  if (isLoading || !restaurant) {
    return  <span><Spinner className="h-12 w-12 text-gray-900/50 justify-center mt-40 mb-60 ml-[42vw] " onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}/></span>;
  }

  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={17 / 7}>
        <img
          src={restaurant.imageUrl}
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
          <div className="flex flex-col gap-4">
            <RestaurantInfo restaurant={restaurant}/>
            <span className="font-goliBold text-4xl ml-3 md:mt-12 md:text-6xl md:mb-3 mt-4 md:ml-[-7vw] font-bold tracking-tighter">MENU</span>
            {restaurant.menuItems.map((menuItem)=> (
                 <MenuItem menuItem={menuItem} addToCart={()=> addToCart(menuItem)}/>
            ))}
          </div>

          <div>
            <Card className="bg-black">
                <OrderSummary restaurant={restaurant} cartItems={cartItems} removeFromCart={removeFromCart}/>
                <CardFooter>
                    <CheckOutButton disabled={cartItems.length === 0} onCheckout={onCheckout} isLoading={isCheckoutLoading}/>
                </CardFooter>
            </Card>
          </div>
      </div>
      <div className="mt-[5vw]">
        <h1></h1>
      </div>
    </div>
  );
};

export default DetailPage;