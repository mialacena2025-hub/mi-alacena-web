import Image from "next/image";
import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition"
        >
          <div className="w-full h-48 relative">
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>

          <h3 className="mt-3 font-bold text-lg">{product.name}</h3>
          <p className="text-gray-600 text-sm">{product.description}</p>
          <p className="mt-2 font-semibold">${product.price}</p>
        </div>
      ))}
    </div>
  );
}
