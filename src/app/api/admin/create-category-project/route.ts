import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';


export async function POST(request: Request) {
    const body = await request.json();
    const { category_name, category_slug } = body;
    try {
        // Kết nối đến MongoDB
        const client = await clientPromise;
        const db = client.db('koa');

        const result = await db.collection('project').insertOne({
            category_name,
            category_slug,
            createdAt: new Date()
        });
        if (result.insertedId) {
            return NextResponse.json({ message: 'Thêm danh mục thành công', categoryId: result.insertedId }, { status: 201 });
        } else {
            return NextResponse.json({ message: 'Không thể thêm danh mục' }, { status: 400 });
        }
        
    } catch (error) {
        return NextResponse.json({ message: 'Đã xảy ra lỗi' }, { status: 500 });
    }
}