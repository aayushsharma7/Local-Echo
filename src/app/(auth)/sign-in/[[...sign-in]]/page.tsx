"use client";

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SignIn } from '@clerk/nextjs';
import React from 'react';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

const SignInPage = () => {
    const { theme } = useTheme();

    return (
        <main className="">
            <Header />
            <div className='flex h-screen w-full items-center justify-center md:mt-0 mt-5'>
                <SignIn appearance={{
                    baseTheme: theme === 'dark' ? dark : undefined,
                }} />
            </div>
            <Footer />
        </main>
    );
};

export default SignInPage;