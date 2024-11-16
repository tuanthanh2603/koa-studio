import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';

export async function GET() {
  try {
    console.log('Attempting to connect to MongoDB...');
    const client = await clientPromise;
    console.log('MongoDB client connected successfully');

    const db = client.db('koa');

    const collection = db.collection('project');

    const documents = await collection.find({}).toArray();
    return NextResponse.json({
      success: true,
      message: 'Dữ liệu được lấy thành công',
      data: documents,
    });
  } catch (error) {
    console.error('Error connecting to MongoDB or fetching data:', error);

    return NextResponse.json({
      success: false,
      message: 'Kết nối hoặc lấy dữ liệu thất bại',
      error: (error as Error).message,
    });
  }
}