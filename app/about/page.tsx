import { FaCircle } from "react-icons/fa";

import Image from "next/image";

export default function About() {

    return (
        <main className="container bg-background mx-auto px-7 md:px-20">
            <div className="grid grid-cols-1 gap-6 mt-8 xl:mt-12 xl:gap-18 lg:grid-cols-2">
                {/* Information */}
                <div className="information flex flex-col gap-7">
                    {/* Profile */}
                    <h1 className="font-primary font-semibold text-white text-5xl lg:text-7xl">
                        A short introduction about <span className="text-accent">me</span>
                    </h1>
                    <button className="bg-transparent flex max-w-64 items-center justify-center px-4 py-1 font-medium tracking-wide text-white capitalize transition ease-linear transform rounded-lg border-2 border-accent hover:shadow-[0px_0px_15px_5px_#55c7e3]">
                        <FaCircle className="w-2 h-2 text-accent" /><span className="mx-2">Looking for job</span>
                    </button>
                    {/* Profile */}
                    
                    {/* Description */}
                    <div  className="font-secondary text-white text-2xl">
                        <p>
                            Hello! I&apos;m <span className="text-accent">Jovi Rachman</span>, a web developer with a primary focus on front-end development.
                        </p>
                        <p className="mt-4">
                            Despite having a background in Multimedia Vocational School, I have honed my skills in building engaging web interfaces through various projects, internships, and bootcamps. 
                        </p>
                        <p className="mt-4">
                            You can visit my projects page to see my full portfolio.
                        </p>
                    </div>
                    {/* Description */}

                    {/* Educations & Experience */}
                    <div className="education-experience">
                        <h2 className="font-secondary font-semibold text-accent text-3xl">
                            Education <span className="text-white">&</span> Experience
                        </h2>
                        <ul className="grid grid-cols-1 gap-6 mt-1 md:grid-cols-2">
                            <li className="font-primary text-white">
                                <h4 className="level font-semibold text-xl">Vocational High School</h4>
                                <h5 className="name font-semibold text-lg">Kanaan Jakarta</h5>
                                <span className="date text-lg">2021 - 2024</span>
                            </li>
                            <li className="font-primary text-white">
                                <h4 className="level font-semibold text-xl">Bootcamp FS Web Developer</h4>
                                <h5 className="name font-semibold text-lg">Purwadhika Jakarta</h5>
                                <span className="date text-lg">3 Months</span>
                            </li>
                            <li className="font-primary text-white">
                                <h4 className="level font-semibold text-xl">Internship</h4>
                                <h5 className="name font-semibold text-lg">PT. Dwi Tunggal Putra</h5>
                                <span className="date text-lg">5 Months</span>
                            </li>
                        </ul>
                    </div>
                    {/* Educations & Experience */}
                </div>
                {/* Information */}
                
                {/* Image */}
                <figure className="ps-0 lg:ps-48">
                    <Image 
                        src="/Profile.JPG"
                        width={1000}
                        height={1000}
                        alt="Profile"
                        className="w-full max-h-full rounded-xl border-2 border-accent object-cover"
                        loading="lazy"
                    />
                </figure>
                {/* Image */}
            </div>
        </main>
    )
}