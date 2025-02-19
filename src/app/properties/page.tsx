import Hero from "../../components/Hero"
import { Button } from "@/components/ui/button"
import PropertyCard, { Benefits } from "@/components/PropertyCard"
import Link from "next/link"
import { Teko } from "next/font/google"
const teko = Teko({
  weight: ["700"],
  subsets: ["latin"]
})


export default function Properties() {
  return (
    <div>
      <Hero
        title="Property Rental and Sales"
        subtitle="Explore our range of residential, commercial, and industrial properties"
      />

      {/* Property Types */}
      <section className="py-3">
        <div className="container mx-auto px-4 shadow-md py-16">
          <div className="flex flex-col gap-16">
            <PropertyCard />  
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={"text-3xl font-bold mb-4 text-orange-500 " + teko.className}>Why Choose Us for Property Services?</h2>
            <p className="text-muted-foreground">We make property hunting and transactions smooth and hassle-free</p>
          </div>
           <Benefits />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 md:w-fit md:px-24 md:mx-auto bg-orange-500 text-white rounded-3xl shadow-xl overflow-hidden">
  {/* Decorative Background Gradient */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.2),_transparent)] opacity-20"></div>

  <div className="container mx-auto px-6">
    <div className="max-w-3xl mx-auto text-center bg-white/20 backdrop-blur-md rounded-xl p-10 shadow-lg border border-white/10">
      <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">
        Ready to Find Your Perfect Property?
      </h2>
      <p className="mb-6 text-lg text-gray-100">
        Browse our listings or get in touch with our property experts today.
      </p>

      {/* Call to Action Button */}
      <Button
        asChild
        size="lg"
        variant="outline"
        className="bg-white text-black font-semibold px-6 py-3 rounded-lg transition duration-300 hover:bg-black hover:text-white shadow-md hover:shadow-lg"
      >
              <Link href="/contact/property-form">Contact Our Experts</Link>
      </Button>
    </div>
  </div>
</section>

    </div>
  )
}

