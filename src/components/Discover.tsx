import { useState } from "react";
import { H2Heading } from "./common/heading";
import { StarIcon } from "./common/icons";

export default function Discover() {
   return (
      <>
         {/* Your component content here */}
         <section className="max-w-6xl mx-auto px-4">
            <H2Heading>Discover</H2Heading>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
               <TestimonialCard />
               <TestimonialCard />
               <TestimonialCard img />
               <TestimonialCard />
               <TestimonialCard />
            </div>
         </section>
      </>
   );
}

function TestimonialCard({ img }: { img?: boolean }) {
   return (
      <div className="bg-white rounded-lg shadow-custom h-max overflow-hidden mb-6">
         {img && (
            <img
               src="https://images.unsplash.com/photo-1727843183425-6e5bdba28504?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               alt=""
            />
         )}
         <div className=" mx-auto p-5 rounded-xl shadow-lg">
            <div className="flex items-center mb-4">
               <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=50&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Profile Photo of Arjun Raghav"
                  className="rounded-full mr-3"
               />
               <div>
                  <h3 className="text-lg font-bold text-gray-800">
                     Arjun Raghav
                  </h3>
                  <div className="flex text-yellow-400">
                     <StarIcon className="size-3" />
                     <StarIcon className="size-3" />
                     <StarIcon className="size-3" />
                     <StarIcon className="size-3" />
                     <StarIcon className="size-3" />
                  </div>
               </div>
            </div>
            <Description />
         </div>
      </div>
   );
}

function Description() {
   const [showMore, setShowMore] = useState(false);
   return (
      <p>
         <span
            className={`text-gray-700 ${
               showMore ? "line-clamp-none" : "line-clamp-3"
            }`}
         >
            I am writing this after reflecting on my one month stay with
            Bricabin in Ladakh. Right from picking us up at the airport to
            dropping us back there after a month, Urgan was very responsible and
            took good care of my friends and me.
         </span>
         <button
            onClick={() => setShowMore(!showMore)}
            className="text-primary hover:underline text-blue-600"
         >
            {showMore ? "read less" : "read more"}
         </button>
      </p>
   );
}
