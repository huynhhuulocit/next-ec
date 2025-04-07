'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
    const pathname = usePathname();

    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4">
                <ul className="flex gap-8 items-center h-16">
                    <li>
                        <Link 
                            href="/" 
                            className={`text-gray-600 hover:text-blue-600 transition-colors duration-200 ${
                                pathname === '/' ? 'text-blue-600 font-medium' : ''
                            }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            href="/products" 
                            className={`text-gray-600 hover:text-blue-600 transition-colors duration-200 ${
                                pathname === '/products' ? 'text-blue-600 font-medium' : ''
                            }`}
                        >
                            Products
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}