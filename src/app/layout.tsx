import "@/styles/globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoadBar from "@/components/loadbar"
import { Montserrat } from "next/font/google"
import getMetadata from "@/metadata/meta"
import { Analytics } from "@vercel/analytics/react"

const montserrat = Montserrat({
  weight: ["600"],
  subsets: ["latin"]
})

export const metadata = getMetadata()


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={"bg-[#EBE7E1] " + montserrat.className}>
        <Analytics />
        <LoadBar />
        <Header />
        <main className={"" + montserrat.className}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
