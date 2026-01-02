import { Navlinks } from '@/data';
import Link from 'next/link';
import NavWrapper from './navbar-wrapper';
import MobileMenu from './mobile-navbar';
import NavItem from './active-link-item';

export default function Navbar() {
    return (
        <NavWrapper>
            <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center">

                {/* Logo Section */}
                <Link href="/" className="relative group">
                    <div className="text-2xl md:text-3xl font-black tracking-tighter text-white flex items-center gap-2">
                        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">NextGen</span>
                        <span className="text-white">ICT</span>
                        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    </div>
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full" />
                </Link>

                {/* Desktop Menu - Static rendering from data */}
                <div className="hidden lg:flex items-center gap-2">
                    {Navlinks.map((link) => (
                        <NavItem key={link.href} href={link.href} name={link.name} />
                    ))}

                    <Link
                        href="https://forms.gle/RZjBZrQi1gV7iahY7"
                        target="_blank"
                        className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-full text-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all active:scale-95"
                    >
                        ভর্তি ফরম
                    </Link>
                </div>

                {/* Mobile Menu Component (Client Side) */}
                <MobileMenu Navlinks={Navlinks} />
            </div>
        </NavWrapper>
    );
}