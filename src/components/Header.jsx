import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/images/logo.jpg';

const services = [
  { name: 'SPDA (Para-Raio)', href: '/para-raio' },
  { name: 'Projetos Elétricos', href: '/projetos-eletricos' },
  { name: 'Subestação', href: '/subestacao' },
  { name: 'EMUC e PMUC', href: '/emuc-pmuc' },
  { name: 'Serviços Técnicos', href: '/servicos-tecnicos' },
  { name: 'Consultorias', href: '/consultorias' },
  { name: 'Laudos e Emissão de ART', href: '/laudos-art' },
  { name: 'Projeto Executivo', href: '/projeto-executivo' },
];

const navigation = [
  { name: 'Sobre Nós', href: '/#about', section: 'about' },
  { name: 'Serviços', dropdown: true }, // Dropdown ativado
  { name: 'Nossos Trabalhos', href: '/#work', section: 'work' },
  { name: 'Contato', href: '/#contact', section: 'contact' },
  { name: 'Para-Raio', href: '/para-raio', section: 'para-raio' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  let closeTimeout = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout.current); // Cancela o fechamento
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200); // Pequeno delay para evitar que feche imediatamente
  };

  useEffect(() => {
    return () => clearTimeout(closeTimeout.current);
  }, []);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <img src={logo} className="h-8 w-8" alt="Logo" />
            <span className="font-bold text-lg">Ceará Energia</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="relative"
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  ref={buttonRef}
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-500 transition-colors flex items-center gap-1"
                >
                  {item.name} <ChevronDown className="h-4 w-4" />
                </button>
                {servicesDropdownOpen && (
                  <div
                    className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 grid grid-cols-2 gap-3 border border-gray-200"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="text-sm text-gray-700 hover:text-yellow-500 transition"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-yellow-500 transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <img src={logo} className="h-8 w-8" alt="Logo" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.dropdown ? (
                    <div key={item.name} className="py-2">
                      <span className="text-sm font-semibold text-gray-900 block"> {item.name} </span>
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="text-sm text-gray-700 hover:text-yellow-500 transition"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
