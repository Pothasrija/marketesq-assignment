import { H2Heading } from "./common/heading";
import {
   Car02Icon,
   DeliveryTruckIcon,
   FlagIcon,
   Home09Icon,
   MapLocationIcon,
   ShoppingCartIcon,
   VegetarianFoodIcon,
   WifiIcon,
} from "./common/icons";

export default function Services() {
   return (
      <>
         {/* Your component content here */}
         <section className="max-w-6xl mx-auto px-4 my-16">
            <H2Heading>Services</H2Heading>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
               <ServiceCard
                  icon={<WifiIcon className="size-14 text-gray-600" />}
                  name="High Speed Internet"
                  description="Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas."
               />
               <ServiceCard
                  icon={
                     <VegetarianFoodIcon className="size-14 text-gray-600" />
                  }
                  name="Healthy Meals"
                  description="A healthy breakfast and pleasant dinner will be serviced at your space every single day for your entire duration of stay with option of paid order within BriSphere."
               />
               <ServiceCard
                  icon={<Home09Icon className="size-14 text-gray-600" />}
                  name="Homely Stay"
                  description="Designed for working professionals with spacious interiors, comfortable beds and sleekly attached kitchen are some of the comforts provided in your space."
               />
               <ServiceCard
                  icon={<Car02Icon className="size-14 text-gray-600" />}
                  name="Transportation"
                  description="Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas."
               />
               <ServiceCard
                  icon={<DeliveryTruckIcon className="size-14 text-gray-600" />}
                  name="Food Delivery"
                  description="Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas."
               />
               <ServiceCard
                  icon={<MapLocationIcon className="size-14 text-gray-600" />}
                  name="Tourism"
                  description="Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas."
               />
               <ServiceCard
                  icon={<FlagIcon className="size-14 text-gray-600" />}
                  name="Job"
                  description="Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas."
               />
               <ServiceCard
                  icon={<Car02Icon className="size-14 text-gray-600" />}
                  name="Rental Services"
                  description="Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas."
               />
               <ServiceCard
                  icon={<ShoppingCartIcon className="size-14 text-gray-600" />}
                  name="Shopping"
                  description="Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas."
               />
            </div>
         </section>
      </>
   );
}

function ServiceCard({
   icon,
   name,
   description,
}: {
   icon: React.ReactNode;
   name: string;
   description: string;
}) {
   return (
      <div className="mx-auto bg-card rounded-lg shadow-custom p-10">
         <div className="mx-auto mb-4 w-max">{icon}</div>
         <h2 className="text-lg font-bold text-gray-800 text-center">{name}</h2>
         <p className="text-gray-700 mt-2">{description}</p>
      </div>
   );
}
