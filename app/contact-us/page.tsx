const ContactUs: React.FC = () => {
    return (
      <section className="py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <form className="max-w-xl mx-auto">
          <label className="block mb-2" htmlFor="name">Name:</label>
          <input className="w-full p-2 mb-4 border rounded" type="text" id="name" name="name" required />
  
          <label className="block mb-2" htmlFor="email">Email:</label>
          <input className="w-full p-2 mb-4 border rounded" type="email" id="email" name="email" required />
  
          <label className="block mb-2" htmlFor="message">Message:</label>
          <textarea className="w-full p-2 mb-4 border rounded" id="message" name="message" required></textarea>
  
          <button className="w-full p-2 bg-blue-600 text-white rounded">Send Message</button>
        </form>
      </section>
    );
  };
  
  export default ContactUs;
  