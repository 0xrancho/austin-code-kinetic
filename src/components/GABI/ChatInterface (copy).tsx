import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'gabi';
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm GABI, Joel's AI assistant. I'm here to help you learn more about Joel's background, services, and expertise. What would you like to know?",
      sender: 'gabi',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const gabiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getGabiResponse(userMessage.content),
        sender: 'gabi',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, gabiResponse]);
      setIsLoading(false);
    }, 1000 + Math.random() * 1000);
  };

  const getGabiResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('service') || input.includes('what does joel do')) {
      return "Joel offers two main services:\n\n1. **Lehitgashem ($800)** - Ideation enrichment coaching to help turn your ideas into reality\n\n2. **AI Enablement (From $2,400+)** - Custom workflow optimization and generative AI automations, including team GPT assistance, custom RAG applications, and enterprise AI infrastructure.\n\nWould you like to know more about either of these services?";
    }
    
    if (input.includes('ai') || input.includes('artificial intelligence')) {
      return "Joel specializes in AI enablement and automation! He helps businesses integrate AI into their workflows through:\n\n• Custom AI automations and workflow optimization\n• Team GPT assistance and support\n• Custom RAG (Retrieval-Augmented Generation) applications\n• Enterprise AI infrastructure design\n• Full productization and white-labeling solutions\n\nHe's passionate about making AI accessible and practical for businesses of all sizes.";
    }
    
    if (input.includes('background') || input.includes('experience') || input.includes('about joel')) {
      return "Joel is a father of 5 who specializes in AI enablement and RevOps (Revenue Operations). He combines his technical expertise with business acumen to help companies leverage AI for growth and efficiency.\n\nHis background spans across revenue operations, process optimization, and cutting-edge AI implementation. He's particularly passionate about helping businesses transform their operations through intelligent automation.";
    }
    
    if (input.includes('contact') || input.includes('schedule') || input.includes('meet')) {
      return "You can schedule a 1-on-1 session with Joel through his Calendly link: https://calendly.com/joelaustin/30min\n\nYou can also connect with him on:\n• LinkedIn: https://linkedin.com/in/joelaustin121\n• Twitter: https://twitter.com/joelaustin121\n• Or check out his Riffusion project: https://riffusion.com\n\nWould you like me to help you with anything else about Joel's services?";
    }
    
    if (input.includes('lehitgashem') || input.includes('coaching') || input.includes('ideation')) {
      return "Lehitgashem is Joel's $800 ideation enrichment coaching service. The name means 'to make it happen' in Hebrew, which perfectly captures what this service is about.\n\nThis coaching helps you:\n• Transform abstract ideas into concrete, actionable plans\n• Overcome creative blocks and mental barriers\n• Develop systematic approaches to innovation\n• Turn concepts into reality through structured guidance\n\nIt's perfect for entrepreneurs, creators, and anyone looking to bring their vision to life. Would you like to schedule a session to discuss your ideas?";
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('pricing')) {
      return "Here's Joel's pricing structure:\n\n**Lehitgashem**: $800 for ideation enrichment coaching\n\n**AI Enablement**: Starting from $2,400+ with various tiers:\n• Team GPT Assistance: $200/month\n• Custom RAG Applications: $10K-25K\n• Enterprise AI Infrastructure: Custom quote\n• Full productization and white-labeling: Custom quote\n\nPricing varies based on scope and complexity. I'd recommend scheduling a consultation to discuss your specific needs!";
    }
    
    if (input.includes('riffusion') || input.includes('project')) {
      return "Riffusion is one of Joel's notable projects! It's an innovative AI-powered music generation tool that creates music from text prompts. You can check it out at https://www.riffusion.com/0xDisco\n\nThis project showcases Joel's expertise in cutting-edge AI applications and his ability to build consumer-facing AI products. It's a great example of how he combines technical AI knowledge with practical, user-friendly implementations.";
    }
    
    // Default response
    return "I'd be happy to help you learn more about Joel! I can tell you about his services (Lehitgashem coaching and AI Enablement), his background in AI and RevOps, his projects like Riffusion, or help you get in touch with him.\n\nWhat specifically would you like to know more about?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={cn(
              "flex items-start gap-3",
              message.sender === 'user' ? "justify-end" : "justify-start"
            )}
          >
            {message.sender === 'gabi' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
            )}
            
            <Card className={cn(
              "max-w-[80%] p-4",
              message.sender === 'user' 
                ? "bg-primary text-primary-foreground ml-12" 
                : "bg-muted"
            )}>
              <div className="whitespace-pre-wrap text-sm leading-relaxed">
                {message.content}
              </div>
              <div className={cn(
                "text-xs mt-2 opacity-70",
                message.sender === 'user' ? "text-primary-foreground/70" : "text-muted-foreground"
              )}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </Card>
            
            {message.sender === 'user' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        ))}
        
        {isLoading && (
          <div className="flex items-start gap-3 justify-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <Card className="bg-muted p-4">
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm text-muted-foreground">GABI is thinking...</span>
              </div>
            </Card>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input Area */}
      <div className="border-t bg-background p-4">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask GABI anything about Joel's services, background, or expertise..."
            className="flex-1"
            disabled={isLoading}
          />
          <Button 
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isLoading}
            size="icon"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;

