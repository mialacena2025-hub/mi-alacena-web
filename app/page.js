"use client"; // necesario para usar useState en Next.js (modo app)

import { useState } from "react";
import { products } from "../products";
import Image from "next/image";

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const itemInCart = cart.find((i) => i.id === product.id);
    if (itemInCart) {
      setCart(cart.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i)));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main style={{ padding: "20px", fontFamily: "sans-serif", background: "#fafafa", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#333" }}>🛒 Mi Alacena</h1>

      {/* Productos Destacados */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Productos Destacados</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((p) => (
            <div key={p.id} className="bg-white rounded-xl shadow-md p-3">
              <Image
                src={p.image}
                alt={p.name}
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
              <p className="mt-2 text-center font-semibold">{p.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Productos generales */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              background: "white",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              padding: "10px",
              textAlign: "center",
            }}
          >
            <Image
              src={p.image}
              alt={p.name}
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <strong>${p.price}</strong>
            <br />
            <button
              onClick={() => addToCart(p)}
              style={{
                marginTop: "10px",
                background: "#28a745",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      {/* Carrito */}
      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <h2>🧺 Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id} style={{ marginBottom: "10px" }}>
                  {item.name} x {item.qty} — ${item.price * item.qty}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      marginLeft: "10px",
                      background: "#dc3545",
                      color: "white",
                      border: "none",
                      padding: "5px 8px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Quitar
                  </button>
                </li>
              ))}
            </ul>
            <h3>Total: ${total}</h3>
          </>
        )}
      </div>
    </main>
  );
}
