export function Button({ children }: { children: React.ReactNode }) {
   return (
      <>
         {/* Your component content here */}
         <button className="bg-cyan-700 text-white text-lg font-semibold py-4  px-10 rounded-md shadow-lg hover:bg-primary/80 focus:outline-none focus:ring focus:ring-primary">
            {children}
         </button>
      </>
   );
}
