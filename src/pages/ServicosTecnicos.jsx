import React from 'react';
import { Link } from 'react-router-dom';
import servico1 from '../assets/images/Servicos-Tecnicos/servicos-tecnicos-1.jpg';
import servico2 from '../assets/images/Servicos-Tecnicos/servicos-tecnicos-2.jpg';
import servico3 from '../assets/images/Servicos-Tecnicos/servicos-tecnicos-3.jpg';
import servico4 from '../assets/images/Servicos-Tecnicos/servicos-tecnicos-4.jpg';
import servico5 from '../assets/images/Servicos-Tecnicos/servicos-tecnicos-5.jpg';
import servico6 from '../assets/images/Servicos-Tecnicos/servicos-tecnicos-6.jpg';

export function ServicosTecnicos() {
  return (
    <section className="max-w-7xl mx-auto pt-32 px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Serviços Técnicos
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src={servico1} 
            alt="Laudo e ART" 
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed">
          A prestação de serviços técnicos é essencial para garantir a segurança, eficiência e conformidade de sistemas elétricos, mecânicos, civis e industriais. Esses serviços envolvem diagnósticos, implementações e manutenções especializadas, assegurando que as instalações estejam de acordo com as normas regulamentadoras e padrões técnicos exigidos.
          </p>

          <ul className="list-disc pl-5 mt-4 text-gray-700">
            <li><strong>Projeto e Execução:</strong> Desenvolvimento e implementação de soluções técnicas adequadas às necessidades do cliente.</li>
            <li><strong>Manutenção Preventiva e Corretiva:</strong> Inspeção e reparos em equipamentos e instalações para evitar falhas e garantir o funcionamento contínuo.</li>
            <li><strong>Laudos e Perícias Técnicas:</strong>  Avaliação detalhada de sistemas e emissão de relatórios técnicos para atestar segurança e conformidade.</li>
            <li><strong>Consultoria Técnica: </strong> Análise e orientação especializada para otimização de processos e adequação às normas regulatórias.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
        <img src={servico1} alt="SPDA Torre" className="rounded-lg shadow-md" />
        <img src={servico2} alt="Medição de Resistividade" className="rounded-lg shadow-md" />
        <img src={servico3} alt="Instalação no Telhado" className="rounded-lg shadow-md" />
        <img src={servico4} alt="Descarga Atmosférica" className="rounded-lg shadow-md" />
        <img src={servico5} alt="Medição Técnica" className="rounded-lg shadow-md" />
        <img src={servico6} alt="Projeto de SPDA" className="rounded-lg shadow-md" />
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-700">Precisa de algum serviço técnico seguro e confiável? Entre em contato conosco!</p>
        <a 
          href="/contact" 
          className="mt-4 inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-600 transition"
        >
          Solicitar Orçamento
        </a>
      </div>
    </section>
  );
}
