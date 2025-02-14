import React from 'react';
import { 
  Home, 
  Factory, 
  Building2, 
  Wrench, 
  Zap, 
  LineChart,
  Shield,
  Settings,
  Sun,
  Battery,
  PenTool as Tool,
  CloudSun,
  CloudLightning as Lightning,
  Lightbulb,
  Cable,
  Activity
} from 'lucide-react';

const services = [
  {
    title: 'Projeto Residencial',
    description: 'Sistemas fotovoltaicos personalizados para sua casa',
    icon: Home
  },
  {
    title: 'Projeto Industrial',
    description: 'Soluções de grande escala para indústrias',
    icon: Factory
  },
  {
    title: 'Projeto Comercial',
    description: 'Energia solar para empresas e comércio',
    icon: Building2
  },
  {
    title: 'Manutenção Preventiva',
    description: 'Serviços regulares de manutenção',
    icon: Wrench
  },
  {
    title: 'Instalação Elétrica',
    description: 'Instalações elétricas profissionais',
    icon: Zap
  },
  {
    title: 'Monitoramento',
    description: 'Acompanhamento em tempo real da geração',
    icon: LineChart
  },
  {
    title: 'Proteção',
    description: 'Sistemas de proteção contra descargas',
    icon: Shield
  },
  {
    title: 'Automação',
    description: 'Automação de sistemas elétricos',
    icon: Settings
  },
  {
    title: 'Energia Solar',
    description: 'Instalação de painéis solares',
    icon: Sun
  },
  {
    title: 'Armazenamento',
    description: 'Sistemas de armazenamento de energia',
    icon: Battery
  },
  {
    title: 'Manutenção Corretiva',
    description: 'Resolução rápida de problemas',
    icon: Tool
  },
  {
    title: 'Meteorologia',
    description: 'Análise de condições solares',
    icon: CloudSun
  },
  {
    title: 'Proteção Elétrica',
    description: 'Sistemas de proteção elétrica',
    icon: Lightning
  },
  {
    title: 'Eficiência',
    description: 'Otimização do consumo de energia',
    icon: Lightbulb
  },
  {
    title: 'Infraestrutura',
    description: 'Infraestrutura elétrica completa',
    icon: Cable
  },
  {
    title: 'Diagnóstico',
    description: 'Análise completa do sistema',
    icon: Activity
  }
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-yellow-500">Nossos Serviços</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Soluções Completas em Energia Solar
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Oferecemos uma ampla gama de serviços para atender todas as suas necessidades em energia solar e engenharia elétrica.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-start">
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
    </section>
  );
}