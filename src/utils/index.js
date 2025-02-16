import chatbot from "../assets/images/chatbot.png";
import linkup from "../assets/images/linkup.png";
// import a1 from "../assets/images/a1.webp";
// import a2 from "../assets/images/a2.webp";
// import a4 from "../assets/images/a4.webp";
// import a5 from "../assets/images/a5.webp";




const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    else if (hour < 18) return "Good Afternoon";
    else return "Good Evening";
};

export const headlines = [
    `${getGreeting()}, I'm Ajay.`,
    "I'm a student.",
    "Over the past few years, I've been learning and building projects, strengthening my problem-solving skills, and tackling both backend and frontend challenges."
];

export const fixedNavItems = [
    { name: "Home" },
    { name: "About" },
    { name: "Projects" },
    // { name: "Blog" },
    { name: "Contact" }
]

export const projects = [
    {
        title: 'LINK-UP',
        image: linkup,
        linkGithub: 'https://github.com/AjaySmarc/LinkUp-mern-app',
        linkOnline: null,
        description: 'Link up is a web app that provides real-time group engagement like vedio calls,screenshare and group chats.',
        techStack: ['React', 'Tailwind CSS', 'MongoDB', 'Agora API']
    },
    {
        title: ' Rental Price Prediction Chatbot',
        image: chatbot,
        linkOnline: null,
        linkGithub: null,
        description: ' a chatbot that predicts rental prices based on factors like location, property size, number of rooms, amenities,and market trends',
        techStack: ['python', 'Node', 'openAI API']
    }
];

export const skillsWork = [
    'C',
    'Java',
    'NodeJS',
    'Python',
    'PostgreSQL',
    'MySQL',
    'JavaScript',
    'Docker',
    'AWS',
];

export const certificates = [
    'Google AIML',
    'Generative AI',
    'Data Analyst'
];

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
    title: "Ajay Mudettula",
    description: "This portfolio is a collection of my work that showcases my skills and creativity.",
    imageURL: "https://avatars.githubusercontent.com/u/108766949?s=400&u=1671b3dfc6d09709a394c94b1566e56e6e3e16cd&v=4",
    pageUrl: "https://www.johnclaytonblanc.com"
};
