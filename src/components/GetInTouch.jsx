import { useState } from "react";

export const Contact = () => {
    const [email, setEmail] = useState("");

    const handleRequestDemo = () => {
        alert("Thank you for your request. We will get back to you soon!");
    };

    return (
        <section className="bg-gray-800 p-12 rounded-lg animate-slideLeft">
            <div className="container mx-auto max-w-md">
                <div className="flex flex-wrap items-center justify-center">
                    <div className="w-full px-4">
                        <h1 className="text-4xl font-bold mb-6 text-center text-white">Get in touch with us</h1>
                        <p className="text-xl font-bold mb-6 text-center text-white">Send Enquiry Now!</p>
                        <form onSubmit={handleRequestDemo}>
                            <div className="flex flex-wrap">
                                <div className="w-full px-1 mb-4">
                                    <input type="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} className="w-full py-3 px-4 rounded-md placeholder-gray-400 bg-white focus:outline-none focus:bg-gray-100" />
                                </div>
                                <div className="w-full px-1 mb-4 flex justify-center">
                                    <button type="submit" className="bg-blue-gradient py-3 px-8 rounded-md hover:bg-blue-100 focus:outline-none text-white transition duration-300">Request Demo</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
