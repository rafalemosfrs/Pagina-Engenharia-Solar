# ⚡ Ceará Energia - Landing Page

Bem-vindo ao **Ceará Energia**, um projeto de landing page para apresentação de serviços de energia solar e engenharia elétrica. 

Este projeto foi desenvolvido com **React (Vite) e Tailwind CSS**, garantindo uma interface moderna, responsiva e de alto desempenho.

---

## 🚀 Tecnologias Utilizadas

- **React** (Vite)
- **React Router DOM** (para navegação SPA)
- **Tailwind CSS** (para estilização)
- **Lucide-React** (ícones)
- **JavaScript (ES6)**

---

## 📂 Estrutura do Projeto

```
project/
│── src/
│   ├── assets/images/           # Imagens e logotipos
│   ├── components/              # Componentes reutilizáveis
│   │   ├── AboutUs.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── OurWork.jsx
│   │   ├── ScrollToTop.jsx      # Rola a página para o topo ao mudar de rota
│   │   ├── ScrollToSection.jsx  # Rola para a seção correta ao navegar
│   │   ├── ServiceLayout.jsx
│   │   ├── Services.jsx
│   ├── pages/                   # Páginas do site
│   │   ├── CommercialServices.jsx
│   │   ├── IndustrialServices.jsx
│   │   ├── MaintenanceServices.jsx
│   │   ├── PrivacyPolicy.jsx     # Política de Privacidade
│   │   ├── ResidentialServices.jsx
│   │   ├── TermsOfService.jsx    # Termos de Serviço
│   ├── App.jsx                   # Arquivo principal do React
│   ├── main.jsx                   # Ponto de entrada do React
│── public/
│── package.json
│── tailwind.config.js
│── vite.config.js
│── README.md                     # 📌 Você está aqui!
```

---

## 🛠️ Instalação e Configuração

1. **Clone o repositório**:
   ```sh
   git clone https://github.com/seu-usuario/ceara-energia.git
   cd ceara-energia
   ```

2. **Instale as dependências**:
   ```sh
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```sh
   npm run dev
   ```

4. **Acesse o projeto no navegador**:  
   O Vite irá rodar o projeto em `http://localhost:5173/` (ou outra porta, se estiver ocupada).

---

## 🌎 Rotas do Projeto

| Rota                        | Descrição |
|-----------------------------|-----------|
| `/`                         | Página principal |
| `/services/residential`      | Serviços residenciais |
| `/services/industrial`       | Serviços industriais |
| `/services/commercial`       | Serviços comerciais |
| `/services/maintenance`      | Serviços de manutenção |
| `/politica-de-privacidade`   | Página de Política de Privacidade |
| `/termos-de-servico`         | Página de Termos de Serviço |

---

## 🎨 Estilização e Design

- O design foi feito com **Tailwind CSS**, garantindo responsividade e uma aparência moderna.
- Ícones utilizados são da biblioteca **Lucide-React**.
- O `ScrollToTop` e `ScrollToSection` garantem navegação fluida entre páginas e seções.

---

## 📌 Melhorias Futuras

- [ ] Implementação de **modo escuro** 🌙
- [ ] Adicionar integração com **formulário de contato funcional** 📩
- [ ] Criar uma página de **portfólio de projetos anteriores** 🏗️

---

## 📝 Licença

Este projeto está sob a licença **MIT**.  
Sinta-se livre para utilizá-lo e modificá-lo conforme necessário.  

Feito com 💛 pela equipe **Ceará Energia** ⚡
