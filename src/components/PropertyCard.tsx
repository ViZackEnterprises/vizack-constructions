import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { propertyTypes, benefits } from "@/utils/property";
import Link from "next/link";

export default function PropertyCard() {
  return (
    <div className="grid gap-8">
      {propertyTypes.map((type, index) => (
        <div key={index} className="grid md:grid-cols-2 gap-8 items-start">
          <Card className="bg-gradient-to-tr border border-[#d3d3d3]  from-[#e4e3e1] hover:from-white hover:to-white to-white text-muted">
            <CardHeader>
              <type.icon className="w-12 h-12 mb-4 text-orange-500" />
              <CardTitle>{type.title}</CardTitle>
              <CardDescription>{type.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {type.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-orange-500">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-bl border border-[#d3d3d3]  from-[#e4e3e1] hover:from-white hover:to-white to-white text-muted">
            <CardHeader>
              <CardTitle>Available Options</CardTitle>
              <CardDescription>
                Choose from our selection of properties
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">For Rent</p>
                  <p className="text-muted-foreground">Short & long term</p>
                </div>
                <div>
                  <p className="font-semibold">For Sale</p>
                  <p className="text-muted-foreground">
                    Buy your dream property
                  </p>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-orange-500 text-orange-500-foreground hover:bg-orange-500/90"
              >
                <Link href="/contact/property-form">Enquire Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}



export function Benefits() {
  return (
    <div className="">
      {benefits.map((benefit, index) => (
        <Card key={index} className="bg-gradient-to-bl border border-[#d3d3d3] m-4 from-[#e4e3e1] hover:from-white hover:to-white to-white text-muted">
          <CardHeader>
            <CardTitle>{benefit.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{benefit.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}