// import Image from "next/image";

// export default function DesarrolloPortafolio() {
//   return (
//     <div className="bg-gray-200">
//       <div className="container mx-auto flex flex-col items-center py-20">
//         <div className="relative">
//           {/* <Image
//             src="/under-construction.png"
//             alt="Under construction"
//             width={400}
//             height={400}
//             layout="responsive"
//           /> */}
//           <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-3xl font-bold">
//             Esta sección está en desarrollo
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// }




import Image from "next/image";

export default function DesarrolloPortafolio() {
  return (
    
        <div className="container mx-auto flex flex-col items-center py-20 text-center">
            {/* <Image
            src="/under-construction.png"
            alt="Under construction"
            width={400}
            height={400}
            layout="responsive"
          /> */}
            <h2 className="flex justify-center items-center m-10 p-10  text-center text-6xl font-bold  lg:text-4xl">
            Esta sección está en desarrollo
            </h2>
        </div>
   
  );
}
