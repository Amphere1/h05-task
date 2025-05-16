import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect.js';
import Product from '@/models/products.js';

export async function GET(request) {
  await dbConnect();
  try {
    const products = await Product.find({});
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
