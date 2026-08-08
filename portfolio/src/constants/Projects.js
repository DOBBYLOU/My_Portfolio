import honeyImg from "../assets/Imgs/honey-screen.png";
import velocityImg from "../assets/Imgs/velocity-screen.png";
import portfolioImg from "../assets/Imgs/portfolio-screen.png";

const projects = [
  {
    id: 1,

    screen: honeyImg,
    name: "My first project",

    demo: "https://dobbylou.github.io/Honey_Site/",
    git: "https://github.com/DOBBYLOU/Honey_Site.git",

    desc: `This is my first project. Although it is still in an early stage and not
        fully responsive, it allowed me to gain valuable experience. I spent
        approximately two months working on it, and upon completion, despite the
        numerous mistakes it contains, I developed a strong understanding of the
        importance of proper code naming, effective styling practices, and
        maintaining high standards as a developer.`,
  },
  {
    id: 2,

    screen: velocityImg,
    name: "Structure + Js",

    demo: "https://dobbylou.github.io/Velocity/",
    git: "https://github.com/DOBBYLOU/Velocity.git",

    desc: `This website was developed after I studied the BEM
        (Block–Element–Modifier) methodology, which significantly improved my
        approach to structuring styles and markup. The codebase became cleaner
        and more maintainable, existing bugs were resolved, and JavaScript logic
        was successfully implemented. Through this project, I moved beyond
        simply understanding how websites are built to writing code that is
        clear and maintainable for other developers. It was also during this
        project that I began working with version control using Git and GitHub
        for the first time.`,
  },
  {
    id: 3,

    screen: portfolioImg,
    name: "React + Git",

    demo: "https://my-portfolio-qqas.vercel.app/",
    git: "https://github.com/DOBBYLOU/My_Portfolio.git",

    desc: `This is my portfolio website (the one you are currently viewing).
        Although I have worked with React before, this is the first React site I
        can showcase for various reasons some of my other projects are lost, and
        for others, I no longer have access. This site includes routing
        functionality and is managed using GitHub.`,
  },
];

export default projects;
