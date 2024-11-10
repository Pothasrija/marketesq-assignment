export default function Navbar() {
   return (
      <header className="flex justify-between items-center max-w-6xl mx-auto px-4 py-10 text-xl ">
         <h1 className="font-bold">Brisphere</h1>
         <ul className="flex gap-4">
            <li>
               <a href="#discover">Discover</a>
            </li>
            <li>
               <a href="#services">Services</a>
            </li>
            <li>
               <a href="#about-us">About us</a>
            </li>
         </ul>
      </header>
   );
}
