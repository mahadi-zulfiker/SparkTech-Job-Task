import Image from "next/image";
import Link from "next/link";
import {
  Twitter,
  Facebook,
  Instagram,
  Github,
  Phone,
  Mail,
  MapPin,
  RectangleGogglesIcon,
  AppleIcon,
  ChromeIcon,
} from "lucide-react";
import logo from "../../public/LOGO.jpg";

export function Footer() {
  return (
    <footer className="bg-[#003B6D] text-white py-12 px-4 sm:px-6 md:px-8 rounded-t-xl">
      {" "}
      {/* Adjusted background color and added rounded top */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
        {/* Left Section: Logo, Description, Socials, Address */}
        <div className="flex flex-col items-start md:col-span-1 lg:col-span-2">
          <Link href="/" className="mb-4">
            {/* Assuming dayf-logo-white.png exists in public/images */}
            <Image
              src={logo}
              alt="DAYF Booking Logo"
              width={120}
              height={30}
              className="h-auto"
            />{" "}
            {/* Adjusted width/height based on screenshot */}
          </Link>
          <p className="text-sm mb-6 max-w-sm text-gray-200 leading-relaxed">
            DayF Booking makes booking your next stay easy, affordable, and
            stress-free. With thousands of hotels worldwide, exclusive deals,
            and secure payment options, we're here to help you find the perfect
            place to stay, every time.
          </p>
          <div className="flex space-x-4 mb-6">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm flex items-center text-gray-200">
            <MapPin className="h-4 w-4 mr-2 text-gray-300" /> 123 Travel St,
            Suite 100, City, Country
          </p>
        </div>

        {/* Middle Section: Navigation and Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-4 md:col-span-2 lg:col-span-1">
          {/* Navigation Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {" "}
              {/* Increased space-y for better readability */}
              <li>
                <Link
                  href="/"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/hotels"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  href="/deals"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Deals
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              {" "}
              {/* Increased space-y for better readability */}
              <li className="flex items-center text-gray-200">
                <Phone className="h-4 w-4 mr-2 text-gray-300" /> +1 (555)
                123-4567
              </li>
              <li className="flex items-center text-gray-200">
                <Mail className="h-4 w-4 mr-2 text-gray-300" />{" "}
                support@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Download App */}
        <div className="flex flex-col items-start md:items-end md:col-span-3 lg:col-span-1 mt-8 md:mt-0">
          {" "}
          {/* Adjusted alignment and margin-top */}
          <h4 className="font-semibold text-lg mb-4 text-white">
            Download Our App
          </h4>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6 w-full md:w-auto">
            {" "}
            {/* Stack on small screens, row on sm+ */}
            <a
              href="#"
              aria-label="Download on Google Play"
              className="block w-full sm:w-auto"
            >
              <ChromeIcon />
            </a>
            <a
              href="#"
              aria-label="Download on App Store"
              className="block w-full sm:w-auto"
            >
              <AppleIcon />
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-auto text-left md:text-right w-full">
            &copy; {new Date().getFullYear()}, All Rights Reserved
          </p>{" "}
          {/* Adjusted text alignment */}
        </div>
      </div>
    </footer>
  );
}
