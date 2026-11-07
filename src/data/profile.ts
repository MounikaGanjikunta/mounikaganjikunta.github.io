export const links = {
  github: 'https://github.com/MounikaGanjikunta',
  linkedin: 'https://www.linkedin.com/in/mounikaganjikunta/',
  medium: 'https://medium.com/@g.mounika36',
  email: 'mailto:g.mounika36@gmail.com',
  resume: '/resume.pdf'
};

export const experiences = [
  {
    company: 'Commonwealth of Kentucky',
    role: 'Senior Application Developer',
    period: '2023 — Present',
    summary: 'Modernizing public-facing licensing platforms serving 5,000+ users with improved performance, accessibility, and reliability.',
    tags: ['ASP.NET Core', 'Angular', 'SQL Server', 'Splunk', 'Enterprise Modernization']
  },
  {
    company: 'Bank of Montreal',
    role: 'Developer Intern',
    period: '2022',
    summary: 'Built and optimized backend data workflows, ETL pipelines, SQL procedures, and reporting systems for high-volume financial datasets.',
    tags: ['SQL', 'SSIS', 'SSRS', 'ETL', 'Data Integrity']
  },
  {
    company: 'Entain',
    role: 'Senior Software Engineer',
    period: '2019 — 2021',
    summary: 'Contributed to large-scale data migration and reporting platforms with focus on performance, validation, and automation.',
    tags: ['ETL', 'Power BI', 'Jenkins', 'Data Platforms', 'Automation']
  },
  {
    company: 'Infosys',
    role: 'Software Engineer',
    period: '2016 — 2019',
    summary: 'Built automation frameworks, Java utilities, and backend components for banking workflows and enterprise applications.',
    tags: ['Java', 'Selenium', 'Spring Boot', 'SQL', 'Banking']
  }
];

export const projects = [
  {
    title: 'AI-enabled Healthcare Platform',
    summary: 'Designed backend services and cloud-native architecture supporting AI-assisted workflows, secure APIs, asynchronous processing, and scalable document-processing pipelines.',
    tags: ['FastAPI', 'AWS', 'PostgreSQL', 'Redis', 'React', 'LLM Integration', 'SQS']
  },
  {
    title: 'Shelf-Life Prediction',
    summary: 'Built machine learning applications to predict microorganism growth and inactivation using predictive models, Python, Flask, and Heroku.',
    tags: ['Python', 'Machine Learning', 'Flask', 'Heroku', 'Research']
  },
  {
    title: 'Engineering Playground',
    summary: 'Hands-on explorations around Kafka, Redis, API design, and system design concepts to strengthen scalable backend engineering depth.',
    tags: ['Kafka', 'Redis', 'System Design', 'REST APIs','Distributed Systems','Microservices','Docker']
  }
];

export const skills = [
  { group: 'Backend', items: ['Java', 'Spring Boot', 'ASP.NET Core', 'FastAPI', 'Python'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Jenkins', 'CI/CD', 'Git'] },
  { group: 'Databases', items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis'] },
  { group: 'Frontend', items: ['Angular', 'React', 'TypeScript'] },
  { group: 'Data & AI', items: ['LLM Integration', 'ETL', 'Power BI', 'Document Processing'] }
];

export const articles = [
  {
    title: 'Personalized Healthcare AI Assistant',
    summary: 'A system design walkthrough for a multimodal, evidence-grounded healthcare assistant built with React, FastAPI, PostgreSQL, AWS, and Gemini.',
    readTime: '6 min read',
    href: `${import.meta.env.BASE_URL}healthcare-assistant/`,
  }
];
