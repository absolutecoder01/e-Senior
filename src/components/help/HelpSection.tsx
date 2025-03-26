import React from 'react';
import { AIAssistant } from './AIAssistant';
import { ReturnButton } from "../ReturnButton";
export function HelpSection() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="px-5 mb-5">
        <ReturnButton />
      </div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Potrzebujesz pomocy?</h2>
        <p className="text-lg text-gray-600">
          Zadaj dowolne pytanie dotyczące technologii, a nasz asystent AI pomoże Ci znaleźć odpowiedź.
        </p>
      </div>

      <AIAssistant />
    </div>
  );
}