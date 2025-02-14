import React from 'react';
import { Link } from 'react-router-dom';
import {  Building, Sun, Shield, Cable, ClipboardList, Building2, List, Settings, DollarSign, Rocket, PackageCheck } from 'lucide-react';

const services = [
  {
    title: 'Projeto Executivo com Detalhamento Eletromecânico de Infraestrutura',
    description: 'Desenvolvemos projetos executivos completos com detalhamento eletromecânico, assegurando que cada aspecto da infraestrutura elétrica seja planejado e implementado conforme as normas técnicas. Nosso projeto abrange desde a distribuição elétrica até o layout dos equipamentos, garantindo eficiência e segurança na instalação.',
    icon: ClipboardList
  },
  {
    title: 'Tratativas na Concessionária de Energia',
    description: 'Intermediamos todo o processo junto à concessionária de energia para viabilizar novas ligações, ampliações de carga e regularizações. Nosso suporte técnico garante que sua solicitação esteja em conformidade com as exigências da distribuidora, evitando atrasos e retrabalho.',
    icon: Building
  },
  {
    title: 'Unifilares Básicos com Lista de Cargas',
    description: 'Criamos diagramas unifilares detalhados que representam a distribuição elétrica da instalação, acompanhados de uma lista completa de cargas. Essa documentação é essencial para um planejamento eficiente, facilitando manutenções e garantindo a segurança do sistema.',
    icon: List
  },
  {
    title: 'Especificação Técnica do Painel e Equipamentos',
    description: 'Fornecemos especificações detalhadas para painel e equipamentos, garantindo que cada componente esteja adequado às necessidades do projeto. Nossa abordagem técnica assegura conformidade com normas, eficiência energética e otimização dos custos operacionais.',
    icon: Settings
  },
  {
    title: 'Orçamento Estimativo de Implantação',
    description: 'Elaboramos orçamentos detalhados para sua implantação elétrica, considerando materiais, mão de obra e prazos. Nosso objetivo é oferecer previsibilidade financeira e evitar custos inesperados, garantindo o melhor custo-benefício para sua obra.',
    icon: DollarSign
  },
  {
    title: 'Comissionamento e Start-up',
    description: 'Realizamos o comissionamento de sistemas elétricos, garantindo que todas as instalações estejam funcionando corretamente antes da operação oficial. Testamos equipamentos, verificamos a segurança e ajustamos parâmetros para assegurar um início eficiente e seguro.',
    icon: Rocket
  },
  {
    title: 'Entrega e Recebimento de Obra',
    description: 'Oferecemos suporte técnico na fase final do projeto, garantindo que a entrega da obra atenda aos padrões de qualidade e segurança. Realizamos inspeções, testamos instalações e documentamos a conformidade com as especificações do projeto antes do recebimento definitivo.',
    icon: PackageCheck
  }
];

export function CommercialServices() {
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <Link to="/" className="text-yellow-500 hover:text-yellow-600 mb-4 inline-block">← Voltar</Link>
          <h2 className="text-base font-semibold leading-7 text-yellow-500">Serviços Comerciais</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Energia Solar para seu Negócio
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Soluções personalizadas para empresas e estabelecimentos comerciais.
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