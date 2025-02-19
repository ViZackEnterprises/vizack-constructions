"use client"
import { usePathname } from 'next/navigation'
import { services } from '@/utils/services'
import Link from 'next/link'
import { Kanit } from 'next/font/google'
import { ChevronRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { imgLoader } from '@/utils/constants'
import { Button } from '@/components/ui/button'
import { AwesomeButton } from 'react-awesome-button'

const kanit = Kanit({
    weight: ["400", "700"],
    subsets: ["latin"]
})

export default function Service() {
    const slug = usePathname().split("/")
    const service = slug[slug.length - 1].replaceAll("%20", " ")

    return (
        <main className='text-muted'>
            <div className="bg-orange-500 text-white txt flex items-center gap-2 py-2 px-4">
                <Link href="/services">Services</Link> 
                <ChevronRight size={16} />
                <Link href={"/services" + "/" + service.toLowerCase()} className='capitalize'>{service}</Link>
            </div>
            {
                services?.map((serv, index) => {
                    if (serv.title.toLowerCase() === service) {
                        return (
                            <>
                                <header key={index} className='px-4 py-8 flex flex-col items-center gap-10'>
                                    <h1 className={'text-3xl font-bold text-center ' + kanit.className}>{serv.title}</h1>

                                    <Image src={serv.imageSrc} alt={serv.title} width={550} height={550} loader={imgLoader} className="w-[35rem] aspect-video object-contain mix-blend-darken" />
                                    
                                    <p className='text-muted text-center md:w-[60%] mx-auto py-4'>{serv.description}</p>
                                </header>

                                <section key={index * services.length}>
                                    <div className="mx-auto px-4">
                                        <div className="w-full flex flex-col items-center mx-auto text-center">
                                            <h2 className="text-3xl font-bold mb-4 text-orange-500">Features & Benefits</h2>
                                            <p className="text-muted">The principles that guide our work and relationships</p>
                                            <div className="md:w-[80%] justify-items-center py-16 grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                                {Object.entries(services[index].features).map(([key, value], i) => (
                                                    <Card key={i} className="text-center flex flex-col items-center justify-evenly bg-gradient-to-tl from-[#e3e4e1] hover:from-white hover:to-white to-white shadow-lg md:hover:scale-105 transition-all shadow-black/25 text-muted">
                                                        <Image
                                                            src={value.image}
                                                            width={10}
                                                            height={10}
                                                            alt={key}
                                                            loader={imgLoader}
                                                            className="object-contain w-1/2 mix-blend-darken "
                                                        />
                                                        <CardHeader className='text-orange-500'>
                                                            <CardTitle>{key}</CardTitle>
                                                        </CardHeader>
                                                        <CardContent >
                                                            <CardDescription className='text-muted'>{value.text}</CardDescription>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>


                                        </div>
                                    </div>

                                    {/* <div className="flex justify-center md:max-w-2xl md:rounded-2xl mx-auto my-16 py-16 bg-orange-400">
                                        <Link href={`https://wa.me/917771877137?text=${encodeURIComponent("I want to know more about *" + serv.title + "* service.")}`} target='_blank' rel='noopener noreferrer' passHref>
                                            <Button asChild size="lg" className="auto-hover hover:bg-secondary hover:text-secondary-foreground bg-white text-white transition-colors">
                                                <HoverButton text="Inquire Now" ></HoverButton>
                                            </Button>
                                        </Link>
                                    </div> */}
                                    <div className="flex flex-col items-center text-center mx-auto my-16 p-10 max-w-2xl md:rounded-2xl bg-orange-500 shadow-lg">
    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Get More Information About {serv.title} 
    </h2>
    
    <Link 
                                            // href={`https://wa.me/917771877195?text=${encodeURIComponent("I want to know more about *" + serv.title + "* service.")}`} 
        href={"/contact/service-form"}
        target="_blank" 
        rel="noopener noreferrer" 
        passHref
    >
        <Button 
            asChild 
            size="lg" 
            className="px-6 py-3 rounded-lg border-white font-semibold text-lg text-black bg-white hover:bg-black hover:text-white transition-all duration-300"
        >
            <AwesomeButton>Inquire Now</AwesomeButton>
        </Button>
    </Link>
</div>

                                </section>
                            </>
                        )
                    }
                })
            }
      </main>
    )
  }