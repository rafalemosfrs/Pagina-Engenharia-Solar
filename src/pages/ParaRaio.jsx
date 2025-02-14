import React from 'react';
import { Link } from 'react-router-dom';
import paraRaio1 from '../assets/images/Para-raio/para-raio-1.jpg';
import paraRaio2 from '../assets/images/Para-raio/para-raio-2.jpg';
import paraRaio3 from '../assets/images/Para-raio/para-raio-3.jpg';
import paraRaio4 from '../assets/images/Para-raio/para-raio-4.jpg';
import paraRaio5 from '../assets/images/Para-raio/para-raio-5.jpg';
import paraRaio6 from '../assets/images/Para-raio/para-raio-6.jpg';

export function ParaRaio() {
  return (
    <section className="max-w-7xl mx-auto pt-32 px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Proteção Contra Descargas Atmosféricas (Para-Raio)
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src={paraRaio1} 
            alt="Sistema de Para-Raio" 
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed">
            A instalação de Sistemas de Proteção Contra Descargas Atmosféricas (SPDA), conhecidos como para-raios, 
            é essencial para garantir a segurança de edificações e pessoas contra os efeitos nocivos das descargas elétricas atmosféricas. 
            Esses sistemas são regulamentados pela norma técnica NBR 5419:2015, garantindo conformidade com as exigências de segurança.
          </p>

          <ul className="list-disc pl-5 mt-4 text-gray-700">
            <li><strong>Projeto e Instalação:</strong> Desenvolvimento e implementação de sistemas de SPDA.</li>
            <li><strong>Análise de Risco:</strong> Avaliação técnica para determinar a necessidade do sistema.</li>
            <li><strong>Manutenção e Inspeção:</strong> Verificação periódica da integridade do SPDA.</li>
            <li><strong>Laudo Técnico:</strong> Emissão de documentos exigidos por órgãos reguladores.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
        <img src={paraRaio1} alt="SPDA Torre" className="rounded-lg shadow-md" />
        <img src={paraRaio2} alt="Medição de Resistividade" className="rounded-lg shadow-md" />
        <img src={paraRaio3} alt="Instalação no Telhado" className="rounded-lg shadow-md" />
        <img src={paraRaio4} alt="Descarga Atmosférica" className="rounded-lg shadow-md" />
        <img src={paraRaio5} alt="Medição Técnica" className="rounded-lg shadow-md" />
        <img src={paraRaio6} alt="Projeto de SPDA" className="rounded-lg shadow-md" />
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-700">Precisa de um sistema de para-raio seguro e eficiente? Entre em contato conosco!</p>
        <a 
          href="/contato" 
          className="mt-4 inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-600 transition"
        >
          Solicitar Orçamento
        </a>
      </div>
    </section>
  );
}
