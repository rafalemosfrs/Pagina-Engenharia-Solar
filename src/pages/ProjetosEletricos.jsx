import React from 'react';
import { Link } from 'react-router-dom';
import projeto1 from '../assets/images/Projetos-Eletricos/projeto-1.png';
import projeto2 from '../assets/images/Projetos-Eletricos/projeto-2.png';
import projeto3 from '../assets/images/Projetos-Eletricos/projeto-3.jpg';
import projeto4 from '../assets/images/Projetos-Eletricos/projeto-4.jpg';
import projeto5 from '../assets/images/Projetos-Eletricos/projeto-5.jpg';
import projeto6 from '../assets/images/Projetos-Eletricos/projeto-6.jpg';

export function ProjetosEletricos() {
  return (
    <section className="max-w-7xl mx-auto pt-32 px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Projetos Eletricos
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src={projeto1} 
            alt="Projeto 1" 
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed">
          A elaboração de projetos elétricos é fundamental para garantir a eficiência, segurança e conformidade das instalações elétricas em residências, comércios e indústrias. Esses projetos são desenvolvidos de acordo com normas técnicas, como a NBR 5410 (instalações elétricas de baixa tensão) e a NBR 14039 (instalações de média tensão), assegurando um sistema elétrico seguro e dimensionado corretamente para a demanda de energia.
          </p>

          <ul className="list-disc pl-5 mt-4 text-gray-700">
            <li><strong>Desenvolvimento de Projeto:</strong> Criação de esquemas elétricos detalhados, contemplando distribuição de carga, dimensionamento de condutores e dispositivos de proteção.</li>
            <li><strong>Adequação às Normas:</strong> Garantia de conformidade com as regulamentações vigentes, prevenindo riscos elétricos e otimizando o consumo de energia.</li>
            <li><strong>Instalação e Implementação:</strong> Execução do projeto com mão de obra qualificada, garantindo eficiência e segurança na instalação.</li>
            <li><strong>Laudos e Regularização:</strong> Emissão de documentação técnica para aprovação junto a concessionárias de energia e órgãos reguladores.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
        <img src={projeto1} alt="SPDA Torre" className="rounded-lg shadow-md" />
        <img src={projeto2} alt="Medição de Resistividade" className="rounded-lg shadow-md" />
        <img src={projeto3} alt="Instalação no Telhado" className="rounded-lg shadow-md" />
        <img src={projeto4} alt="Descarga Atmosférica" className="rounded-lg shadow-md" />
        <img src={projeto5} alt="Medição Técnica" className="rounded-lg shadow-md" />
        <img src={projeto6} alt="Projeto de SPDA" className="rounded-lg shadow-md" />
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-700">Precisa de um Projeto Elétrico seguro e confiável? Entre em contato conosco!</p>
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
