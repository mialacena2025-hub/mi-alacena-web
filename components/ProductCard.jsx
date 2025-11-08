// components/ProductCard.jsx
import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <Image 
        src={product.image} 
        alt={product.name} 
        width={200} 
        height={200} 
        className="object-contain mb-2"
      />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600">{product.description}</p>
      <p className="mt-2 font-semibold">${product.price}</p>
    </div>
  );
}
