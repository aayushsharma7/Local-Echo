"use client";

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { SignIn, SignUp } from '@clerk/nextjs';
import React from 'react';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

const SignUpPage = () => {
    const { theme } = useTheme();

    return (
        <main className="">
            <Header />
            <div className='flex h-screen w-full items-center justify-center mt-20 md:mt-10'>
                <SignUp appearance={{
                    baseTheme: theme === 'dark' ? dark : undefined,
                }} />
            </div>
            <Footer />
        </main>
    );
};

export default SignUpPage;