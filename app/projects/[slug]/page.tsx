import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { TypeProjectSkeleton } from "@/src/contentful/types";

import { FaArrowLeftLong } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

async function getCollection(slug: string) {
    try {
        const client = createClient({
            space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
            accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
        });
        const response = await client.getEntries<TypeProjectSkeleton>({
            content_type: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_PROJECT as "project",
            "fields.slug": slug,
        });

        return response.items[0].fields;
    } catch (error) {
        console.log(error);
    }
}

export async function generateMetadata({
    params,
}: {
    params: { slug: string };
}) {
    const collection = await getCollection(params.slug);

    return {
        title: `Jovi Rachman | Project - ${collection?.projectName}`,
        description: `${collection?.projectDescription}`,
    };
}

export async function generateStaticParams() {
    try {
        const client = createClient({
            space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
            accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
        });
        const response = await client.getEntries<TypeProjectSkeleton>({
            content_type: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_PROJECT as "project",
        });

        return (
            response.items.map((item) => {
                slug: item.fields.slug;
            }) || []
        )
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default async function CollectionSlug({
    params,
}: {
    params: { slug: string };
}) {
    const collection = await getCollection(params.slug);
    const headerContent = collection?.headerContent as { fields: { file: { url: string } } };
    const title = collection?.projectName;
    const description = collection?.projectDescription;
    const date = (collection as any)?.date as ReactNode;
    const techStack = (collection as any)?.techStackFull as ReactNode;
    const projectOverview = (collection as any)?.projectOverview as ReactNode;
    const task = (collection as any)?.myTask as ReactNode;

    const option = {
        renderNode: {
            [BLOCKS.HEADING_1]: (_: unknown, children: React.ReactNode) => {
                return <h1 className="text-4xl font-bold mb-6">{children}</h1>;
            },
            [BLOCKS.HEADING_2]: (_: unknown, children: React.ReactNode) => {
                return <h2 className="text-3xl font-bold mb-4">{children}</h2>;
            },
            [BLOCKS.HEADING_3]: (_: unknown, children: React.ReactNode) => {
                return <h3 className="text-2xl font-bold mb-6">{children}</h3>;
            },
            [BLOCKS.HEADING_4]: (_: unknown, children: React.ReactNode) => {
                return <h4 className="text-xl font-bold mb-4">{children}</h4>;
            },
            [BLOCKS.HEADING_5]: (_: unknown, children: React.ReactNode) => {
                return <h5 className="text-lg font-bold mb-6">{children}</h5>;
            },
            [BLOCKS.HEADING_6]: (_: unknown, children: React.ReactNode) => {
                return <h6 className="text-md font-bold mb-4">{children}</h6>;
            },
            [BLOCKS.PARAGRAPH]: (_: unknown, children: React.ReactNode) => {
                return <p className="mb-8">{children}</p>;
            },
        }
    }

    return (
        <main className="container min-h-screen bg-background mx-auto px-7 md:px-20">
            <Link href="/projects" className="flex justify-start text-lg font-secondary font-regular transition-transform ease-linear hover:translate-x-3 hover:text-white"><FaArrowLeftLong className="my-auto me-2" />Back to all projects</Link>
            <div className="banner h-64 lg:h-[45rem] flex justify-center my-7">
                <Image
                    src={`https:${headerContent.fields.file.url}`}
                    width={2080}
                    height={2080}
                    className="object-cover object-top w-full rounded-lg"
                    alt={title as string}
                    loading="lazy"
                />
            </div>
            <div className="about-project">
                <div className="title">
                    <h1 className="text-3xl lg:text-5xl font-secondary font-semibold text-white mb-4">{title}</h1>
                    <h2 className="text-xl lg:text-3xl font-secondary font-medium text-white mb-1">{description}</h2>
                    <span className="date text-white text-lg lg:text-2xl font-medium opacity-80">{date}</span>
                </div>
                <div className="info flex mt-5 justify-between">
                    <div className="techstack flex flex-wrap mt-6 gap-2">
                        {(techStack! as any).map((tech: string, index: number) => (
                            <div key={index} className="badge badge-lg badge-outline font-secondary font-semibold">{tech}</div>
                        ))}
                    </div>
                </div>
                <div className="divider"></div>
                <div className="content mt-2 mb-3">
                    <div className="project-overview w-full mb-12">
                        <div className="border-l-8 border-accent px-7 py-2 font-secondary font-semibold text-2xl text-white mb-4">Project Overview</div>
                        <div className="text-xl font-secondary text-zinc-300">{documentToReactComponents(projectOverview as any, option)}</div>
                    </div>
                    <div className="my-task w-full mb-12">
                        <div className="border-l-8 border-accent px-7 py-2 font-secondary font-semibold text-2xl text-white mb-4">My Task</div>
                        <div className="text-xl font-secondary text-zinc-300">{documentToReactComponents(task as any, option)}</div>
                    </div>
                </div>
            </div>
        </main>
    )
}