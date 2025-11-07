export const metadata = {
  title: "Mi Alacena",
  description: "Tu despensa online con los mejores productos frescos y locales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-50 text-gray-800">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <img src="/logo.png" alt="Mi Alacena" className="h-10" />
            <nav className="space-x-6">
              <a href="/" className="hover:text-green-700">Inicio</a>
              <a href="/productos" className="hover:text-green-700">Productos</a>
              <a href="/contacto" className="hover:text-green-700">Contacto</a>
              <a href="/carrito" className="hover:text-green-700">🛒 Carrito</a>
            </nav>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-10">{children}</main>
        <footer className="bg-gray-100 py-6 mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mi Alacena. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}
