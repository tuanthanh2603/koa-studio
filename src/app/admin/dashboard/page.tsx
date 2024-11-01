"use client"
import React from 'react';
import Link from 'next/link';

import useAuth from '../useAuth';
export default function DashboardPage() {
    
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <Link href="/admin/dashboard/category-project" passHref>
                        <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-semibold text-black">Danh mục dự án</h2>
                            <p className="mt-2 text-black">Xem và quản lý thông tin danh mục dự án.</p>
                        </div>
                    </Link>
                    <Link href="/admin/dashboard/project" passHref>
                        <div className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-semibold text-black">Dự án</h2>
                            <p className="mt-2 text-black">Xem và quản lý thông tin dự án.</p>
                        </div>
                    </Link>

                </div>
            </div>

        </div>
    );
}
