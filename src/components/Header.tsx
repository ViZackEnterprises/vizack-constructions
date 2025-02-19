"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"
import { navigation, imgLoader } from "@/utils/constants"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const path = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `sticky top-0 z-50 bg-[#EBE7E1] ${
    isScrolled ? "shadow-lg" : ""
  } transition-shadow duration-300`;

  return (
    <header className={navbarClasses}>
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src={"/logo/logo.png"}
              width={50}
              height={50}
              alt="logo"
              loader={imgLoader}
              className="rounded-full object-cover w-12 h-12 mix-blend-darken"
            />
            <span className="text-lg text-black">ViZack Enterprises</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8 max-lg:space-x-4">
            {navigation.map((item) => (
              <li key={item.name} className="w-max">
                <Link href={item.href} className={`text-sm font-medium hover:text-orange-500 transition-colors ${item.href === path ? "text-orange-500" : "text-black"}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="hidden md:inline-flex bg-orange-500 text-secondary-foreground hover:bg-muted transition-colors hover:text-white"
            >
              <Link href="/contact#contact">Contact Us</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="md:hidden text-black" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white text-black
               w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between pb-6">
                    <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                      <Image
                        src={"/logo/logo.png"}
                        width={50}
                        height={50}
                        alt="logo"
                        loader={imgLoader}
                        className="w-12 h-12 object-center rounded-full scale-105"
                      />
                      <span className="text-xl font-bold text-[#3A3938]">ViZack Enterprises</span>
                    </Link>
                    <Button variant="ghost" className="shadow-md" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-6 w-6 text-[#3A3938]" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </div>
                  <nav className="flex-1">
                    <ul className="flex flex-col space-y-4">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className="text-lg font-medium text-[#3A3938] hover:text-secondary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <Button asChild className="mt-6 bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}