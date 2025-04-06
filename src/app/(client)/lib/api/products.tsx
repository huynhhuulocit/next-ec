// lib/api.ts
export interface Product {
    id: string;
    pid: string;
    name: string;
    price: number;
    description: string;
}

export async function fetchProducts(): Promise<Product[]> {
    try {
        console.log('Fetching products from http://localhost:8080/api/v1/admin/products');
        const response = await fetch('http://localhost:8080/api/v1/admin/products');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}