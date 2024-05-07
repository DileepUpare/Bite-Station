import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import LoadingButton from "./LoadingButton";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer";
import { ArrowUpRight } from "lucide-react";
import UserProfileForm, { UserFormData } from "@/Forms/User-Profile-Form/UserProfileForm";
import { useGetMyUser } from "@/api/UserApi";

type Props = {
    onCheckout: (userFormData: UserFormData)=> void;
    disabled: boolean;
    isLoading: boolean;
};

const CheckOutButton = ({ onCheckout, disabled, isLoading }: Props) => {
   const { isAuthenticated, isLoading: isAuthLoading, loginWithRedirect } = useAuth0();
  
   const { pathname } = useLocation();

   const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();

   const onLogin = async ()=> {
      await loginWithRedirect({
        appState: {
            returnTo: pathname,
        },
      });
   };

   if(!isAuthenticated){
    return (
        <Button disabled={disabled} onClick={onLogin} className="flex-1 bg-white text-black hover:text-white">Log in to Checkout</Button>
    );
   }

   if(isAuthLoading || !currentUser || isLoading){
      return <LoadingButton/>
   }
   
   return(
    <Drawer>
        <DrawerTrigger asChild>
            <Button className="flex-1 bg-white text-black hover:text-white">
                Check Out <span><ArrowUpRight className="text-black hover:text-white ml-3"/></span>
            </Button>
        </DrawerTrigger>
        <DrawerContent className="mx-auto max-w-screen h-[180vw] md:h-[46vw]">
           <DrawerHeader>
            <DrawerTitle className="md:text-5xl md:ml-8 text-xl">Confirm Delivery Details</DrawerTitle>
            <DrawerDescription className="md:text-xl md:ml-9">Proceed to payment by verifying your details.</DrawerDescription>
           </DrawerHeader>
           <UserProfileForm currentUser={currentUser} onSave={onCheckout} isLoading={isGetUserLoading} title="" description=""  buttonText="Continue to payment"/>
          <DrawerFooter>
          <DrawerClose asChild>
              <Button variant="outline" className=" md:w-[6vw] md:mt-[-12.7vw] md:ml-[15vw] md:h-9.6 md:z-10 mt-[-14vw] w-[20vw] ml-40">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
        
    </Drawer>
   )
};

export default CheckOutButton;