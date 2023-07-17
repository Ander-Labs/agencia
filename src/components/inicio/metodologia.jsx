
import Image from 'next/image'

export default function Metodologia() {
    return (
        <div className='flex items-center justify-center sm:p-0 sm:m-0 md:m-6 md:p-6 '>
            <Image src='procesoImg.svg' alt='imagen proceso' width={900} height={900} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg' />
        </div>
    )
}

// import Image from 'next/image';

// export default function Metodologia() {
//     return (
//         <div className="flex items-center justify-center m-7 p-7">
//             <div className="sm:w-full md:w-full ">
//                 <Image src="/procesoImg.svg" alt="imagen proceso" layout="responsive" width={900} height={900} />
//             </div>
//         </div>
//     );
// }
