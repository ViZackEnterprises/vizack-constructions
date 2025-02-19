"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
    {
        quote:
            "The attention to detail and the user-centric approach of this team has significantly improved our product's usability. They're not just developers; they're problem solvers.",
        author: "Alex Rodriguez",
        title: "Head of Product",
        company: "TechCorp Inc.",
    },
    {
        quote:
            "Working with this team has been transformative for our business. Their innovative solutions and commitment to excellence have helped us stay ahead in a competitive market.",
        author: "Sarah Chen",
        title: "CEO",
        company: "InnovateTech",
    },
    {
        quote:
            "The level of professionalism and technical expertise demonstrated by this team is unparalleled. They don't just meet expectations; they consistently exceed them.",
        author: "Michael O'Brien",
        title: "CTO",
        company: "FutureSoft Systems",
    },
]

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            nextTestimonial()
        }, 10000)
        return () => clearInterval(timer)
    }, [])

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }),
    }

    const nextTestimonial = () => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }

    const previousTestimonial = () => {
        setDirection(-1)
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center space-y-12">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900"
                    >
                        What our clients say
                    </motion.h2>

                    <div className="relative min-h-[300px] h-[500px] flex items-center justify-center">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                className="absolute w-full"
                            >
                                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                                    <Quote className="text-indigo-500 w-12 h-12 mb-6 mx-auto" />
                                    <blockquote className="text-center">
                                        <p className="text-xl md:text-2xl leading-relaxed mb-8 text-gray-700">
                                            {testimonials[currentIndex].quote}
                                        </p>
                                        <footer className="mt-8">
                                            <div className="flex items-center justify-center">
                                                <div className="flex-shrink-0">
                                                    <img
                                                        className="h-10 w-10 rounded-full"
                                                        src={`https://i.pravatar.cc/150?u=${testimonials[currentIndex].author}`}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ml-4 text-left">
                                                    <p className="text-base font-semibold text-gray-900">{testimonials[currentIndex].author}</p>
                                                    <p className="text-sm text-gray-600">
                                                        {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                                                    </p>
                                                </div>
                                            </div>
                                        </footer>
                                    </blockquote>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="flex justify-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={previousTestimonial}
                            aria-label="Previous testimonial"
                            className="bg-white text-indigo-600 hover:bg-indigo-50 border-indigo-200 hover:border-indigo-300 transition-colors duration-300"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextTestimonial}
                            aria-label="Next testimonial"
                            className="bg-white text-indigo-600 hover:bg-indigo-50 border-indigo-200 hover:border-indigo-300 transition-colors duration-300"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

