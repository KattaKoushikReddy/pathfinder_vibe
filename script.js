// Application State
let currentQuestionIndex = 0;
let answers = [];
let isQuestionnaireActive = false;

// Question Data
const questions = [
  {
    id: 1,
    title: "What type of activities do you enjoy most?",
    subtitle: "Choose the option that best describes your interests",
    options: [
      {
        id: "academic",
        text: "Reading, research, and learning new concepts",
        icon: "fas fa-book",
        weight: { academic: 3, technical: 1, creative: 1, business: 1 },
      },
      {
        id: "hands-on",
        text: "Building, fixing, or working with tools",
        icon: "fas fa-tools",
        weight: { technical: 3, academic: 1, creative: 2, business: 1 },
      },
      {
        id: "creative",
        text: "Drawing, writing, music, or artistic expression",
        icon: "fas fa-palette",
        weight: { creative: 3, academic: 1, technical: 1, business: 2 },
      },
      {
        id: "social",
        text: "Leading groups, organizing events, or selling ideas",
        icon: "fas fa-users",
        weight: { business: 3, academic: 1, technical: 1, creative: 2 },
      },
    ],
  },
  {
    id: 2,
    title: "Which subjects do you find most interesting?",
    subtitle: "Select your preferred area of study",
    options: [
      {
        id: "sciences",
        text: "Mathematics, Physics, Chemistry, Biology",
        icon: "fas fa-atom",
        weight: { academic: 3, technical: 2, creative: 1, business: 1 },
      },
      {
        id: "technology",
        text: "Computer Science, Engineering, IT",
        icon: "fas fa-laptop-code",
        weight: { technical: 3, academic: 2, creative: 1, business: 2 },
      },
      {
        id: "arts",
        text: "Literature, History, Arts, Languages",
        icon: "fas fa-theater-masks",
        weight: { creative: 3, academic: 2, technical: 1, business: 1 },
      },
      {
        id: "commerce",
        text: "Economics, Business Studies, Accounting",
        icon: "fas fa-chart-line",
        weight: { business: 3, academic: 2, technical: 1, creative: 1 },
      },
    ],
  },
  {
    id: 3,
    title: "What is your preferred learning style?",
    subtitle: "How do you learn best?",
    options: [
      {
        id: "theoretical",
        text: "Reading textbooks and attending lectures",
        icon: "fas fa-chalkboard-teacher",
        weight: { academic: 3, technical: 1, creative: 1, business: 2 },
      },
      {
        id: "practical",
        text: "Hands-on experiments and practical work",
        icon: "fas fa-flask",
        weight: { technical: 3, academic: 1, creative: 2, business: 1 },
      },
      {
        id: "visual",
        text: "Visual aids, videos, and creative projects",
        icon: "fas fa-eye",
        weight: { creative: 3, academic: 1, technical: 2, business: 1 },
      },
      {
        id: "collaborative",
        text: "Group discussions and team projects",
        icon: "fas fa-handshake",
        weight: { business: 3, academic: 1, technical: 1, creative: 2 },
      },
    ],
  },
  {
    id: 4,
    title: "What type of career environment appeals to you?",
    subtitle: "Where would you like to work?",
    options: [
      {
        id: "research",
        text: "Universities, research labs, think tanks",
        icon: "fas fa-microscope",
        weight: { academic: 3, technical: 2, creative: 1, business: 1 },
      },
      {
        id: "corporate",
        text: "Tech companies, engineering firms, startups",
        icon: "fas fa-building",
        weight: { technical: 3, academic: 1, creative: 1, business: 2 },
      },
      {
        id: "studio",
        text: "Design studios, media companies, freelance",
        icon: "fas fa-paint-brush",
        weight: { creative: 3, academic: 1, technical: 1, business: 2 },
      },
      {
        id: "office",
        text: "Business firms, banks, consulting companies",
        icon: "fas fa-briefcase",
        weight: { business: 3, academic: 2, technical: 1, creative: 1 },
      },
    ],
  },
  {
    id: 5,
    title: "How do you prefer to solve problems?",
    subtitle: "What's your problem-solving approach?",
    options: [
      {
        id: "analytical",
        text: "Thorough research and systematic analysis",
        icon: "fas fa-search",
        weight: { academic: 3, technical: 2, creative: 1, business: 2 },
      },
      {
        id: "technical",
        text: "Using technology and logical thinking",
        icon: "fas fa-cogs",
        weight: { technical: 3, academic: 2, creative: 1, business: 1 },
      },
      {
        id: "intuitive",
        text: "Creative thinking and innovative solutions",
        icon: "fas fa-lightbulb",
        weight: { creative: 3, academic: 1, technical: 2, business: 2 },
      },
      {
        id: "strategic",
        text: "Planning, networking, and resource management",
        icon: "fas fa-chess",
        weight: { business: 3, academic: 2, creative: 1, technical: 1 },
      },
    ],
  },
  {
    id: 6,
    title: "What motivates you the most?",
    subtitle: "What drives your passion?",
    options: [
      {
        id: "knowledge",
        text: "Discovering new knowledge and understanding",
        icon: "fas fa-brain",
        weight: { academic: 3, technical: 1, creative: 2, business: 1 },
      },
      {
        id: "innovation",
        text: "Creating new technologies and solutions",
        icon: "fas fa-rocket",
        weight: { technical: 3, academic: 2, creative: 2, business: 1 },
      },
      {
        id: "expression",
        text: "Self-expression and artistic creation",
        icon: "fas fa-music",
        weight: { creative: 3, academic: 1, technical: 1, business: 1 },
      },
      {
        id: "success",
        text: "Achievement, leadership, and financial success",
        icon: "fas fa-trophy",
        weight: { business: 3, academic: 1, technical: 1, creative: 2 },
      },
    ],
  },
  {
    id: 7,
    title: "How do you handle stress and pressure?",
    subtitle: "What's your approach to challenging situations?",
    options: [
      {
        id: "methodical",
        text: "Break down problems step by step",
        icon: "fas fa-list-ol",
        weight: { academic: 3, technical: 2, creative: 1, business: 2 },
      },
      {
        id: "systematic",
        text: "Use tools and processes to manage complexity",
        icon: "fas fa-project-diagram",
        weight: { technical: 3, academic: 2, creative: 1, business: 2 },
      },
      {
        id: "adaptive",
        text: "Go with the flow and find creative alternatives",
        icon: "fas fa-leaf",
        weight: { creative: 3, academic: 1, technical: 1, business: 2 },
      },
      {
        id: "decisive",
        text: "Make quick decisions and take action",
        icon: "fas fa-bolt",
        weight: { business: 3, academic: 1, technical: 2, creative: 1 },
      },
    ],
  },
  {
    id: 8,
    title: "What role do you prefer in group settings?",
    subtitle: "How do you contribute to teams?",
    options: [
      {
        id: "advisor",
        text: "The researcher who provides knowledge and insights",
        icon: "fas fa-user-graduate",
        weight: { academic: 3, technical: 1, creative: 1, business: 2 },
      },
      {
        id: "implementer",
        text: "The problem-solver who builds and executes",
        icon: "fas fa-hammer",
        weight: { technical: 3, academic: 1, creative: 2, business: 1 },
      },
      {
        id: "innovator",
        text: "The creative mind who generates new ideas",
        icon: "fas fa-magic",
        weight: { creative: 3, academic: 1, technical: 2, business: 2 },
      },
      {
        id: "leader",
        text: "The organizer who guides and motivates others",
        icon: "fas fa-crown",
        weight: { business: 3, academic: 2, creative: 1, technical: 1 },
      },
    ],
  },
];

// Educational Paths Data - Enhanced with comprehensive details
const educationalPaths = {
  academic: {
    title: "Academic & Research Excellence Track",
    description:
      "Comprehensive academic preparation for research careers, advanced studies, and intellectual pursuits. Designed for students passionate about knowledge, discovery, and scholarly achievement.",
    icon: "fas fa-graduation-cap",
    color: "#007AFF",
    duration: "2-4 years secondary + 3-8 years higher education",
    difficulty: "High",
    averageSalary: "$45,000 - $120,000+ (varies by specialization)",
    features: [
      "Rigorous academic curriculum with advanced coursework",
      "Research methodology and critical thinking development",
      "Preparation for competitive university admissions",
      "International academic standards and recognition",
      "Scholarship and fellowship opportunities",
      "Faculty mentorship and academic guidance",
      "Scientific method and analytical skills training",
    ],
    pathOptions: [
      {
        name: "Science Stream (PCM - Physics, Chemistry, Mathematics)",
        duration: "2 years + 4-6 years university",
        prerequisites: "Strong math and science foundation",
        careers: [
          "Research Scientist",
          "Engineer",
          "Data Scientist",
          "Professor",
          "Medical Doctor",
        ],
        salaryRange: "$50,000 - $150,000+",
        description:
          "Perfect for STEM careers, medical school, and engineering programs",
      },
      {
        name: "Science Stream (PCB - Physics, Chemistry, Biology)",
        duration: "2 years + 4-8 years university",
        prerequisites: "Biology and chemistry aptitude",
        careers: [
          "Medical Doctor",
          "Researcher",
          "Biotechnologist",
          "Pharmacist",
          "Veterinarian",
        ],
        salaryRange: "$60,000 - $200,000+",
        description:
          "Gateway to medical, biological, and life sciences careers",
      },
      {
        name: "Liberal Arts & Humanities",
        duration: "2 years + 3-6 years university",
        prerequisites: "Strong writing and analytical skills",
        careers: [
          "Lawyer",
          "Journalist",
          "Policy Analyst",
          "Professor",
          "Diplomat",
        ],
        salaryRange: "$40,000 - $120,000+",
        description:
          "Develops critical thinking, communication, and cultural understanding",
      },
      {
        name: "International Baccalaureate (IB)",
        duration: "2 years + 3-4 years university",
        prerequisites: "High academic performance",
        careers: [
          "International Business",
          "Diplomat",
          "Global Researcher",
          "UN Officer",
        ],
        salaryRange: "$55,000 - $140,000+",
        description: "Globally recognized program for international careers",
      },
      {
        name: "Pre-Medical Programs",
        duration: "2 years + 8-12 years medical education",
        prerequisites: "Excellent grades in sciences",
        careers: ["Doctor", "Surgeon", "Medical Researcher", "Specialist"],
        salaryRange: "$100,000 - $500,000+",
        description: "Intensive preparation for medical school admission",
      },
    ],
    topUniversities: ["Harvard", "MIT", "Stanford", "Oxford", "Cambridge"],
    scholarshipOpportunities: [
      "Merit-based scholarships",
      "Research grants",
      "Government scholarships",
      "International exchange programs",
    ],
  },
  technical: {
    title: "Technology & Engineering Mastery Track",
    description:
      "Cutting-edge technical education combining theoretical knowledge with hands-on experience. Perfect for future engineers, developers, and technology innovators.",
    icon: "fas fa-microchip",
    color: "#34C759",
    duration: "2-4 years secondary + 3-6 years higher education",
    difficulty: "High",
    averageSalary: "$60,000 - $180,000+ (Tech industry leader)",
    features: [
      "State-of-the-art laboratory facilities and equipment",
      "Industry partnerships and internship programs",
      "Project-based learning with real-world applications",
      "Coding bootcamps and technical certifications",
      "Innovation labs and maker spaces",
      "Startup incubation and entrepreneurship support",
      "Industry mentorship and career placement assistance",
    ],
    pathOptions: [
      {
        name: "Computer Science & Software Engineering",
        duration: "2 years + 4 years university",
        prerequisites: "Strong mathematical and logical thinking",
        careers: [
          "Software Engineer",
          "Data Scientist",
          "AI Researcher",
          "CTO",
          "Product Manager",
        ],
        salaryRange: "$70,000 - $250,000+",
        description:
          "High-demand field with excellent career prospects and innovation opportunities",
      },
      {
        name: "Electrical & Electronics Engineering",
        duration: "2 years + 4 years university",
        prerequisites: "Physics and mathematics proficiency",
        careers: [
          "Electronics Engineer",
          "Systems Designer",
          "R&D Engineer",
          "Consultant",
        ],
        salaryRange: "$65,000 - $150,000+",
        description: "Core engineering discipline powering modern technology",
      },
      {
        name: "Mechanical & Robotics Engineering",
        duration: "2 years + 4 years university",
        prerequisites: "Physics, mathematics, and design thinking",
        careers: [
          "Mechanical Engineer",
          "Robotics Engineer",
          "Design Engineer",
          "Project Manager",
        ],
        salaryRange: "$60,000 - $140,000+",
        description: "Design and build the machines and robots of tomorrow",
      },
      {
        name: "Cybersecurity & Information Technology",
        duration: "2 years + 3-4 years university",
        prerequisites: "Interest in security and systems",
        careers: [
          "Security Analyst",
          "Ethical Hacker",
          "IT Manager",
          "Security Consultant",
        ],
        salaryRange: "$75,000 - $180,000+",
        description:
          "Protect organizations from cyber threats in our digital world",
      },
      {
        name: "Data Science & Artificial Intelligence",
        duration: "2 years + 4-6 years university",
        prerequisites: "Strong mathematics and programming",
        careers: [
          "Data Scientist",
          "ML Engineer",
          "AI Researcher",
          "Business Intelligence Analyst",
        ],
        salaryRange: "$80,000 - $200,000+",
        description: "Extract insights from data and build intelligent systems",
      },
      {
        name: "Biomedical & Biotechnology Engineering",
        duration: "2 years + 4-6 years university",
        prerequisites: "Biology, chemistry, and engineering aptitude",
        careers: [
          "Biomedical Engineer",
          "Medical Device Developer",
          "Biotech Researcher",
        ],
        salaryRange: "$70,000 - $160,000+",
        description:
          "Apply engineering principles to solve medical and biological problems",
      },
    ],
    topUniversities: [
      "MIT",
      "Stanford",
      "Carnegie Mellon",
      "Georgia Tech",
      "UC Berkeley",
    ],
    scholarshipOpportunities: [
      "STEM scholarships",
      "Industry sponsorships",
      "Research assistantships",
      "Innovation competitions",
    ],
  },
  creative: {
    title: "Creative Arts & Innovation Track",
    description:
      "Nurture artistic talents and creative thinking through comprehensive programs that blend traditional arts with digital innovation and entrepreneurial skills.",
    icon: "fas fa-palette",
    color: "#FF9500",
    duration: "2-4 years secondary + 3-5 years higher education",
    difficulty: "Medium to High",
    averageSalary: "$35,000 - $120,000+ (highly variable by field)",
    features: [
      "Professional studio spaces and cutting-edge equipment",
      "Portfolio development and industry showcases",
      "Mentorship from working professionals",
      "Internships at creative agencies and studios",
      "Collaborative projects with real clients",
      "Digital tools and emerging technology training",
      "Business skills for creative entrepreneurs",
    ],
    pathOptions: [
      {
        name: "Digital Media & Game Design",
        duration: "2 years + 4 years university",
        prerequisites: "Creativity and technical aptitude",
        careers: [
          "Game Designer",
          "3D Artist",
          "UX Designer",
          "Animation Director",
        ],
        salaryRange: "$45,000 - $130,000+",
        description:
          "Create immersive digital experiences and interactive entertainment",
      },
      {
        name: "Graphic Design & Visual Communication",
        duration: "2 years + 3-4 years university",
        prerequisites: "Artistic ability and design sense",
        careers: [
          "Graphic Designer",
          "Brand Designer",
          "Creative Director",
          "Freelance Artist",
        ],
        salaryRange: "$35,000 - $90,000+",
        description: "Communicate ideas through visual design and branding",
      },
      {
        name: "Film & Video Production",
        duration: "2 years + 4 years university",
        prerequisites: "Storytelling and visual skills",
        careers: [
          "Director",
          "Cinematographer",
          "Editor",
          "Producer",
          "Content Creator",
        ],
        salaryRange: "$40,000 - $150,000+",
        description: "Tell stories through moving images and sound",
      },
      {
        name: "Music Production & Audio Engineering",
        duration: "2 years + 3-4 years university",
        prerequisites: "Musical talent and technical interest",
        careers: [
          "Music Producer",
          "Sound Engineer",
          "Composer",
          "Audio Technician",
        ],
        salaryRange: "$35,000 - $100,000+",
        description: "Create and engineer music and audio for various media",
      },
      {
        name: "Fashion Design & Merchandising",
        duration: "2 years + 4 years university",
        prerequisites: "Design sense and fashion interest",
        careers: [
          "Fashion Designer",
          "Stylist",
          "Merchandiser",
          "Fashion Entrepreneur",
        ],
        salaryRange: "$40,000 - $120,000+",
        description: "Design clothing and accessories for the fashion industry",
      },
      {
        name: "Architecture & Interior Design",
        duration: "2 years + 5-6 years university",
        prerequisites: "Spatial thinking and design skills",
        careers: [
          "Architect",
          "Interior Designer",
          "Urban Planner",
          "Design Consultant",
        ],
        salaryRange: "$50,000 - $140,000+",
        description:
          "Design buildings and spaces that shape how people live and work",
      },
    ],
    topUniversities: [
      "RISD",
      "Parsons",
      "Art Center",
      "Royal College of Art",
      "Pratt Institute",
    ],
    scholarshipOpportunities: [
      "Portfolio-based scholarships",
      "Arts grants",
      "Creative competitions",
      "Industry partnerships",
    ],
  },
  business: {
    title: "Business Leadership & Entrepreneurship Track",
    description:
      "Develop leadership, strategic thinking, and business acumen to become the next generation of entrepreneurs, executives, and business innovators.",
    icon: "fas fa-chart-line",
    color: "#FF3B30",
    duration: "2-4 years secondary + 3-6 years higher education",
    difficulty: "Medium to High",
    averageSalary: "$50,000 - $200,000+ (high growth potential)",
    features: [
      "Real-world business case studies and simulations",
      "Startup incubator and entrepreneurship programs",
      "Industry networking and mentorship opportunities",
      "Leadership development and team management training",
      "International business exposure and exchange programs",
      "Financial literacy and investment education",
      "Digital marketing and e-commerce expertise",
    ],
    pathOptions: [
      {
        name: "Business Administration & Management",
        duration: "2 years + 4 years university + optional MBA",
        prerequisites: "Leadership potential and analytical skills",
        careers: [
          "CEO",
          "Business Consultant",
          "Operations Manager",
          "Strategy Analyst",
        ],
        salaryRange: "$55,000 - $180,000+",
        description: "Comprehensive business education for leadership roles",
      },
      {
        name: "Entrepreneurship & Innovation",
        duration: "2 years + 4 years university",
        prerequisites: "Creative thinking and risk tolerance",
        careers: [
          "Startup Founder",
          "Innovation Manager",
          "Venture Capitalist",
          "Business Development",
        ],
        salaryRange: "$40,000 - $500,000+ (highly variable)",
        description: "Learn to start and scale innovative businesses",
      },
      {
        name: "Marketing & Digital Commerce",
        duration: "2 years + 4 years university",
        prerequisites: "Communication and analytical skills",
        careers: [
          "Marketing Manager",
          "Digital Marketer",
          "Brand Manager",
          "Social Media Strategist",
        ],
        salaryRange: "$45,000 - $130,000+",
        description: "Master modern marketing in the digital age",
      },
      {
        name: "Finance & Investment Banking",
        duration: "2 years + 4 years university + certifications",
        prerequisites: "Strong mathematics and analytical thinking",
        careers: [
          "Financial Analyst",
          "Investment Banker",
          "Portfolio Manager",
          "Financial Advisor",
        ],
        salaryRange: "$65,000 - $250,000+",
        description: "Manage money and investments in global financial markets",
      },
      {
        name: "International Business & Trade",
        duration: "2 years + 4 years university",
        prerequisites: "Cultural awareness and language skills",
        careers: [
          "International Business Manager",
          "Export Manager",
          "Trade Analyst",
          "Diplomat",
        ],
        salaryRange: "$50,000 - $150,000+",
        description: "Navigate global markets and international commerce",
      },
      {
        name: "Human Resources & Organizational Development",
        duration: "2 years + 4 years university",
        prerequisites: "People skills and emotional intelligence",
        careers: [
          "HR Manager",
          "Talent Acquisition Specialist",
          "Organizational Consultant",
        ],
        salaryRange: "$45,000 - $120,000+",
        description: "Develop and manage human capital in organizations",
      },
    ],
    topUniversities: [
      "Wharton",
      "Harvard Business School",
      "Stanford",
      "INSEAD",
      "London Business School",
    ],
    scholarshipOpportunities: [
      "Merit scholarships",
      "Entrepreneurship grants",
      "Corporate sponsorships",
      "Leadership programs",
    ],
  },
};

// Utility Functions
function showSection(sectionId) {
  document.querySelectorAll("main > section").forEach((section) => {
    section.classList.add("hidden");
  });
  document.getElementById(sectionId).classList.remove("hidden");
}

function updateProgress() {
  const progressFill = document.querySelector(".progress-fill");
  const currentQuestionSpan = document.getElementById("current-question");
  const totalQuestionsSpan = document.getElementById("total-questions");

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  progressFill.style.width = `${progress}%`;
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  totalQuestionsSpan.textContent = questions.length;
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  const questionTitle = document.getElementById("question-title");
  const questionSubtitle = document.getElementById("question-subtitle");
  const answersGrid = document.getElementById("answers-grid");

  questionTitle.textContent = question.title;
  questionSubtitle.textContent = question.subtitle;

  answersGrid.innerHTML = "";

  question.options.forEach((option, index) => {
    const answerElement = document.createElement("div");
    answerElement.className = "answer-option";
    answerElement.onclick = () => selectAnswer(option, answerElement);

    answerElement.innerHTML = `
            <i class="${option.icon}"></i>
            <span>${option.text}</span>
        `;

    answersGrid.appendChild(answerElement);
  });

  updateProgress();
  updateNavigationButtons();

  // Animate question card
  const questionCard = document.querySelector(".question-card");
  questionCard.style.animation = "none";
  questionCard.offsetHeight; // Trigger reflow
  questionCard.style.animation = "slideInUp 0.5s ease";
}

function selectAnswer(option, element) {
  // Remove previous selections
  document.querySelectorAll(".answer-option").forEach((el) => {
    el.classList.remove("selected");
  });

  // Add selection to clicked element
  element.classList.add("selected");

  // Store answer
  answers[currentQuestionIndex] = option;

  // Enable next button
  updateNavigationButtons();
}

function updateNavigationButtons() {
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  prevButton.disabled = currentQuestionIndex === 0;
  nextButton.disabled = !answers[currentQuestionIndex];

  if (
    currentQuestionIndex === questions.length - 1 &&
    answers[currentQuestionIndex]
  ) {
    nextButton.innerHTML =
      '<span>See Results</span> <i class="fas fa-arrow-right"></i>';
  } else {
    nextButton.innerHTML =
      '<span>Next</span> <i class="fas fa-arrow-right"></i>';
  }
}

function calculateResults() {
  const scores = {
    academic: 0,
    technical: 0,
    creative: 0,
    business: 0,
  };

  // Calculate scores based on answers
  answers.forEach((answer) => {
    if (answer && answer.weight) {
      Object.keys(answer.weight).forEach((category) => {
        scores[category] += answer.weight[category];
      });
    }
  });

  // Calculate percentages
  const totalScore = Object.values(scores).reduce(
    (sum, score) => sum + score,
    0
  );
  const percentages = {};
  Object.keys(scores).forEach((category) => {
    percentages[category] = Math.round((scores[category] / totalScore) * 100);
  });

  // Sort by score
  const sortedPaths = Object.keys(scores)
    .sort((a, b) => scores[b] - scores[a])
    .map((category) => ({
      category,
      score: scores[category],
      percentage: percentages[category],
      data: educationalPaths[category],
    }));

  return sortedPaths;
}

// Enhanced Apple-Style Results Rendering
function renderResults() {
  const results = calculateResults();
  const pathsGrid = document.getElementById("paths-grid");
  const savedPaths = JSON.parse(localStorage.getItem("savedPaths") || "[]");

  pathsGrid.innerHTML = "";

  results.forEach((path, index) => {
    const pathCard = document.createElement("div");
    pathCard.className = "path-card";
    pathCard.style.animationDelay = `${index * 0.15}s`;

    const isSaved = savedPaths.includes(path.category);

    // Create simplified path card with essential info only
    pathCard.innerHTML = `
            <div class="path-card-header">
                <div class="path-icon">
                    <i class="${path.data.icon}" style="color: ${
      path.data.color
    }"></i>
                </div>
                <div class="path-info">
                    <h3 class="path-title">${path.data.title}</h3>
                    <div class="match-percentage">${
                      path.percentage
                    }% Match</div>
                </div>
            </div>
            
            <div class="path-card-content">
                <p class="path-description">${path.data.description}</p>
                
                <div class="path-highlights">
                    <div class="highlight-item">
                        <i class="fas fa-clock"></i>
                        <span>${path.data.duration}</span>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-dollar-sign"></i>
                        <span>${path.data.averageSalary}</span>
                    </div>
                    <div class="highlight-item">
                        <i class="fas fa-chart-bar"></i>
                        <span>${path.data.difficulty}</span>
                    </div>
                </div>
                
                <div class="path-features">
                    ${path.data.features
                      .slice(0, 3)
                      .map(
                        (feature) => `
                        <div class="feature-tag">
                            <i class="fas fa-check"></i>
                            <span>${feature}</span>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            </div>
            
            <div class="path-actions">
                <button class="details-btn" onclick="showPathDetails('${
                  path.category
                }')" aria-label="View details for ${path.data.title}">
                    <i class="fas fa-info-circle"></i>
                    <span>View More Details</span>
                </button>
                <button class="save-btn ${
                  isSaved ? "saved" : ""
                }" onclick="toggleSavePath('${
      path.category
    }', this)" aria-label="${isSaved ? "Remove from" : "Add to"} saved paths">
                    <i class="fa${isSaved ? "s" : "r"} fa-heart"></i>
                </button>
            </div>
        `;

    pathsGrid.appendChild(pathCard);
  });

  // Add entrance animations
  setTimeout(() => {
    document.querySelectorAll(".path-card").forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 100);
    });
  }, 100);

  renderSavedPaths();
}

// Enhanced path details modal
function showPathDetails(pathType) {
  console.log("showPathDetails called with:", pathType);
  const path = educationalPaths[pathType];
  if (!path) {
    console.error("Path not found:", pathType);
    return;
  }
  console.log("Path found:", path);

  const modal = document.createElement("div");
  modal.className = "path-detail-modal";
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };

  // Create path options HTML
  const pathOptions = path.pathOptions
    .map(
      (option) => `
        <div class="path-option-detail">
            <div class="option-header">
                <h5>${option.name}</h5>
                <div class="salary-badge">${option.salaryRange}</div>
            </div>
            <div class="detail-row">
                <div class="detail-item">
                    <i class="fas fa-clock"></i>
                    <span>Duration: ${option.duration}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-graduation-cap"></i>
                    <span>Prerequisites: ${option.prerequisites}</span>
                </div>
            </div>
            <p class="option-description">${option.description}</p>
            <div class="careers-section">
                <strong>Career Opportunities:</strong>
                <div class="careers-grid">
                    ${option.careers
                      .map(
                        (career) => `<div class="career-tag">${career}</div>`
                      )
                      .join("")}
                </div>
            </div>
        </div>
    `
    )
    .join("");

  modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <div class="modal-title-section">
                    <i class="${path.icon}" style="color: ${path.color}"></i>
                    <h2>${path.title}</h2>
                </div>
                <button class="close-modal" onclick="this.closest('.path-detail-modal').remove()" aria-label="Close modal">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <p class="path-description">${path.description}</p>
                
                <div class="path-stats">
                    <div class="stat-item">
                        <i class="fas fa-clock"></i>
                        <div>
                            <strong>Duration</strong>
                            <span>${path.duration}</span>
                        </div>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-chart-bar"></i>
                        <div>
                            <strong>Difficulty</strong>
                            <span>${path.difficulty}</span>
                        </div>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-dollar-sign"></i>
                        <div>
                            <strong>Average Salary</strong>
                            <span>${path.averageSalary}</span>
                        </div>
                    </div>
                </div>
                
                <div class="path-section">
                    <h4><i class="fas fa-star"></i> Key Features</h4>
                    <div class="features-grid">
                        ${path.features
                          .map(
                            (feature) => `
                            <div class="feature-item">
                                <i class="fas fa-check"></i>
                                <span>${feature}</span>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
                
                <div class="path-section">
                    <h4><i class="fas fa-road"></i> Specialized Program Options</h4>
                    <div class="path-options">
                        ${pathOptions}
                    </div>
                </div>
                
                <div class="path-section">
                    <h4><i class="fas fa-university"></i> Top Universities</h4>
                    <div class="universities-grid">
                        ${path.topUniversities
                          .map(
                            (university) => `
                            <div class="university-item">
                                <i class="fas fa-graduation-cap"></i>
                                <span>${university}</span>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
                
                <div class="path-section">
                    <h4><i class="fas fa-award"></i> Scholarship Opportunities</h4>
                    <div class="scholarships-list">
                        ${path.scholarshipOpportunities
                          .map(
                            (scholarship) => `
                            <div class="scholarship-item">
                                <i class="fas fa-medal"></i>
                                <span>${scholarship}</span>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </div>
        </div>
    `;

  document.body.appendChild(modal);
}

// Toggle save/unsave path
function toggleSavePath(pathType, buttonElement) {
  console.log("toggleSavePath called with:", pathType, buttonElement);
  const savedPaths = JSON.parse(localStorage.getItem("savedPaths") || "[]");
  const isCurrentlySaved = savedPaths.includes(pathType);
  console.log(
    "Current saved paths:",
    savedPaths,
    "Is saved:",
    isCurrentlySaved
  );

  if (isCurrentlySaved) {
    // Remove from saved
    const index = savedPaths.indexOf(pathType);
    savedPaths.splice(index, 1);
    localStorage.setItem("savedPaths", JSON.stringify(savedPaths));

    // Update button
    buttonElement.classList.remove("saved");
    buttonElement.querySelector("i").className = "far fa-heart";
    buttonElement.setAttribute("aria-label", "Add to saved paths");

    showNotification("Path removed from saved list.", "info");
  } else {
    // Add to saved
    savedPaths.push(pathType);
    localStorage.setItem("savedPaths", JSON.stringify(savedPaths));

    // Update button
    buttonElement.classList.add("saved");
    buttonElement.querySelector("i").className = "fas fa-heart";
    buttonElement.setAttribute("aria-label", "Remove from saved paths");

    showNotification("Path saved successfully!", "success");
  }

  renderSavedPaths();
}

// Render saved paths in sidebar
function renderSavedPaths() {
  const savedPaths = JSON.parse(localStorage.getItem("savedPaths") || "[]");
  const savedPathsList = document.getElementById("saved-paths-list");

  if (savedPaths.length === 0) {
    savedPathsList.innerHTML = `
            <div class="empty-saved">
                <i class="far fa-heart"></i>
                <p>No saved paths yet</p>
                <span>Save paths you're interested in to review them later</span>
            </div>
        `;
    return;
  }

  savedPathsList.innerHTML = "";

  savedPaths.forEach((pathType) => {
    const pathData = educationalPaths[pathType];
    if (!pathData) return;

    const savedPathItem = document.createElement("div");
    savedPathItem.className = "saved-path-item";
    savedPathItem.innerHTML = `
            <div class="saved-path-header">
                <i class="${pathData.icon}" style="color: ${pathData.color}"></i>
                <div class="saved-path-info">
                    <h4>${pathData.title}</h4>
                    <span>${pathData.averageSalary}</span>
                </div>
            </div>
            <div class="saved-path-actions">
                <button class="view-btn" onclick="showPathDetails('${pathType}')" aria-label="View details">
                    <i class="fas fa-eye"></i>
                </button>
                <button class="remove-btn" onclick="removeSavedPath('${pathType}')" aria-label="Remove from saved">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

    savedPathsList.appendChild(savedPathItem);
  });
}

// Remove path from saved
function removeSavedPath(pathType) {
  const savedPaths = JSON.parse(localStorage.getItem("savedPaths") || "[]");
  const index = savedPaths.indexOf(pathType);

  if (index > -1) {
    savedPaths.splice(index, 1);
    localStorage.setItem("savedPaths", JSON.stringify(savedPaths));

    // Update UI
    renderSavedPaths();

    // Update main results if visible
    const pathCards = document.querySelectorAll(".path-card");
    pathCards.forEach((card) => {
      const saveBtn = card.querySelector(`button[onclick*="${pathType}"]`);
      if (saveBtn && saveBtn.classList.contains("save-btn")) {
        saveBtn.classList.remove("saved");
        saveBtn.querySelector("i").className = "far fa-heart";
      }
    });

    showNotification("Path removed from saved list.", "info");
  }
}

function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.className = `notification ${type}`;
  notification.innerHTML = `
        <i class="fas fa-${
          type === "success" ? "check-circle" : "info-circle"
        }"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

  document.body.appendChild(notification);

  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

// Event Handlers
function startQuestionnaire() {
  isQuestionnaireActive = true;
  currentQuestionIndex = 0;
  answers = [];
  showSection("questionnaire");
  renderQuestion();
}

function nextQuestion() {
  if (!answers[currentQuestionIndex]) return;

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    // Show results
    renderResults();
    showSection("results");
  }
}

function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    renderQuestion();
  }
}

function retakeQuiz() {
  currentQuestionIndex = 0;
  answers = [];
  showSection("questionnaire");
  renderQuestion();
}

function downloadResults() {
  const results = calculateResults();
  const currentDate = new Date().toLocaleDateString();

  const resultsText = `
PathFinder - Your Comprehensive Educational Journey Results
========================================================

Generated on: ${currentDate}
Total Paths Analyzed: ${Object.keys(educationalPaths).length}
Assessment Completed: ${questions.length} Questions

YOUR TOP RECOMMENDED EDUCATIONAL PATHS:
=====================================

${results
  .map(
    (path, index) => `
${"=".repeat(60)}
${index + 1}. ${path.data.title.toUpperCase()}
${"=".repeat(60)}

MATCH PERCENTAGE: ${path.percentage}%

OVERVIEW:
${path.data.description}

PROGRAM DETAILS:
• Duration: ${path.data.duration}
• Difficulty Level: ${path.data.difficulty}
• Average Salary Range: ${path.data.averageSalary}

KEY FEATURES & BENEFITS:
${path.data.features.map((feature) => `• ${feature}`).join("\n")}

SPECIALIZED PROGRAM OPTIONS:
${path.data.pathOptions
  .map(
    (option) => `
→ ${option.name}
  Duration: ${option.duration}
  Prerequisites: ${option.prerequisites}
  Salary Range: ${option.salaryRange}
  Description: ${option.description}
  Career Opportunities: ${option.careers.join(", ")}
`
  )
  .join("\n")}

TOP UNIVERSITIES FOR THIS FIELD:
${path.data.topUniversities.map((uni) => `• ${uni}`).join("\n")}

SCHOLARSHIP & FUNDING OPPORTUNITIES:
${path.data.scholarshipOpportunities.join(", ")}

`
  )
  .join("\n")}

${"=".repeat(60)}
NEXT STEPS & RECOMMENDATIONS
${"=".repeat(60)}

Based on your assessment results, here are some actionable next steps:

1. RESEARCH YOUR TOP CHOICES
   • Visit university websites for your preferred programs
   • Connect with current students or alumni in your field of interest
   • Attend virtual campus tours and information sessions

2. PREPARE FOR APPLICATIONS
   • Check application deadlines and requirements
   • Prepare for standardized tests if required
   • Start working on personal statements and essays

3. EXPLORE CAREER PATHS
   • Research job market trends in your chosen field
   • Consider internship opportunities
   • Network with professionals in the industry

4. FINANCIAL PLANNING
   • Research scholarship opportunities
   • Calculate education costs and living expenses
   • Explore financial aid options

5. BACKUP PLANS
   • Consider 2-3 different paths that align with your interests
   • Have alternative options in case your first choice doesn't work out

${"=".repeat(60)}
IMPORTANT REMINDERS
${"=".repeat(60)}

• This assessment is a guide to help you make informed decisions
• Consider your personal circumstances, interests, and goals
• Speak with career counselors, teachers, and family for additional guidance
• Keep exploring and stay open to new opportunities
• Your educational path can evolve - this is just the beginning!

For more detailed guidance and updated information:
Visit our website: [Your Website URL]
Contact our counselors: [Contact Information]

Good luck on your educational journey!

${"=".repeat(60)}
PathFinder Educational Guidance System
"Navigating Your Future, One Step at a Time"
${"=".repeat(60)}
    `.trim();

  const blob = new Blob([resultsText], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `pathfinder-comprehensive-results-${
    new Date().toISOString().split("T")[0]
  }.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  // Show download notification
  showNotification(
    "Comprehensive results downloaded successfully! Check your downloads folder.",
    "success"
  );
}

function shareResults() {
  const results = calculateResults();
  const topPath = results[0];

  const shareText = `I just discovered my perfect educational path! 🎓\n\nMy top match: ${topPath.data.title} (${topPath.percentage}% match)\n\nCheck out PathFinder to find your ideal educational journey: ${window.location.href}`;

  if (navigator.share) {
    navigator
      .share({
        title: "My PathFinder Results",
        text: shareText,
        url: window.location.href,
      })
      .catch((err) => {
        console.log("Error sharing:", err);
      });
  } else {
    // Fallback to copying to clipboard
    navigator.clipboard
      .writeText(shareText)
      .then(() => {
        showNotification(
          "Results copied to clipboard! Share with your friends.",
          "success"
        );
      })
      .catch(() => {
        showNotification(
          "Unable to copy. Try using the share button in your browser.",
          "info"
        );
      });
  }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add keyboard navigation
document.addEventListener("keydown", function (e) {
  if (!isQuestionnaireActive) return;

  if (e.key === "ArrowLeft" && currentQuestionIndex > 0) {
    previousQuestion();
  } else if (e.key === "ArrowRight" && answers[currentQuestionIndex]) {
    nextQuestion();
  } else if (e.key >= "1" && e.key <= "4") {
    const optionIndex = parseInt(e.key) - 1;
    const options = document.querySelectorAll(".answer-option");
    if (options[optionIndex]) {
      options[optionIndex].click();
    }
  }
});

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  // Add loading animation to floating cards
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.5}s`;
  });

  // Initialize progress bar
  updateProgress();

  // Initialize saved paths on load
  renderSavedPaths();

  console.log("PathFinder application initialized successfully!");
});
