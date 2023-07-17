'use client'


// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
    const [state, handleSubmit] = useForm("xrgwbzlb");

    if (state.succeeded) {
        return <p className="text-green-500 font-bold">Thanks for joining!</p>;
    }

    return (
        <div className='p-10'>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md text-black">
                <label htmlFor="email" className="block font-bold mb-2">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500"
                />

                <label htmlFor="message" className="block font-bold mt-4 mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    rows={4}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500"
                />

                <button
                    type="submit"
                    disabled={state.submitting}
                    className="mt-4 bg-orange-600 hover:bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}


export default ContactForm;
