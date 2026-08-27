import { motion } from "framer-motion";
import { ExternalLink, HeartPulse } from "lucide-react";

const projects = [
  {
    title: "WorkSphere",
    period: "2025–Present",
    role: "Front-End Developer – React.js",
    description:
      "In-house platform for managing projects, finances, and resource allocations. Handles invoicing, project/resource tracking, and company performance insights.",
    tags: ["React.js", "TypeScript", "Tailwind CSS"],
    url: "https://worksphere.tkxel-team.com/",
  },
  {
    title: "LearnME",
    period: "2023-2026",
    role: "Full-Stack Developer",
    description:
      "Scalable learning platform for children with Autism (ASD). Led full-stack architecture, implemented multitenancy, optimized with Passenger/Nginx.",
    tags: ["Ruby on Rails", "React.js", "PostgreSQL", "Nginx"],
    url: "https://learnmedata.com/",
    healthcare: true,
  },
  {
    title: "NeuroNest",
    period: "2026",
    role: "Senior Software Engineer",
    description:
      "Integrated digital platform offering therapy, training, community support, and Autism/ADHD assessments for neurodiverse children and their families. NeuroNest combines diagnostics and ongoing care into a full-spectrum solution for early diagnosis, continuity of care, and parent empowerment.",
    tags: ["Rails", "React", "AWS"],
    healthcare: true,
  },
  {
    title: "ReactNeuro",
    period: "2020–2022",
    role: "Full-Stack Developer",
    description:
      "A digital brain assessment platform used to detect brain-related diseases like Parkinson's before onset, by analyzing different cognitive and neurological assessments.",
    tags: ["Ruby on Rails"],
    url: "https://reactneuro.com/",
    healthcare: true,
  },
  {
    title: "Snack Magic",
    period: "2022–2023",
    role: "Backend Developer – Ruby on Rails",
    description:
      "Spree-based gifting platform used by firms globally. Feature enhancements, Shopify embedded app integration, code quality via RSpec.",
    tags: ["Ruby on Rails", "Spree", "Shopify", "RSpec"],
    url: "https://www.snackmagic.com/",
  },
  {
    title: "EateryBook",
    period: "2020–2022",
    role: "Full-Stack Developer – Ruby on Rails",
    description:
      "A social platform for food enthusiasts offering restaurant discovery, blog posting, social connections, and ratings/reviews, with search filters and menu updates included.",
    tags: ["Ruby on Rails", "Docker", "GitHub Actions", "Elasticsearch", "Google APIs"],
  },
];

const healthcareProjects = projects.filter((project) => project.healthcare);
const generalProjects = projects.filter((project) => !project.healthcare);

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 border-t border-border/50 bg-muted/10">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Key Projects</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 rounded-2xl border border-primary/30 bg-primary/[.07] p-6 md:p-8 relative overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
          <div className="mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-3">
                <HeartPulse size={18} />
                Healthcare Platforms
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Neurodevelopment & Health Care Systems
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {healthcareProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-card/80 border border-primary/20 rounded-xl p-5 flex flex-col min-h-[260px] hover:border-primary/50 transition-colors duration-300"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                    <p className="text-xs text-primary font-semibold mt-1">{project.role}</p>
                    <p className="text-xs text-muted-foreground mt-1">{project.period}</p>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 p-2 bg-primary/10 rounded-full hover:bg-primary/20 hover:text-primary transition-colors"
                      aria-label={`${project.title} website`}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-primary/15 text-primary text-xs font-semibold rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {generalProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-card rounded-xl p-8 border border-border/50 hover:border-primary/50 transition-colors duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-sm font-medium text-foreground/75 mb-1">{project.role}</div>
                  <div className="text-xs text-muted-foreground">{project.period}</div>
                </div>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label={`${project.title} website`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/[.22] text-primary/90 text-xs font-semibold rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
