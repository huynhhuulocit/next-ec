import { fetchProducts, Product } from "@/lib/api/products"

export default async function Page() {
    const products = await fetchProducts();

    return (
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            pid: {product.pid} - name: {product.name} - price: {product.price} - description: {product.description}
            </li>
        ))}
      </ul>
    )
  }