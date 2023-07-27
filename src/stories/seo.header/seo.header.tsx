import { MetaTypes } from "@/entities/meta.types";
import { useLocale } from "@/hooks/use.locale";
import Head from "next/head";
import { useRouter } from "next/router";

export default function SeoHeader({
    title,
    description,
    ogType,
    imgUrl,
}: MetaTypes) {
    const { lo } = useLocale();
    const router = useRouter();
    const siteUrl = `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}`;
    const Url = `${siteUrl}${router.asPath}`;
    const siteTitle = ``;

    return (
        <Head>
            <meta name="viewport" content={"width=device-width, initial-scale=1"} />
            <title>{`${title} | ${lo.APP_TITLE}`}</title>
            <link href={Url} rel="canonical" />
            <meta name="twitter:card" content={"summary_large_image"} />
            <meta property="og:image" content={imgUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:url" content={Url} />
            <meta name="description" content={description} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={ogType} />
            <link rel="icon" type="image/png" href={"/logo.png"} />
        </Head>
    );
};

