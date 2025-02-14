import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, PenTool as Tool, CloudSun, Activity, Bug, HardHat, Monitor } from 'lucide-react';

const services = [
  {
    title: 'Análise e Assistência Técnica de Falhas do Sistema Elétrico',
    description: 'Oferecemos suporte técnico especializado para identificar e solucionar falhas no sistema elétrico. Nossa equipe realiza diagnósticos detalhados, detectando problemas como curtos-circuitos, quedas de tensão e falhas em equipamentos, garantindo a continuidade e segurança das operações.',
    icon: Bug
  },
  {
    title: 'Manutenções Preventivas, Preditivas e Corretivas',
    description: 'Manter o sistema elétrico em perfeito funcionamento é essencial para evitar falhas e reduzir custos. Realizamos manutenções preventivas para evitar problemas, preditivas para antecipar falhas e corretivas para solucionar defeitos já ocorridos, garantindo segurança e eficiência energética.',
    icon: Wrench
  },
  {
    title: 'Acompanhamento de Obra',
    description: 'Garantimos que cada etapa da sua obra elétrica seja executada conforme o projeto e as normas técnicas. Nosso acompanhamento técnico assegura qualidade, evita desperdícios e antecipa possíveis problemas, proporcionando uma instalação eficiente e segura.',
    icon: HardHat
  },
  {
    title: 'Operação Assistida',
    description: 'Durante a fase inicial de operação do sistema elétrico, oferecemos suporte técnico para garantir um funcionamento seguro e eficiente. A operação assistida inclui ajustes, treinamentos e monitoramento, minimizando riscos e garantindo o desempenho ideal da instalação.',
    icon: Monitor
  },
  {
    title: 'SPDA e Aterramento',
    description: 'Projetamos e implementamos sistemas de proteção contra descargas atmosféricas (SPDA) e aterramento elétrico, garantindo a segurança da instalação e dos equipamentos. Realizamos medições e inspeções para assegurar conformidade com as normas e minimizar riscos de surtos elétricos.',
    icon: CloudSun
  }
];

export function MaintenanceServices() {
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <Link to="/" className="text-yellow-500 hover:text-yellow-600 mb-4 inline-block">← Voltar</Link>
          <h2 className="text-base font-semibold leading-7 text-yellow-500">Serviços de Manutenção</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Manutenção e Suporte
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Serviços completos de manutenção para garantir o máximo desempenho do seu sistema.
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