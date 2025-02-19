import Hero from "../../components/Hero";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { aboutProcess, aboutValues } from "@/utils/about";


export default function About() {
  return (
    <div>
      <Hero
        title="About Us"
        subtitle="Building excellence through innovation and dedication"
      />
      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2
              className={
                "text-3xl font-bold mb-4 text-orange-500 text-center font-serif lines"
              }
            >
              Our Story
            </h2>
            <div className="flex flex-col gap-4 text-muted prose-lg dark:prose-invert mx-auto">
              <p>
                At <b>ViZack Enterprises</b>, we don&apos;t just build
                structures—we bring visions to life. Our approach goes beyond
                bricks and mortar; we craft experiences, shape environments, and
                redefine spaces with creativity and precision.
              </p>
              <p>
                What sets us apart? It&apos;s not just experience—it&apos;s the
                art of blending expertise with innovation. Our team doesn&apos;t
                follow trends; we create them, ensuring that every project is
                infused with a mix of charm, creativity, and functionality.
                Whether it&apos;s a dream home, a commercial space, or a
                custom-designed masterpiece, we shape ideas into reality with
                passion and dedication.
              </p>
              <p>
                We are not different—we are <b>absolutely different</b>. Our
                seasoned professionals bring years of experience, delivering
                high-quality craftsmanship and innovative solutions tailored to
                every unique vision. From concept to completion, we ensure
                meticulous planning, flawless execution, and unparalleled
                excellence.
              </p>
              <p>
                At <b>ViZack Enterprises</b>, we believe in building more than
                just spaces—we build relationships, trust, and a legacy of
                quality. Our commitment to customer satisfaction, cutting-edge
                design, and sustainable solutions makes us the ideal choice for
                those who seek excellence.
              </p>
              <p className="text-lg italic">
                This vision and philosophy are deeply inspired by and blessed by{" "}
                <b>Shri Rajesh Jain Ji</b>,{" "}
                <b>Director of Sakshi Construction</b>. As his family, we are
                committed to upholding his name and legacy, carrying forward his
                dedication to excellence and innovation in the construction
                industry.
              </p>
              <p>
                "<b>Your Vision, Our Construction</b>"—if you can think it, we
                can build it. At ViZack Enterprises, we transform possibilities
                into landmarks. Let&apos;s build the future together.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-24 ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 ">
            <h2
              className={
                "text-3xl font-bold mb-4 text-orange-500 font-serif lines"
              }
            >
              Our Values
            </h2>
            <p className="text-gray-800">
              The principles that guide our work and relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutValues.map((value, index) => (
              <Card
                className="bg-gradient-to-tl from-[#e3e4e1] hover:from-white hover:to-white to-white shadow-lg md:hover:scale-105 transition-all shadow-black/25"
                key={index}
              >
                <CardHeader>
                  <value.icon className="w-12 h-12 mb-4 text-orange-500" />
                  <CardTitle className="text-orange-500">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-black">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2
              className={
                "text-3xl font-bold mb-4 text-orange-500 font-serif lines"
              }
            >
              Our Process
            </h2>
            <p className="text-muted-foreground">
              How we bring your vision to life
            </p>
          </div>
          <div className="grid gap-8">
            {aboutProcess.map((step, index) => (
              <Card
                key={index}
                className="bg-gradient-to-tl from-[#e3e4e1] hover:from-white hover:to-white to-white shadow-lg md:hover:scale-105 transition-all shadow-black/25 text-muted"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <CardTitle>{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
