// app/components/useTranslation.tsx
'use client';

import { usePathname } from 'next/navigation';  // To get the current path
import enTranslations from '../public/locales/en/common.json';
import deTranslations from '../public/locales/de/common.json';

// Helper function to determine locale based on path
const getLocaleFromPathname = (pathname: string) => {
  const firstSegment = pathname.split('/')[1];
  return firstSegment === 'de' ? 'de' : 'en';  // Default to 'en' if not 'de'
};

const useTranslation = () => {
  const pathname = usePathname();  // Get current path
  const locale = getLocaleFromPathname(pathname);  // Determine locale

  const translations = locale === 'de' ? deTranslations : enTranslations;
  return translations;
};

export default useTranslation;
