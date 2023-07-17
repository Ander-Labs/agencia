'use client'
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
export default function TeamSect() {


    const Cargo = [
        { id: '1', title: 'Co-Fundadora' },
        { id: '2', title: 'Fundador' },
        { id: '3', title: 'Co-Fundador' },
        { id: '4', title: 'CEO' },
        { id: '5', title: 'Director de Tecnología' },
        { id: '6', title: 'Directora Financiera' },
        { id: '7', title: 'Gerente de Atención al Cliente' },
        { id: '8', title: 'Director de Marketing' },
        { id: '9', title: 'Directora Creativa' },
        { id: '10', title: 'Gerente de proyectos' },
        { id: '11', title: 'Especialista en SEO' },
    ];



    const Team = [
        {
            id: '1',
            imgUrl: '/dragona2.jpg',
            name: 'Maribel Quevedo',
            cargo: Cargo.filter(c => c.id === '1' || c.id === '6' || c.id === '7'),
            social: {
                instagram: "https://www.instagram.com/anderson",
                twitter: "https://twitter.com/anderson",
                facebook: "https://www.facebook.com/anderson",
                linkedin: "https://www.linkedin.com/in/anderson",
            },
        },
        {
            id: '2',
            imgUrl: '/dragon1.jpg',
            name: 'Anderson Ruiz',
            cargo: Cargo.filter(c => c.id === '2' || c.id === '4' || c.id === '5'),
            social: {
                instagram: "https://www.instagram.com/and_tzu/",
                twitter: "https://twitter.com/Ander_Labs",
                facebook: "https://www.facebook.com/profile.php?id=100093439878416",
                linkedin: "https://www.linkedin.com/in/anderson-ruiz/",
                github: "https://github.com/Ander-Labs",
            },
        },
        {
            id: '3',
            imgUrl: '/dragon3.jpg',
            name: 'Junior Chiroque',
            cargo: Cargo.filter(c => c.id === '3' || c.id === '8'),
            social: {
                instagram: "https://www.instagram.com/anderson",
                twitter: "https://twitter.com/anderson",
                facebook: "https://www.facebook.com/anderson",
                linkedin: "https://www.linkedin.com/in/anderson",
            },
        },
        {
            id: '4',
            imgUrl: '/dragona.jpg',
            name: 'Sarai Chiroque',
            cargo: Cargo.filter(c => c.id === '1' || c.id === '9'),
            social: {
                instagram: "https://www.instagram.com/anderson",
                twitter: "https://twitter.com/anderson",
                facebook: "https://www.facebook.com/anderson",
                linkedin: "https://www.linkedin.com/in/anderson",
            },
        },
        {
            id: '5',
            imgUrl: '/dragona8.jpg',
            name: 'Carmen Castro',
            cargo: Cargo.filter(c => c.id === '1' || c.id === '10'),
            social: {
                instagram: "https://www.instagram.com/anderson",
                twitter: "https://twitter.com/anderson",
                facebook: "https://www.facebook.com/anderson",
                linkedin: "https://www.linkedin.com/in/anderson",
            },
        },
        {
            id: '6',
            imgUrl: '/dragona9.jpg',
            name: 'Milusca Silva',
            cargo: Cargo.filter(c => c.id === '1' || c.id === '11'),
            social: {
                instagram: "https://www.instagram.com/anderson",
                twitter: "https://twitter.com/anderson",
                facebook: "https://www.facebook.com/anderson",
                linkedin: "https://www.linkedin.com/in/anderson",
            },
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
            </div>

            <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-16">
                {Team.map((team) => (
                    <div
                        key={team.id}
                        className="bg-neutral-900/10 text-white w-full md:w-80 mb-8 rounded-lg shadow-2xd p-4 border border-gray-300 hover:border-yellow-600 hover:shadow-2xd hover:shadow-orange-600/90 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-lg shadow-white/50"
                    >
                        <div className="flex flex-col items-center">
                            <Image
                                src={team.imgUrl}
                                alt={team.title}
                                width={500}
                                height={500}
                                className="w-32 h-32 mx-auto mb-4 rounded-3xl"
                            />
                            <h2 className="text-xl font-bold mb-2 text-center">{team.name}</h2>
                            <span className="block w-full border-b border-gray-300 my-4"></span>
                            <div className="text-white mb-4 text-center">
                                {team.cargo.map((cargo) => (
                                    <p key={cargo.id}>{cargo.title}</p>
                                ))}
                            </div>
                            <div className="flex">
                                {team.social && team.social.instagram && (
                                    <a href={team.social.instagram} target="_blank" rel="noopener noreferrer" className="mr-2">
                                        <FaInstagram size={24} className="text-white hover:text-pink-600 transition-colors duration-300" />
                                    </a>
                                )}
                                {team.social && team.social.twitter && (
                                    <a href={team.social.twitter} target="_blank" rel="noopener noreferrer" className="mr-2">
                                        <FaTwitter size={24} className="text-white hover:text-blue-600 transition-colors duration-300" />
                                    </a>
                                )}
                                {team.social && team.social.facebook && (
                                    <a href={team.social.facebook} target="_blank" rel="noopener noreferrer" className="mr-2">
                                        <FaFacebook size={24} className="text-white hover:text-blue-600 transition-colors duration-300" />
                                    </a>
                                )}
                                {team.social && team.social.linkedin && (
                                    <a href={team.social.linkedin} target="_blank" rel="noopener noreferrer" className="mr-2">
                                        <FaLinkedin size={24} className="text-white hover:text-blue-600 transition-colors duration-300" />
                                    </a>
                                )}
                                {team.social && team.social.github && (
                                    <a href={team.social.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub size={24} className="text-white hover:text-red-600 transition-colors duration-300" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}