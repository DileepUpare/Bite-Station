import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Spinner } from "@material-tailwind/react";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return <span><Spinner className="h-12 w-12 text-gray-900/50 justify-center mt-40 mb-60 ml-[42vw] " onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}/></span>;
  }

  if (!orders || orders.length === 0) {
    return "No orders found";
  }

  return (
    <div className="space-y-10">
      {orders.map((order) => (
        <div className="space-y-10 bg-gray-50 p-10 rounded-lg">
          <OrderStatusHeader order={order} />
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={15/6}>
              <img
                src={order.restaurant.imageUrl}
                className="rounded-md object-cover h-full w-full"
              />
            </AspectRatio>
          </div>
        </div>
      ))}

      <div></div>
    </div>
  );
};

export default OrderStatusPage;