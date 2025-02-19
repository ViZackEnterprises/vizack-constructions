import Hero from "../../components/Hero";
import Link from "next/link";
import ServiceCard from "../../components/ServiceCard";
import FeatureCard from "../../components/FeatureCard";
import { maintenance } from "@/utils/maintenance";
import { services } from "@/utils/services";
import { whyChooseMaintenance } from "@/utils/why-choose-maintenance";

export default function Services() {
  return (
    <div>

      {/* Our Services */}
      <section>
        <Hero
          title="Our Services"
          subtitle="At ViZack Enterprises, we bring creativity, skill, and dedication to every project. Our
  commitment to excellence ensures that every client receives the highest level of service.
  Contact us today, and let’s create something extraordinary together!"
        />

        <div className="py-24">
          <div className="container mx-auto px-4 py-8">
            <div className="grid gap-x-8 gap-y-16 items-start">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-2 md:grid-rows-1 gap-8 items-stretch justify-items-stretch"
                >
                  {index !== services.length - 1 && (
                    <>
                      <Link href={"/services/" + service.title.toLowerCase()} target="_blank" passHref>
                        <div className="h-full flex">
                          <ServiceCard {...service} className="h-full flex flex-col" />
                        </div>
                      </Link>
                      <Link href={"/services/" + service.title.toLowerCase()} target="_blank" passHref>
                        <div className="h-full flex">
                          <FeatureCard features={service.features} image={service.imageSrc} className="h-full flex flex-col" />
                        </div>
                      </Link>
                    </>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Maintenance Contracts */}
      <section id="maintenance" className="flex flex-col items-center">
        <Hero
          className=""
          title="Maintenance Contracts"
          subtitle="Simplify Your Property Management with Our Maintenance Contracts"
        />
        <p className="text-muted text-center w-[60%] mx-auto">
          Ensure your property stays in top-notch condition with our dedicated
          maintenance services. Ideal for cafes, restaurants, retail outlets,
          corporate offices, and more, our contracts are designed to provide
          peace of mind and hassle-free upkeep.
        </p>

        <div className="w-[80%] justify-items-center py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {maintenance.map((item, index) => (
            <div
              key={index}
              className=""
            >
                <ServiceCard {...item} button={false} />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Our Maintenance Contracts */}
      <section className="flex flex-col items-center">
        <Hero className="" title="Why Choose Our Maintenance Contracts?" />
        <p className="text-muted text-center w-[60%] mx-auto">
          Our maintenance contracts are designed to provide peace of mind and
          hassle-free upkeep for your property. Here are some reasons why you
          should choose us:
        </p>
        <div className="w-[80%] justify-items-center py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseMaintenance.map((item, index) => (
            <div
              key={index}
              className=""
            >
              <ServiceCard {...item} button={false} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
