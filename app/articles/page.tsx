"use client"

import { ReactNode, useEffect, useState } from "react";
import { createClient, Entry } from "contentful";
import { TypeArticleSkeleton } from "@/src/contentful/types";

import Image from "next/image";
import Link from "next/link";

export default function Articles() {

    const [collection, setCollection] = useState<
    Entry<TypeArticleSkeleton>[]
    >([])

    useEffect(() => {
        async function getData() {
            try {
                const client = createClient({
                    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
                    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
                });
                const response = await client.getEntries<TypeArticleSkeleton>({
                    content_type: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_ARTICLE as "article",
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
            <section className="Articles">
                <div className="container px-6 py-10 mx-auto">
                    <div className="grid grid-cols-2 items-center justify-between">
                        <h1 className="text-2xl font-primary font-semibold capitalize lg:text-3xl text-white">Articles</h1>
                    </div>
                    <p className="text-lg font-primary text-white mt-2">Articles about Experience, Tech, Games & Hobbies</p>

                    <hr className="my-5 border-accent" />

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {collection.map(item => {
                            const thumbnail = item.fields.thumbnail as {
                                fields: {
                                    file: {
                                        url: string;
                                        details: { image: { width: number; height: number } }
                                    };
                                };
                            };
                            
                            return <div className="article h-full" key={item.sys.id}>
                                <Image
                                    src={`https:${thumbnail.fields.file.url}`}
                                    width={1080}
                                    height={1080}
                                    className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                                    alt={item.fields.title as string}
                                    loading="lazy"
                                />

                                <div className="min-h-64 md:min-h-80 xl:min-h-64 mt-2 flex flex-col">
                                    <span className="text-accent font-primary font-semibold uppercase divider divider-start divider-info">{item.fields.tags as ReactNode}</span>
                                    <div className="flex flex-wrap">
                                        <Link href={`/articles/${item.fields.slug}`} className="mt-3 text-xl font-secondary font-semibold text-white transition-all ease-in-out hover:underline hover:underline-offset-2 hover:text-accent">
                                            {item.fields.title as string}
                                        </Link>
                                        <p className="mt-2 font-secondary text-gray-400">
                                            {item.fields.description as string}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap items-center justify-between mt-auto">
                                        <p className="text-lg font-medium text-gray-300">
                                            {item.fields.date as ReactNode}
                                        </p>

                                        <Link href={`/articles/${item.fields.slug}`} className="inline-block font-primary font-medium text-white transition ease-in hover:text-accent">Read more</Link>
                                    </div>

                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </main>
    )
}