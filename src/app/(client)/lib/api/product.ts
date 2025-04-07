import { API_CLIENT_PRODUCT_URL } from '@/app/api/const';
import { Product } from '../types';

export async function getProducts(): Promise<Product[]> {
  // Folder structure => /api/product
  const response = await fetch('/api/product');

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}

export async function addToCart(productId: number) {
  const response = await fetch('/api/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: "user-2", // TODO: Replace with actual user ID from authentication
      pid: productId,
      quantity: 1
    }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to add item to cart');
  }
  return response.json();
}