import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, Loader2 } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const commonQuestions = [
  {
    id: 'q1',
    question: 'Jak mogę stworzyć silne hasło?',
    category: 'security'
  },
  {
    id: 'q2',
    question: 'Jak się dowiedzieć czy email jest fake\'owy?',
    category: 'security'
  },
  {
    id: 'q3',
    question: 'Jak korzystać z messengera?',
    category: 'communication'
  },
  {
    id: 'q4',
    question: 'Jak mogę podzielić się zdjęciami z rodziną?',
    category: 'social'
  }
];

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognition = useRef<SpeechRecognition | null>(null);

  // Initialize Google Generative AI
  const genAI = new GoogleGenerativeAI("AIzaSyBYReYENzj9kLgqKN0F6Xx5eASwJLTuJ6M"); // Replace with your actual API key
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      recognition.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;
      
      recognition.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognition.current.onerror = () => {
        setIsListening(false);
      };
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const callGeminiAPI = async (questionText: string) => {
    try {
      const result = await model.generateContent(questionText);
      return result.response.text(); // Adjust based on the actual response structure
    } catch (error) {
      throw new Error('Nie udało się pobrać odpowiedzi z Gemini API');
    }
  };
  

  const handleSubmit = async (questionText: string) => {
    if (!questionText.trim()) return;
  
    setError(null);
    setIsLoading(true);
    setMessages(prev => [...prev, { type: 'user', content: questionText, timestamp: new Date() }]);
    setInput('');
  
    try {
      const generatedText = await callGeminiAPI(questionText);
  
      setMessages(prev => [...prev, {
        type: 'assistant',
        content: generatedText || 'Przepraszam, ale nie udało mi się wygenerować pomocnej odpowiedzi. Spróbuj sformułować pytanie inaczej.',
        timestamp: new Date()
      }]);
    } catch (err) {
      setError('Przepraszamy, mam problem z połączeniem się z usługą AI. Spróbuj ponownie później lub sprawdź naszą sekcję samouczków, aby uzyskać pomoc.');
    } finally {
      setIsLoading(false);
    }
  };
  
  const renderResponse = (content: string) => {
    // Wyrażenie regularne, które dzieli tekst na sekcje wyróżnione i listy punktowane
    const sections = content.split(/(\*\*\*.*?\*\*\*|\*\*.*?\*\*|\*.*?\n|\*.*?$)/g).map((section, index) => {
      if (section.startsWith("***") && section.endsWith("***")) {
        // Trzy gwiazdki - mocno wyróżnione
        return (
          <div key={index} className="mb-2">
            <strong className="text-red-600">{section.slice(3, -3).trim()}</strong>
          </div>
        );
      } else if (section.startsWith("**") && section.endsWith("**")) {
        // Dwie gwiazdki - wyróżnione
        return (
          <div key={index} className="mb-2">
            <strong className="text-blue-600">{section.slice(2, -2).trim()}</strong>
          </div>
        );
      } else if (section.startsWith("*")) {
        // Pojedyncza gwiazdka - lista punktowana
        return (
          <div key={index} className="mb-1">
            <li className="list-none list-inside">{section.slice(1).trim()}</li>
          </div>
        );
      } else {
        // Normalny tekst
        return (
          <div key={index} className="mb-2">
            <p className="text-base">{section.trim()}</p>
          </div>
        );
      }
    });
  
    return (
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Odpowiedź: </h3>
        <ul className="ml-4">{sections}</ul>
      </div>
    );
  };
  
  const toggleVoiceInput = () => {
    if (!recognition.current) {
      setError('Voice input is not supported in your browser.');
      return;
    }

    if (isListening) {
      recognition.current.stop();
    } else {
      setError(null);
      recognition.current.start();
    }
    setIsListening(!isListening);
  };

  // Inside AIAssistant component
return (
  <div className="max-w-4xl mx-auto p-4 space-y-6">
    {/* <div className="bg-white rounded-xl shadow-lg p-6"> */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Asystent AI</h2>
      
      {/* Common Questions */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Często zadawane pytania</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {commonQuestions.map((q) => (
            <button
              key={q.id}
              onClick={() => handleSubmit(q.question)}
              className="text-left p-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors duration-200 text-base"
            >
              {q.question}
            </button>
          ))}
        </div>
      </div>

      {/* Messages Display */}
      <div className="p-4 mb-4 h-96 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.type === 'user' ? 'flex justify-end' : 'flex justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-4 ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : ''
              }`}
            >
              {message.type === 'assistant' ? renderResponse(message.content) : (
                <p className="text-base">{message.content}</p>
              )}
              <p className="text-xs mt-2 opacity-70">
                {message.timestamp.toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          {error}
        </div>
      )}

      {/* Input Area */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(input);
        }}
        className="flex items-center gap-2"
      >
        <div className="relative flex-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question here..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12 text-base"
            disabled={isLoading}
          />
          {recognition.current && (
            <button
              type="button"
              onClick={toggleVoiceInput}
              className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full ${
                isListening ? 'text-red-500' : 'text-gray-500'
              } hover:bg-gray-100`}
            >
              <Mic className="h-5 w-5" />
            </button>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Send className="h-5 w-5" />
          )}
          <span className="hidden sm:inline">Wyślij</span>
        </button>
      </form>
  </div>
);
}