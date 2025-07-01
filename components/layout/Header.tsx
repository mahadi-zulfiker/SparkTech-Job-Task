import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Search, ChevronDown, Menu, User } from 'lucide-react';
import logo from "../../public/LOGO.jpg";
import spain from "../../public/spanish.jpg";

export function Header() {
    return (
        <header className="bg-[#E9F6FF] shadow-sm py-4 px-4 sm:px-6 flex items-center justify-between">
            {/* Left section: Logo and Desktop Navigation */}
            <div className="flex items-center space-x-4 md:space-x-8">
                {/* Mobile Navigation Toggle */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[250px] sm:w-[300px]">
                            <nav className="flex flex-col space-y-4 pt-8">
                                <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">Hotels</Link>
                                <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">House</Link>
                                <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">About Us</Link>
                                <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">Contact Us</Link>
                                <DropdownMenuSeparator />
                                {/* Mobile-specific currency/language/listing options if desired */}
                                <Button variant="outline" className="flex items-center space-x-2 justify-start">
                                    <span>List your property</span>
                                    <Search className="h-4 w-4" />
                                </Button>
                                {/* Currency Dropdown for mobile */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="flex items-center justify-start">
                                            $ <ChevronDown className="ml-1 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>USD</DropdownMenuItem>
                                        <DropdownMenuItem>EUR</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                {/* Language Dropdown for mobile */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="flex items-center justify-start">
                                            <Image src={spain} alt="Spanish Flag" width={20} height={15} className="mr-1 rounded" />
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>English</DropdownMenuItem>
                                        <DropdownMenuItem>Spanish</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2">
                    {/* Ensure you provide width and height for local images */}
                    <Image src={logo} alt="DAYF Booking Logo" className="font-bold text-lg text-gray-800" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
                    <Link href="/" className="hover:text-primary transition-colors">Hotels</Link>
                    <Link href="/" className="hover:text-primary transition-colors">House</Link>
                    <Link href="/" className="hover:text-primary transition-colors">About Us</Link>
                    <Link href="/" className="hover:text-primary transition-colors">Contact Us</Link>
                </nav>
            </div>

            {/* Right section: Currency, Language, List Property, User */}
            <div className="flex items-center space-x-2 sm:space-x-4">
                {/* Currency Dropdown (Desktop only) */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="hidden md:flex items-center text-gray-700 cursor-pointer">
                            $ <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>USD</DropdownMenuItem>
                        <DropdownMenuItem>EUR</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* Language Dropdown (Desktop only) */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="hidden md:flex items-center text-gray-700 cursor-pointer">
                            {/* Ensure you provide width and height for local images */}
                            <Image src={spain} alt="Spanish Flag" width={20} height={15} className="mr-1 rounded" />
                            <ChevronDown className="ml-1 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>English</DropdownMenuItem>
                        <DropdownMenuItem>Spanish</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                {/* List your property Button (Desktop only) */}
                <Button variant="outline" className="hidden md:flex items-center space-x-2 text-primary-foreground bg-primary cursor-pointer">
                    <span>List your property</span>
                    <Search className="h-4 w-4" />
                </Button>

                {/* Mobile Search Button (Visible only on mobile) */}
                <Button variant="ghost" size="icon" className="md:hidden text-gray-700">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                </Button>

                {/* User Dropdown */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="rounded-full h-9 w-9 p-0 flex items-center justify-center">
                            <Avatar className="h-8 w-8 border border-gray-300 cursor-pointer">
                                <AvatarImage src="/images/user-avatar.png" alt="User Avatar" /> {/* Placeholder */}
                                <AvatarFallback className="text-sm font-medium text-gray-600 bg-gray-200"><User /></AvatarFallback>
                            </Avatar>
                            <span className="sr-only">Open user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Bookings</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}