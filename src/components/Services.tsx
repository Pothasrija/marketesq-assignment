import { H2Heading } from "./common/heading";

export default function Services() {
   return (
      <>
         {/* Your component content here */}
         <section className="max-w-6xl mx-auto px-4">
            <H2Heading>Services</H2Heading>

            <div className="grid grid-cols-3 gap-4">
               <ServiceCard />
               <ServiceCard />
               <ServiceCard />
               <ServiceCard />
               <ServiceCard />
               <ServiceCard />
               <ServiceCard />
               <ServiceCard />
               <ServiceCard />
            </div>
         </section>
      </>
   );
}

function ServiceCard() {
   return (
      <div className="max-w-sm mx-auto bg-card rounded-lg shadow-custom p-10">
         <img
            alt="wifi-icon"
            src="https://openui.fly.dev/openui/48x48.svg?text=📶"
            className="mx-auto mb-4"
         />
         <h2 className="text-lg font-bold text-gray-800 text-center">
            High Speed Internet
         </h2>
         <p className="text-gray-700 mt-2">
            Optical fiber connections provided in not only in your cabins but
            rather to all of the BriSphere scenic working spaces and dining
            areas.
         </p>
      </div>
   );
}
