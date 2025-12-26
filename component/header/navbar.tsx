import { Navlinks } from '@/data';
import Link from 'next/link';
import React from 'react'

export default function Navbar() {

  return (
      <div>
          {Navlinks.map((link) => (
              <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-lg font-siliguri transition-colors duration-300 hover:text-cyan-500 px-4 rounded-md"
              >
                  {link.name}
              </Link>
          ))}
      </div>
  )
}
