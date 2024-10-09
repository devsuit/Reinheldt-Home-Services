import Link from 'next/link';

const About: React.FC = () => {
  return (
    <section className="py-16 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <p className="text-lg mb-6">
        Learn more about our company, policies, and legal information.
      </p>
      <ul className="list-disc list-inside space-y-4">
        <li><Link href="/about/terms">Terms & Conditions</Link></li>
        <li><Link href="/about/privacy-policy">Data Privacy Policy</Link></li>
        <li><Link href="/about/attribution">Attribution Links & References</Link></li>
        <li><Link href="/about/cookies">Cookies Policy</Link></li>
        <li><Link href="/about/legal">Legal Information</Link></li>
      </ul>
    </section>
  );
};

export default About;
