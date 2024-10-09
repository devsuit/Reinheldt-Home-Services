import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-200 h-screen flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-image.png"
          alt="Home Services Hero"
          layout="fill"
          objectFit="cover"
          priority={true}
          className="brightness-50"
        />
      </div>
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold">Welcome to Home Services</h1>
        <p className="mt-4 text-lg">High-quality home care and cleaning services at your doorstep.</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
