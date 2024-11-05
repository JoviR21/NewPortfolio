import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { TypeArticleSkeleton } from "@/src/contentful/types";

import { FaArrowLeftLong } from "react-icons/fa6";

import Image from "next/image";
import Link from "next/link";

async function getCollection(slug: string) {
    try {
        const client = createClient({
            space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
            accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
        });
        const response = await client.getEntries<TypeArticleSkeleton>({
            content_type: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_ARTICLE as "article",
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
        title: collection?.title,
        description: `${collection?.description}`,
    };
}

export async function generateStaticParams() {
    try {
        const client = createClient({
            space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
            accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
        });
        const response = await client.getEntries<TypeArticleSkeleton>({
            content_type: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_ARTICLE as "article",
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
    const title = collection?.title;
    const category = collection?.tags;
    const date = collection?.date;
    const mainContent = collection?.content;

    const option = {
        renderNode: {
            [BLOCKS.HEADING_1]: (_: unknown, children: React.ReactNode) => {
                return <h1 className="text-4xl font-bold mb-2">{children}</h1>;
            },
            [BLOCKS.HEADING_2]: (_: unknown, children: React.ReactNode) => {
                return <h2 className="text-3xl font-bold mb-2">{children}</h2>;
            },
            [BLOCKS.HEADING_3]: (_: unknown, children: React.ReactNode) => {
                return <h3 className="text-2xl font-bold mb-2">{children}</h3>;
            },
            [BLOCKS.HEADING_4]: (_: unknown, children: React.ReactNode) => {
                return <h4 className="text-xl font-bold mb-2">{children}</h4>;
            },
            [BLOCKS.HEADING_5]: (_: unknown, children: React.ReactNode) => {
                return <h5 className="text-lg font-bold mb-2">{children}</h5>;
            },
            [BLOCKS.HEADING_6]: (_: unknown, children: React.ReactNode) => {
                return <h6 className="text-md font-bold mb-2">{children}</h6>;
            },
            [BLOCKS.PARAGRAPH]: (_: unknown, children: React.ReactNode) => {
                return <p className="mb-8">{children}</p>;
            },
            [BLOCKS.OL_LIST]: (_: unknown, children: React.ReactNode) => {
                return <ol className="list-decimal list-inside">{children}</ol>;
            },
            [BLOCKS.UL_LIST]: (_: unknown, children: React.ReactNode) => {
                return <ul className="list-disc list-inside">{children}</ul>;
            },
        }
    }


    return (
        <main className="container min-h-screen bg-background mx-auto px-7 md:px-20">
            <Link href="/articles" className="flex justify-start text-lg font-secondary font-regular transition-transform ease-linear hover:translate-x-3 hover:text-white"><FaArrowLeftLong className="my-auto me-2" />Back to all artices</Link>
            <div className="banner h-64 lg:h-[35rem] flex justify-center my-7">
                <Image
                    src={`https:${headerContent.fields.file.url}`}
                    width={2080}
                    height={2080}
                    className="object-cover object-center w-full rounded-lg"
                    alt={title as string}
                    loading="lazy"
                />
            </div>
            <div className="title">
                <h1 className="text-3xl lg:text-5xl font-secondary font-semibold text-white">{title}</h1>
            </div>
            <div className="info flex mt-5 justify-between">
                <span className="text-accent text-xl lg:text-3xl font-primary font-semibold">{category}</span>
                <span className="text-white text-xl lg:text-3xl font-medium">{date}</span>
            </div>
            <div className="content mt-7 mb-3">
                <div className="text-white text-xl font-secondary">{documentToReactComponents(mainContent!, option)}</div>
            </div>
        </main>
    )
}
