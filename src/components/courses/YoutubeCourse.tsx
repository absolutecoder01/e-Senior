import React from "react";
import { ReturnButton } from "../ReturnButton";
import { Play, Camera, Shield, CheckCircle, MessageCircle } from "lucide-react";


export const YouTubeCourse = () => {
  return (
    // shadow-lg rounded-lg border border-gray-200 bg-white
    <div className="max-w-2xl mx-auto py-4 sm:py-8  ">
      <div className="px-5 mb-5">
        <ReturnButton />
      </div>
      
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Kurs YouTube</h1>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
          <Play className="inline-block mr-2 text-red-500" /> Wprowadzenie do YouTube
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          YouTube to jedna z największych platform do udostępniania i oglądania filmów w internecie. Użytkownicy mogą
          subskrybować kanały, oglądać filmy, komentować, lajkować i udostępniać treści. YouTube pozwala również na
          tworzenie własnych filmów oraz transmisji na żywo.
        </p>
      </section>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
          <Camera className="inline-block mr-2 text-yellow-500" /> Krok po kroku: Jak korzystać z YouTube
        </h2>
        <ol className="list-decimal list-inside text-base sm:text-lg text-gray-600">
          <li>Otwórz YouTube w przeglądarce lub aplikacji.</li>
          <li>Załóż konto lub zaloguj się na swoje konto Google.</li>
          <li>Znajdź interesujący Cię film za pomocą paska wyszukiwania.</li>
          <li>Subskrybuj kanały, które Cię interesują, klikając przycisk "Subskrybuj".</li>
          <li>Komentuj i lajkuj filmy, które Ci się podobają.</li>
          <li>Twórz własne filmy i publikuj je na swoim kanale.</li>
        </ol>
      </section>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
          <Shield className="inline-block mr-2 text-blue-500" /> Bezpieczeństwo i prywatność
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Pamiętaj o bezpieczeństwie i prywatności w internecie. Możesz ustawić prywatność swoich filmów na publiczną,
          ukrytą lub dostępną tylko dla wybranych osób. Zawsze bądź ostrożny podczas interakcji z nieznajomymi.
        </p>
      </section>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
          <CheckCircle className="inline-block mr-2 text-green-500" /> Interaktywne ćwiczenia
        </h2>
        <p className="text-base sm:text-lg text-gray-600">
          Spróbuj subskrybować kilka kanałów i komentować filmy. Następnie załaduj własny film i sprawdź, jak wygląda
          jego interakcja z publicznością.
        </p>
      </section>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">
          <MessageCircle className="inline-block mr-2 text-purple-500" /> Porady dotyczące efektywnego korzystania z YouTube
        </h2>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-600">
          <li>Regularnie publikuj treści, aby utrzymać zaangażowanie widzów.</li>
          <li>Optymalizuj tytuły i opisy filmów pod kątem wyszukiwania.</li>
          <li>Używaj miniatur, które przyciągają uwagę.</li>
          <li>Dbaj o interakcję z widzami poprzez odpowiedzi na komentarze.</li>
          <li>Analizuj statystyki, aby zrozumieć, jakie filmy cieszą się największym zainteresowaniem.</li>
        </ul>
      </section>

      <section className="mb-6 sm:mb-8 p-4 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">Podsumowanie</h2>
        <p className="text-base sm:text-lg text-gray-600">
          YouTube to potężne narzędzie do dzielenia się swoimi filmami i budowania społeczności. Dzięki rozumieniu
          platformy oraz skutecznym strategiom, możesz zdobyć szeroką publiczność i osiągnąć sukces w tworzeniu
          treści wideo.
        </p>
      </section>


    </div>
  );
};
