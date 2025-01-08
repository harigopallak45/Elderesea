import { useState, useEffect } from 'react';
import { MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabase';

export function AIChat() {
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{ message: string; isBot: boolean }>>([]);
  const { user } = useAuth();

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory(prev => [...prev, { message, isBot: false }]);
    
    try {
      // Only store in database if user is authenticated
      if (user) {
        await supabase.from('chat_history').insert([
          { user_id: user.id, message, is_bot: false }
        ]);
      }

      // Get AI response
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{
            role: "user",
            content: message
          }]
        })
      });

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;

      // Store AI response if user is authenticated
      if (user) {
        await supabase.from('chat_history').insert([
          { user_id: user.id, message: aiResponse, is_bot: true }
        ]);
      }

      // Add AI response to chat
      setChatHistory(prev => [...prev, { message: aiResponse, isBot: true }]);
    } catch (error) {
      console.error('Error:', error);
      // Add fallback response
      setChatHistory(prev => [...prev, { 
        message: "I apologize, but I'm having trouble connecting to the server. Please try again later.", 
        isBot: true 
      }]);
    }

    setMessage('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button
        className="fixed bottom-4 right-4 rounded-full p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover-scale hover-glow animate-pulse"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-blue-600">
            <MessageSquare className="h-5 w-5" />
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
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
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
              className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button 
              onClick={handleSendMessage} 
              className="hover-scale bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}