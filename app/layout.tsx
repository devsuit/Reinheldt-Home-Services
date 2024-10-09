import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Reinheldt Home Services',
  description: 'High-quality home care and cleaning services',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
