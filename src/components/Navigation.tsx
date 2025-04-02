import {useEffect} from 'react';
import { Home, BookOpen, Shield, Users, Menu, X, HelpCircle, BookCheck } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { icon: HelpCircle, label: 'Pomoc', href: '#help' },
    { icon: BookCheck, label: 'Quizy', href: '#quizzes' }
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll do góry
  }, []);
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-blue-600"><img src="eSeniorLogo_trim.png" alt="eSenior Logo Image" className='inline w-8 h-10 mb-1' /><img src="minus.png" className="inline w-5 h-15 ml-0 pl-0" alt="Minus" />Senior</a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
