"use client"
import Link from "next/link"
import { imgLoader } from "@/utils/constants"
import Image from "next/image"
import { footerNavigation } from "@/utils/constants"

export default function Footer() {
  return (
    <>
      <svg className="w-full mt-10 relative lg:h-24 h-12 " viewBox="10 0 750 30">
        <path d="M0 50 Q 100 30 400 70 T 800 50 " stroke="#0E1728" fill="none" strokeWidth="100" />
      </svg>
      <footer className="bg-[#0E1728]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image
                    src={"/logo/logo.png"}
                    width={50}
                    height={50}
                    alt="logo"
                  loader={imgLoader}
                  className="w-12 h-12 object-center rounded-full scale-105"
                  />
                <span className="text-2xl font-bold">ViZack</span>
              </Link>
              <p className="text-muted-foreground mb-4 max-w-sm">
                Your trusted partner for comprehensive construction services. Building dreams with precision and
                excellence.
              </p>
            </div>

            {Object.keys(footerNavigation).map((key, index) => (
              <div key={index}>
                <h3 className="font-semibold mb-4 capitalize">{key}</h3>
                <ul className="space-y-2">
                  {footerNavigation[key as keyof typeof footerNavigation].map((item, i) => (
                    <li key={i}>
                      <Link href={item.href} className="text-muted-foreground hover:text-secondary transition-colors">
                        {item.name}

                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
            ))}
            </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="text-center text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} ViZack Enterprises & Construction. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

