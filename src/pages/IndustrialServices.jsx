import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, Settings, Activity, Ruler, FileWarning, FileCheck, CalendarCheck, Zap } from 'lucide-react';

const services = [
  {
    title: 'Dimensionamento e Especificação de Sistemas Elétricos',
    description: 'O correto dimensionamento dos sistemas elétricos garante segurança, eficiência e economia para sua indústria ou comércio. Avaliamos a demanda energética, especificamos os melhores equipamentos e asseguramos que sua instalação atenda às normas técnicas, evitando sobrecargas e desperdícios.',
    icon: Ruler
  },
  {
    title: 'Medições de Aterramento',
    description: 'Aterramento elétrico inadequado pode comprometer a segurança da instalação e dos equipamentos. Realizamos medições precisas para verificar a resistência do aterramento, garantindo conformidade com as normas e proteção contra descargas elétricas e surtos de tensão.',
    icon: Activity
  },
  {
    title: 'Laudo para Sinistro',
    description: 'Em casos de incêndios, curtos-circuitos ou falhas elétricas, realizamos uma análise técnica detalhada para identificar as causas do sinistro. Emitimos um laudo especializado, essencial para tomadas de decisão, ações corretivas e processos junto a seguradoras.',
    icon: FileWarning
  },
  {
    title: 'Laudo para Seguro',
    description: 'Para garantir que sua instalação elétrica esteja em conformidade com as exigências das seguradoras, realizamos inspeções detalhadas e emitimos laudos técnicos completos. Esse documento facilita a aprovação de apólices e reduz riscos de sinistros.',
    icon: FileCheck
  },
  {
    title: 'Cronograma de Implantação',
    description: 'Elaboramos um cronograma detalhado para a execução de projetos elétricos, garantindo prazos realistas e organização eficiente da obra. Nosso planejamento inclui todas as etapas da instalação, desde a infraestrutura até a energização, evitando atrasos e imprevistos.',
    icon: CalendarCheck
  },
  {
    title: 'Instalação de Sistemas Elétricos',
    description: 'Banco de Capacitor, Cabos, Transformadores de Corrente e Potencial, Transformadores de Força, Grupo Gerador, Banco de Baterias e Retificadores, Painéis de BT e MT, Para-raios, Disjuntores, Chaves Seccionadoras',
    icon: Zap
  },
];

export function IndustrialServices() {
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <Link to="/" className="text-yellow-500 hover:text-yellow-600 mb-4 inline-block">← Voltar</Link>
          <h2 className="text-base font-semibold leading-7 text-yellow-500">Serviços Industriais</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Soluções para Indústrias
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sistemas de energia solar de alta performance para o setor industrial.
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