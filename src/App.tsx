import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/components/auth/AuthProvider';
import { AIChat } from '@/components/chat/AIChat';
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
import { TelemedicinePage } from '@/pages/TelemedicinePage';
import { EmergencyCarePage } from '@/pages/EmergencyCarePage';
import { MedicationDeliveryPage } from '@/pages/MedicationDeliveryPage';
import { Toaster } from '@/components/ui/toaster';
import '@/styles/responsive.css';

const App = () => {
  return (
    <AuthProvider>
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
              <Route path="/telemedicine" element={<TelemedicinePage />} />
              <Route path="/emergency" element={<EmergencyCarePage />} />
              <Route path="/medication" element={<MedicationDeliveryPage />} />
            </Routes>
          </main>
          <AIChat />
          <Footer />
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;