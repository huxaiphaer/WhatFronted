'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { LoginForm } from '@/components/LoginForm';
import { ProductTable } from '@/components/ProductTable';
import { setUserEmail } from '@/store/slices/productSlice';
import { Button } from '@/components/ui/button';

export default function Home() {
  const dispatch = useDispatch();
  const userEmail = useSelector((state: RootState) => state.products.userEmail);
  console.log('userEmail:', userEmail)

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    console.log('savedEmail:', savedEmail)
    if (savedEmail) {
      dispatch(setUserEmail(savedEmail));
    }
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    dispatch(setUserEmail(null));
  };

  return (
      <div className="flex flex-col min-h-screen bg-gray-50 pb-8">
        {userEmail ? (
            <>
              <div className="px-8 py-4 flex justify-between items-center bg-amber-50 shadow mb-4">
                <h1 className="text-3xl font-bold text-gray-900">Product Search</h1>
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600">{userEmail}</span>
                  <Button
                      onClick={handleLogout}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                  >
                    Logout
                  </Button>
                </div>
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-6">
                  <ProductTable/>
                </div>
              </div>
            </>
        ) : <LoginForm/>}
      </div>
  );
}
