
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm here to help you learn about Mentors Foundation Ghana. I can answer questions about our programs, how to get involved, or anything else you'd like to know!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses: { [key: string]: string } = {
    'programs': "We offer several programs including Education Support, Mentorship, Community Development, and Health & Wellness initiatives. Each program is designed to create lasting impact in Ghanaian communities.",
    'volunteer': "To volunteer with us, you can fill out our volunteer form in the 'Get Involved' section. We welcome volunteers for various activities including mentoring, community outreach, and educational support.",
    'donate': "You can support our mission by donating through our secure donation platform. We accept mobile money (MTN, Vodafone, AirtelTigo), bank transfers, and card payments. Every contribution helps us expand our programs.",
    'contact': "You can reach us at info@mentorsfoundationghana.org or call us at +233 123 456 789. Our office is located in Accra, Ghana.",
    'mission': "Our mission is to empower communities and transform lives through education, mentorship, and sustainable community development across Ghana.",
    'about': "Mentors Foundation Ghana is dedicated to creating positive change through education, mentorship, and community development. We've impacted over 500 lives across 25+ communities.",
    'payment': "We accept multiple payment methods including Mobile Money (MTN, Vodafone, AirtelTigo), direct bank transfers, and credit/debit cards for your convenience.",
    'momo': "Yes! We accept all major mobile money services in Ghana including MTN Mobile Money, Vodafone Cash, and AirtelTigo Money for donations.",
    'default': "I'm here to help! You can ask me about our programs, how to volunteer, donation options, payment methods, our mission, or how to contact us. What would you like to know?"
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('program') || message.includes('initiative')) return botResponses.programs;
    if (message.includes('volunteer') || message.includes('help')) return botResponses.volunteer;
    if (message.includes('donate') || message.includes('donation') || message.includes('money')) return botResponses.donate;
    if (message.includes('contact') || message.includes('phone') || message.includes('email')) return botResponses.contact;
    if (message.includes('mission') || message.includes('vision') || message.includes('goal')) return botResponses.mission;
    if (message.includes('about') || message.includes('who') || message.includes('what')) return botResponses.about;
    if (message.includes('payment') || message.includes('pay')) return botResponses.payment;
    if (message.includes('momo') || message.includes('mobile money')) return botResponses.momo;
    
    return botResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Enhanced Floating Chat Button */}
      {!isOpen && (
        <Button
          className="fixed bottom-40 right-10 h-14 w-14 rounded-full shadow-xl z-50 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-110 animate-bounce"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6 animate-pulse" />
        </Button>
      )}

      {/* Enhanced Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-10 right-6 w-80 h-96 shadow-2xl z-50 flex flex-col animate-scale-in border-primary/20">
          <CardHeader className="pb-3 bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Bot className="h-5 w-5 animate-pulse" />
                Foundation Assistant
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="hover:bg-primary-foreground/20 text-primary-foreground"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
         <CardContent className="flex-1 flex flex-col p-0 overflow-y-auto max-h-[400px]">

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-background to-secondary/20">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 animate-fade-in ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!message.isUser && (
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center center flex-shrink-0 animate-scale-in">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                  )}
                      <div
        className={`max-w-[70%] rounded-lg p-3 text-sm transition-all duration-300 hover:shadow-md overflow-hidden ${
          message.isUser
            ? 'bg-primary text-primary-foreground'
            : 'bg-muted hover:bg-muted/80'
        }`}
      >
        <p className="whitespace-pre-wrap break-words overflow-hidden text-ellipsis">
          {message.text}
        </p>
      </div>


                  {message.isUser && (
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 animate-scale-in">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                  )}
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 justify-start animate-fade-in">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-muted rounded-lg p-3 text-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Enhanced Input Area */}
            <div className="p-4 border-t bg-background">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 transition-all duration-300 focus:ring-2 focus:ring-primary"
                />
                <Button 
                  size="sm" 
                  onClick={handleSendMessage}
                  className="transition-all duration-300 hover:scale-105"
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
