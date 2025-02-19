import { Metadata } from "next";

export default function getMetadata(): Metadata { 
    return {
        title: "ViZack Enterprises",
        description:
            "We are a full-service construction company dedicated to transforming your vision into reality.Whether you need a small renovation, a large-scale commercial project, or anything in between, we provide end-to-end solutions for all your construction needs, including both interior and exterior services.",
        keywords: [
            "construction company",
            "home renovation",
            "commercial construction",
            "interior design",
            "exterior design",
            "building contractors",
            "custom construction",
            "architecture services",
            "structural engineering",
            "civil construction",
            "modern home design",
            "construction solutions",
            "real estate development",
            "general contractor",
            "ViZack Enterprises"
        ],
        authors: [{ name: "Gajender", url: "https://twitter.com/Averrraagggeeee" }],
        applicationName: "ViZack Enterprises",
        creator: "Gajender",
        icons: {
            icon: "/logo/circle.png",
            apple: "/logo/circle.png",
            shortcut: "/logo/circle.png",
        },
        openGraph: {
            title: "ViZack Enterprises",
            description:
                "We are a full-service construction company dedicated to transforming your vision into reality.Whether you need a small renovation, a large-scale commercial project, or anything in between, we provide end-to-end solutions for all your construction needs, including both interior and exterior services.",
            url: "https://www.vizackenterprises.com",
            siteName: "ViZack Enterprises",
            images: [
                {
                    url: "/images/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "ViZack Enterprises",
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            site: "https://www.vizackenterprises.com",
            creator: "@Averrraagggeeee",
            title: "ViZack Enterprises",
            description:
                "We are a full-service construction company dedicated to transforming your vision into reality.Whether you need a small renovation, a large-scale commercial project, or anything in between, we provide end-to-end solutions for all your construction needs, including both interior and exterior services.",
            images: ["/images/og-image.png"],
        },
    };

}

