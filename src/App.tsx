// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/sections/Footer';
import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { BookingPage } from '@/pages/BookingPage';
import { DoctorsPage } from '@/pages/DoctorsPage';
import { BlogPage } from '@/pages/BlogPage';
import { CareerPage } from '@/pages/CareerPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book" element={<BookingPage />} />
            <Route path="/doctors" element={<DoctorsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/careers" element={<CareerPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
