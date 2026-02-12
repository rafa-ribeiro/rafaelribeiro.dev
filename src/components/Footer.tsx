export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-600">
                <p className="mb-2">© {new Date().getFullYear()} Rafael Ribeiro</p>
                <p className="text-xs">Feito na mão (pra que né?) com React + Vite + Tailwind</p>
            </div>
        </footer>
    )
}