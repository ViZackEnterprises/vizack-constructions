"use client";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface HoverButtonProps {
  text: string;
  href?: string;
  className?: string;
}

const HoverButton = ({ text, href, className, }: HoverButtonProps) => {
  const router = useRouter();

  return (
    <button
      onClick={() => href && router.push(href)}
      className={cn(
        "group relative h-12 w-48 overflow-hidden rounded bg-white text-lg shadow-xl transition-all duration-300",
        className
      )}
    >
      {/* Background effect */}
      <div className="absolute inset-0 w-full scale-x-0 origin-left bg-orange-500 transition-transform duration-300 ease-out group-hover:scale-x-100"></div>

      {/* Text */}
      <span className="relative z-10 font-bold text-sm text-black transition-all duration-300 group-hover:text-white">
        {text}
      </span>
    </button>
  );
};

export default HoverButton;
