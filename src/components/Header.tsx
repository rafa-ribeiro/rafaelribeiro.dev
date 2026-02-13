import { Link } from "react-router-dom"
import { useTheme } from "../hooks/useTheme"

export default function Header() {
  const { theme, toggle } = useTheme()

  return (
    <header
      className="
        border-b border-border
        bg-bg
        transition-colors duration-300
      "
    >
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          to="/"
          className="
            text-sm
            text-text
            hover:text-accent
            transition-colors
          "
        >
          rafaelribeiro.dev
        </Link>

        <div className="flex items-center gap-6">
          <nav className="flex gap-6">
            {["Home", "Blog", "Sobre"].map((item, index) => {
              const paths = ["/", "/blog", "/about"]
              return (
                <Link
                  key={item}
                  to={paths[index]}
                  className="
                    text-sm
                    text-text
                    hover:text-accent
                    transition-colors
                  "
                >
                  {item}
                </Link>
              )
            })}
          </nav>

          <button
            onClick={toggle}
            aria-label="Alternar tema"
            className="
              px-3 py-1 rounded-md text-sm
              bg-hover
              border border-border
              hover:border-accent
              hover:text-accent
              transition-all duration-200
            "
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

        </div>
      </div>
    </header>
  )
}
