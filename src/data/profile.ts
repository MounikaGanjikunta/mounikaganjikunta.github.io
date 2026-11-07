export const links = {
  github: 'https://github.com/MounikaGanjikunta',
  linkedin: 'https://www.linkedin.com/in/mounikaganjikunta/',
  medium: 'https://medium.com/@g.mounika36',
  email: 'mailto:mounikaganjiku@gmail.com'
};

export const experiences = [
  {
    company: 'Kentucky Public Protection Cabinet',
    role: 'Senior Software Engineer',
    period: '2023 — Present',
    summary: 'Leading modernization of a configuration-driven platform shared across 40+ departments, with reusable .NET and Angular components, accessible workflows, and production observability.',
    tags: ['ASP.NET Core', 'Angular', 'SQL Server', 'OpenTelemetry', 'Splunk', 'WCAG']
  },
  {
    company: 'University of Georgia',
    role: 'Graduate Research Assistant',
    period: '2021 — 2023',
    summary: 'Turned published food-safety research and microbial challenge studies into an industry-facing prediction application covering growth, treatment effectiveness, and shelf life.',
    tags: ['Python', 'NumPy', 'SciPy', 'Plotly Dash', 'Flask', 'Predictive Modeling']
  },
  {
    company: 'Entain',
    role: 'Senior Software Engineer',
    period: '2019 — 2021',
    summary: 'Delivered real-time Angular features for high-traffic sportsbook products, integrated .NET services and WebSocket workflows, and supported large-scale transactional data modernization.',
    tags: ['Angular', '.NET', 'WebSockets', 'RxJS', 'Cloudflare Workers', 'SQL']
  },
  {
    company: 'Infosys',
    role: 'Software Engineer',
    period: '2016 — 2019',
    summary: 'Built Java and Spring Boot services for Finacle-integrated banking workflows, improved high-volume SQL reporting, and created a reusable regression-testing framework adopted across teams.',
    tags: ['Java', 'Spring Boot', 'REST APIs', 'SQL Server', 'TestRail', 'Banking']
  }
];

export const projects = [
  {
    title: 'Personalized Healthcare AI Assistant',
    summary: 'Architected a multimodal platform that routes health-related inputs through specialized LLM workflows, retrieves relevant evidence and user history, and preserves traceable request state across secure cloud services.',
    tags: ['FastAPI', 'React', 'PostgreSQL', 'pgvector', 'Gemini', 'RAG', 'AWS', 'Langfuse']
  },
  {
    title: 'Food Safety and Shelf-Life Modeling',
    summary: 'Converted microbial challenge data and published predictive models into a self-service application that estimates Listeria growth, treatment response, and shelf life across 16 food categories.',
    tags: ['Python', 'NumPy', 'SciPy', 'Plotly Dash', 'Flask', 'Heroku']
  },
  {
    title: 'UsageLens — AI Billing Investigation',
    summary: 'Built an AI-assisted Cloudflare application that investigates metering discrepancies while deterministic TypeScript rules remain authoritative for billing calculations and Durable Objects preserve state and audit history.',
    tags: ['Cloudflare Workers', 'Workers AI', 'Agents SDK', 'Durable Objects', 'TypeScript', 'React', 'Tool Calling', 'Vitest'],
    href: 'https://usagelens.g-mounika36.workers.dev',
    linkLabel: 'Open live demo'
  },
  {
    title: 'Few-Shot Face Verification',
    summary: 'Designed a Siamese convolutional network for comparing faces with limited labeled data, evaluating multiple similarity measures and reaching 90% verification accuracy on the ORL dataset.',
    tags: ['PyTorch', 'Siamese CNN', 'Contrastive Learning', 'Computer Vision', 'Machine Learning']
  }
];

export const skills = [
  { group: 'Backend & Languages', items: ['Java', 'C#', 'Python', 'TypeScript', 'SQL', 'Spring Boot', 'ASP.NET Core', 'FastAPI'] },
  { group: 'Applied AI', items: ['LLM Orchestration', 'RAG', 'Multimodal Processing', 'Vector Embeddings', 'Semantic Retrieval', 'Prompt Engineering'] },
  { group: 'Cloud & Delivery', items: ['AWS EC2', 'S3', 'RDS', 'SQS', 'CloudFront', 'Docker', 'Jenkins', 'CI/CD'] },
  { group: 'Data & Observability', items: ['PostgreSQL', 'pgvector', 'SQL Server', 'OpenTelemetry', 'Splunk', 'Langfuse'] },
  { group: 'Frontend & Realtime', items: ['Angular', 'React', 'Plotly Dash', 'WebSockets', 'RxJS'] },
  { group: 'Architecture', items: ['REST APIs', 'Distributed Systems', 'Microservices', 'OAuth & JWT', 'Event-Driven Systems'] }
];

export const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'University of Georgia',
    period: '2021 — 2023',
    detail: 'GPA 3.83/4.0 · Graduate research spanning applied machine learning, predictive modeling, and production software.'
  },
  {
    degree: 'Bachelor of Technology in Electronics and Communication Engineering',
    school: 'JNTU Hyderabad',
    period: '2012 — 2016',
    detail: 'Engineering foundation across computing, electronics, and communication systems.'
  }
];

export const articles = [
  {
    title: 'Personalized Healthcare AI Assistant',
    summary: 'A system design walkthrough for a multimodal, evidence-grounded healthcare assistant built with React, FastAPI, PostgreSQL, AWS, and Gemini.',
    readTime: '6 min read',
    href: `${import.meta.env.BASE_URL}healthcare-assistant/`,
  }
];
