import { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { supabase } from '@/lib/supabase';

const AI_RESPONSES = {
  booking: "To book an appointment, please provide your preferred date, time, and type of service. Our available services include general checkup, specialist consultation, and home care.",
  emergency: "For medical emergencies, please call our 24/7 emergency hotline at 1800-XXX-XXX or use the emergency button in our app.",
  medication: "For medication delivery, upload your prescription through the app or website. We deliver within 2-4 hours in most areas.",
  services: "We offer various healthcare services including home nursing, physiotherapy, medical equipment rental, and telemedicine consultations.",
  default: "How can I assist you with your healthcare needs today?"
};

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ message: string; isBot: boolean }>>([]);

  const getAIResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('book') || lowerMessage.includes('appointment')) {
      return AI_RESPONSES.booking;
    } else if (lowerMessage.includes('emergency')) {
      return AI_RESPONSES.emergency;
    } else if (lowerMessage.includes('medicine') || lowerMessage.includes('medication')) {
      return AI_RESPONSES.medication;
    } else if (lowerMessage.includes('service')) {
      return AI_RESPONSES.services;
    }
    return AI_RESPONSES.default;
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    // Add user message
    setChatHistory(prev => [...prev, { message, isBot: false }]);
    
    // Get AI response
    const aiResponse = getAIResponse(message);
    
    // Save to database
    await supabase.from('chat_history').insert([
      { message, is_bot: false },
      { message: aiResponse, is_bot: true }
    ]);

    setMessage('');
    
    // Add AI response with delay for natural feel
    setTimeout(() => {
      setChatHistory(prev => [...prev, { message: aiResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full p-4 hover-scale hover-glow animate-pulse"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Healthcare Assistant
            </DialogTitle>
          </DialogHeader>

          <div className="h-[400px] overflow-y-auto p-4 space-y-4">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`flex ${chat.isBot ? 'justify-start' : 'justify-end'} animate-slide-up`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    chat.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-primary text-white'
                  }`}
                >
                  {chat.message}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} className="hover-scale">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}