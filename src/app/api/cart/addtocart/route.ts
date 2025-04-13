'use server';

import { NextResponse } from 'next/server';
import { API_CLIENT_CART_URL } from '../const';

export async function GET() {
  try {
    const userId = 'user-2';
    const url = `${API_CLIENT_CART_URL}?id=${userId}`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch cart items');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching cart items:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cart items' },
      { status: 500 }
    );
  }
}

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

export async function PUT(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(API_CLIENT_CART_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error('Failed to update cart item');
    }

    const data = await response.json();
    return NextResponse.json({ 
      success: true, 
      message: 'Cart item updated',
      data
    });
  } catch (error) {
    console.error('Error updating cart item:', error);
    return NextResponse.json(
      { error: 'Failed to update cart item' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(API_CLIENT_CART_URL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error('Failed to remove item from cart');
    }

    const data = await response.json();
    return NextResponse.json({ 
      success: true, 
      message: 'Item removed from cart',
      data
    });
  } catch (error) {
    console.error('Error removing item from cart:', error);
    return NextResponse.json(
      { error: 'Failed to remove item from cart' },
      { status: 500 }
    );
  }
} 