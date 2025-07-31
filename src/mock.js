// Mock data for Zala Yashraj's Portfolio
export const portfolioData = {
  personal: {
    name: "Zala Yashraj",
    title: "Machine Learning Engineer/Researcher",
    subtitle: "Aspiring AI Engineer",
    email: "zyashraj4@gmail.com",
    phone: "+91 9979204955",
    location: "Orchid-Sky, club-07 road,shela,ahmedabad-380058",
    tagline: "Machines don't think yet—but I'm working on it.",
    bio: "From the first time I explored neural networks, I've been driven by curiosity and a relentless urge to push boundaries. Machine learning isn't just a field to me—it's a lifelong journey of discovery. I love diving into complex, unique ML problem statements, building creative solutions, and watching models evolve from code to impact.",
    personalEdge: "I'm a perfectionist when it matters and a learner when it counts. When I'm in my productive zone, I execute work with precision and creativity. I'm feedback-hungry, adaptive, and growth-driven—each challenge is a stepping stone for me."
  },
  
  education: [
    {
      id: 1,
      institution: "Gandhinagar University [GIT]",
      degree: "B.Tech in AI/ML",
      duration: "2023-2027",
      status: "Current"
    },
    {
      id: 2,
      institution: "KumKum - Highschool",
      degree: "X Percentage - 55%",
      duration: "2020 - 2021"
    },
    {
      id: 3,
      institution: "KumKum - Highschool", 
      degree: "XII Percentage - 57%",
      duration: "2020 - 2021"
    }
  ],

  experience: [
    {
      id: 1,
      company: "Unified InfoTech",
      position: "Machine Learning Intern",
      duration: "2025-2025",
      type: "Internship",
      achievements: [
        "Contributed to ML pipelines in live industry projects",
        "Worked on data preprocessing, feature engineering & model deployment"
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "ASL DETECTION",
      subtitle: "American Sign Language Detection Using CNN",
      accuracy: "Over 90% acc.",
      description: "Developed a computer vision model to detect and classify ASL hand signs in real-time",
      technologies: ["TensorFlow", "OpenCV", "Python", "Keras"],
      features: [
        "Real-time ASL hand sign detection and classification",
        "Enabled sign-to-text conversion for real-time communication using webcam input",
        "Achieved over 90% accuracy on test dataset"
      ],
      category: "Computer Vision",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Animal Classification",
      subtitle: "CNN-based Real-time Classification System",
      description: "Created a CNN-based real-time ASL hand sign detection system",
      technologies: ["CNN", "Python", "Computer Vision", "Deep Learning"],
      features: [
        "Real-time animal classification using webcam",
        "Sign-to-text conversion functionality",
        "High accuracy classification model"
      ],
      category: "Deep Learning",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#"
    }
  ],

  skills: {
    programming: [
      { name: "Python", level: 90, category: "Programming" },
      { name: "Pandas", level: 85, category: "Data Analysis" },
      { name: "Scikit-Learn", level: 80, category: "Machine Learning" },
      { name: "Matplotlib", level: 75, category: "Visualization" },
      { name: "NumPy", level: 85, category: "Computing" },
      { name: "NLTK", level: 70, category: "NLP" }
    ],
    frameworks: [
      { name: "TensorFlow", level: 85, category: "Deep Learning" },
      { name: "PyTorch", level: 80, category: "Deep Learning" }
    ],
    databases: [
      { name: "DBMS Integration", level: 75, category: "Database" }
    ],
    ai: [
      { name: "Generative AI", level: 85, category: "AI" },
      { name: "Prompt Engineering", level: 90, category: "AI" },
      { name: "LLaMA 2 & 3", level: 80, category: "AI" }
    ],
    soft: [
      { name: "Creative Thinking", level: 95, category: "Soft Skills" },
      { name: "Perfectionism in Execution", level: 90, category: "Soft Skills" },
      { name: "Feedback-driven Growth", level: 95, category: "Soft Skills" },
      { name: "Adaptability", level: 85, category: "Soft Skills" }
    ]
  },

  certifications: [
    {
      id: 1,
      title: "Prompt Engineering with Llama 2 & 3",
      issuer: "Coursera",
      year: "2024",
      credentialUrl: "#"
    },
    {
      id: 2,
      title: "Supervised Learning Mastery",
      issuer: "Coursera", 
      year: "2024",
      credentialUrl: "#"
    },
    {
      id: 3,
      title: "Neural Networks & Deep Learning",
      issuer: "NPTEL",
      year: "2024",
      credentialUrl: "#"
    },
    {
      id: 4,
      title: "Generative AI Mastermind",
      issuer: "OutSkill",
      year: "2024",
      credentialUrl: "#"
    }
  ],

  social: {
    github: "https://github.com/zala-yashraj",
    linkedin: "https://linkedin.com/in/zala-yashraj",
    email: "zyashraj4@gmail.com"
  }
};

// Animation and UI constants
export const animations = {
  fadeInUp: "animate-in slide-in-from-bottom-4 duration-1000",
  fadeInLeft: "animate-in slide-in-from-left-4 duration-1000", 
  fadeInRight: "animate-in slide-in-from-right-4 duration-1000",
  staggerDelay: 200,
  particleCount: 50
};

export const theme = {
  colors: {
    primary: "#76B900", // NVIDIA Green
    secondary: "#1a1a1a",
    dark: "#0a0a0a",
    gray: "#111111",
    lightGray: "#333333",
    textPrimary: "#ffffff",
    textSecondary: "#cccccc"
  }
};