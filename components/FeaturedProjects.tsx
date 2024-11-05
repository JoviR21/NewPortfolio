import Image from "next/image";
import Link from "next/link";

export default function FeaturedProjects() {

    return (
        <section className="feature-project">
            <div className="container px-6 py-10 mx-auto">
                <h2 className="text-2xl text-center lg:text-start font-regular font-secondary text-white capitalize lg:text-3xl">Projects</h2>
                <h1 className="text-4xl text-center lg:text-start font-semibold font-secondary mt-2 text-white">
                    Recents Projects
                </h1>

                <div className="grid grid-cols-1 gap-6 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-2">
                    <div className="border-stand border-2 rounded-xl transition-all ease-linear hover:border-accent hover:shadow-[0px_0px_4px_6px_#1d566d] p-3 h-full">
                        <Image
                            src="/portfolio-1.avif"
                            alt="Thumbnails Project"
                            width={800}
                            height={800}
                            className="w-full object-cover rounded-lg h-96"
                        />
                        <h2 className="mt-4 text-2xl tracking-wider font-primary text-white font-semibold">Autobikes.ID</h2>
                        <p className="mt-3 mb-auto text-lg text-white font-primary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore perspiciatis ipsum consequatur necessitatibus magni quas nisi porro tenetur. Commodi a eveniet aliquid possimus?</p>
                        <div className="flex flex-wrap mt-6 gap-2">
                            <div className="badge badge-lg badge-outline font-secondary font-semibold">Next Js</div>
                            <div className="badge badge-lg badge-outline font-secondary font-semibold">Typescript</div>
                            <div className="badge badge-lg badge-outline font-secondary font-semibold">Tailwind CSS</div>
                            <div className="badge badge-lg badge-outline font-secondary font-semibold">Daisy UI</div>
                            <div className="badge badge-lg badge-outline font-secondary font-semibold">Contentful</div>
                        </div>
                        <div className="border-b-4 rounded-sm border-accent mt-3"></div>
                        <button className="mt-5 mb-2 border-2 border-accent rounded-lg w-full py-1 font-secondary font-medium text-white hover:bg-accent hover:-translate-y-1 transition-all ease-in-out">Project Details</button>
                    </div>
                    <div className="border-stand border-2 rounded-xl transition-all ease-linear hover:border-accent hover:shadow-[0px_0px_4px_6px_#1d566d] p-3 h-full">
                        <Image
                            src="/portfolio-1.avif"
                            alt="Thumbnails Project"
                            width={800}
                            height={800}
                            className="w-full object-cover rounded-lg h-96"
                        />
                        <h2 className="mt-4 text-2xl tracking-wider font-primary text-white font-semibold">Autobikes.ID</h2>
                        <p className="mt-3 mb-auto text-lg text-white font-primary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempore perspiciatis ipsum consequatur necessitatibus magni quas nisi porro tenetur. Commodi a eveniet aliquid possimus?</p>
                        <div className="flex flex-wrap mt-6 gap-2">
                            <div className="badge badge-lg badge-outline font-secondary font-semibold">Next Js</div>
                            <div className="badge badge-lg badge-outline font-secondary font-semibold">Typescript</div>
                            <div className="badge badge-lg badge-outline font-secondary font-semibold">Tailwind CSS</div>
                            <div className="badge badge-lg badge-outline font-secondary font-semibold">Daisy UI</div>
                            <div className="badge badge-lg badge-outline font-secondary font-semibold">Contentful</div>
                        </div>
                        <div className="border-b-4 rounded-sm border-accent mt-3"></div>
                        <button className="mt-5 mb-2 border-2 border-accent rounded-lg w-full py-1 font-secondary font-medium text-white hover:bg-accent hover:-translate-y-1 transition-all ease-in-out">Project Details</button>
                    </div>
                </div>
            </div>
        </section>
    )
}