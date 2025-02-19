"use client"
export const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Properties", href: "/properties" },
    { name: "About", href: "/about" },
]

export const imgLoader = ({ src, width, quality }: { src: string, width: number, quality?: number }) => `${src}?w=${width}&q=${quality || 75}`


export const footerNavigation = {
    services: [
        { name: "Maintenance Contracts", href: "/services#maintenance" },
        { name: "Planning and Design", href: "/services/planning and design" },
        { name: "Construction Services", href: "/services/construction services" },
        { name: "Interior Solutions", href: "/services/interior solutions" },
        { name: "Renovation & Remodeling", href: "/services/renovation & remodeling" },
    ],
    properties: [
        { name: "Residential Properties", href: "/properties" },
        { name: "Commercial Properties", href: "/properties" },
        { name: "Industrial Properties", href: "/properties" },
    ],
    legals: [
        { name: "Terms of Service", href: "https://docs.google.com/document/d/e/2PACX-1vSM1HbylMnlDx_xcDRx7qC5yui2Dw3zC2hPMnkl8on7sVDCV17SXHCFMpCrenccAiUT6mQCKcdv9hka/pub" },
        { name: "Privacy Policy", href: "https://docs.google.com/document/d/e/2PACX-1vR9iaLnYhKATOLnNyREKE_TER60o2-TMu14efif_6QEIgpclwqcL0Wi64OEele0fkH-2-Gbng94BFD4/pub" },
        { name: "License", href: "/license" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        // { name: "Our Process", href: "/about#process" },
        // { name: "Sustainability", href: "/about#sustainability" },
        { name: "Contact Us", href: "/contact" },
        { name: "Intern With Us", href: "https://forms.gle/au6P4oBjpR6Zswq17", download: true },
        { name: "Career Options", href: "https://forms.gle/rvW3tUsGgnY56HTY8", download: true },
        { name: "Customer Support", href: "tel:+919826258659" },
    ]
}