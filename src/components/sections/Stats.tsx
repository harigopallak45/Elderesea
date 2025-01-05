import { motion } from 'framer-motion';
import { Award, Building2, Users, Heart } from 'lucide-react';

const stats = [
  {
    icon: Award,
    title: "India's Most Trusted",
    value: '#1',
    description: 'Home Healthcare Provider',
  },
  {
    icon: Building2,
    title: 'Hospital Partnerships',
    value: '60+',
    description: 'Leading Institutions',
  },
  {
    icon: Users,
    title: 'Annual Patient Visits',
    value: '10L+',
    description: 'Successful Consultations',
  },
  {
    icon: Heart,
    title: 'Lives Touched',
    value: '15L+',
    description: 'Happy Patients',
  },
];

export function Stats() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
          <p className="text-primary-foreground/80">Numbers that speak for themselves</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="font-semibold mb-1">{stat.title}</div>
              <div className="text-sm text-primary-foreground/80">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}