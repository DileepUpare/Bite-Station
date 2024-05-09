import ManageRestaurantForm from "@/Forms/Manage-Restaurant-Form/ManageRestaurantForm";
import { useCreateMyRestaurant, useGetMyRestaurant, useGetMyRestaurantOrders, useUpdateMyRestaurant } from "@/api/RestaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ManageRestaurantPage = () => {
  const { CreateRestaurant, isLoading: isCreateLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUploadLoading } = useUpdateMyRestaurant();
 
  const { orders } = useGetMyRestaurantOrders();
  const isEditing = !!restaurant;

  return (
  <Tabs defaultValue="orders">
    <TabsList className="font-goliMedium">
      <TabsTrigger value="orders">Orders</TabsTrigger>
      <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
    </TabsList>
    <TabsContent value="orders" className="space-y-5 bg-gray-50 p-10 rounded-lg">
        <h2 className="text-3xl font-goliBold">{orders?.length} active orders</h2>
        {orders?.map((order)=> <OrderItemCard order={order}/>)}
    </TabsContent>
    <TabsContent value="manage-restaurant">
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={isEditing? updateRestaurant : CreateRestaurant} 
      isLoading={isCreateLoading || isUploadLoading}
      />
    </TabsContent>
  </Tabs>

  
  );
};

export default ManageRestaurantPage;