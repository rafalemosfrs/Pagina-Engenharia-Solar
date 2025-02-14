import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Factory, Building2, Wrench } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Serviços Residenciais',
    description: 'Soluções completas para sua casa',
    icon: Home,
    path: '/services/residential'
  },
  {
    title: 'Serviços Industriais',
    description: 'Soluções para grandes indústrias',
    icon: Factory,
    path: '/services/industrial'
  },
  {
    title: 'Serviços Comerciais',
    description: 'Soluções para seu negócio',
    icon: Building2,
    path: '/services/commercial'
  },
  {
    title: 'Manutenção',
    description: 'Serviços de manutenção e suporte',
    icon: Wrench,
    path: '/services/maintenance'
  }
];

export function ServiceLayout() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Soluções em Energia Solar e Engenharia Elétrica
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Explore nossos serviços especializados para cada tipo de necessidade.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCategories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                className="relative flex flex-col items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="rounded-lg bg-yellow-500/10 p-2 ring-1 ring-yellow-500/20">
                  <category.icon className="h-6 w-6 text-yellow-500" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">{category.title}</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{category.description}</p>
                <div className="mt-4 text-sm font-medium text-yellow-500">Saiba mais →</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}