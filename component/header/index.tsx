import Navbar from './navbar'

export default function Header() {
  return (
    <header className="w-full py-7">
      <div className="container flex justify-between items-center mx-auto px-4">
        <h1 className="text-2xl font-siliguri font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">
          NextGen ICT Care
        </h1>
        <Navbar />
      </div>
    </header>
  )
}
