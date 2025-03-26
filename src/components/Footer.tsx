export function Footer() {
  return (
    <footer className="bg-blue-500 text-white py-8 px-4 sm:px-6 lg:px-8 rounded-lg shadow-lg mx-8 my-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg sm:text-xl mb-2">
          Autorzy: 
          <span className="font-semibold"> <br/>Programowanie + Design: Volodymyr K.</span>
          <span className="font-semibold"> <br/>Multimedia + Design: Illia N.</span>
        </p>
        <div className="mt-0 mb-4">
          <a 
            href="https://github.com/absolutecoder01" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-300 hover:text-blue-100 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
        <p className="text-sm sm:text-base text-gray-200 mb-4">
          Wszystkie prawa zastrzeżone © 2025. Designed with care for seniors.
        </p>
       
      </div>
    </footer>

  );
}
