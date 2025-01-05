import { motion } from 'framer-motion';
import {
  UserCheck,
  Stethoscope,
  Activity,
  TestTube,
  Heart,
  Baby,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: UserCheck,
    title: 'Trained Professionals',
    description: 'Supporting you with certified and experienced attendants.',
  },
  {
    icon: Stethoscope,
    title: 'Specialized Nursing',
    description: 'Compassionate care for your medical and post-surgical needs.',
  },
  {
    icon: Activity,
    title: 'Rehabilitation Therapy',
    description: 'Personalized physiotherapy sessions designed for recovery.',
  },
  {
    icon: TestTube,
    title: 'Home Diagnostics',
    description: 'Advanced testing solutions delivered right to your doorstep.',
  },
  {
    icon: Heart,
    title: 'Chronic Care',
    description: 'Expert support for long-term health management.',
  },
  {
    icon: Baby,
    title: 'Child & Postpartum Care',
    description: 'Dedicated care for mothers and newborns.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Medical Services Tailored To Your Needs</h2>
          <p className="text-gray-600">
            ElderEsea provides a wide range of healthcare solutions from the comfort of your home
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <button className="text-primary hover:underline">Book Now</button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}