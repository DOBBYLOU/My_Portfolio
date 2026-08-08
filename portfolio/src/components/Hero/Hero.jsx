import Styles from "./Hero.module.css";

function Hero() {
  const services = [
    {
      name: "Front-End Development That Delivers Results",
      desc: `I build modern, fast, and responsive web interfaces using React, with a strong focus on UX and performance.`,
    },
    {
      name: "UI Implementation",
      desc: `UI implementation based on Figma / Adobe XD designs with pixel-perfect
        accuracy. Ensuring responsive layouts, cross-browser compatibility, and
        strong attention to detail.`,
    },
    {
      name: "Performance Optimization",
      desc: `Application performance optimization, including reducing load times,
        implementing lazy loading, code splitting, and improving rendering
        efficiency.`,
    },
    {
      name: "API Integration",
      desc: `Integration of REST APIs and handling asynchronous data using Axios and
        Fetch. Implementation of proper error handling, loading states, and data
        state management.`,
    },
    {
      name: "State Management",
      desc: `Configuration and management of application state using Redux Toolkit,
        Context API, and other modern state management solutions.`,
    },
    {
      name: "Bug Fixing & Refactoring",
      desc: `Identifying and fixing bugs, improving code structure, and refactoring
        existing projects.`,
    },
    {
      name: "Responsive Design",
      desc: `Creating interfaces that work seamlessly across all devices, including
        mobile, tablet, and desktop.`,
    },
    {
      name: "Code Review & Consulting",
      desc: `Conducting code reviews and providing recommendations for improving
        architecture and development best practices`,
    },
  ];
  return (
    <div className={`${Styles.hero}`}>
      {services.map(({ name, desc }) => {
        return (
          <div key={name} className={Styles.servicesSection}>
            <h1>{name}</h1>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Hero;
