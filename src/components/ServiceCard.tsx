"use client"
import { Button } from "@/components/ui/button"
import HoverButton from "./HoverButton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { imgLoader } from "@/utils/constants"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
    imageSrc: string;
    title: string;
    description: string;
    button?: boolean;
    className?: string;
}

export default function ServiceCard({ imageSrc, title, description, button = true, className }: ServiceCardProps) {
    return (
        <Card className={cn("auto-hover bg-gradient-to-tr from-[#e3e4e1] hover:from-white hover:to-white to-white shadow-lg md:hover:scale-105 transition-all shadow-black/25 rounded-lg p-6 flex flex-col items-center text-center h-full",
            className
        )}>
            <CardHeader>
                <div className="flex justify-center w-full">
                    <div className="relative  mb-4"> {/* Increased size */}
                        <Image src={imageSrc} alt={title} width={250} height={250} loader={imgLoader} className="w-96 aspect-video object-contain mix-blend-darken" />
                    </div>
                </div>
                <CardTitle className="text-xl font-semibold text-orange-500">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <CardDescription className="text-gray-700 sm:text-base">{description}</CardDescription>
            </CardContent>
            {button && (
                <Button asChild size="lg" className="auto-hover hover:bg-secondary hover:text-secondary-foreground bg-white text-white transition-colors">
                    <HoverButton text="Know More" href="/services"></HoverButton>
                </Button>
            )}
        </Card>
    )
}
