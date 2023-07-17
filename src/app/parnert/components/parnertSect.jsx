
'use client'

import { useState } from "react";


export default function PartnerSection() {


    const faqs = [
        {
            question: '¿Cuáles son los beneficios de ser Partner de Ryu Mark Agencia de Marketing?',
            answer: 'Al ser Partner de nuestra agencia, obtendrás acceso a recursos exclusivos, comisiones por referencias exitosas, asistencia dedicada y más oportunidades de crecimiento en colaboración con nosotros.',
        },
        {
            question: '¿Cómo puedo aplicar para ser Partner?',
            answer: 'Para aplicar, simplemente envía un correo electrónico a partners@ryumark.com con información sobre tu negocio y cómo te gustaría colaborar con nuestra agencia. Nuestro equipo revisará tu solicitud y te contactará para discutir más detalles.',
        },
        {
            question: '¿Cuáles son los requisitos para ser Partner?',
            answer: 'Los requisitos incluyen tener un negocio relacionado con marketing, publicidad o tecnología, experiencia en colaboraciones exitosas, capacidad para generar referencias de clientes y compromiso con la calidad del servicio.',
        },
        {
            question: '¿Cómo se manejan las comisiones por referencias?',
            answer: 'Las comisiones por referencias exitosas se acuerdan individualmente según el tipo de colaboración. Nuestro equipo discutirá los detalles de las comisiones durante el proceso de incorporación.',
        },
        {
            question: '¿Cuánto tiempo lleva el proceso de incorporación?',
            answer: 'El tiempo de incorporación varía según la cantidad de solicitudes y la evaluación de los candidatos. Nuestro objetivo es ser lo más ágiles posible para proporcionar una respuesta oportuna a los interesados.',
        },
        // Puedes agregar más preguntas y respuestas aquí...
    ];


    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };


    return (
        <div className="bg-neutral-900">
            <div className="container mx-auto py-20  text-black">
                <h2 className="text-3xl text-white font-bold mb-8">FAQ</h2>
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-4">
                        <button
                            className="w-full flex justify-between items-center py-2 px-4 bg-gray-200 rounded-lg"
                            onClick={() => handleClick(index)}
                        >
                            <span className="text-lg font-bold">{faq.question}</span>
                            <span>{activeIndex === index ? "-" : "+"}</span>
                        </button>
                        {activeIndex === index && (
                            <div className="bg-gray-100 rounded-lg p-4 mt-4">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}