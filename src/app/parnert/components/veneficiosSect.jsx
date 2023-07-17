


export default function PartnerBenefits() {


    const partnerBenefits = [
        'Acceso a recursos y herramientas exclusivas de marketing.',
        'Generosas comisiones por referencias exitosas.',
        'Asistencia y soporte dedicado del equipo de Ryu Mark Agencia de Marketing.',
        'Oportunidades de colaboración en proyectos conjuntos.',
        'Promoción y visibilidad en nuestro sitio web y redes sociales.',
        'Participación en eventos y capacitaciones exclusivas para Partners.',
    ];

    const partnerRequirements = [
        'Tener un negocio relacionado con marketing, publicidad o tecnología.',
        'Experiencia previa en colaboraciones exitosas con otras agencias o empresas.',
        'Capacidad para generar al menos 10 referencias de clientes por trimestre.',
        'Compromiso con la calidad del servicio y satisfacción del cliente.',
        'Disponibilidad para asistir a eventos y reuniones de Partners.',
    ];



    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center text-black">¡Únete a nuestro programa de Partners!</h2>
                <p className="text-lg text-gray-600 mb-8 text-center">
                    En Ryu Mark Agencia de Marketing, valoramos las asociaciones con otros profesionales y empresas.
                    Nuestro programa de Partners ofrece beneficios exclusivos y oportunidades para crecer juntos.
                    Si deseas expandir tu alcance y colaborar con una agencia líder en el mercado, ¡te invitamos a ser parte de nuestro programa de Partners!
                </p>
                <h2 className="text-3xl font-bold mb-6 text-center text-black">Beneficios</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {partnerBenefits.map((benefit) => (
                        <div key={benefit} className="flex items-center mb-4">
                            <div className="flex-shrink-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-600 mr-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <p className="text-gray-800">{benefit}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4 text-black">Requisitos para ser Partner</h3>
                    <ul className="list-disc pl-6">
                        {partnerRequirements.map((requirement) => (
                            <li key={requirement} className="text-gray-800">
                                {requirement}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4 text-black">¿Cómo Aplicar?</h3>
                    <p className="text-gray-800">
                        Si estás interesado en convertirte en Partner de Ryu Mark Agencia de Marketing, te invitamos a seguir estos pasos:
                    </p>
                    <ol className="list-decimal pl-6">
                        <li className="text-gray-800">Revisa los requisitos para ser Partner y asegúrate de cumplir con ellos.</li>
                        <li className="text-gray-800">Prepara una breve descripción de tu negocio y cómo te gustaría colaborar con nuestra agencia.</li>
                        <li className="text-gray-800">Envía un correo electrónico a partners@ryu-mark.com con el asunto Solicitud para ser Partner.</li>
                        <li className="text-gray-800">En el correo electrónico, incluye tu nombre, nombre de tu empresa y la descripción mencionada anteriormente.</li>
                        <li className="text-gray-800">Nuestro equipo de Partners revisará tu solicitud y te contactará para discutir más detalles.</li>
                    </ol>
                    <p className="text-gray-800 mt-4">
                        Si tienes alguna pregunta o necesitas más información sobre el programa de Partners, no dudes en contactarnos a través del mismo correo electrónico.
                    </p>
                </div>
            </div>
        </section>
    );
}