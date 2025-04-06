'use client';

import { fetchProducts, Product } from "@/app/(client)/lib/api/products"
import { useState } from 'react'

export default async function Page() {
    const products = await fetchProducts();

    const [cart, setCart] = useState<Product[]>([]);

    const addToCart = (product: Product) => {
      setCart([...cart, product]);
      console.log(`${product.name} added to cart`);
    }

    return (
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            pid: {product.pid} - name: {product.name} - price: {product.price} - description: {product.description} - <button onClick={() => addToCart(product)}>Add to Cart</button>
            </li>
        ))}
      </ul>
    )
  }