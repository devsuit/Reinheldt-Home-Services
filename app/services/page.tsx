/* const Services: React.FC = () => {
    return (
      <section className="py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold">Home Care</h2>
            <ul className="list-disc ml-4 mt-2">
              <li>Annual Services</li>
              <li>Appliances Repair</li>
              <li>Carpenter</li>
              <li>Clearing Out</li>
              <li>Electrician</li>
              <li>Furniture Assembly</li>
              <li>House Moving</li>
              <li>Installations</li>
              <li>Painters</li>
              <li>Plumber</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Cleaners</h2>
            <ul className="list-disc ml-4 mt-2">
              <li>Home Cleaning</li>
              <li>Office Cleaning</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  */
  import Image from 'next/image';

  const Services: React.FC = () => {
    return (
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <Image
              src="/images/service-electrician.png"
              alt="Electrician Service"
              width={400}
              height={250}
              className="rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Electrician</h3>
            <p className="mt-2">Expert electricians available for all types of electrical repairs.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <Image
              src="/images/service-plumber.png"
              alt="Plumber Service"
              width={400}
              height={250}
              className="rounded-t-lg"
            />
            <h3 className="text-xl font-semibold mt-4">Plumber</h3>
            <p className="mt-2">Get professional plumbing services for any plumbing issues.</p>
          </div>
          {/* Add more services similarly */}
        </div>
      </section>
    );
  };
  
  export default Services;
  