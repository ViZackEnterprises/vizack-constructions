"use client"

import { TailSpin } from "react-loader-spinner"

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
      <TailSpin height={80} width={80} color="#FF5733" />
    </div>
  )
}
