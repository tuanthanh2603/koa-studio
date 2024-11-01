// src/app/dashboard/page.tsx
import React from 'react';

export default function DashboardPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
                <p className="mb-6">Chào mừng bạn đến với trang quản trị của bạn!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold">Thông tin người dùng</h2>
                        <p className="mt-2">Xem và quản lý thông tin người dùng của bạn.</p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold">Báo cáo hoạt động</h2>
                        <p className="mt-2">Xem báo cáo và phân tích hoạt động.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-xl font-semibold">Cài đặt</h2>
                        <p className="mt-2">Tùy chỉnh cài đặt ứng dụng của bạn.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
