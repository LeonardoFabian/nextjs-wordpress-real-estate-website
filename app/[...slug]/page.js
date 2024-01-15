import { BlockRenderer } from "components/BlockRenderer";
import { getPage } from "utils/getPage";
import { getSeo } from "utils/getSeo";
import {notFound} from "next/navigation";

export default async function Page({params}) {

    const data = await getPage(params.slug.join("/"));

    console.log({data});

    if(!data) {
        notFound();
    }

    return <BlockRenderer blocks={data} />;
}

export async function generateMetadata({params}) {
    const seo = await getSeo(params.slug.join("/"));
    return {
        title: seo?.title || "",
        description: seo?.metaDesc || "",
    };
}