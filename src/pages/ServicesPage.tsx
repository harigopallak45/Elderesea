import { EmergencyBanner } from '@/components/sections/EmergencyBanner';
import { Services } from '@/components/sections/Services';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';

export function ServicesPage() {
  return (
    <>
      <EmergencyBanner />
      <Services />
      <Features />
      <Testimonials />
    </>
  );
}
