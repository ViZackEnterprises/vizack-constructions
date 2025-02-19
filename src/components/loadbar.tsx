"use client"
import { usePathname } from "next/navigation"
import Loader from "../components/Loader"
import { useState, useEffect } from "react"

export default function LoadBar() { 
    const [loading, setLoading] = useState(false)
      const pathname = usePathname()
    
      useEffect(() => {
        setLoading(true) 
        const timer = setTimeout(() => setLoading(false), 500)
        return () => clearTimeout(timer)
      }, [pathname])
    
    return (
        loading && <Loader />
    )
}