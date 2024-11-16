"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState<string | null>(null);
    const router = useRouter()
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setMessage(null);

        const newErrors: { username?: string; password?: string } = {};
        if (!username) {
            newErrors.username = 'Tên đăng nhập là bắt buộc';
        }
        if (!password) {
            newErrors.password = 'Mật khẩu là bắt buộc';
        }

        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        const data = await response.json();
        if (response.ok) {
            sessionStorage.setItem('userId', data.userId);
            router.push('/admin/dashboard');
        } else {
            setMessage(data.message);
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-black">Đăng Nhập</h2>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Tên đăng nhập:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mật khẩu:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"
                        required
                    />
                </div>
                {message && <div className="text-red-500 text-sm mb-4">{message}</div>}
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Đăng Nhập</button>
            </form>
        </div>
    )
}
export default Login;