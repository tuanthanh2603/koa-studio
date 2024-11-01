// useAuth.ts
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
    const router = useRouter();

    useEffect(() => {
        const userId = sessionStorage.getItem('userId'); // Check for userId
        if (!userId) {
            // If no userId, redirect to login page
            router.push('/admin/login');
        }
    }, [router]);
};

export default useAuth;
