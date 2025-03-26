import React from 'react';

const FacebookLogin: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl mx-auto p-4">
    <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-blue-600 text-5xl font-bold">facebook</h1>
        <p className="text-xl mt-4">Facebook helps you connect and share with the people in your life.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <form>
            <div className="mb-4">
                <input type="text" placeholder="Email address or phone number" className="w-full p-3 border border-gray-300 rounded-lg"/>
            </div>
            <div className="mb-4">
                <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-lg"/>
            </div>
            <div className="mb-4">
                <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold">Log in</button>
            </div>
            <div className="text-center mb-4">
                <a href="#" className="text-blue-600 text-sm">Forgotten password?</a>
            </div>
            <hr className="mb-4"/>
            <div className="text-center">
                <button type="button" className="w-full bg-green-600 text-white p-3 rounded-lg font-bold">Create new account</button>
            </div>
        </form>
    </div>
</div>
  );
};

export default FacebookLogin;