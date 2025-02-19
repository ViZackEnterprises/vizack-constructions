import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { imgLoader } from "@/utils/constants";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  features: Record<string, Record<string, string>>;
  image: string;
  className?: string;
}

export default function FeatureCard({ features, image, className }: FeatureCardProps) {
  return (
    <Card className={cn("bg-gradient-to-tl from-[#e3e4e1] hover:from-white hover:to-white to-white shadow-lg md:hover:scale-105 transition-all shadow-black/25 rounded-2xl ", className)}>
      <CardHeader className="flex flex-col items-center">
        <Image
          src={image}
          width={10}
          height={10}
          alt={image}
          loader={imgLoader}
          className="object-contain w-1/3 mix-blend-darken "
        />
        <CardTitle className="text-orange-500 uppercase tracking-wider font-bold">
          Features & Benefits
        </CardTitle>
      </CardHeader>
      <CardContent className="flex gap-4">
        <ul className="space-y-2 text-black">
          {Object.entries(features).map(([key, value], index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-orange-500">•</span>
              <span className="flex flex-col font-bold tracking-wider uppercase">
                {key}
                <span className="text-gray-500 font-normal tracking-normal lowercase first-letter:uppercase">
                  {value.text}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
