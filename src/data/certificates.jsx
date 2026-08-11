import {
  FaGoogle,
  FaPython,
  FaCloud,
  FaAward,
  FaChartBar,
  FaRobot,
  FaCode,
} from "react-icons/fa";

export const certificates = [

  {
    id: 1,
    title: "Google Cloud Career Launchpad",
    issuer: "Google Cloud",
    year: "2025",
    icon: <FaCloud />,
    description:
      "Explored Google Cloud fundamentals, BigQuery and cloud technologies.",
    image: "",
    pdf: "/certificates/GoogleCloud.pdf",
    link: "",
    featured: true,
  },

  {
    id: 2,
    title: "Google Data Analytics",
    issuer: "Google",
    year: "2025",
    icon: <FaGoogle />,
    description:
      "Learned data analytics concepts and data-driven decision making.",
    image: "",
    pdf: "",
    link: "https://coursera.org/verify/GU77GZRZVIJK",
    featured: true,
  },

  {
    id: 3,
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2026",
    icon: <FaPython />,
    description:
      "Built a strong foundation in Python for data science and analytics.",
    image: "",
    link: "https://coursera.org/verify/M5WQ692IY42O",
    featured: true,
  },

  {
    id: 4,
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte",
    year: "2025",
    icon: <FaAward />,
    description:
      "Completed a virtual data analytics and visualization simulation.",
    image: "",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_EwQTBMr9rZdCvmicv_1746783774086_completion_certificate.pdf",
    featured: true,
  },

  {
    id: 5,
    title: "Python for Absolute Beginners",
    issuer: "EC-Council",
    year: "2025",
    icon: <FaCode />,
    description:
      "Learned Python fundamentals and programming basics.",
    image: "",
    link: "https://learn.eccouncil.org/certificate/05cecf72-db00-4768-a7a2-07937c58e1c0?logged=true",
    featured: false,
  },

  {
    id: 6,
    title: "Prompt Engineering for ChatGPT",
    issuer: "Great Learning",
    year: "2025",
    icon: <FaRobot />,
    description:
      "Explored prompt engineering techniques for generative AI.",
    image: "",
    link: "",
    featured: false,
  },

  {
    id: 7,
    title: "7 Days Power BI Micro Course",
    issuer: "Skill Course",
    year: "2025",
    icon: <FaChartBar />,
    description:
      "Learned Power BI dashboards and data visualization basics.",
    image: "",
    link: "",
    featured: false,
  },

];