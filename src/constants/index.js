const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Photos", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Trash", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const blogPosts = [
    {
        id: 1,
        date: "Started Sep 5th, 2023",
        title:
            "Wilfrid Laurier University",
        image: "/images/blog1.png",
        link: "https://www.wlu.ca/",
    },
    {
        id: 2,
        date: "Related Coursework",
        title: "All my Related Coursework",
        image: "/images/blog2.png",
        link: "https://docs.google.com/document/d/1fczwgXwQb1riiN7WYHP2gyfNcP7On3V3mB2UxEGuysU/edit?usp=sharing",
    },
    {
        id: 3,
        date: "Github from Classes",
        title: "GitHub Repository from all my Coding Classes",
        image: "/images/blog3.png",
        link: "https://github.com/Antoine23y?tab=repositories",
    },
];

const techStack = [
    {
        category: "Languages",
        items: [" Python", "Java", "JavaScript", "C/C++", "TypeScript", "SQL", "Matlab", "RStudio"],
    },
    {
        category: "Frontend",
        items: ["React","HTML","CSS", "Tailwind CSS", "Next.js", "Python"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express.js", "Rest APIs", "MongoDB", "Flask", "LangChain", "MySQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "Github", "Vite", "Selenium"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/Antoine23y",
    },
    {
        id: 2,
        text: "Platform",
        icon: "/icons/atom.svg",
        bg: "#4bcb63",
        link: "https://antoineyoussef.com/",
    },
    {
        id: 3,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/antoine-youssef/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "AI-Powered Resume Builder",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[15vh] right-35", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "AI Resume Builder Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Built a full-stack AI-powered resume builder using React, Redux Toolkit, Node.js, Express, and MongoDB",
                        "Implemented secure authentication with JWT and bcrypt, including protected routes and role-based access",
                        "Integrated OpenAI API to generate AI-assisted resume content and improve user productivity",
                        "Designed RESTful APIs and managed data persistence using Mongoose and MongoDB",
                        "Developed a responsive UI with Tailwind CSS and handled file uploads using Multer and ImageKit",
                    ],
                },
                {
                    id: 2,
                    name: "ai-resume-builder.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/Antoine23y/ai_resume_builder",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "project.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "AI-Powered Webscraper",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[40vh] right-7",
            children: [
                {
                    id: 1,
                    name: "AI-Powered Webscraper",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "Built an AI powered web scraping application to extract structured data from JavaScript-heavy websites using headless browser automation.",
                        "Implemented Selenium-based scraping and BeautifulSoup HTML parsing to handle dynamically rendered content and clean raw DOM data.",
                        "Integrated an LLM (Ollama 3 + LangChain) to intelligently extract user-specified information from scraped web content.",
                        "Developed an interactive Streamlit web interface enabling users to input URLs, run scrapes and view extracted results in real time.",
                    ],
                },
                {
                    id: 2,
                    name: "ai-webscraper.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/Antoine23y/AI-Powered_Web_scraper",
                    position: "top-20 left-20",
                },
                {
                    id: 4,
                    name: "preview.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Stock Market Predictor using Machine Learning",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[50vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Predictor.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Developed a machine learning pipeline to predict next-day S&P 500 price movement using historical market data from Yahoo Finance.",
                        "Engineered time-series features including rolling averages, price ratios, and trend indicators across multiple time horizons to improve model performance.",
                        "Trained and evaluated a Random Forest classifier with a custom backtesting framework to simulate real-world trading conditions and avoid data leakage.",
                        "Analyzed model performance using precision metrics and data visualizations to validate predictions and support decision-making.",
                    ],
                },
                {
                    id: 2,
                    name: "Stock-Market-Predictor.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "url",
                    href: "https://github.com/Antoine23y/Stock_Price_Prediction_Analysis",
                    position: "top-10 right-20",
                },
                {
                    id: 4,
                    name: "predictor.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/antoine1.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/antoine-2.jpg",
        },
        {
            id: 3,
            name: "conference-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-52 left-80",
            imageUrl: "/images/antoine-3.jpeg",
        },
        {
            id: 4,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/Antoine.jpg",
            description: [
                "Hey! I’m Antoine 👋, I am a 3rd year Computer Science Student at Wilfrid Laurier University.",
                "I’m currently looking for a software engineering or anything related internship where I can grow and contribute to real projects.",
                "I'm always looking to expand my knowledge and skills in the tech industry.",
                "When I’m not coding, you’ll probably find me playing basketball, playing video games, or watching movies.",
            ],
},
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };