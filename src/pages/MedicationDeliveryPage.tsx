import { motion } from 'framer-motion';
import { Package, Clock, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MedicationDeliveryPage() {
  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-8">Medication Delivery</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Package className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Upload Prescription</h3>
            <p className="text-gray-600 mb-4">Upload your prescription for quick processing</p>
            <Button className="w-full">Upload Now</Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Clock className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
            <p className="text-gray-600 mb-4">Get medicines delivered within 2 hours</p>
            <Button className="w-full">Track Order</Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <CreditCard className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
            <p className="text-gray-600 mb-4">Multiple payment options available</p>
            <Button className="w-full">View Options</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}