import { ArrowLeft } from 'lucide-react';
export function ReturnButton() {
    return (
        <a href="#home">
        <button
          className="flex items-center w-full py-3 mb-10 text-sm font-medium text-blue-700 bg-blue-100 border border-blue-200 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <ArrowLeft className="w-4 h-4 mr-5 ml-5" />
          Powrót do strony głównej
        </button>
      </a>
    );
}