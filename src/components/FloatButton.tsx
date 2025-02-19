import Image from "next/image"
import Link from "next/link"
import { imgLoader } from "@/utils/constants"

export default function FloatButton() {
    return (
        <div>
            <Link href={"/contact"}>
                <Image
                    src="/logo/logo.png"
                    width={50}
                    height={50}
                    alt="logo"
                    className="fixed z-[9999] bottom-10 right-10 hover:scale-110 rounded-full cursor-pointer"
                    loader={imgLoader}
                />
            </Link>
        </div>
    )
}