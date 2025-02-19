import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
export default function useHover() {
    useEffect(() => {
        if (window.innerWidth <= 768) {
            const allElements = document.querySelectorAll(".auto-hover"); 
            const hoverElements: { [key: string]: any } = {};
            const hoverClasses: { [key: string]: string[] } = {};
            const classes: { [key: string]: string[] } = {};

            let id = 0;

            allElements.forEach((el) => {
                const foundClasses: string[] = [];
                const orgClass:string[] = []
                
                el.classList.forEach((c) => {
                    if (c.startsWith("hover:")) {
                        foundClasses.push(c.replace("hover:", ""));
                    }
                    else {
                        orgClass.push(c);
                    }
                });
                
                if (foundClasses.length > 0) {
                    hoverElements[id] = el; 
                    hoverClasses[id] = foundClasses;
                    classes[id] = orgClass;
                }

                id++;
            });

            if (Object.keys(hoverElements).length === 0) return;

            
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            Object.keys(hoverElements).forEach((key) => {
                                if (hoverElements[key] == entry.target) {
                                    // console.log(hoverElements[key])
                                    const cls = twMerge(classes[key], hoverClasses[key]);
                                    entry.target.classList.remove(...entry.target.classList);
                                    entry.target.classList.add(...cls.split(" "));
                                    console.log(cls.split(" "), entry.target);
                                    
                                    // entry.target.classList.add(twMerge(...classes[hoverElements.indexOf(entry.target)]), ...classes[hoverElements.indexOf(entry.target)]);
                                }
                                
                            })
                        } else {
                            // if (hoverElements.includes(entry.target)) {
                            //     entry.target.classList.remove(twMerge(...classes[hoverElements.indexOf(entry.target)], ...classes[hoverElements.indexOf(entry.target)]));
                            // }
                        }
                        //     entry.target.classList.add("force-hover");
                        // } else {
                        //     entry.target.classList.remove("force-hover");
                        // }
                    });
                },
                { threshold: 0.5 }
            );
            
            Object.values(hoverElements).forEach((value) => {
                
                observer.observe(value)
            })

            return () => {
                Object.values(hoverElements).forEach((value) => {

                    observer.observe(value);
                })
                // hoverElements.forEach((el) => observer.unobserve(el));
            };
        }
    }, []);
}
