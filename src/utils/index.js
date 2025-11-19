// import chatbot from '../assets/images/chatbot.png';
import linkup from '../assets/images/linkup.png';
// import linkup from '../assets/projects/linkup.png';
// import chatbot from '../assets/projects/chatbot.png';
import chatwithajay from '../assets/images/chatwithajay.png';
import sentiment from '../assets/images/sentiment.png';
import resumegenius from '../assets/images/resumegenius.png';
import portfolio from '../assets/images/portfolio.png';
// import dsa from '../assets/projects/dsa.png';
// import chatui from '../assets/images/chatui.png';

// import a1 from "../assets/images/a1.webp";
// import a2 from "../assets/images/a2.webp";
// import a4 from "../assets/images/a4.webp";
// import a5 from "../assets/images/a5.webp";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  else if (hour < 18) return 'Good Afternoon';
  else return 'Good Evening';
};

export const headlines = [
  `${getGreeting()}, I'm Ajay.`,
  "I'm a student.",
  "Over the past few years, I've been learning and building projects, strengthening my problem-solving skills, and tackling both backend and frontend challenges.",
];

export const fixedNavItems = [
  { name: 'Home' },
  { name: 'Resume' },
  { name: 'About' },
  { name: 'Projects' },

  // { name: "Blog" },
  { name: 'Contact' },
];

export const projects = [
  {
    title: 'LINK-UP',
    image: linkup,
    linkGithub: 'https://github.com/AjaySmarc/LinkUp-mern-app',
    linkOnline: null,
    description:
      'A real-time communication web app supporting video calls, screen sharing, and group chats using Agora.',
    techStack: ['React', 'Tailwind CSS', 'MongoDB', 'Agora API'],
  },
  // {
  //   title: 'Rental Price Prediction Chatbot',
  //   image: chatbot,
  //   linkGithub: 'https://github.com/AjaySmarc/ChatwithAjay-API',
  //   linkOnline: null,
  //   description:
  //     'An AI chatbot that predicts rental prices using property features such as city, rooms, area, and amenities.',
  //   techStack: ['Python', 'Node.js', 'OpenAI API'],
  // },
  {
    title: 'ChatwithAjay API',
    image: chatwithajay,
    linkGithub: 'https://github.com/AjaySmarc/ChatwithAjay-API',
    linkOnline: null,
    description:
      'Backend API integrating prompt engineering and OpenAI to generate AI-powered chat responses.',
    techStack: ['Node.js', 'Express', 'OpenAI API'],
  },
  {
    title: 'YouTube Sentiment Analyzer',
    image: sentiment,
    linkGithub: 'https://github.com/AjaySmarc/YouTube-Sentiment-Analyzer',
    linkOnline: null,
    description:
      'Scrapes YouTube comments, performs sentiment analysis, and visualizes insights.',
    techStack: ['Python', 'Pandas', 'Scikit-Learn', 'NLP'],
  },
  {
    title: 'ResumeGenius',
    image: resumegenius,
    linkGithub: 'https://github.com/AjaySmarc/ResumeGenius',
    linkOnline: null,
    description:
      'A dynamic resume generator that builds ATS-friendly resumes based on user input.',
    techStack: ['React', 'Tailwind CSS', 'Node.js'],
  },
  {
    title: 'Portfolio Website',
    image: portfolio,
    linkGithub: 'https://github.com/AjaySmarc/portfolio-ajay',
    linkOnline: 'https://portfolio-ajaymudettula.vercel.app/',
    description:
      'My personal portfolio website built with modern UI, animations, and responsive design.',
    techStack: ['React', 'CSS', 'JavaScript'],
  },
];

export const skillsWork = [
  'Java',
  'Python',
  'C',
  'JavaScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'Firebase',
  'REST APIs',
  'MERN Stack',
  'Docker',

  'Git',
  'OpenCV',
  'MediaPipe',
];

export const certificates = ['Google AIML', 'Generative AI', 'Oracle SQL'];

// export const articles = [
//     {
//         title: "LLaMA CPP and Python: The Easiest Way to Build Your Own ChatGPT",
//         resume: "Today, we hear a lot about large language models (LLMs) like GPT-3, GPT-4, PaLM, Gopher, etc. These models have shown their capacity to solve problems and generate text.",
//         url:
//             "https://medium.com/ai-mind-labs/llama-cpp-and-python-the-easiest-way-to-build-your-own-chatgpt-e473a9847878",
//         image: a1
//     },
//     {
//         title: "How AI can inherit our biases",
//         resume: " In 2014, a prominent example occurred when Amazon developed an AI-based recruiting tool. Designed to streamline resume screening, the algorithm ended up discriminating against women. Why? Because it was trained on a dataset...",
//         url: "https://medium.com/p/e3a367a18104",
//         image: a5
//     },
//     {
//         title: "Google Search vs Local PC Search",
//         resume: "Have you ever experienced the frustration of waiting for your computer to cough up search results while Google effortlessly delivers them in the blink of an eye? 😩 A simple Google search yields results in a mere 0.28 seconds...",
//         url: "https://medium.com/ai-mind-labs/google-search-vs-local-pc-search-902a6291e6ce",
//         image: a4
//     },
//     {
//         title: "The JavaScript Universe: Imperfections and Essential Insights",
//         resume: "In the ever-evolving world of web development, JavaScript reigns supreme. From crafting dynamic, interactive websites to powering complex server-side applications, its versatility knows no bounds.",
//         url:
//             "https://pub.aimind.so/the-javascript-universe-imperfections-and-essential-insights-fc9be3e65af4",
//         image: a2
//     },
// ];

export const metadata = {
  title: 'Ajay Mudettula',
  description:
    'This portfolio is a collection of my work that showcases my skills and creativity.',
  imageURL:
    'https://avatars.githubusercontent.com/u/108766949?s=400&u=1671b3dfc6d09709a394c94b1566e56e6e3e16cd&v=4',
  pageUrl: 'https://www.johnclaytonblanc.com',
};
