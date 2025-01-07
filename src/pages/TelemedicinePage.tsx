import { motion } from 'framer-motion';
import { Video, Calendar, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TelemedicinePage() {
  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-8">Virtual Consultations</h1>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Video className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Video Consultations</h3>
            <p className="text-gray-600 mb-4">Connect with doctors face-to-face from your home</p>
            <Button className="w-full">Schedule Call</Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Calendar className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Appointment Booking</h3>
            <p className="text-gray-600 mb-4">Book your slot at your convenience</p>
            <Button className="w-full">Book Now</Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <MessageSquare className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Chat Support</h3>
            <p className="text-gray-600 mb-4">24/7 chat support for medical queries</p>
            <Button className="w-full">Start Chat</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}