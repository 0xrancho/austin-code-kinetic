import React, { useState, useRef, useEffect } from 'react';
  import { Button } from '@/components/ui/button';
  import { AutoGrowTextarea } from '@/components/ui/auto-grow-textarea';
  import { Card } from '@/components/ui/card';
  import { Send, Bot, User, Loader2, MessageSquarePlus } from 'lucide-react';
  import { cn } from '@/lib/utils';
  import { useIsMobile } from '@/hooks/use-mobile';

  interface Message {
    id: string;
    content: string;
    sender: 'user' | 'gabi';
    timestamp: Date;
  }

  interface ChatInterfaceProps {
    onInputFocus?: () => void;
    isFullScreen?: boolean;
  }

  // Function to get conversation starters
  const getConversationStarters = () => [
    {
      label: "💡 Explore AI for my business",
      message: "I'm exploring AI automation for my business",
      intent: "discovery"
    },
    {
      label: "🤖 Learn about GABI",
      message: "Tell me about yourself, GABI",
      intent: "demo"
    },
    {
      label: "📅 Book time with Joel",
      message: "I'd like to schedule a meeting",
      intent: "booking"
    }
  ];

  const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
    onInputFocus, 
    isFullScreen = false 
  }) => {
    const [messages, setMessages] = useState<Message[]>([
      {
        id: '1',
        content: "Hi! I'm GABI, Joel's AI assistant.",
        sender: 'gabi',
        timestamp: new Date()
      }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [sessionId, setSessionId] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
      scrollToBottom();
    }, [messages]);

    const handleStarterClick = (starterMessage: string) => {
      handleSendMessage(starterMessage);
    };

    const handleSendMessage = async (messageToSend?: string) => {
      const messageContent = messageToSend || inputValue.trim();
      if (!messageContent) return;

      // Validate and process the message
      const validation = validateMessage(messageContent);

      // If message is blocked, show error and return
      if (validation.isBlocked) {
        const errorMessage: Message = {
          id: Date.now().toString(),
          content: validation.notification!,
          sender: 'gabi',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
        setInputValue('');
        return;
      }

      const userMessage: Message = {
        id: Date.now().toString(),
        content: validation.processedMessage,
        sender: 'user',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);

      // Show truncation notification if message was trimmed
      if (validation.notification) {
        const notificationMessage: Message = {
          id: (Date.now() + 0.5).toString(),
          content: `ℹ️ ${validation.notification}`,
          sender: 'gabi',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, notificationMessage]);
      }

      setInputValue('');
      setIsLoading(true);

      try {
      // Convert your messages to OpenAI format for the API
      const openaiMessages = [
        ...messages.map(msg => ({
          role: msg.sender === 'user' ? 'user' as const : 'assistant' as const,
          content: msg.content
        })),
        {
          role: 'user' as const,
          content: userMessage.content
        }
      ];

      const response = await fetch('https://gabi-intelligence.vercel.app/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: openaiMessages,
          sessionId: sessionId  // Send current sessionId (null for first message)
        })
      });

      const data = await response.json();

      // Always update sessionId from response
      if (data.sessionId) {
        setSessionId(data.sessionId);
      }

      const gabiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message, // Your API returns { message: "..." }
        sender: 'gabi',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, gabiResponse]);
    } catch (error) {
      console.error('Error calling GABI API:', error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        sender: 'gabi',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

    // Security validation utility with auto-truncation
    const validateMessage = (message: string): { processedMessage: string; notification?: string; isBlocked: boolean } => {
      let processedMessage = message;
      let notification: string | undefined;

      // Auto-truncate messages at 1500 characters
      if (message.length > 1500) {
        processedMessage = message.substring(0, 1497) + "...";
        notification = "Message was trimmed to 1500 characters";
      }

      // Prompt injection patterns (case-insensitive)
      const suspiciousPatterns = [
        /forget.*previous.*instructions?/i,
        /ignore.*previous.*instructions?/i,
        /(debug|admin|qa|dev|test)\s*mode/i,
        /show.*system.*prompt/i,
        /list.*all.*(data|files|commands)/i,
        /you.*are.*now.*(assistant|ai|bot)/i,
        /act.*as.*(different|new)/i,
        /pretend.*you.*are/i,
        /role.*play.*as/i,
        /simulate.*being/i,
        /bypass.*safety/i,
        /override.*instructions/i,
        /jailbreak/i,
        /system.*instructions/i,
        /\[.*system.*\]/i,
        /```.*system/i,
        /<.*system.*>/i,
      ];

      for (const pattern of suspiciousPatterns) {
        if (pattern.test(processedMessage)) {
          return {
            processedMessage: "",
            notification: "Your message contains patterns that aren't allowed. Please rephrase your question.",
            isBlocked: true
          };
        }
      }

      return { processedMessage, notification, isBlocked: false };
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
    };

    const handleInputFocus = () => {
      if (onInputFocus) {
        onInputFocus();
      }
    };

    return (
      <div className={cn(
        "flex flex-col h-full",
        isFullScreen ? "max-w-none" : "max-w-4xl mx-auto"
      )}>
        {/* Chat Messages */}
        <div className={cn(
          "flex-1 overflow-y-auto space-y-4",
          isFullScreen ? "p-4 pb-safe" : "p-4"
        )}>
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

          {/* Show conversation starters after opening message */}
          {messages.length === 1 && messages[0].sender === 'gabi' && (
            <div className="flex flex-col gap-2 mt-4 pl-11">
              <p className="text-sm text-muted-foreground mb-2">How can I help you today?</p>
              <div className="flex flex-col gap-2">
                {getConversationStarters().map(starter => (
                  <Button
                    key={starter.intent}
                    onClick={() => handleStarterClick(starter.message)}
                    disabled={isLoading}
                    variant="outline"
                    className="justify-start text-left h-auto py-3 px-4 bg-black text-white border-gray-600 hover:bg-gray-800 hover:text-pink-400 hover:border-pink-400 transition-colors"
                  >
                    {starter.label}
                  </Button>
                ))}
              </div>
            </div>
          )}

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
        <div className={cn(
          "bg-muted rounded-lg border",
          isFullScreen ? "p-4 pb-safe" : "p-4"
        )}>
          <div className="flex gap-2">
            <AutoGrowTextarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={handleInputFocus}
              placeholder={isFullScreen && isMobile ? "Or you can say, \"Hi I'm Bob\"" : "Or you can say, \"Hi I'm Bob\""}
              className={cn(
                "flex-1 bg-muted text-gray-200 border-none !border-none outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none placeholder:text-gray-500",
                isFullScreen && isMobile ? "min-h-[48px]" : ""
              )}
              disabled={isLoading}
            />
            <Button 
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isLoading}
              size="icon"
              className="bg-black text-white hover:bg-gray-800 hover:text-pink-400 border border-gray-600 hover:border-pink-400 transition-colors"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  };

  export default ChatInterface;
