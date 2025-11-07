const projects = [
  {
    id: "orders-integrations-hub",
    title: "Orders Integrations Hub",
    description:
      "Centralized hub for integrating orders from multiple marketplaces like iFood, Rappi, and 99Food, designed for scalability and reusability.",
    fullDescription:
      "A modular and multi-tenant integration platform built to centralize orders from various food delivery marketplaces such as iFood, Rappi, and 99Food. Designed with a strong focus on scalability and maintainability, the system reduces integration onboarding time from weeks to days. Includes webhook translation, signature validation, caching, and automated documentation generation.",
    image: "/orders-hub.png",
    github: "https://github.com/LucasBonato/Orders.Integrations.Hub",
    tags: ["Java", "Spring Boot", "AWS", "PostgreSQL", "Docker"],
  },
  {
    id: "servoeste-system",
    title: "ServOeste Internal System",
    description:
      "Internal system for managing logistics and services, built with a Java Spring Boot backend and a Flutter client app.",
    fullDescription:
      "A full-stack internal management system developed for ServOeste, featuring a Java Spring Boot backend designed with Clean Architecture principles and extensive unit and architecture tests (ArchUnit). The client-side application, built in Flutter, implements Bloc for state management and componentized UI design for reusability and scalability.",
    image: "/serv-oeste.png",
    github: "https://github.com/LucasBonato/ServOeste",
    demo: "https://github.com/LucasBonato/ServOeste-Aplicativo",
    tags: ["Java", "Spring Boot", "Flutter", "Dart", "MySQL"],
  },
  {
    id: "lemnos-platform",
    title: "Lemnos Platform",
    description:
      "Complete platform combining backend and frontend for service management, built with Java and Flutter.",
    fullDescription:
      "A service management platform designed as a full-stack solution. The backend, Lemnos-Server, is built in Java with Spring Boot, focusing on clean architecture and maintainability. The Flutter frontend provides a responsive, intuitive interface, communicating through REST APIs with robust validation and error handling.",
    image: "/lemnos.png",
    github: "https://github.com/LucasBonato/Lemnos-Server",
    demo: "https://lemnos.vercel.app/",
    tags: ["Java", "Spring Boot", "Flutter", "Dart", "PostgreSQL"],
  },
  {
    id: "infinity-gym",
    title: "Infinity Gym",
    description:
      "A project with a simple gym's homepage demonstrating front-end development techniques.",
    fullDescription:
      "A project with a simple, front-end-focused design, not connected to a database, therefore not a 'live' website, simply a gym's homepage demonstrating front-end development techniques.",
    image: "/infinity-gym.png",
    github: "https://github.com/LucasBonato/Infinity-Gym",
    demo: "https://lucasbonato.github.io/Infinity-Gym/",
    tags: ["HTML", "CSS", "JavaScript", "SCSS"],
  },
];

export default projects;