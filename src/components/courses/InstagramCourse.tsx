import React from "react";
import { ReturnButton } from "../ReturnButton";
import { Camera, Lock, Smile, CheckCircle } from "lucide-react";
import InstagramLogin from "../loginsimulations/InstagramLogin";

export const InstagramCourse = () => {
  return (
    // bg-white shadow-lg rounded-lg border border-gray-200
    <div className="max-w-2xl mx-auto py-4 sm:py-8 ">
      <div className="px-5 mb-5">
        <ReturnButton />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Kurs Instagrama</h1>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
          <Smile className="inline-block mr-2 text-blue-500" /> Wprowadzenie do Instagrama
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Instagram to platforma społecznościowa, która umożliwia użytkownikom dzielenie się zdjęciami i filmami.
          Użytkownicy mogą tworzyć profile, śledzić innych, komentować i lajkować posty. Instagram oferuje funkcje
          takie jak Stories, IGTV oraz Reels, które pozwalają na tworzenie krótkich filmów.
        </p>
      </section>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
          <Camera className="inline-block mr-2 text-purple-500" /> Krok po kroku: Jak korzystać z Instagrama
        </h2>
        <ol className="list-decimal list-inside text-base sm:text-lg text-gray-600">
          <li>Otwórz Instagram w przeglądarce lub aplikacji.</li>
          <li>Załóż konto lub zaloguj się.</li>
          <li>Śledź znajomych lub konta, które Cię interesują.</li>
          <li>Udostępnij zdjęcie lub film, klikając ikonę "+".</li>
          <li>Dodaj opisy i hashtagi, aby zwiększyć zasięg swoich postów.</li>
        </ol>
      </section>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
          <Lock className="inline-block mr-2 text-red-500" /> Bezpieczeństwo i prywatność
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Bądź świadomy ustawień prywatności i tego, kto może widzieć Twoje posty. Możesz ustawić konto jako prywatne,
          aby tylko zatwierdzeni obserwatorzy mogli zobaczyć Twoje treści.
        </p>
      </section>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
          <CheckCircle className="inline-block mr-2 text-green-500" /> Interaktywne ćwiczenia
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Spróbuj opublikować zdjęcie i śledzić nowe konto. Zwróć uwagę na to, jak różne hashtagi wpływają na zasięg
          Twojego posta.
        </p>
      </section>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Porady dotyczące efektywnego korzystania z Instagrama</h2>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-600">
          <li>Używaj wysokiej jakości zdjęć i filmów.</li>
          <li>Regularnie publikuj treści, aby utrzymać zaangażowanie obserwatorów.</li>
          <li>Interakcja z innymi użytkownikami poprzez komentarze i polubienia.</li>
          <li>Używaj Stories, aby dzielić się codziennymi chwilami.</li>
          <li>Analizuj swoje statystyki, aby zrozumieć, jakie treści są najbardziej popularne wśród Twoich obserwatorów.</li>
        </ul>
      </section>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Podsumowanie</h2>
        <p className="text-base sm:text-lg text-gray-600">
          Instagram to potężne narzędzie do budowania społeczności i dzielenia się treściami. Dzięki zrozumieniu jego
          funkcji i strategii, możesz skutecznie wykorzystać tę platformę do osiągnięcia swoich celów osobistych lub
          biznesowych.
        </p>
      </section>

      <br />

      <InstagramLogin/>
    </div>
  );
};
