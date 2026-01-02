"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavItem({ href, name }:{ href: string; name: string }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`relative px-5 py-2 font-medium font-siliguri transition-all duration-300 group ${isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                }`}
        >
            <span className="relative z-10">{name}</span>

            {/* Background Hover Effect */}
            <div className={`absolute inset-0 bg-white/5 rounded-xl transition-transform duration-300 -z-10 ${isActive ? 'scale-100' : 'scale-0 group-hover:scale-100'
                }`} />

            {/* Bottom Active Line */}
            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-cyan-500 rounded-full blur-[1px] transition-all duration-300 ${isActive ? 'w-1/2 opacity-100' : 'w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-100'
                }`} />
        </Link>
    );
}