import { Home, Building, Factory } from "lucide-react";

export const propertyTypes: { icon: any; title: string; description: string; features: string[] }[] = [
    {
        icon: Home,
        title: "Residential Properties",
        description: "Find your perfect home from our selection of apartments, villas, and independent houses.",
        features: ["Apartments", "Villas", "Independent houses", "Penthouses", "Studio apartments"],
    },
    {
        icon: Building,
        title: "Commercial Properties",
        description: "Premium commercial spaces for your business needs.",
        features: ["Office spaces", "Retail shops", "Warehouses", "Shopping complexes", "Restaurant spaces"],
    },
    {
        icon: Factory,
        title: "Industrial Properties",
        description: "Suitable industrial spaces and land for your manufacturing needs.",
        features: ["Factories", "Manufacturing units", "Industrial land", "Storage facilities", "Industrial sheds"],
    },
]

export const benefits: { title: string; description: string }[] = [
    {
        title: "Verified Listings",
        description: "All properties are thoroughly vetted for authenticity and quality.",
    },
    {
        title: "Expert Guidance",
        description: "Our team helps you find the perfect property based on your requirements and budget.",
    },
    {
        title: "Flexible Options",
        description: "From short-term rentals to permanent purchases, we offer flexible solutions.",
    },
    {
        title: "Complete Documentation",
        description: "We handle all the paperwork and legal documentation for a hassle-free experience.",
    },
]