import { Github, Linkedin } from "lucide-react"


export default function Footer() {
  return (
    <footer
      className="
        border-t border-border
        bg-hover
        transition-colors duration-300
      "
    >
      <div
        className="
          max-w-4xl mx-auto px-6 py-8 text-center text-sm
          text-text
        "
      >
        <div className="flex justify-center items-center gap-3 mb-2">
          <p>
            © {new Date().getFullYear()} Rafael Ribeiro
          </p>

          <a
            href="https://github.com/rafa-ribeiro/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 hover:text-accent transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={18} strokeWidth={2}/>
          </a>

          <a
            href="https://www.linkedin.com/in/rafaelribeir0/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 hover:text-accent transition-all duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} strokeWidth={2} />
          </a>
        </div>

        <p className="text-xs opacity-70">
          Feito na mão (pra que né?) com React + Vite + Tailwind
        </p>

        
      </div>
    </footer>
  )
}
