import { motion } from 'framer-motion';
import { Brain, Clock, Smartphone, Bell, Gift } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Health Monitoring',
    description: 'Keep track of vital signs and health records with our smart monitoring devices.',
  },
  {
    icon: Clock,
    title: 'Personalized Health Plans',
    description: 'Custom wellness packages tailored to individual needs and preferences.',
  },
  {
    icon: Smartphone, // Changed from Mobile to Smartphone
    title: 'Mobile App',
    description: 'Book services, track appointments, and access medical reports seamlessly.',
  },
  {
    icon: Bell,
    title: 'Emergency Alerts',
    description: 'Quick response systems to handle emergencies promptly.',
  },
  {
    icon: Gift,
    title: 'Loyalty Rewards',
    description: 'Earn points for every booking and referral, redeemable for discounts.',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Exciting Features</h2>
          <p className="text-gray-600">Experience healthcare reimagined with our innovative features</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}