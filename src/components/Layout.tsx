import { type ReactNode } from "react"
import Header from "./Header"
import Footer from "./Footer"

interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className="
        min-h-screen flex flex-col
        bg-bg
        text-text
        transition-colors duration-300
        bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.05),transparent_60%)]
        dark:bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.06),transparent_60%)]
      "
    >
      <Header />

      <main
        className="
          flex-1 max-w-4xl mx-auto w-full px-6 py-12
          border-border
        "
      >
        {children}
      </main>

      <Footer />
    </div>
  )
}
