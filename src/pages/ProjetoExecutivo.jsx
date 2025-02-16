import React from 'react';
import { Link } from 'react-router-dom';
import Executivo1 from '../assets/images/Projetos-Executivos/executivo-1.jpg';
import Executivo2 from '../assets/images/Projetos-Executivos/executivo-2.jpg';
import Executivo3 from '../assets/images/Projetos-Executivos/executivo-3.jpg';
import Executivo4 from '../assets/images/Projetos-Executivos/executivo-4.jpg';
import Executivo5 from '../assets/images/Projetos-Executivos/executivo-5.jpg';
import Executivo6 from '../assets/images/Projetos-Executivos/executivo-6.jpg';

export function ProjetosExecutivos() {
  return (
    <section className="max-w-7xl mx-auto pt-32 px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Projetos Executivos
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src={Executivo1} 
            alt="Projeto 1" 
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed">
          O projeto executivo é uma etapa fundamental no desenvolvimento de obras e instalações, garantindo a correta execução dos serviços com base em diretrizes técnicas detalhadas. Esse tipo de projeto transforma conceitos e estudos preliminares em planos técnicos completos, assegurando precisão, eficiência e conformidade com normas reguladoras. Ele é essencial para evitar retrabalhos, otimizar custos e garantir a segurança da obra ou instalação.
          </p>

          <ul className="list-disc pl-5 mt-4 text-gray-700">
            <li><strong>Desenvolvimento de Documentação Técnica: </strong>Criação de plantas, diagramas e especificações detalhadas para a execução do projeto.</li>
            <li><strong>Compatibilização de Projetos: </strong>Integração entre diferentes disciplinas (elétrica, hidráulica, estrutural, etc.) para evitar conflitos durante a execução.</li>
            <li><strong>Adequação às Normas: </strong>Garantia de conformidade com regulamentações técnicas e exigências de órgãos fiscalizadores.</li>
            <li><strong>Suporte e Acompanhamento: </strong>Assistência técnica durante a execução do projeto para assegurar a correta aplicação dos conceitos e especificações.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
        <img src={Executivo1} alt="SPDA Torre" className="rounded-lg shadow-md" />
        <img src={Executivo2} alt="Medição de Resistividade" className="rounded-lg shadow-md" />
        <img src={Executivo3} alt="Instalação no Telhado" className="rounded-lg shadow-md" />
        <img src={Executivo4} alt="Descarga Atmosférica" className="rounded-lg shadow-md" />
        <img src={Executivo5} alt="Medição Técnica" className="rounded-lg shadow-md" />
        <img src={Executivo6} alt="Projeto de SPDA" className="rounded-lg shadow-md" />
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-700">Precisa de um Projeto Executivo seguro e confiável? Entre em contato conosco!</p>
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
