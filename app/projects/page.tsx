"use client"

import { useEffect, useState } from "react";
import { createClient, Entry } from "contentful";
import { TypeProjectSkeleton } from "@/src/contentful/types";

import Image from "next/image";
import Link from "next/link";

export default function Projects() {

    const [collection, setCollection] = useState<
    Entry<TypeProjectSkeleton>[]
    >([])

    useEffect(() => {
        async function getData() {
            try {
                const client = createClient({
                    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
                    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
                });
                const response = await client.getEntries<TypeProjectSkeleton>({
                    content_type: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_PROJECT as "project" ,
                });

                setCollection(response.items)
            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, [])

    return (
        <main className="container bg-background mx-auto md:px-20">
            <section className="feature-project">
                <div className="container px-6 py-10 mx-auto">
                    <h2 className="text-2xl text-center lg:text-start font-regular font-secondary text-white capitalize lg:text-3xl">Projects</h2>
                    <h1 className="text-4xl text-center lg:text-start font-semibold font-secondary mt-2 text-white">
                        All the <span className="text-accent">projects</span> i have ever made
                    </h1>
                    <div className="grid grid-cols-1 gap-6 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                        {collection.map(item => {
                            const thumbnail = item.fields.thumbnail as {
                                fields: {
                                    file: {
                                        url: string;
                                        details: { image: { width: number; height: number } }
                                    };
                                };
                            };
                            
                            return <div className="w-full h-full border-stand border-2 rounded-xl transition-all ease-linear hover:border-accent hover:shadow-[0px_0px_4px_6px_#1d566d] p-3" key={item.sys.id}>
                                <Image
                                    src= {`https:${thumbnail.fields.file.url}`}
                                    width={800}
                                    height={800}
                                    className="w-full h-64 object-cover rounded-lg mb-2"
                                    alt={item.fields.projectName as string}
                                    loading="lazy"
                                />
                                <Link href={`/projects/${item.fields.slug}`} className="text-2xl tracking-wider font-primary text-white font-semibold">{item.fields.projectName as string}</Link>
                                <p className="mt-2 mb-auto text-lg text-white font-primary">{item.fields.projectDescription as string}</p>
                                <div className="techstack flex flex-wrap mt-6 gap-2">
                                    {item.fields.techStack.map((tech: string, index: number) => (
                                        <div key={index} className="badge badge-lg badge-outline font-secondary font-semibold">{tech}</div>
                                    ))}
                                </div>
                                <div className="border-b-4 rounded-sm border-accent mt-3"></div>
                                <Link href={`/projects/${item.fields.slug}`} className="flex justify-center mt-5 mb-2 border-2 border-accent rounded-lg w-full py-1 font-secondary font-medium text-white hover:bg-accent hover:-translate-y-1 transition-all ease-in-out">Project Details</Link>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}