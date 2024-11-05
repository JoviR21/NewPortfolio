import { FaBars } from "react-icons/fa6";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="container mx-auto md:px-20 z-20">
            <nav className="navbar">
                {/* Desktop Views */}
                <div className="navbar-start">
                    <div className="drawer lg:hidden z-20">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer" className="btn btn-ghost text-xl drawer-button"><FaBars /></label>
                        </div>
                        {/* Sidebar */}
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-transparant backdrop-blur-lg font-secondary text-white h-screen w-full justify-center gap-5">
                                <Link href="/" className="text-center mx-auto text-2xl p-2 rounded-2xl transition-all ease-in hover:text-accent">Home</Link>
                                <Link href="/about" className="text-center mx-auto text-2xl p-2 rounded-2xl transition-all ease-in hover:text-accent">About</Link>
                                <Link href="/projects" className="text-center mx-auto text-2xl p-2 rounded-2xl transition-all ease-in hover:text-accent">Projects</Link>
                                <Link href="/articles" className="text-center mx-auto text-2xl p-2 rounded-2xl transition-all ease-in hover:text-accent">Articles</Link>
                                <Link href="/contact" className="text-center mx-auto text-2xl p-2 rounded-2xl transition-all ease-in hover:text-accent">Contact</Link>
                                <label htmlFor="my-drawer" className="btn btn-ghost text-center mx-auto text-2xl px-8 my-1 p-2 rounded-2xl transition-all">Back to page</label>
                            </ul>
                        </div>
                        {/* Sidebar */}
                    </div>
                    <a className="text-xl font-primary font-medium text-white hidden lg:block">Jovi <span className="text-accent">Rachman</span></a>
                </div>
                <div className="navbar-center">
                    <ul className="hidden lg:flex menu menu-horizontal font-secondary text-white px-1 gap-12 font-lato text-base">
                        <Link href="/" className="hover:underline hover:underline-offset-4 hover:rounded-sm hover:text-accent transition-all">Home</Link>
                        <Link href="/about" className="hover:underline hover:underline-offset-4 hover:rounded-sm hover:text-accent transition-all">About</Link>
                        <Link href="/projects" className="hover:underline hover:underline-offset-4 hover:rounded-sm hover:text-accent transition-all">Projects</Link>
                        <Link href="/articles" className="hover:underline hover:underline-offset-4 hover:rounded-sm hover:text-accent transition-all">Articles</Link>
                        <Link href="/contact" className="hover:underline hover:underline-offset-4 hover:rounded-sm hover:text-accent transition-all">Contact</Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="CV Terbaru Light.pdf" className="btn btn-ghost font-secondary text-white hidden lg:flex" download>Download CV</a>
                    <div className="dropdown dropdown-end dropdown-hover lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost font-primary text-white">Jovi<span className="text-accent">Rachman</span></div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 font-secondary text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <a href="CV Terbaru Light.pdf" className="mx-auto" download>Download CV</a>
                        </ul>
                    </div>
                </div>
                {/* Desktop Views */}
            </nav>
        </header>
    )
}
