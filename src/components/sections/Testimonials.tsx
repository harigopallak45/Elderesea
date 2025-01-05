import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "I felt like I was in the safest hands. The team was professional, empathetic, and extremely attentive. Thank you, ElderEsea!",
    author: "Aarti S.",
    role: "Patient"
  },
  {
    quote: "The convenience of having medical care at home has made a huge difference in my parents' lives. Highly recommended!",
    author: "Rajesh M.",
    role: "Family Member"
  },
  {
    quote: "Professional, punctual, and caring. ElderEsea has set new standards in home healthcare services.",
    author: "Dr. Priya K.",
    role: "Healthcare Partner"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Happy Customers</h2>
          <p className="text-gray-600">Don't just take our word for it—hear from our patients!</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}