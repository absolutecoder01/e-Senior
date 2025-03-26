import React from 'react';
import { ReturnButton } from '../ReturnButton';
import { Camera, Lock, Smile, CheckCircle } from "lucide-react";

export const GoogleCourse = () => {
  return (
    // bg-white shadow-lg rounded-lg border border-gray-200
    <div className="max-w-4xl mx-auto px-4 py-8 ">
      <div className="px-5 mb-5">
        <ReturnButton />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Kurs Google</h1>

      <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-4"> <Smile className="inline-block mr-2 text-blue-500" />  Wprowadzenie do Google</h2>
        <p className="text-lg text-gray-600">
          Google to wyszukiwarka, która pomaga znajdować informacje, korzystać z map oraz tworzyć dokumenty.
        </p>
      </section>

      <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-4"> <Camera className="inline-block mr-2 text-purple-500" /> Krok po kroku: Jak korzystać z Google</h2>
        <ol className="list-decimal list-inside text-lg text-gray-600">
          <li>Otwórz Google w swojej przeglądarce.</li>
          <li>Wpisz zapytanie w pasku wyszukiwania i naciśnij Enter.</li>
          <li>Skorzystaj z Map Google, aby znaleźć lokalizacje i uzyskać wskazówki dojazdu.</li>
          <li>Twórz i edytuj dokumenty w Google Docs.</li>
        </ol>
      </section>

      <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-4"> <Lock className="inline-block mr-2 text-red-500" />Bezpieczeństwo i Prywatność</h2>
        <p className="text-lg text-gray-600">
          Zachowaj ostrożność podczas udostępniania informacji w internecie i używaj silnych haseł do swojego konta Google.
        </p>
      </section>

      <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-4"> <CheckCircle className="inline-block mr-2 text-green-500" /> Ćwiczenia Interaktywne</h2>
        <p className="text-lg text-gray-600">
          Spróbuj wyszukać coś w Google i utworzyć dokument w Google Docs.
        </p>
      </section>

      <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz</h2>
        <p className="text-lg text-gray-600 mb-4">Sprawdź swoją wiedzę, odpowiadając na poniższe pytania:</p>
        <div className="space-y-4">
          <p className="text-lg text-gray-600">1. Jak wyszukać informacje w Google?</p>
          <p className="text-lg text-gray-600">2. Do czego służy Google Docs?</p>
        </div>
      </section>
    </div>
  );
};