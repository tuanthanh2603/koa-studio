"use client";
interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}
import { useRouter } from 'next/navigation';
import useAuth from '../useAuth';

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
    useAuth();
    const router = useRouter();
    const handleLogout = () => {
        sessionStorage.removeItem('userId');
        router.push('/admin/login');
    };
    return (
        <div className="flex flex-col min-h-screen">
            <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
                <h1 className="text-xl font-bold">Admin Dashboard</h1>
                <button
                    onClick={handleLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                    Đăng xuất
                </button>
            </header>
            <main className="p-6 bg-gray-100 flex-grow">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;