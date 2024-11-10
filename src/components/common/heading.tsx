export function H2Heading({ children }: { children: React.ReactNode }) {
   return (
      <>
         <h2 className="text-3xl text-gray-800 font-medium text-center mb-8">
            {children}
         </h2>
      </>
   );
}
export function FooterHeading({ children }: { children: React.ReactNode }) {
   return (
      <>
         <h2 className="text-3xl text-gray-800 font-bold mb-2">{children}</h2>
      </>
   );
}
