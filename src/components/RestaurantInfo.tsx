import { Restaurant } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Dot } from "lucide-react";

type Props = {
   restaurant: Restaurant
}

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <Card className="md:ml-[-8vw] md:w-[58vw] md:h-[16.5vw] border-sla">
      <CardHeader>
        <CardTitle className="md:text-5xl text-2xl font-bold tracking-tight">
          {restaurant.restaurantName}
        </CardTitle>
        <CardDescription className="md:text-xl md:ml-2 text-[2.5vw]">
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {restaurant.cuisines.map((item, index) => (
          <span key={index} className="flex items-center">
            <span>{item}</span>
            {index < restaurant.cuisines.length - 1 && <Dot className="ml-1 w-4 h-4"/>}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
