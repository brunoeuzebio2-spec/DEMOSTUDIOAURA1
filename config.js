/* ============================================================
   STUDIO AURA — ARQUIVO ÚNICO DE CONFIGURAÇÃO
   ============================================================
   Tudo o que muda de cliente para cliente vive aqui:
   nome, textos, cores, contatos, imagens, serviços e preços.
   Não é necessário tocar em index.html, style.css ou script.js
   para trocar de cliente — basta editar os valores abaixo.
   ============================================================ */

const CONFIG = {

  /* ---------- IDENTIDADE ---------- */
  site: {
    title: "Studio Aura — Estética e Beleza",
    favicon: "🤍",
    brandName: "Studio Aura",
    slogan: "Beleza que valoriza quem você é.",
  },

  /* ---------- PALETA DE CORES ----------
     Alteradas aqui, aplicam-se automaticamente ao site inteiro
     (script.js escreve estes valores nas variáveis CSS). */
  colors: {
    bg: "#F8F5F2",
    bgSecondary: "#EFE7E1",
    text: "#292524",
    accent: "#B88A72",
    accentDark: "#9C7159",
    white: "#FFFFFF",
  },

  /* ---------- CONTATO ---------- */
  contact: {
    whatsappNumber: "5511999999999", // apenas dígitos, com DDI e DDD
    whatsappMessage: "Olá! Vim pelo site e gostaria de agendar um horário no Studio Aura.",
    phoneDisplay: "(11) 99999-9999",
    instagramHandle: "@studioaura",
    instagramUrl: "https://instagram.com/",
    email: "contato@studioaura.com.br",
  },

  /* ---------- ENDEREÇO E HORÁRIO ---------- */
  location: {
    addressLine1: "Rua das Flores, 250 — Centro",
    addressLine2: "São Paulo — SP",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+das+Flores+250+Centro",
    hours: [
      { days: "Segunda a sábado", time: "09h às 19h" },
    ],
  },

  /* ---------- 1. HERO ---------- */
  hero: {
    title: "SUA BELEZA, DO SEU JEITO.",
    subtitle: "Tratamentos personalizados para realçar sua beleza e proporcionar uma experiência única de cuidado.",
    primaryButton: "Agendar pelo WhatsApp",
    secondaryButton: "Conhecer serviços",
    image: "https://images.unsplash.com/photo-1683408640631-2c99fff964d7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Mulher em ambiente de estética, tratamento facial sofisticado",
  },

  /* ---------- 2. APRESENTAÇÃO ---------- */
  intro: {
    heading: "Cuidado que começa nos detalhes",
    text: "No Studio Aura, cada atendimento é pensado para proporcionar uma experiência personalizada, acolhedora e profissional.",
    button: "Conheça o Studio",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Esteticista realizando tratamento facial em cliente",
  },

  /* ---------- 3. SERVIÇOS ---------- */
  services: {
    heading: "Nossos tratamentos",
    items: [
      {
        name: "Limpeza de Pele",
        description: "Remoção profunda de impurezas para uma pele renovada e com viço natural.",
        price: "a partir de R$ 120",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=700&q=80",
      },
      {
        name: "Design de Sobrancelhas",
        description: "Modelagem sob medida para valorizar o olhar e a harmonia do rosto.",
        price: "a partir de R$ 60",
        image: "https://images.unsplash.com/photo-1531299244174-d247dd4e5a66?auto=format&fit=crop&w=700&q=80",
      },
      {
        name: "Lash Design",
        description: "Extensão de cílios fio a fio, com efeito natural ou marcante.",
        price: "a partir de R$ 150",
        image: "https://images.pexels.com/photos/5128268/pexels-photo-5128268.jpeg?auto=compress&w=700&q=80",
      },
      {
        name: "Tratamentos Faciais",
        description: "Protocolos personalizados para hidratação, firmeza e luminosidade da pele.",
        price: "a partir de R$ 180",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=700&q=80",
      },
    ],
  },

  /* ---------- 4. DIFERENCIAIS ---------- */
  differentials: {
    heading: "Por que escolher o Studio Aura?",
    items: [
      {
        title: "Atendimento personalizado",
        text: "Cada cliente recebe atenção individual.",
      },
      {
        title: "Ambiente acolhedor",
        text: "Um espaço pensado para seu conforto.",
      },
      {
        title: "Profissionalismo",
        text: "Experiência e cuidado em cada atendimento.",
      },
      {
        title: "Agendamento fácil",
        text: "Fale conosco diretamente pelo WhatsApp.",
      },
    ],
  },

  /* ---------- 5. GALERIA ---------- */
  gallery: {
    heading: "Um pouco da nossa experiência",
    images: [
      { src: "https://images.unsplash.com/photo-1713824096348-c1956e6da321?auto=format&fit=crop&w=600&q=80", alt: "Ambiente do Studio Aura" },
      { src: "https://images.unsplash.com/photo-1761718209708-9ab9ba1c7252?auto=format&fit=crop&w=600&q=80", alt: "Tratamento facial em andamento" },
      { src: "https://images.unsplash.com/photo-1761718209835-c8586b7dcac0?auto=format&fit=crop&w=600&q=80", alt: "Aplicação de produto facial" },
      { src: "https://images.unsplash.com/photo-1647004692483-c5d942fe1137?auto=format&fit=crop&w=600&q=80", alt: "Cliente durante tratamento de beleza" },
      { src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80", alt: "Máscara facial em spa" },
      { src: "https://images.unsplash.com/photo-1761718210055-e83ca7e2c9ad?auto=format&fit=crop&w=600&q=80", alt: "Detalhe de atendimento estético" },
    ],
  },

  /* ---------- 6. DEPOIMENTOS ----------
     Conteúdo fictício, identificado como DEMO — substitua por
     avaliações reais antes de publicar o site definitivo. */
  testimonials: {
    heading: "O que dizem sobre nós",
    demoNotice: "Depoimento demonstrativo — espaço reservado para avaliações reais de clientes.",
    items: [
      { initials: "M.S.", text: "Experiência incrível, me senti muito bem cuidada do início ao fim. (Depoimento fictício)" },
      { initials: "A.R.", text: "Ambiente lindo e profissionais muito atenciosas. Recomendo demais! (Depoimento fictício)" },
      { initials: "C.F.", text: "O melhor atendimento de estética que já tive. Virei cliente fiel. (Depoimento fictício)" },
    ],
  },

  /* ---------- 7. CTA ---------- */
  cta: {
    heading: "Pronta para se cuidar?",
    text: "Agende seu horário e descubra uma nova experiência de beleza.",
    button: "Agendar pelo WhatsApp",
  },

  /* ---------- 8. LOCALIZAÇÃO ---------- */
  locationSection: {
    heading: "Onde estamos",
    button: "Ver localização",
  },

  /* ---------- 9. FOOTER ---------- */
  footer: {
    about: "Tratamentos personalizados para realçar sua beleza em um ambiente acolhedor e profissional.",
    credit: "Site demonstrativo desenvolvido para fins de apresentação.",
  },

};
