import React from 'react';
import { ReturnButton } from '../ReturnButton';
import FacebookLogin from '../loginsimulations/FacebookLogin';
import { Camera, Lock, Smile, CheckCircle } from "lucide-react";
export const FacebookCourse = () => {
  return (
    // bg-white shadow-lg rounded-lg border border-gray-200
    <div className="max-w-4xl mx-auto px-4 py-8 ">
      <div className="px-5 mb-5">
        <ReturnButton />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Kurs Facebooka</h1>

      <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-4"> <Smile className="inline-block mr-2 text-blue-500" /> Wprowadzenie do Facebooka</h2>
        <p className="text-lg text-gray-600">
          Facebook to platforma społecznościowa, na której możesz połączyć się ze znajomymi, udostępniać posty i dołączać
          do grup.
        </p>
      </section>

      <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">  <Camera className="inline-block mr-2 text-purple-500" /> Krok po kroku: Jak korzystać z Facebooka</h2>
        <ol className="list-decimal list-inside text-lg text-gray-600">
          <li>Otwórz Facebooka w przeglądarce.</li>
          <li>Zaloguj się na swoje konto lub utwórz nowe.</li>
          <li>Dodaj znajomych, wyszukując ich po imieniu.</li>
          <li>Udostępniaj posty, zdjęcia lub filmy na swoim profilu.</li>
        </ol>
      </section>

      <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-4"> <Lock className="inline-block mr-2 text-red-500" /> Bezpieczeństwo i Prywatność</h2>
        <p className="text-lg text-gray-600">
          Dostosuj ustawienia prywatności, aby kontrolować, kto może zobaczyć Twoje posty. Unikaj akceptowania zaproszeń
          do znajomych od nieznajomych.
        </p>
      </section>

      <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-4"> <CheckCircle className="inline-block mr-2 text-green-500" />Ćwiczenia Interaktywne</h2>
        <p className="text-lg text-gray-600">Spróbuj dodać znajomego i udostępnić post na swoim profilu.</p>
      </section>

      <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz</h2>
        <p className="text-lg text-gray-600 mb-4">Sprawdź swoją wiedzę, odpowiadając na poniższe pytania:</p>
        <div className="space-y-4">
          <p className="text-lg text-gray-600">1. Jak można dodać znajomego na Facebooku?</p>
          <p className="text-lg text-gray-600">2. Co należy wziąć pod uwagę podczas udostępniania posta?</p>
        </div>
      </section>

      <FacebookLogin />
    </div>
  );
};