'use client'

import { useState } from "react";

export default function FaqSection() {

    const faqs = [
        {
            question: "¿Qué servicios ofrece su agencia de marketing?",
            answer:
                "Ofrecemos una amplia gama de servicios de marketing digital, incluyendo estrategias de SEO, gestión de redes sociales, publicidad en línea, desarrollo web y diseño gráfico.",
        },
        {
            question: "¿Cuál es el enfoque de su agencia en términos de marketing?",
            answer:
                "Nuestro enfoque se basa en estrategias personalizadas y orientadas a resultados. Nos enfocamos en comprender las necesidades y metas de nuestros clientes para crear campañas efectivas y lograr un retorno de inversión positivo.",
        },
        {
            question: "¿Cómo determinan cuál es la estrategia adecuada para mi negocio?",
            answer:
                "Realizamos un análisis exhaustivo de su negocio, incluyendo su mercado objetivo, competencia y objetivos comerciales. Con base en esta información, desarrollamos una estrategia personalizada que se alinee con sus necesidades y presupuesto",
        },
        {
            question: "¿Cuánto tiempo toma ver resultados en el marketing digital?",
            answer:
                "El tiempo para ver resultados puede variar según diversos factores, como la competencia en su industria y la estrategia implementada. Sin embargo, generalmente se pueden observar mejoras en la visibilidad y el rendimiento en unos pocos meses, y los resultados a largo plazo se obtienen con una estrategia continua.",
        },
        {
            question: "¿Cuál es su enfoque en términos de diseño web?",
            answer:
                "Nuestro enfoque en diseño web se basa en la creación de sitios web modernos, intuitivos y responsivos. Nos aseguramos de que su sitio web refleje su marca, sea fácil de usar y esté optimizado para motores de búsqueda",
        },
        {
            question: "¿Cómo medirán el éxito de nuestras campañas de marketing?",
            answer:
                "Utilizamos herramientas y métricas de seguimiento para medir el rendimiento de las campañas de marketing. Estos incluyen análisis de tráfico, conversiones, interacciones en redes sociales y clasificaciones de SEO. Proporcionaremos informes periódicos para mantenerlo informado sobre los resultados y realizar ajustes según sea necesario.",
        },
        {
            question: "¿Cuál es su enfoque en la seguridad de los datos?",
            answer:
                "Nos tomamos muy en serio la seguridad de los datos de nuestros clientes. Implementamos medidas de seguridad robustas para proteger su información y seguimos las mejores prácticas de la industria para garantizar la confidencialidad y la integridad de sus datos.",
        },
        {
            question: "¿Ofrecen servicios de gestión de redes sociales?",
            answer:
                "Sí, ofrecemos servicios de gestión de redes sociales para ayudarlo a construir y mantener una presencia efectiva en plataformas como Facebook, Instagram, Twitter y LinkedIn. Creamos estrategias de contenido, gestionamos publicaciones y monitoreamos la interacción con los usuarios",
        },
        {
            question: "¿Cuál es su experiencia en la industria?",
            answer:
                "Contamos con un equipo de expertos en marketing con amplia experiencia en diversas industrias. Hemos trabajado con clientes de diferentes sectores y estamos familiarizados con los desafíos y oportunidades específicas de cada industria",
        },
        {
            question: "¿Ofrecen servicios de consultoría personalizada?",
            answer:
                "Sí, ofrecemos servicios de consultoría personalizada para ayudarlo a desarrollar una estrategia de marketing efectiva y obtener orientación en aspectos específicos de su negocio. Nuestros consultores trabajarán directamente con usted para abordar sus necesidades y responder a sus preguntas",
        },
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
            </div></div>
    );
}