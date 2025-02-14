import React from 'react';
import { 
  CheckCircle2, 
  Building, 
  Ambulance, 
  Hotel, 
  Store, 
  Warehouse, 
  Home, 
  Sprout, 
  Factory 
} from 'lucide-react';

const businesses = [
  'Supermercados',
  'Hospitais',
  'Hotéis',
  'Franquias',
  'Galpões',
  'Condomínios',
  'Negócios Rurais',
  'Pequenas Indústrias',
];

const businessIcons = {
  'Supermercados': Store,
  'Hospitais': Ambulance,
  'Hotéis': Hotel,
  'Franquias': Building,
  'Galpões': Warehouse,
  'Condomínios': Home,
  'Negócios Rurais': Sprout,
  'Pequenas Indústrias': Factory,
};

const benefits = [
  'Personalização de projeto',
  'Geração garantida em contrato',
  'Engenharia própria',
  'Impacto ambiental positivo',
];

export function OurWork() {
  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-yellow-500">O Que Fazemos</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Atendemos Diversos Segmentos
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900 mb-6">Negócios Atendidos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {businesses.map((business, index) => {
                  const Icon = businessIcons[business];
                  return (
                    <div
                      key={index}
                      className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-yellow-500"
                    >
                      <div className="flex-shrink-0">
                        <Icon className="h-5 w-5 text-yellow-500" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900">{business}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold leading-8 text-gray-900 mb-6">Nossos Diferenciais</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-yellow-500"
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">{benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
