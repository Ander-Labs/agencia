
'use client'

import Layout from "@/components/layout";
import React, { useState } from 'react';
import Image from "next/image";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica de autenticación con la base de datos o API

        // Supongamos que la autenticación falla y el usuario no está registrado
        setErrorMessage(
            'Usted no está registrado. Contrate uno de nuestros planes o elabore un plan personalizado. Si el error persiste, póngase en contacto con nuestro equipo.'
        );

        // Si la autenticación es exitosa, redireccionar a la página de inicio de sesión
    };

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-r from-red-600 to-yellow-400 flex items-center justify-center">
                <div className="max-w-md w-full px-8 py-6 bg-white rounded-lg shadow-lg text-black">
                    <div className="flex items-center justify-center">
                        <Image
                            src="/dragonLogin.jpg"
                            alt="Dragon Icon"
                            width={600}
                            height={600}
                            className="w-12 h-12 mr-2"
                        />
                        <h2 className="text-3xl font-bold text-gray-800">¡Bienvenido, Dragón!</h2>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-6">
                        <div className="mb-4">
                            <label htmlFor="username" className="block font-bold mb-2">
                                Nombre de usuario:
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block font-bold mb-2">
                                Contraseña:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 text-white font-bold py-2 px-4 rounded hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        >
                            Iniciar sesión
                        </button>
                        {errorMessage && (
                            <p className="text-red-600 mt-4">{errorMessage}</p>
                        )}
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default LoginForm;
