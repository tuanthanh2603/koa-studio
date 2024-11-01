import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';

export async function POST(request: Request) {
    const body = await request.json();
    const { username, password } = body;
    try {
        // Kết nối đến MongoDB
        const client = await clientPromise;
        const db = client.db('koa');

        // Tìm người dùng trong cơ sở dữ liệu
        const user = await db.collection('account').findOne({ username });

        // Nếu không tìm thấy người dùng
        if (!user) {
            return NextResponse.json({ message: 'Tên đăng nhập không đúng' }, { status: 401 });
        }

        // Kiểm tra mật khẩu
        if (user.password !== password) {
            return NextResponse.json({ message: 'Mật khẩu không đúng' }, { status: 401 });
        }
        const token = user._id.toString();
        const response = NextResponse.json({ message: 'Đăng nhập thành công', userId: user._id });
        response.cookies.set('token', token, { path: '/', httpOnly: true });
        return response;
    } catch (error) {
        console.error('Lỗi khi đăng nhập:', error);
        return NextResponse.json({ message: 'Đã xảy ra lỗi' }, { status: 500 });
    }
}