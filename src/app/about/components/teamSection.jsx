'use client'
import Image from "next/image";
import Link from "next/link";
export default function TeamSection() {


    const Cargo = [
        { id: '1', title: 'Co-Fundadora' },
        { id: '2', title: 'Fundador' },
        { id: '3', title: 'Co-Fundador' },
    ];



    const Team = [
        {
            id: '1',
            imgUrl: '/dragona2.jpg',
            name: 'Maribel Quevedo',
            cargo: Cargo.filter(c => c.id === '1'),
        },
        {
            id: '2',
            imgUrl: '/dragon1.jpg',
            name: 'Anderson Ruiz',
            cargo: Cargo.filter(c => c.id === '2'),
        },
        {
            id: '3',
            imgUrl: '/dragon3.jpg',
            name: 'Junior Chiroque',
            cargo: Cargo.filter(c => c.id === '3'),
        },
    ];

    return (
        <div className="p-10 text-white bg-neutral-900">
            <div className="w-full md:w-1/1 px-4 mb-8">
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                        <Image src="/Iconteam.svg" alt="Icon servicios" width={50} height={50} />
                    </div>
                    <h2 className="lg:text-mg mt-2 font-bold">/ / 04. TEAM</h2>
                </div>
                <h3 className="lg:text-3xl text-lg font-bold mb-2 text-center">
                    Nuestro Equipo
                </h3>
                <div className='flex justify-end'>
                    <button className="bg-white text-black py-2 px-4 rounded mt-4 hover:text-white hover:bg-yellow-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <Link href="/team">Full Team</Link>
                    </button>
                </div>
            </div>


            <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-16">
                {Team.map((team) => (
                    <div key={team.id} className="bg-neutral-900/10 text-white w-full md:w-80 mb-8 rounded-lg shadow-2xd p-4 border border-gray-300 hover:border-yellow-600 hover:shadow-2xd hover:shadow-orange-600/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-white/50">
                        <Image src={team.imgUrl} alt={team.title} width={500} height={500} className="w-32 h-32 mx-auto mb-4 rounded-3xl" />
                        <h2 className="text-xl font-bold mb-2 text-center ">{team.name}</h2>
                        <span className="block w-full border-b border-gray-300 my-4"></span>
                        {team.cargo.map((cargo) => (
                            <p key={cargo.id} className="text-white mb-4 text-center ">{cargo.title}</p>
                        ))}
                    </div>
                ))}
            </div>

        </div>
    );
}