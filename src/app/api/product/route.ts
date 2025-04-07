import { NextResponse } from 'next/server';
import { API_CLIENT_PRODUCT_URL } from '../const';


export async function GET() {
  try {
    const response = await fetch(API_CLIENT_PRODUCT_URL);
    console.log('router', response);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
} 