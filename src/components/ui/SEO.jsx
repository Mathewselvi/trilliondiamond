import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, image, url }) {
    const defaultTitle = "Trillion Diamond | Custom Luxury Jewellery in Ernakulam";
    const defaultDescription = "Discover premium custom diamond jewellery and engagement rings at Trillion Diamond. BIS Gold & IGI Certified Natural and Lab-Grown diamonds.";
    const defaultImage = "https://trilliondiamond.com/images/rings/Trillion/Solitaire_ring_.WEBP";
    const siteUrl = "https://trilliondiamond.com";

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image || defaultImage,
        url: url ? `${siteUrl}${url}` : siteUrl,
    };

    return (
        <Helmet>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:type" content="website" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
        </Helmet>
    );
}
