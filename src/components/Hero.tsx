import { useState } from "react";
import { Button } from "./common/button";
import {
   AddCircleIcon,
   Facebook02Icon,
   InstagramIcon,
   RemoveCircleIcon,
} from "./common/icons";

export default function Hero() {
   const [rooms, setRooms] = useState(1);
   return (
      <>
         {/* Your component content here */}

         <div className="max-w-6xl mx-auto px-4">
            <section className="bg-gray-100 ">
               <div className="grid grid-cols-2">
                  <div className="px-10 py-10">
                     <h2 className="text-6xl text-gray-800">
                        Work From Ladakh
                     </h2>
                     <p className="text-xl text-gray-800 mt-4">
                        India&apos;s first true digital tourism ecosystem
                     </p>
                     <div className="flex items-center gap-4 mt-6">
                        <Facebook02Icon className="size-7 text-gray-800" />
                        <InstagramIcon className="size-7 text-gray-800" />
                     </div>
                  </div>
                  <div>
                     <img
                        src="https://images.unsplash.com/photo-1547127678-a8619053611c?q=80&w=700&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="object-cover"
                     />
                  </div>
               </div>
            </section>
            <div className="shadow-lg -mt-16 relative z-20 bg-white shadow-gray-100 rounded-lg flex items-center justify-between w-max mx-auto p-10">
               <div className="divide-x grid grid-cols-3">
                  <div className="px-8 py-5">
                     <div className="text-gray-800 text-xl uppercase">
                        Check-in
                     </div>
                     <div className="text-gray-800 text-md mt-2 font-bold">
                        01 Feb 2024
                     </div>
                  </div>
                  <div className="px-8 py-5">
                     <div className="text-gray-800 text-xl uppercase">
                        Check-out
                     </div>
                     <div className="text-gray-800 text-md mt-2 font-bold">
                        02 Feb 2024
                     </div>
                  </div>
                  <div className="px-8 py-5">
                     <div className="text-gray-800 text-xl uppercase">
                        rooms
                     </div>
                     <div className="flex items-center mt-2 gap-2">
                        <button
                           onClick={() => setRooms((c) => Math.max(1, c - 1))}
                           className="text-gray-800"
                        >
                           <RemoveCircleIcon />
                        </button>
                        <span className="text-gray-800 text-md font-bold">
                           {rooms}
                        </span>
                        <button
                           onClick={() => setRooms((c) => Math.min(20, c + 1))}
                           className="text-gray-800"
                        >
                           <AddCircleIcon />
                        </button>
                     </div>
                  </div>
               </div>
               <Button>Book</Button>
            </div>
         </div>
      </>
   );
}
