import Link from "next/link"

export default function Hero() {

    return (
        <section className="hero w-full h-full min-h-screen lg:-my-36">
            <div className="hero-content text-center">
                <div className="body-hero">
                    <h1 className="text-7xl lg:text-8xl font-semibold font-primary text-white">Front End Developer</h1>
                    <h2 className="text-2xl lg:text-3xl font-primary text-white py-6">Hey! I&apos;m <span className="text-accent">Jovi</span>, a <span className="text-accent">front-end</span> web developer</h2>
                    <Link href="/about" className="text-lg font-semibold font-secondary text-white border-accent border-2 rounded-lg px-5 py-1 transition-all ease-linear hover:shadow-[0px_0px_4px_6px_#1d566d]">About Me</Link>
                </div>
            </div>
        </section>
    )
}