
'use client'


import Layout from "@/components/layout";
import React, { useState } from 'react';

export default function Planes() {



    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [plan, setPlan] = useState('Ryu Baby');
    const [mostrarMicroservicios, setMostrarMicroservicios] = useState(false);
    const [microserviciosSeleccionados, setMicroserviciosSeleccionados] = useState([]);

    const planes = ['Ryu Baby', 'Ryu Avance', 'Ryu Elite', 'Plan Personalizado'];

    const microservicios = [
        'Definición y segmentación de clientes objetivos',
        'Análisis de datos y métricas para la toma de decisiones',
        'Optimización de procesos internos y flujos de trabajo',
        'Planificación y ejecución de campañas de marketing',
        'Asesoramiento en estrategias de marketing digital',
        'Creación de contenido visual para redes sociales y sitios web',
        'Diseño y creación de material de marketing',
        'Creación de logotipos y elementos de identidad visual',
        'Implementación de estrategias de gestión de marca en redes sociales',
        'Diseño de interfaces de usuario (UI) y experiencia de usuario (UX)',
        'Desarrollo de sitios web responsivos',
        'Creación de páginas de destino (landing pages)',
        'Integración de sistemas de gestión de contenido (CMS)',
        'Desarrollo de tiendas en línea y comercio electrónico',
        'Implementación de estrategias de optimización de motores de búsqueda (SEO)',
        'Configuración de análisis web y seguimiento de conversiones',
        'Desarrollo de aplicaciones web personalizadas',
        'Mantenimiento y soporte web',
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('nombre', nombre);
        formData.append('email', email);
        formData.append('plan', plan);
        formData.append('microservicios', microserviciosSeleccionados.join(', '));

        try {
            const response = await fetch('https://getform.io/f/eb632cfa-88b3-42ef-95b2-74d47e0a1f91', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                // Manejar la respuesta de éxito, por ejemplo, mostrar un mensaje de confirmación
                console.log('Formulario enviado correctamente');
                // Limpiar los campos del formulario después de enviar
                setNombre('');
                setEmail('');
                setPlan('Ryu Baby');
                setMicroserviciosSeleccionados([]);
                setMostrarMicroservicios(false);
            } else {
                // Manejar el error en caso de que la solicitud no sea exitosa
                console.log('Error al enviar el formulario');
            }
        } catch (error) {
            // Manejar cualquier error en la solicitud
            console.log('Error en la solicitud:', error);
        }
    };

    const handlePlanChange = (e) => {
        setPlan(e.target.value);
        setMostrarMicroservicios(e.target.value === 'Plan Personalizado');
    };

    const handleMicroservicioChange = (e, microservicio) => {
        if (e.target.checked) {
            setMicroserviciosSeleccionados([...microserviciosSeleccionados, microservicio]);
        } else {
            setMicroserviciosSeleccionados(
                microserviciosSeleccionados.filter((ms) => ms !== microservicio)
            );
        }
    };

    return (
        <Layout>
            <div className="container mx-auto py-20 text-black">
                <h2 className="text-3xl font-bold mb-8 text-center">Formulario de Planes</h2>
                <form action="https://getform.io/f/eb632cfa-88b3-42ef-95b2-74d47e0a1f91" method="POST" onSubmit={handleSubmit} className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block font-bold mb-2">
                            Nombre:
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-bold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="plan" className="block font-bold mb-2">
                            Plan:
                        </label>
                        <select
                            id="plan"
                            name="plan"
                            value={plan}
                            onChange={handlePlanChange}
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            {planes.map((p) => (
                                <option key={p} value={p}>
                                    {p}
                                </option>
                            ))}
                        </select>
                    </div>
                    {mostrarMicroservicios && (
                        <div className="mb-4">
                            <p className="font-bold mb-2">Selecciona los microservicios:</p>
                            {microservicios.map((ms) => (
                                <div key={ms} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id={ms}
                                        name={ms}
                                        value={ms}
                                        checked={microserviciosSeleccionados.includes(ms)}
                                        onChange={(e) => handleMicroservicioChange(e, ms)}
                                    />
                                    <label htmlFor={ms} className="ml-2">
                                        {ms}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </Layout>
    );
}


