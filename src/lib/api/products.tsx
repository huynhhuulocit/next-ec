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
        const data = await fetch('http://localhost:8080/api/v1/admin/products')

        return data.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
}