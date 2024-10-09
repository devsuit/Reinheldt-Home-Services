// app/components/Navbar.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // from next/navigation
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from './useTranslation'; // your translation hook
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();  // Get the current pathname
  const t = useTranslation();  // Get the translations

  // Function to change language, adjust pathname accordingly
  const changeLanguage = (lang: string) => {
    const newPathname = `/${lang}${pathname.replace(/^\/(en|de)/, '')}`; // Replace first segment with new locale
    router.push(newPathname);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/images/reinheldt-logo.png"
                  alt="Logo"
                  width={140}
                  height={140}
                  className="block h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Menu Items */}
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                {t.home}
              </Link>
              <Link href="/services" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                {t.services}
              </Link>
              <Link href="/contact-us" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                {t.contactUs}
              </Link>
              <Link href="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium">
                {t.about}
              </Link>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-4">
            <button
              className={`text-white ${pathname.startsWith('/en') ? 'font-bold' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              English
            </button>
            <button
              className={`text-white ${pathname.startsWith('/de') ? 'font-bold' : ''}`}
              onClick={() => changeLanguage('de')}
            >
              Deutsch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 focus:outline-none"
            >
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      {open && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium">
            {t.home}
          </Link>
          <Link href="/services" className="text-white block px-3 py-2 rounded-md text-base font-medium">
            {t.services}
          </Link>
          <Link href="/contact-us" className="text-white block px-3 py-2 rounded-md text-base font-medium">
            {t.contactUs}
          </Link>
          <Link href="/about" className="text-white block px-3 py-2 rounded-md text-base font-medium">
            {t.about}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
