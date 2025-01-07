import { motion } from 'framer-motion';
import { Ambulance, Phone, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function EmergencyCarePage() {
  return (
    <div className="py-20 px-4 bg-red-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-600 mb-4">Emergency Services</h1>
          <p className="text-xl text-gray-700">24/7 Emergency Medical Support</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Ambulance className="h-16 w-16 text-red-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Ambulance Service</h2>
            <p className="text-gray-600 mb-6">Quick response emergency medical transportation</p>
            <Button className="w-full bg-red-600 hover:bg-red-700">
              <Phone className="mr-2 h-4 w-4" />
              Call Ambulance
            </Button>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <AlertTriangle className="h-16 w-16 text-yellow-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Emergency Care</h2>
            <p className="text-gray-600 mb-6">Immediate medical attention at your doorstep</p>
            <Button className="w-full">Request Emergency Care</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}