import ManageRestaurantForm from "@/Forms/Manage-Restaurant-Form/ManageRestaurantForm";
import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/RestaurantApi";

const ManageRestaurantPage = () => {
  const { CreateRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUploadLoading } = useUpdateMyRestaurant();
 
  const isEditing = !!restaurant;

  return (
  <ManageRestaurantForm
   restaurant={restaurant}
   onSave={isEditing? updateRestaurant : CreateRestaurant} 
   isLoading={isCreateLoading || isUploadLoading}
   />
  );
};

export default ManageRestaurantPage;