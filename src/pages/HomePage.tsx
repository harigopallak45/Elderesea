import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Features } from '@/components/sections/Features';
import { Stats } from '@/components/sections/Stats';
import { Testimonials } from '@/components/sections/Testimonials';
import { EmergencyBanner } from '@/components/sections/EmergencyBanner';
import { DownloadApp } from '@/components/sections/DownloadApp';

export function HomePage() {
  return (
    <>
      <EmergencyBanner />
      <Hero />
      <Services />
      <Features />
      <Stats />
      <Testimonials />
      <DownloadApp />
    </>
  );
}