import Head from "next/head";
import ProductGrid from "../components/ProductGrid";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Alacena - Supermercado Online</title>
        <meta name="description" content="Supermercado Online - Mi Alacena" />
      </Head>

      <main className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-center text-amber-600 mb-8">
          Productos Destacados 🛒
        </h1>

        {/* Grilla de productos */}
        <ProductGrid />
      </main>
    </>
  );
}
