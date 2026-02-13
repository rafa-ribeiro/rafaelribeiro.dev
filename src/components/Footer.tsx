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
        <p className="mb-2">
          © {new Date().getFullYear()} Rafael Ribeiro
        </p>

        <p className="text-xs opacity-70">
          Feito na mão (pra que né?) com React + Vite + Tailwind
        </p>
      </div>
    </footer>
  )
}
