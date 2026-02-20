import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Revanth Kodati",
  initials: "RK",
  url: "https://github.com/RevanthKodati01",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/New+York,+NY",
  description:
    "Software & Data Engineer | Specializing in Scalable Data Pipelines, ML, and Analytics | MS Data Science @ UAlbany",
  summary:
      "I am a Software and Data Engineer currently pursuing a [**Master’s in Data Science at the University at Albany**](https://www.albany.edu/math/programs/ms-data-science?q=data%20s). Prior to this, I served as a [**Senior Analyst at Capgemini**](https://www.capgemini.com/), where I specialized in developing enterprise-scale WMS solutions and optimizing high-performance database modules to improve business-critical reliability. My academic foundation is rooted in a [**B.Tech in Computer Science and Engineering from JNTUH**](https://cmrgroup.edu.in/).Currently, I am [**interning at the SUNY Research Foundation**](https://www.rfsuny.org/), where I design automated ETL pipelines that have achieved an 80% reduction in manual data refresh times. My recent technical work focuses on production-grade AI, including [**RAG-Cite-Eval**](https://github.com/RevanthKodati01/rag-cite-eval)—a system for verifiable document citations—and [**SCADA-based health monitoring**](https://github.com/RevanthKodati01/wind-fleet-health) for industrial reliability analytics. I am also a double Oracle Certified Professional in both Generative AI and Data Science.",
  avatarUrl: "/revanth profile.jpeg",
  skills: [
    { name: "Python", icon: Python },
    { name: "SQL", icon: Postgresql },
    { name: "Java", icon: Java },
    { name: "C / C++", icon: Csharp },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "PyTorch & ML", icon: Python }, 
    { name: "FastAPI & Flask", icon: Nodejs }, 
    { name: "AWS & Cloud", icon: Docker },
    { name: "Oracle BI", icon: Postgresql }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "kodatirevanth@gmail.com",
    tel: "+18382029520",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/RevanthKodati01",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/revanth-kodati/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kodatirevanth@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SUNY Research Foundation",
      href: "",
      badges: [],
      location: "Albany, NY",
      title: "Software Engineer / Data Engineer Intern",
      logoUrl: "rfsuny_logo.jpeg",
      start: "April 2024",
      end: "Present",
      description:
        "Built automated ETL pipelines using Python, SQL, and Oracle BI, cutting manual refresh time by 80%. Developed models and Power BI dashboards to analyze funding/proposal trends, supporting 10+ stakeholders. Optimized SQL and integrated multi-source data into secure, reliable reporting workflows.",
    },
    {
      company: "Capgemini",
      href: "",
      badges: [],
      location: "Hyderabad, India",
      title: "Senior Analyst",
      logoUrl: "/capgemini_logo.jpeg",
      start: "February 2022",
      end: "August 2024",
      description:
        "Integrated Oracle + Manhattan WMS workflows, reducing manual effort by 60% and speeding delivery. Built enterprise WMS solutions for global clients using Velocity, ZPL, and Oracle SQL/DB. Built and tested Oracle EBS database modules, improving reliability of business applications.",
    },
  ],
  education: [
    {
      school: "University at Albany, SUNY",
      href: "https://www.albany.edu/",
      degree: "Master of Science in Data Science",
      logoUrl: "/university_at_albany_logo.jpeg",
      start: "2024",
      end: "2026",
    },
    {
      school: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
      href: "https://jntuh.ac.in/",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      logoUrl: "/jntuh.jpeg",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Wind Fleet Health Monitoring",
      href: "https://github.com/RevanthKodati01/wind-fleet-health",
      dates: "2026",
      active: true,
      description:
        "Built an end-to-end pipeline for wind turbine SCADA data to support asset health monitoring and early warning insights. Performed data cleaning, validation, and feature engineering on operational sensor signals. Developed baseline anomaly detection and risk scoring to surface abnormal operating patterns.",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Time-Series ML",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/RevanthKodati01/wind-fleet-health",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/WINDFLEET PNG.png",
      video: "/WIND-FLEET-HEALTH.mp4",
    },
    {
      title: "RAG-Cite-Eval",
      href: "https://github.com/RevanthKodati01/rag-cite-eval",
      dates: "2026",
      active: true,
      description:
        "Built a production-style RAG system that lets users upload documents and ask questions with grounded citations. Implemented retrieval and ranked source snippets to reduce hallucinations and improve answer traceability. Added a lightweight evaluation runner to sanity-check grounding and citation quality.",
      technologies: [
        "Python",
        "FastAPI",
        "Streamlit",
        "ChromaDB",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/RevanthKodati01/rag-cite-eval",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/RAGCITEEVAL PNG.png", 
      video: "/RAG-SITE-EVAL.mp4",
    },
    {
      title: "LADS (Driver Safety System)",
      href: "https://github.com/RevanthKodati01",
      dates: "2020",
      active: true,
      description:
        "Developed a driver-monitoring and authorization system leveraging facial recognition and drowsiness detection using CNNs. Deployed model backend as a microservice using Flask and Docker containers; handled concurrent data streams to simulate multi-driver use cases.",
      technologies: [
        "Python",
        "OpenCV",
        "Deep Learning",
        "Flask",
        "Docker"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/RevanthKodati01",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/LADS.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;