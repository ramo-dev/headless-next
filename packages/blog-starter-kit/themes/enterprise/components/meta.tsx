import parse from 'html-react-parser';
import Head from 'next/head';
import { useAppContext } from './contexts/appContext';

export const Meta = () => {
    const { publication } = useAppContext();
    const { metaTags, favicon } = publication;

    const defaultFavicons = (
        <>
            <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/favicon/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
        </>
    );

    return (
        <Head>
            {favicon ? <link rel="icon" type="image/png" href="/favicon/favicon.ico" /> : defaultFavicons}
            <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
            <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
            <meta
                name="description"
                content="Annuar's Blog provides insights and tutorials on UI/UX design and fullstack development, crafted with precision and passion."
            />
            <meta
                name="keywords"
                content="Annuar Ndung'u, UI/UX design blog, fullstack development, web design, web development, AI integration, technical writing, Nairobi, Kenya"
            />
            <meta name="robots" content="index, follow" />
            <meta name="author" content="Annuar Ndung'u" />
            <meta property="og:title" content="Annuar's Blog - UI/UX Design and Fullstack Development" />
            <meta
                property="og:description"
                content="Discover insights and tutorials on UI/UX design and fullstack development from Annuar's Blog."
            />
            <meta property="og:image" content="https://blog.annuar.site/path-to-image.jpg" />
            <meta property="og:url" content="https://blog.annuar.site" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Annuar's Blog - UI/UX Design and Fullstack Development" />
            <meta
                name="twitter:description"
                content="Discover insights and tutorials on UI/UX design and fullstack development from Annuar's Blog."
            />
            <meta name="twitter:image" content="https://blog.annuar.site/path-to-image.jpg" />
            <meta name="twitter:site" content="@dfw_ramo" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: `
                        {
                          "@context": "https://schema.org",
                          "@type": "Blog",
                          "name": "Annuar's Blog",
                          "url": "https://blog.annuar.site",
                          "description": "Annuar's Blog provides insights and tutorials on UI/UX design and fullstack development, crafted with precision and passion.",
                          "author": {
                            "@type": "Person",
                            "name": "Annuar Ndung'u",
                            "url": "https://www.annuar.site",
                            "jobTitle": "UI/UX Designer and Fullstack Developer",
                            "address": {
                              "@type": "PostalAddress",
                              "addressLocality": "Nairobi",
                              "addressCountry": "Kenya"
                            },
                            "sameAs": [
                              "https://twitter.com/dfw_ramo",
                              "https://github.com/ramo-dev",
                              "https://www.linkedin.com/in/annuar-ndungu"
                            ]
                          }
                        }
                    `
                }}
            />
            {metaTags && parse(metaTags)}
        </Head>
    );
};
