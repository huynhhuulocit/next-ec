import { NextResponse } from 'next/server';
import { API_CLIENT_CART_URL } from '../const';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(API_CLIENT_CART_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error('Failed to add item to cart');
    }

    const data = await response.json();
    return NextResponse.json({ 
      success: true, 
      message: 'Item added to cart',
      data
    });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    return NextResponse.json(
      { error: 'Failed to add item to cart' },
      { status: 500 }
    );
  }
} 