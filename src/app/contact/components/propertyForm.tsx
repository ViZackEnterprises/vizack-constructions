"use client";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast, Toaster } from "react-hot-toast"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function PropertyForm() {
    const router = useRouter();
    const contact = useParams().contact;
    if (contact !== "property-form") {
        router.push("/contact")
    }
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        message: "",
        location: "",
        budget: "",
        propertyType: "",
        lookingFor: "",
        requirements: "",
        address: "",
        method: "",
    })
    const [isLoading, setIsLoading] = useState(false)
    const [sendSuccess, setSendSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const responsePromise = fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            await toast.promise(
                responsePromise,
                {
                    loading: "Sending email...",
                    success: "Email sent successfully!",
                    error: "Failed to send email.",
                }
            );



            const response = await responsePromise;
            if (!response.ok) {
                throw new Error("Failed to send email");
            }
            else {
                setFormData({
                    firstname: "",
                    lastname: "",
                    email: "",
                    phonenumber: "",
                    message: "",
                    location: "",
                    budget: "",
                    propertyType: "",
                    lookingFor: "",
                    requirements: "",
                    address: "",
                    method: "",
                });
                const form = document.querySelector("form");
                form?.reset();
            }

        } catch (error) {
            console.error("Error sending email:", error);
        } finally {
            setSendSuccess(true);
            setIsLoading(false);
        }
    };

    return (
        <main>
            <Hero id="contact" className="mt-1 " title="Contact Us" subtitle="Get in touch with our team for any inquiries" />

            <section className="py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-8">
                            <Card className="">
                                <CardHeader>
                                    <CardTitle>Contact Information</CardTitle>
                                    <CardDescription>Reach out to us through any of these channels</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <Phone className="w-5 h-5 text-secondary mt-1" />
                                        <div>
                                            <p className="font-medium">Phone</p>
                                            <p className="text-muted-foreground">
                                                <Link href={"tel:%20+917771877195"} className="hover:text-secondary transition-colors">
                                                    +91-7771877195
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Mail className="w-5 h-5 text-secondary mt-1" />
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className="text-muted-foreground">
                                                <Link href={"mailto:info@vizackenterprises.com"} className="hover:text-secondary transition-colors">
                                                    info@vizackenterprises.com
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-5 h-5 text-secondary mt-1" />
                                        <div>
                                            <p className="font-medium">Address</p>
                                            <p className="text-muted-foreground">
                                                Sakshi Greens, Sachin Tendulkar Marg, Near DB City, Hurawali, City centre Gwalior
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Clock className="w-5 h-5 text-secondary mt-1" />
                                        <div>
                                            <p className="font-medium">Business Hours</p>
                                            <div className="text-muted-foreground">
                                                <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                                                <p>Sunday: Closed</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <Card className="lg:col-span-2 shadow-md shadow-black/50">
                            <CardHeader>
                                <CardTitle>Property Inquiry</CardTitle>
                                <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" >First name</Label>
                                            <Input id="firstName" required name="firstname" onChange={handleChange} value={formData.firstname} placeholder="Enter your first name" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last name</Label>
                                            <Input id="lastName" required name="lastname" onChange={handleChange} value={formData.lastname} placeholder="Enter your last name" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input name="email" required onChange={handleChange} value={formData.email} id="email" type="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input name="phonenumber" required onChange={handleChange} value={formData.phonenumber} id="phone" type="tel" placeholder="Enter your phone number" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="address">Address</Label>
                                        <Input name="address" required onChange={handleChange} value={formData.address} id="address" type="text" placeholder="Enter your Address" />
                                    </div>

                                    <div className="space-y-2">
                                        <Select value={formData.method} required onValueChange={(value) => setFormData(prevState => ({ ...prevState, method: value }))}>
                                            <SelectTrigger className="top-2 relative">
                                                <SelectValue placeholder="Prefered Contact Method" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem value="call">Call</SelectItem>
                                                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                                    <SelectItem value="email">Email</SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2 flex flex-col md:flex-row gap-6 items-center justify-center">
                                        <div className="w-full">
                                            <Select value={formData.requirements} required onValueChange={(value) => setFormData(prevState => ({ ...prevState, requirements: value }))}>
                                                <SelectTrigger className="top-2 relative">
                                                    <SelectValue placeholder="Property Requirement" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="sale">For Sale</SelectItem>
                                                        <SelectItem value="inquiry">Inquiry</SelectItem>
                                                        <SelectItem value="rental">Rental</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="w-full">
                                            <Select value={formData.propertyType} required onValueChange={(value) => setFormData(prevState => ({ ...prevState, propertyType: value }))}>
                                                <SelectTrigger className="top-1 relative">
                                                    <SelectValue placeholder="Property Type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="flat">Flat</SelectItem>
                                                        <SelectItem value="office">Office</SelectItem>
                                                        <SelectItem value="shop">Shop</SelectItem>
                                                        <SelectItem value="land">Land</SelectItem>
                                                        <SelectItem value="warehouse">Warehouse</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="w-full">
                                            <Select value={formData.lookingFor} required onValueChange={(value) => setFormData(prevState => ({ ...prevState, lookingFor: value }))}>
                                                <SelectTrigger className="top-1 relative">
                                                    <SelectValue placeholder="Looking for" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectItem value="buy">Buy</SelectItem>
                                                        <SelectItem value="rent">Rent</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="location">Location Preference</Label>
                                        <Input name="location" onChange={handleChange} required value={formData.location} id="location" placeholder="Location Preference" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="budget">Budget</Label>
                                        <Input name="budget" onChange={handleChange} required value={formData.budget} id="budget" placeholder="Budget" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Other Message</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your project or inquiry..."
                                            className="min-h-[150px]"
                                            name="message"
                                            onChange={handleChange}
                                            value={formData.message}
                                        />
                                    </div>
                                    <Button disabled={isLoading} onClick={handleSubmit} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                                        {isLoading ? "Sending..." : sendSuccess ? "Message sent!" : "Send Message"}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <Toaster
                    position="bottom-right"
                    reverseOrder={true}
                />
            </section>


        </main>
    )

}