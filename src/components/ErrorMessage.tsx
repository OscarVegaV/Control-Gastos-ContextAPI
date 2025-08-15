import type { ReactNode } from "react"

type errorMessageProps = {
    children: ReactNode;
}
export default function ErrorMessage({children}: errorMessageProps) {
  return (
    <p className="bg-red-600  p-2  text-white font-bold text-sm text-center rounded-lg mb-5">
        {children}
    </p>
  )
}

