import { Facebook, Twitter, Youtube, Instagram, Linkedin, Phone, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-gray-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Our Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Expert Opinions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Media Highlights</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-primary">Elder Care Solutions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Therapeutic Sessions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Home Diagnostics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Medical Equipment</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-gray-600">+1800 789 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-gray-600">support@elderesea.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-600 hover:text-primary"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-600 hover:text-primary"><Youtube className="h-5 w-5" /></a>
              <a href="#" className="text-gray-600 hover:text-primary"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-600 hover:text-primary"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="text-center text-sm text-gray-600">
          <p>Copyright © 2025 ElderEsea Medical. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms & Conditions</a>
            <a href="#" className="hover:text-primary">Patient Rights</a>
          </div>
        </div>
      </div>
    </footer>
  );
}