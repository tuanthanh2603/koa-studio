"use client";
import { useEffect, useState } from "react";

interface Category {
    _id: any;
    category_name: string;
    category_slug: string;
    createdAt: string;
}
export default function CategoryProjectAdmin() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [newCategoryName, setNewCategoryName] = useState('');

    const generateSlug = (name: string) => {
        return name
            .toLowerCase()
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]+/g, '')
            .replace(/\-\-+/g, '-')
            .replace(/^-+|-+$/g, '');
    };
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/api/admin/get-category-project');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                setCategories(data.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (newCategoryName.trim()) {
            const newCategory = {
                category_name: newCategoryName.trim(),
                category_slug: generateSlug(newCategoryName.trim()),
                createdAt: new Date().toISOString()
            };

            try {
                const response = await fetch('/api/admin/create-category-project', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newCategory),
                });

                if (!response.ok) {
                    throw new Error('Failed to add category');
                }

                const data = await response.json();
                setCategories([...categories, { ...newCategory, _id: data.categoryId }]); 
                setNewCategoryName('');
            } catch (error) {
                console.error('Error adding category:', error);
            }
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-4 text-black">Quản lý danh mục dự án</h1>

            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4 text-black">Thêm danh mục mới</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={newCategoryName}
                        onChange={(e) => setNewCategoryName(e.target.value)}
                        placeholder="Tên danh mục"
                        className="border border-gray-300 rounded px-4 py-2 mb-4 w-full focus:outline-none focus:border-blue-500 text-black"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                        Thêm danh mục
                    </button>
                </form>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-black">Danh sách danh mục</h2>
                <ul className="space-y-4">
                    {categories.map((category) => (
                        <li
                            key={category._id}
                            className="flex justify-between items-center border-b border-gray-200 pb-2"
                        >
                            <div>
                                <p className="text-black font-semibold">{category.category_name}</p>
                                <p className="text-gray-600">Slug: {category.category_slug}</p>
                                <p className="text-gray-600">
                                    Ngày tạo: {new Date(category.createdAt).toLocaleDateString('vi-VN')}
                                </p>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}