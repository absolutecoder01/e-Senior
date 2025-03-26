import React from 'react';
import { ReturnButton } from '../ReturnButton';
import GmailLogin from '../loginsimulations/GmailLogin';

export const GmailCourse = () => {
  return (
    // bg-white shadow-lg rounded-lg border border-gray-200
    <div className="max-w-4xl mx-auto px-4 py-8 ">
      <div className="px-5 mb-5">
        <ReturnButton />
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Kurs Gmaila</h1>

      <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <img src="src/components/gmailGifs/download.GIF" alt="" />
        <img src="src/components/gmailGifs/download1.GIF" alt="" />
        <img src="src/components/gmailGifs/download4.GIF" alt="" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Wprowadzenie do Gmaila</h2>
        <p className="text-lg text-gray-600">
          Gmail to usługa poczty elektronicznej, która umożliwia wysyłanie i odbieranie wiadomości e-mail, zarządzanie skrzynką
          odbiorczą oraz organizowanie wiadomości.
        </p>
      </section>

      <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Krok po kroku: Jak korzystać z Gmaila</h2>
        <ol className="list-decimal list-inside text-lg text-gray-600">
          <li>Otwórz Gmaila w przeglądarce.</li>
          <li>Kliknij "Napisz", aby utworzyć nową wiadomość e-mail.</li>
          <li>Wpisz adres e-mail odbiorcy, temat oraz treść wiadomości.</li>
          <li>Kliknij "Wyślij", aby wysłać wiadomość.</li>
        </ol>
      </section>

      <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Bezpieczeństwo i Prywatność</h2>
        <p className="text-lg text-gray-600">
          Zachowaj ostrożność podczas otwierania wiadomości od nieznanych nadawców i unikaj udostępniania wrażliwych danych
          za pomocą e-maila.
        </p>
      </section>

      <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ćwiczenia Interaktywne</h2>
        <p className="text-lg text-gray-600">
          Spróbuj napisać i wysłać wiadomość e-mail do znajomego lub członka rodziny.
        </p>
      </section>

      <section className="mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quiz</h2>
        <p className="text-lg text-gray-600 mb-4">Sprawdź swoją wiedzę, odpowiadając na poniższe pytania:</p>
        <div className="space-y-4">
          <p className="text-lg text-gray-600">1. Jak napisać nową wiadomość e-mail w Gmailu?</p>
          <p className="text-lg text-gray-600">2. Czego należy unikać podczas korzystania z poczty elektronicznej?</p>
        </div>
      </section>

      <GmailLogin />
    </div>
  );
};
