import React from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  //Github,
  // Linkedin,
  Mail,
  PenLine,
} from "lucide-react";
import "./index.css";
import { articles, education, experiences, links, projects, skills } from "./data/profile";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-semibold tracking-tight">
          Mounika Ganjikunta
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#experience" className="hover:text-blue-600">Experience</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#education" className="hover:text-blue-600">Education</a>
          <a href="#writing" className="hover:text-blue-600">Writing</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="section flex min-h-[82vh] items-center">
      <motion.div {...fadeUp} className="max-w-4xl">
        <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          Software Engineer • Backend • Full-Stack • Applied AI
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
          Building reliable software systems from architecture to production.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
        I'm Mounika, a software engineer with 8+ years of experience across public services, banking,
        online sports, applied research, and AI products. I build backend and full-stack systems that combine
        dependable application architecture with cloud, data, and LLM capabilities.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {/* <a
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            href={links.resume}
          >
            Resume
          </a> */}
          <a
            className="pill hover:border-blue-300 hover:text-blue-700"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="pill hover:border-blue-300 hover:text-blue-700"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
          {[
            "8+ Years Experience",
            "Applied AI & RAG",
            "Production Systems",
            "Enterprise Modernization",
            "Cloud Architecture",
            "Full-Stack Delivery"
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-sm font-medium text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            I build systems around business problems.
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-slate-600">
          <p>
          I believe great software starts with understanding the business problem.
          I enjoy breaking down complex workflows, identifying edge cases, and designing backend systems 
          that remain simple, scalable, and maintainable as products evolve.
          </p>

          <p>
          My experience spans public-sector modernization, banking, real-time sportsbook products,
          applied research, and AI-enabled systems. I've worked across APIs, user-facing applications,
          cloud infrastructure, data pipelines, and LLM workflows where reliability and traceability matter.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {[
              "Backend Engineering",
              "Full-Stack Delivery",
              "API Design",
              "System Design",
              "Cloud Architecture",
              "Applied AI",
            ].map((x) => (
              <span className="pill" key={x}>
                {x}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <motion.div {...fadeUp}>
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Experience
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Engineering across public services, research, sports technology, and banking.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {experiences.map((exp) => (
            <article className="card" key={exp.company}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="mt-1 text-sm font-medium text-blue-700">
                    {exp.role}
                  </p>
                </div>
                <span className="text-sm text-slate-500">{exp.period}</span>
              </div>

              <p className="mt-4 leading-7 text-slate-600">{exp.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <motion.div {...fadeUp}>
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Featured Projects
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Projects that reflect how I think and build.
        </h2>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              className={`card ${index === 0 ? "lg:col-span-2" : ""}`}
              key={project.title}
            >
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">
                {project.summary}
              </p>

              {index === 0 && (
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Backend Architecture",
                    "API Orchestration",
                    "Cloud Deployment",
                    "Authentication",
                    "LLM Integration",
                    "Asynchronous Processing",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <motion.div {...fadeUp}>
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Skills
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Technology stack
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div className="card" key={skill.group}>
              <h3 className="font-semibold text-slate-950">{skill.group}</h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <motion.div {...fadeUp}>
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Education
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Academic foundation and applied research.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {education.map((item) => (
            <article className="card" key={item.degree}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">
                    {item.degree}
                  </h3>
                  <p className="mt-2 font-medium text-blue-700">{item.school}</p>
                </div>
                <span className="text-sm text-slate-500">{item.period}</span>
              </div>
              <p className="mt-4 leading-7 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Writing() {
  return (
    <section id="writing" className="section">
      <motion.div {...fadeUp} className="card">
        <div className="flex items-center gap-3">
          <PenLine className="h-5 w-5 text-blue-600" />
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Engineering Journal
          </p>
        </div>

        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Technical writing grounded in real engineering work.
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          I write about backend architecture, cloud systems, and the practical
          engineering decisions behind AI-enabled applications.
        </p>

        <div className="mt-8 grid gap-4">
          {articles.map((article) => (
            <a
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-300 hover:bg-blue-50/40"
              href={article.href}
              target="_blank"
              rel="noreferrer"
              key={article.title}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-sm font-medium text-blue-700">
                    Featured article · {article.readTime}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950 group-hover:text-blue-700">
                    {article.title}
                  </h3>
                  <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                    {article.summary}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-blue-700">
                    Read on Medium
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-blue-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section pb-28">
      <motion.div
        {...fadeUp}
        className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-12"
      >
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">
          Contact
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
          Let’s connect.
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-300">
          I’m interested in backend engineering, cloud-native systems,
          AI-enabled applications, and product engineering roles where
          reliability and maintainability matter.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950"
            href={links.linkedin}
            target="_blank"
            rel="noreferrer"
          >
             LinkedIn
          </a>

          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            href={links.github}
            target="_blank"
            rel="noreferrer"
          >
             GitHub
          </a>

          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            href={links.email}
          >
            <Mail className="h-4 w-4" /> Email
          </a>

          <a
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
            href={links.resume}
          >
            Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Writing />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        Designed & built by Mounika Ganjikunta © 2026
      </footer>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
