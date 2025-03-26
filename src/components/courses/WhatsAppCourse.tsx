import React from "react";
import { ReturnButton } from "../ReturnButton";
import { MessageCircle, Camera, Shield, CheckCircle } from "lucide-react";

export const WhatsAppCourse = () => {
  return (
    // bg-white shadow-lg rounded-lg border border-gray-200
    <div className="max-w-2xl mx-auto py-4 sm:py-8 ">
      <div className="mb-4 px-5">
        <ReturnButton />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Kurs WhatsApp</h1>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
          <MessageCircle className="inline-block mr-2 text-green-500" /> Wprowadzenie do WhatsApp
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          WhatsApp to popularna aplikacja do przesyłania wiadomości, która umożliwia wysyłanie wiadomości tekstowych, głosowych, oraz wykonywanie połączeń głosowych i wideo. Możesz również przesyłać zdjęcia, wideo, i dokumenty, a także tworzyć grupy czatowe.
        </p>
      </section>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
          <Camera className="inline-block mr-2 text-yellow-500" /> Krok po kroku: Jak korzystać z WhatsApp
        </h2>
        <ol className="list-decimal list-inside text-base sm:text-lg text-gray-600">
          <li>Otwórz WhatsApp na swoim urządzeniu.</li>
          <li>Wybierz kontakt, z którym chcesz rozpocząć rozmowę.</li>
          <li>Wpisz wiadomość i kliknij "Wyślij".</li>
          <li>Aby wysłać zdjęcie lub film, kliknij ikonę załącznika i wybierz plik.</li>
          <li>Wybierz opcję połączenia głosowego lub wideo, aby rozmawiać na żywo.</li>
        </ol>
      </section>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
          <Shield className="inline-block mr-2 text-blue-500" /> Bezpieczeństwo i prywatność
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          WhatsApp zapewnia szyfrowanie end-to-end, co oznacza, że wiadomości są bezpieczne i tylko Ty oraz odbiorca możecie je odczytać. Zawsze upewnij się, że masz silne hasło do swojego konta i ustawienia prywatności są odpowiednio skonfigurowane.
        </p>
      </section>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
          <CheckCircle className="inline-block mr-2 text-green-500" /> Interaktywne ćwiczenia
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Spróbuj wysłać wiadomość do znajomego, a następnie załącz zdjęcie lub film. Spróbuj także przeprowadzić połączenie głosowe lub wideo.
        </p>
      </section>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Porady dotyczące efektywnego korzystania z WhatsApp</h2>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-600">
          <li>Stwórz grupy czatowe, aby łatwiej komunikować się z większą liczbą osób.</li>
          <li>Wykorzystaj funkcje takie jak statusy, aby dzielić się swoimi chwilami ze znajomymi.</li>
          <li>Regularnie aktualizuj swoją listę kontaktów i grup, aby mieć porządek w aplikacji.</li>
          <li>Dbaj o prywatność, sprawdzając, kto może widzieć Twoje zdjęcie profilowe oraz statusy.</li>
        </ul>
      </section>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Podsumowanie</h2>
        <p className="text-base sm:text-lg text-gray-600">
          WhatsApp to szybki i łatwy sposób komunikacji z przyjaciółmi i rodziną. Dzięki prostym funkcjom, takim jak wiadomości tekstowe, połączenia głosowe i wideo, oraz przesyłanie multimediów, jest to aplikacja, której używa miliony ludzi na całym świecie.
        </p>
      </section>

      <br />

    </div>
  );
};
