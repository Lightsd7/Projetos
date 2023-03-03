// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const projetos = [
  
  {
    title: "Randomizador de imagens",
    thumb: "https://miro.medium.com/max/1024/1*Ukhx76VQ8E6JXEW7xfIzSA.png",
    link: "https://github.com/Lightsd7/Image-Randomizer"
  },
  {
    title: "Meu Currículo com Tailwind",
    thumb: "https://cms-assets.tutsplus.com/uploads/users/30/posts/34128/preview_image/tailwindcss-pre.png",
    link: "https://github.com/Lightsd7/CV-with-Tailwind"
  },
  {
    title: "Dashboard controle de gastos",
    thumb: "https://miro.medium.com/max/1024/1*Ukhx76VQ8E6JXEW7xfIzSA.png",
    link: "https://github.com/Lightsd7/React-TypeScript_Dashboard"
  },
  {
    title: "Pesquisar organização no GitHub",
    thumb: "https://miro.medium.com/max/1024/1*Ukhx76VQ8E6JXEW7xfIzSA.png",
    link: "https://github.com/Lightsd7/Repositories-React"
  },
  {
    title: "Calculadora com JS puro",
    thumb: "https://miro.medium.com/max/1200/1*ahpxPO0jLGb9EWrY2qQPhg.jpeg",
    link: "https://github.com/Lightsd7/CalculadoraJS"
  },
  {
    title: "Desafio de microsserviços",
    thumb: "https://fernandofranzini.files.wordpress.com/2019/05/logopit_15126739535452110963050.jpg",
    link: "https://github.com/Lightsd7/Desafio-Java"
  },
  {
    title: "Site de ensino EAD com chatbot por texto e voz",
    thumb: "https://s2.glbimg.com/5pgaEIiZXIVWgSTOtfKBtm5AHaU=/695x393/s2.glbimg.com/vME2Bq4OSpm6f6IE16BhcVLR98U=/695x0/s.glbimg.com/po/tt2/f/original/2014/11/14/java-logo.jpg",
    link: "https://github.com/raphaelcamar/Chatbot-Voice---IBM-watson"
  },
  {
    title: "Aplicativo mobile de criação de tarefas",
    thumb: "https://files.passeidireto.com/946ff5f5-f37c-4004-9d7e-cf6a5756a500/946ff5f5-f37c-4004-9d7e-cf6a5756a500.png",
    link: "https://github.com/Lightsd7/CalculadoraJS"
  },
  {
    title: "API RESTful",
    thumb: "https://luizladeira.files.wordpress.com/2016/12/nodejs-logo.png?w=620",
    link: "https://github.com/Lightsd7/RESTful-API-Node.js"
  },
  {
    title: "Aplicativo mobile do jogo Campo Minado",
    thumb: "https://files.passeidireto.com/946ff5f5-f37c-4004-9d7e-cf6a5756a500/946ff5f5-f37c-4004-9d7e-cf6a5756a500.png",
    link: "https://github.com/Lightsd7/CampoMinado"
  },
  {
    title: "Aplicação web e-commerce",
    thumb: "https://fernandofranzini.files.wordpress.com/2019/05/logopit_15126739535452110963050.jpg",
    link: "https://github.com/Lightsd7/cursomc"
  },
  {
    title: "Aplicativo mobile de previsão do clima",
    thumb: "https://files.passeidireto.com/946ff5f5-f37c-4004-9d7e-cf6a5756a500/946ff5f5-f37c-4004-9d7e-cf6a5756a500.png",
    link: "https://github.com/Lightsd7/Weather-App"
  },
  {
    title: "First steps",
    thumb: "https://media.learncafe.co/courses/17679_0.jpg",
    link: "https://github.com/Lightsd7/FirstSteps-Angular"
  },
  {
    title: "TDD RSpec",
    thumb: "https://p.kindpng.com/picc/s/25-255290_ruby-on-rails-logo-hd-png-download.png",
    link: "https://github.com/Lightsd7/TDD_RubyOnRails_RSpec"
  },
  {
    title: "E-commerce de livros",
    thumb: "https://fernandofranzini.files.wordpress.com/2019/05/logopit_15126739535452110963050.jpg",
    link: "https://github.com/Lightsd7/E-Commerce"
  },
  {
    title: "Gerenciador de Tarefas",
    thumb: "https://fernandofranzini.files.wordpress.com/2019/05/logopit_15126739535452110963050.jpg",
    link: "https://github.com/Lightsd7/DBE-Nac01"
  },
  {
    title: "API RESTful",
    thumb: "https://p.kindpng.com/picc/s/25-255290_ruby-on-rails-logo-hd-png-download.png",
    link: "https://github.com/Lightsd7/Rails-API"
  }
];

projetos.map(projeto => {
  const cardClone = card.cloneNode(true);
  cardClone.querySelector("img").src = projeto.thumb;
  cardClone.querySelector(".title").innerHTML = projeto.title;
  cardClone.querySelector(".card-links").href = projeto.link;
  sectionCards.appendChild(cardClone);
});

card.remove();
