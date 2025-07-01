import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'DAYF Booking',
    description: 'Your next stay easy, affordable, and stress-free.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}