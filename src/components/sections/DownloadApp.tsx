import { motion } from 'framer-motion';
import { Phone, Apple, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DownloadApp() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Download ElderEsea App</h2>
            <p className="text-lg mb-8 text-white/90">
              Get instant access to healthcare services, book appointments, and track your health records
              all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary hover:bg-primary hover:text-white"
              >
                <Apple className="h-5 w-5 mr-2" />
                App Store
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary hover:bg-primary hover:text-white"
              >
                <PlayCircle className="h-5 w-5 mr-2" />
                Play Store
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=600"
              alt="ElderEsea Mobile App"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-800">Book Instantly</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}