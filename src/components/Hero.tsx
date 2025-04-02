import { useEffect } from 'react';
import { Laptop, Shield, Users, Menu } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Witaj w </span>
            <span className="block text-blue-600">
                <img src="public/eSeniorLogo_trim.png" className="inline align-middle w-20 h-22 mb-1 mr-0 pr-0" alt="Blue-Tinted Image"/>
              <img src="public/minus.png" className="inline w-10 h-25 ml-0 pl-0" alt="Minus" />Senior</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Twój przyjazny przewodnik po technologii.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Laptop,
                title: 'Łatwe uczenie',
                description: 'Kroki po kroku samouczki zaprojektowane specjalnie dla starszych osób',
              },
              {
                icon: Shield,
                title: 'Zachowaj bezpieczeństwo online',
                description: 'Dowiedz się, jak chronić się podczas przeglądania internetu',
              },
              {
                icon: Users,
                title: 'Asystent AI',
                description: 'Natychmiastowe wsparcie dostosowane do Twoich potrzeb.',
              },
            ].map((feature) => (
              <div key={feature.title} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}