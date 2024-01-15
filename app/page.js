import { BlockRenderer } from "components/BlockRenderer";
import { getPage } from "utils/getPage";
import {notFound} from 'next/navigation';
import { getSeo } from "utils/getSeo";

export default async function Home() {

    const data = await getPage("/");

    console.log({data});

    if(!data) {
        notFound();
    }

    return <BlockRenderer blocks={data} />;
}

export async function generateMetadata() {
    const seo = await getSeo("/");
    return {
        title: seo?.title || "",
        description: seo?.metaDesc || "",
    };
}