import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Battery, CloudLightning as Lightning, Lightbulb } from 'lucide-react';

const services = [
  {
    title: 'Laudos Elétricos para Condomínios Vertical e Horizontal',
    description: 'Garantimos a segurança e eficiência da instalação elétrica do seu condomínio. Realizamos laudos técnicos detalhados para verificar conformidade com normas elétricas, evitando riscos como curtos-circuitos, sobrecargas e falhas no sistema. Nossos relatórios ajudam na prevenção de acidentes e na valorização do imóvel.',
    icon: Zap
  },
  {
    title: 'Iluminação Interna, Externa e de Emergência',
    description: 'Projetamos e implementamos soluções de iluminação que proporcionam conforto, eficiência e segurança para sua residência. Seja para realçar a estética do ambiente, melhorar a iluminação externa ou garantir segurança com iluminação de emergência em casos de queda de energia, temos a solução ideal para você.',
    icon: Lightbulb
  },
  {
    title: 'Projeto SPDA de Aterramento',
    description: 'Proteja sua casa contra surtos elétricos e descargas atmosféricas com um sistema de proteção contra raios (SPDA). Nossos especialistas projetam e instalam aterramentos eficazes para minimizar riscos, garantindo mais segurança para sua residência e equipamentos elétricos',
    icon: Lightning
  },
  {
    title: 'Estudos Básicos de Potência',
    description: 'Se você está planejando ampliar sua residência ou instalar novos equipamentos elétricos, é essencial avaliar a demanda de energia da sua casa. Realizamos estudos detalhados para evitar sobrecargas, garantir eficiência energética e evitar custos desnecessários com consumo excessivo de eletricidade.',
    icon: Battery
  }
];

export function ResidentialServices() {
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <Link to="/" className="text-yellow-500 hover:text-yellow-600 mb-4 inline-block">← Voltar</Link>
          <h2 className="text-base font-semibold leading-7 text-yellow-500">Serviços Residenciais</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Energia Solar para sua Casa
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Soluções personalizadas para tornar sua residência mais sustentável e econômica.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-start p-6 bg-white rounded-2xl shadow-lg">
                <div className="rounded-lg bg-yellow-500/10 p-2 ring-1 ring-yellow-500/20">
                  <service.icon className="h-6 w-6 text-yellow-500" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-8 text-gray-900">{service.title}</h3>
                <p className="mt-2 text-base leading-7 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}