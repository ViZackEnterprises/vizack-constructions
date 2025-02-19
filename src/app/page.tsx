"use client";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { AwesomeButton } from 'react-awesome-button'
// import useHover from "@/hooks/useHover";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ServiceCard from "../components/ServiceCard";
import { homeServices } from "@/utils/services";
import { Teko } from "next/font/google";
// import { RoughNotation } from "react-rough-notation";
import { imgLoader } from "@/utils/constants";
import Image from "next/image";
import { whyChooseUs } from "@/utils/why-choose-us";
import FloatButton from "@/components/FloatButton";
import Testimonials from "@/components/testomonial";

const kanit = Teko({
  weight: ["700"],
  subsets: ["latin"],
});

export default function Home() {
  // useHover();
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#EBE7E1] tracking-wider relative py-24 overflow-hidden hero-pattern">
        <div className="container mx-auto px-4">
          <div className=" max-w-4xl mx-auto text-center">
            <h1
              className={
                " mb-16 text-5xl tracking-tight text-gray-900 sm:mt-5 sm:leading-none lg:mt-6 lg:text-7xl xl:text-8xl " +
                kanit.className
              }
            >
              <p className="sm:block ">Welcome to</p>
              <span className="text-orange-600 mb-8 md:block">
                ViZack Enterprises <span className="text-black">&</span> <span className="text-orange-300">Constructions</span>
              </span>
              <p className="text-zinc-500 md:block mt-4">Masters of {""}</p>
              <span>
                <Typewriter
                  words={[
                    "Planning and Design",
                    "Structural Work",
                    "Construction Services",
                    "Interior Solutions",
                    "Exterior Solutions",
                    "Utilities and Installation",
                    "Renovation and Remodelling",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                ></Typewriter>
                <video
                  src="https://time54.co.uk/wp-content//uploads//2023//10//time45render.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full max-w-3xl mx-auto"
                >
                  Your browser does not support the video tag.
                </video>
              </span>
            </h1>
            <h1
              className={
                "text-3xl text-black md:text-4xl lg:text-5xl font-bold mb-6 " +
                kanit.className
              }
            >
              Your{" "}
              <span className="text-orange-600 ">

                One Stop
                
              </span>
              &nbsp;For All of Your Architectural Needs.
            </h1>
            <p className="text-xl text-quicksand text-black max-w-3xl mx-auto mb-8">
              We are a full-service construction company dedicated to
              transforming your vision into reality. Whether you need a small
              renovation, a large-scale commercial project, or anything in
              between, we provide end-to-end solutions for all your construction
              needs, including both interior and exterior services.
            </p>
            <p
              className={
                "text-xl text-black mb-8 bg-orange-500 max-w-3xl mx-auto rounded-lg px-4 py-4 " +
                kanit.className
              }
            >
              Your Trusted Partner for Comprehensive Construction Services
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-2 bg-[#EBE7E1]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className={"text-3xl text-orange-500 mb-4 font-serif lines"}>
              {/* <RoughNotation
                type="underline"
                animationDuration={300}
                show={true}
              > */}
                Our Services
              {/* </RoughNotation> */}
            </h2>
            <p className="text-black pt-4">
              Comprehensive construction and property solutions tailored to your
              needs
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((service, index) => (
              
              <Link
                key={index}
                href={index === homeServices.length - 1 ? "/services#maintenance"  : `/services/${service.title.toLowerCase()}`}
                target="_blank"
                passHref
              >
                  <ServiceCard
                    imageSrc={service.imageSrc}
                    title={service.title}
                    description={service.description}
                  />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 shd my-8 ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              className={
                "text-3xl font-bold mb-4 text-orange-500 font-serif lines "
              }
            >
              {/* <RoughNotation
              type = "underline"
              animationDuration = {300}
              show = {true}> */}
                Why Choose Us
                {/* </RoughNotation> */}
            </h2>
            <p className="text-black font-semibold pt-4">
              We deliver excellence through our core values and commitment to
              quality
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((value, index) => (
              <Card
                key={index}
                className="auto-hover flex flex-col items-center justify-between p-6 bg-gradient-to-tr from-[#e3e4e1] hover:from-white hover:to-white to-white shadow-lg rounded-2xl transition-transform md:hover:scale-105"
              >
                <CardHeader className="flex flex-col items-center">
                  <Image
                    src={value.imageSrc}
                    className="size-64 aspect-video object-contain mix-blend-darken mx-auto mb-4"
                    alt={value.title}
                    width={256}
                    height={256}
                    loader={imgLoader}                    
                  />
                  <CardTitle className="text-orange-500 font-bold">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <CardDescription className="text-gray-700 text-sm">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

          {/* Testimonial */}
      <section>

          <Testimonials />
      </section>
      {/* CTA Section */}
      <section className="relative mx-auto max-w-4xl py-24 px-6 bg-orange-500 text-white rounded-3xl  overflow-hidden">
  {/* Background Accent */}
  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.3),_transparent)]"></div>

  <div className="relative z-10 text-center max-w-3xl mx-auto bg-white/20 backdrop-blur-md rounded-xl p-10 shadow-lg border border-white/10">
    <h2 className="text-4xl font-bold text-white drop-shadow-md">
      Ready to Start Your Project?
    </h2>
    <p className="mt-4 text-lg text-gray-100">
      Contact us today for a consultation or to request a quote. Let’s build
      something extraordinary together!
    </p>



    {/* Call to Action Button */}
    <div className="mt-8">
      <Link

        href="/contact#contact"
        className="auto-hover bg-white text-black font-semibold px-6 py-3 rounded-lg transition duration-300 hover:bg-black  hover:text-white shadow-md hover:shadow-lg"
      >
        <AwesomeButton type="secondary" >Get in Touch</AwesomeButton>
      </Link>
    </div>
        </div>
        <FloatButton />
</section>


    </div>
  );
}
