"use client";
import { useParams } from "next/navigation";
import PropertyForm from "../components/propertyForm";
import ServiceForm from "../components/serviceForm";

export default function ContactForm() {
    const url = useParams().contact as string;

    return (
        <>
            {url === "property-form" ? <PropertyForm /> : <ServiceForm />}
        </>
    )

}