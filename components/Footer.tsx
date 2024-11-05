import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Link from "next/link";

export default function Footer() {

    return (
        <footer className="container mx-auto md:px-20">
            <div className="mt-10 mb-10 sm:flex sm:items-center sm:justify-between lg:mt-14">
                <ul className="flex flex-wrap justify-center font-semibold font-secondary text-lg lg:justify-end">
                    <li>
                        <a href="#" className="text-white transition">Copyright © 2024 <span className="hover:text-accent">Jovi Rachman</span></a>
                    </li>
                </ul>

                <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
                    <li>
                        <a href="https://www.instagram.com/jovi_2106/" rel="noreferrer">
                            <span className="sr-only">Instagram</span>
                            <FaInstagram className="bg-background w-7 h-7 p-1 text-white border-2 border-accent rounded-md hover:text-accent transition ease-in" />
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/JoviR21" rel="noreferrer">
                            <span className="sr-only">GitHub</span>
                            <FaGithub className="bg-background w-7 h-7 p-1 text-white border-2 border-accent rounded-md hover:text-accent transition ease-in" />
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/jovi-rachman-04b089245/" rel="noreferrer">
                            <span className="sr-only">LinkedIn</span>
                            <FaLinkedin className="bg-background w-7 h-7 p-1 text-white border-2 border-accent rounded-md hover:text-accent transition ease-in" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}