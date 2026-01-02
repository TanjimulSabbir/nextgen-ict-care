"use client"
import { useState } from 'react';
import Link from 'next/link';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function MobileMenu({ Navlinks }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-white text-3xl transition-transform active:scale-90"
            >
                <HiMenuAlt3 />
            </button>

            <div className={`fixed inset-0 min-h-screen bg-[#020617]/98 backdrop-blur-2xl lg:hidden transition-all duration-500 z-[110] ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}>
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 text-3xl"
                >
                    <HiX />
                </button>

                <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
                    <div className="text-center mb-4">
                        <h2 className="text-3xl font-black text-white italic">
                            NextGen <span className="text-cyan-500">ICT</span>
                        </h2>
                        <div className="h-1 w-12 bg-cyan-500 mx-auto mt-2 rounded-full" />
                    </div>

                    {Navlinks.map((link, index) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-bold font-siliguri text-white hover:text-cyan-400 transition-all"
                            style={{ transitionDelay: `${index * 50}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="https://forms.gle/RZjBZrQi1gV7iahY7"
                        target="_blank"
                        className="w-full max-w-[280px] py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center font-black rounded-2xl shadow-lg"
                    >
                        এখনই ভর্তি হও
                    </Link>
                </div>
            </div>
        </>
    );
}