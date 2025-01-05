import { Phone, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function EmergencyBanner() {
  return (
    <div className="bg-red-500 text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <AlertCircle className="h-5 w-5" />
          <span className="font-medium">24/7 Emergency Service Available</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="bg-white text-red-500 hover:bg-red-50"
          onClick={() => window.location.href = 'tel:+18007894567'}
        >
          <Phone className="h-4 w-4 mr-2" />
          +1800 789 4567
        </Button>
      </div>
    </div>
  );
}