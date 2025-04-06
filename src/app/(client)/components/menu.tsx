import Link from "next/link";

export default function Menu () {
    return (
        <ul>
            <li><Link href={`/`}>Home</Link></li>
            <li><Link href={`/products`}>Products</Link></li>
        </ul>
    )
};