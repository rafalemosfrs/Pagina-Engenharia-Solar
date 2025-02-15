import React from 'react';
import { Link } from 'react-router-dom';
import laudo1 from '../assets/images/Laudo-e-ART/Laudo-e-ART-1.jpg';
import laudo2 from '../assets/images/Laudo-e-ART/Laudo-e-ART-2.jpg';
import laudo3 from '../assets/images/Laudo-e-ART/Laudo-e-ART-3.jpg';
import laudo4 from '../assets/images/Laudo-e-ART/Laudo-e-ART-4.jpg';
import laudo5 from '../assets/images/Laudo-e-ART/Laudo-e-ART-5.jpg';
import laudo6 from '../assets/images/Laudo-e-ART/Laudo-e-ART-6.jpeg';

export function LaudoEART() {
  return (
    <section className="max-w-7xl mx-auto pt-32 px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Laudo e ART
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src={laudo1} 
            alt="Laudo e ART" 
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed">
          A emissão de Laudo Técnico e Anotação de Responsabilidade Técnica (ART) é essencial para garantir a conformidade e segurança de instalações elétricas, mecânicas, civis e de outros sistemas técnicos. Esses documentos são exigidos por órgãos reguladores e servem como comprovação da execução responsável de um projeto ou serviço técnico, seguindo normas específicas, como as estabelecidas pelo Conselho Regional de Engenharia e Agronomia (CREA).
          </p>

          <ul className="list-disc pl-5 mt-4 text-gray-700">
            <li><strong>Elaboração de Laudo Técnico:</strong> Análise detalhada de instalações, equipamentos ou estruturas, identificando conformidades e eventuais irregularidades.</li>
            <li><strong>Emissão de ART:</strong> Registro formal da responsabilidade técnica do profissional habilitado sobre projetos, execuções ou manutenções.</li>
            <li><strong>Inspeção e Avaliação:</strong>  Verificação de segurança, desempenho e adequação das instalações aos padrões normativos.</li>
            <li><strong>Regularização e Adequação:</strong> Orientação e implementação de medidas para garantir que a instalação atenda às exigências legais e técnicas.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
        <img src={laudo1} alt="SPDA Torre" className="rounded-lg shadow-md" />
        <img src={laudo2} alt="Medição de Resistividade" className="rounded-lg shadow-md" />
        <img src={laudo3} alt="Instalação no Telhado" className="rounded-lg shadow-md" />
        <img src={laudo4} alt="Descarga Atmosférica" className="rounded-lg shadow-md" />
        <img src={laudo5} alt="Medição Técnica" className="rounded-lg shadow-md" />
        <img src={laudo6} alt="Projeto de SPDA" className="rounded-lg shadow-md" />
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-700">Precisa de um laudo ou ART seguro e confiável? Entre em contato conosco!</p>
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
