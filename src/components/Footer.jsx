import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

const navigation = {
  main: [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Nossos Trabalhos', href: '#work' },
    { name: 'Contato', href: '#contact' },
  ],
  legal: [
    { name: 'Política de Privacidade', href: '/politica-de-privacidade' },
    { name: 'Termos de Serviço', href: '/termos-de-servico' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-10 sm:py-12 lg:px-8">
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="h-10 w-10" />
        </div>
        <nav className="mt-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-4">
              <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-yellow-500">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <nav className="mt-4 flex justify-center space-x-6">
          {navigation.legal.map((item) => (
            <div key={item.name} className="pb-4">
              <Link to={item.href} className="text-sm leading-6 text-gray-600 hover:text-yellow-500">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-4 text-center text-xs leading-5 text-gray-500">
          &copy; 2024 Ceará Energia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
