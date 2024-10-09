import Hero from './components/Hero';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div className="flex justify-around mt-8">
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold">Home Care</h3>
            <p>Includes electrician, plumber, furniture assembly, and more.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold">Cleaners</h3>
            <p>Home and office cleaning at your convenience.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
