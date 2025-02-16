import React from 'react';
import { Link } from 'react-router-dom';
import Emuc1 from '../assets/images/Emuc-Pmuc/Emuc-1.jpg';
import Emuc2 from '../assets/images/Emuc-Pmuc/Emuc-2.jpg';
import Emuc3 from '../assets/images/Emuc-Pmuc/Emuc-3.png';
import Emuc4 from '../assets/images/Emuc-Pmuc/Emuc-4.jpg';
import Emuc5 from '../assets/images/Emuc-Pmuc/Emuc-5.jpg';
import Emuc6 from '../assets/images/Emuc-Pmuc/Emuc-6.jpg';

export function EmucPmuc() {
  return (
    <section className="max-w-7xl mx-auto pt-32 px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Emuc e Pmuc
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src={Emuc1} 
            alt="Emuc e Pmuc" 
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed">
          A EMUC (Especificação de Materiais de Uso Coletivo) e a PMUC (Padronização de Materiais de Uso Coletivo) são fundamentais para garantir a qualidade, padronização e segurança dos materiais utilizados em redes elétricas, especialmente em concessionárias de energia. Esses documentos especificam os critérios técnicos que os materiais devem atender, assegurando a conformidade com normas reguladoras e a compatibilidade com o sistema elétrico.
          </p>

          <ul className="list-disc pl-5 mt-4 text-gray-700">
            <li><strong>Elaboração de EMUC e PMUC: </strong> Desenvolvimento de especificações técnicas detalhadas para materiais elétricos, garantindo qualidade e padronização.</li>
            <li><strong>Análise e Testes de Conformidade: </strong> Avaliação dos materiais para assegurar que atendam aos requisitos normativos e operacionais das concessionárias.</li>
            <li><strong>Regularização e Certificação: </strong> Verificação e adequação dos materiais conforme exigências regulatórias, assegurando aprovação para uso em redes elétricas.</li>
            <li><strong>Consultoria Técnica: </strong> Suporte especializado para fornecedores e empresas que necessitam adequar seus produtos às normas exigidas pelas concessionárias de energia.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
        <img src={Emuc1} alt="SPDA Torre" className="rounded-lg shadow-md" />
        <img src={Emuc2} alt="Medição de Resistividade" className="rounded-lg shadow-md" />
        <img src={Emuc3} alt="Instalação no Telhado" className="rounded-lg shadow-md" />
        <img src={Emuc4} alt="Descarga Atmosférica" className="rounded-lg shadow-md" />
        <img src={Emuc5} alt="Medição Técnica" className="rounded-lg shadow-md" />
        <img src={Emuc6} alt="Projeto de SPDA" className="rounded-lg shadow-md" />
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-700">Precisa de um Emuc e Pmuc seguro e confiável? Entre em contato conosco!</p>
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
