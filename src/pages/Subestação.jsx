import React from 'react';
import { Link } from 'react-router-dom';
import subestacao from '../assets/images/Subestacao/subestacao-1.png';
import subestacao2 from '../assets/images/Subestacao/subestacao-2.jpg';
import subestacao3 from '../assets/images/Subestacao/subestacao-3.jpg';
import subestacao4 from '../assets/images/Subestacao/subestacao-4.jpg';
import subestacao5 from '../assets/images/Subestacao/subestacao-5.jpg';
import subestacao6 from '../assets/images/Subestacao/subestacao-6.jpg';

export function Subestacao() {
  return (
    <section className="max-w-7xl mx-auto pt-32 px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Subestação
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img 
            src={subestacao} 
            alt="Sistema de Subestação" 
            className="rounded-lg shadow-lg"
          />
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed">
          A instalação de subestações elétricas é fundamental para a distribuição eficiente de energia, garantindo o fornecimento adequado para indústrias, comércios e áreas residenciais. As subestações desempenham um papel essencial na transformação e controle da tensão elétrica, assegurando a estabilidade e a segurança do sistema elétrico. Sua implementação segue normas técnicas rigorosas, como a NBR 14039, que regulamenta instalações de média tensão.
          </p>

          <ul className="list-disc pl-5 mt-4 text-gray-700">
            <li><strong>Projeto e Instalação:</strong> Desenvolvimento e implementação de subestações de acordo com as necessidades do cliente e as exigências normativas.</li>
            <li><strong>Análise de Técnica:</strong> Avaliação das condições elétricas e estruturais para determinar a viabilidade e a eficiência da subestação.</li>
            <li><strong>Manutenção e Inspeção:</strong>  Verificação periódica para garantir o bom funcionamento, prevenir falhas e aumentar a vida útil dos equipamentos.</li>
            <li><strong>Laudo Técnico:</strong> Emissão de documentos que comprovam a conformidade da instalação com as regulamentações vigentes.</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
        <img src={subestacao} alt="SPDA Torre" className="rounded-lg shadow-md" />
        <img src={subestacao2} alt="Medição de Resistividade" className="rounded-lg shadow-md" />
        <img src={subestacao3} alt="Instalação no Telhado" className="rounded-lg shadow-md" />
        <img src={subestacao4} alt="Descarga Atmosférica" className="rounded-lg shadow-md" />
        <img src={subestacao5} alt="Medição Técnica" className="rounded-lg shadow-md" />
        <img src={subestacao6} alt="Projeto de SPDA" className="rounded-lg shadow-md" />
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-700">Precisa de um sistema de subestação seguro e eficiente? Entre em contato conosco!</p>
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
