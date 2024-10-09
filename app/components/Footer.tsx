import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p>© 2024 Home Services | All Rights Reserved.</p>
      <p className="mt-2">
        <Link href="/about/legal">Legal</Link> | 
        <Link href="/about/privacy-policy">Privacy Policy</Link> | 
        <Link href="/about/terms">Terms & Conditions</Link>
        <Link href="/about/cookies">Cookies</Link>

      </p>
    </footer>
  );
};

export default Footer;
