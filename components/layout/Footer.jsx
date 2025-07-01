import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Facebook, Instagram, Github, Phone, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-12 px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Section: Logo, Description, Socials, Address */}
                <div className="flex flex-col items-start">
                    <Link href="/" className="mb-4">
                        <Image src="/images/dayf-logo-white.png" alt="DAYF Booking Logo" width={40} height={40} /> {/* Placeholder */}
                    </Link>
                    <p className="text-sm mb-6 max-w-sm">
                        [App Name] makes booking your next stay easy, affordable, and stress-free. With thousands of hotels worldwide, exclusive deals, and secure payment options, we're here to help you find the perfect place to stay, every time.
                    </p>
                    <div className="flex space-x-4 mb-6">
                        <a href="#" className="text-gray-300 hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors"><Facebook className="h-6 w-6" /></a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
                        <a href="#" className="text-gray-300 hover:text-white transition-colors"><Github className="h-6 w-6" /></a>
                    </div>
                    <p className="text-sm flex items-center">
                        <MapPin className="h-4 w-4 mr-2" /> 123 Travel St, Suite 100, City, Country
                    </p>
                </div>

                {/* Middle Section: Navigation and Contact */}
                <div className="grid grid-cols-2 gap-8 md:col-span-1">
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Navigation</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:underline">Home</Link></li>
                            <li><Link href="/hotels" className="hover:underline">Hotels</Link></li>
                            <li><Link href="/deals" className="hover:underline">Deals</Link></li>
                            <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
                            <li><Link href="/contact-us" className="hover:underline">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                                <Phone className="h-4 w-4 mr-2" /> +1 (555) 123-4567
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-4 w-4 mr-2" /> support@[yourappname].com
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Section: Download App */}
                <div className="flex flex-col items-center md:items-end">
                    <h4 className="font-semibold text-lg mb-4">Download Our App</h4>
                    <div className="flex space-x-4 mb-6">
                        <a href="#" aria-label="Download on Google Play">
                            <Image src="/images/google-play-badge.png" alt="Google Play" width={120} height={40} className="filter grayscale invert hover:filter-none transition-all" /> {/* Placeholder */}
                        </a>
                        <a href="#" aria-label="Download on App Store">
                            <Image src="/images/app-store-badge.png" alt="App Store" width={120} height={40} className="filter grayscale invert hover:filter-none transition-all" /> {/* Placeholder */}
                        </a>
                    </div>
                    <p className="text-sm text-gray-400 mt-auto">&copy; {new Date().getFullYear()}, All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}