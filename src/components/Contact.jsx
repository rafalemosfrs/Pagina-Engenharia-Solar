import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-yellow-500">Entre em Contato</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Vamos Conversar Sobre Seu Projeto
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <form onSubmit={handleSubmit} action="https://formsubmit.co/rafaelemosfr@gmail.com" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                    Nome
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                    Mensagem
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="rounded-md bg-yellow-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-x-4">
                <Mail className="h-6 w-6 text-yellow-500" />
                <a href="mailto:contato@cearaenergia.com.br" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-yellow-500">
                  contato@cearaenergia.com.br
                </a>
              </div>
              <div className="flex items-center gap-x-4">
                <Phone className="h-6 w-6 text-yellow-500" />
                <a href="https://wa.me/5585991347203" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-yellow-500">
                  (85) 99134-7203
                </a>
              </div>
              <div className="flex items-center gap-x-4">
                <Facebook className="h-6 w-6 text-yellow-500" />
                <a href="https://www.facebook.com/cearaenergia" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-yellow-500">
                  Facebook
                </a>
              </div>
              <div className="flex items-center gap-x-4">
                <Instagram className="h-6 w-6 text-yellow-500" />
                <a href="https://www.instagram.com/cearaenergia" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-yellow-500">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}