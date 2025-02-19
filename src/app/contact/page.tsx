'use client'
import Hero from "../../components/Hero"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { toast, Toaster } from "react-hot-toast"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
    subject: "",
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
          subject: "",
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


  // const handleSubmit = async () => {
  //   // e.preventDefault();
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch("/api/send-email", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(formData)
  //     });
  //     toast.promise(
  //       response,
  //       {
  //         loading: 'Saving...',
  //         success: <b>Settings saved!</b>,
  //         error: <b>Could not save.</b>,
  //       }
  //     );
      
  //     setSendSuccess(true);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div>
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

            {/* Contact Form */}
            <Card className="lg:col-span-2 shadow-md shadow-black/50">
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
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
                    <Label htmlFor="subject">Subject</Label>
                    <Input name="subject" required onChange={handleChange} value={formData.subject} id="subject" placeholder="What is this regarding?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or inquiry..."
                      className="min-h-[150px]"
                      name="message"
                      onChange={handleChange}
                      value={formData.message}
                    />
                  </div>
                  <Button  disabled={isLoading} onClick={handleSubmit} className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
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

      
    </div>
  )
}

