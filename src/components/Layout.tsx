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
        bg-[radial-gradient(900px_600px_at_-200px_0px,rgba(124,58,237,0.05),transparent_70%)]
        dark:bg-[radial-gradient(1000px_700px_at_-250px_0px,rgba(52,211,153,0.10),transparent_75%)]
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
