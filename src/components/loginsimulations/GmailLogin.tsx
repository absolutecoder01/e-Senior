import React from 'react';

const GmailLogin: React.FC = () => {
  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center">
      <div className="flex-1 mb-8 md:mb-0">
        <img alt="Google logo" className="mb-4" height="100" src="https://storage.googleapis.com/a1aa/image/QZJozFZGJsNFfXIbkT83pfqGB2kb74r2jPnIUZ85ak8.jpg" width="100" />
        <h1 className="text-3xl font-semibold mb-2">Zaloguj się</h1>
        <p className="text-lg">na konto Google. Będzie ono dostępne w innych aplikacjach Google w przeglądarce.</p>
      </div>
      <div className="flex-1">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Adres e-mail lub telefon</label>
          <input className="w-full p-2 border border-gray-600 rounded bg-gray-900 text-white focus:outline-none focus:border-blue-500" id="email" type="text" />
        </div>
        <div className="mb-4">
          <a className="text-blue-400" href="#">Nie pamiętasz adresu?</a>
        </div>
        <div className="flex justify-between">
          <a className="text-blue-400" href="#">Utwórz konto</a>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Dalej</button>
        </div>
      </div>
    </div>
  );
};

export default GmailLogin;