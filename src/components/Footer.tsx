import { Button } from "./common/button";
import { FooterHeading } from "./common/heading";
export default function Footer() {
   return (
      <>
         <footer className="bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto px-4 flex justify-between">
               <div>
                  <FooterHeading>Brisphere</FooterHeading>
                  <address className="mb-3 not-italic text-lg text-gray-700">
                     Spituk, Ladakh,
                     <br />
                     India, 194101
                     <br />
                     +91 - 7764997033
                     <br />
                     <a href="mailto:amit.jha6700@gmail.com">
                        amit.jha6700@gmail.com
                     </a>
                  </address>
                  <Button>Location</Button>
               </div>

               <ul className="flex flex-col gap-2 text-2xl text-gray-800 font-medium">
                  <li>
                     <a href="#" className="hover:underline">
                        Terms and Conditions
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:underline">
                        Privacy Policy
                     </a>
                  </li>
                  <li>
                     <a href="#" className="hover:underline">
                        Refund Policy
                     </a>
                  </li>
               </ul>
            </div>
         </footer>
      </>
   );
}
