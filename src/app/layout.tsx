import "@/styles/globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import LoadBar from "@/components/loadbar"
import { Montserrat } from "next/font/google"
import getMetadata from "@/metadata/meta"

const montserrat = Montserrat({
  weight: ["600"],
  subsets: ["latin"]
})

export const metadata = getMetadata()


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={"bg-[#EBE7E1] " + montserrat.className}>
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
