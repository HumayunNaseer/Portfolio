import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "WorkSphere",
    period: "2025–Present",
    role: "Front-End Developer – React.js",
    description:
      "In-house platform for managing projects, finances, and resource allocations. Handles invoicing, project/resource tracking, and company performance insights.",
    tags: ["React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "LearnME",
    period: "2023–Present",
    role: "Full-Stack Dev – Ruby on Rails + React.js",
    description:
      "Scalable learning platform for children with Autism (ASD). Led full-stack architecture, implemented multitenancy, optimized with Passenger/Nginx.",
    tags: ["Ruby on Rails", "React.js", "PostgreSQL", "Nginx"],
  },
  {
    title: "Snack Magic",
    period: "2022–2023",
    role: "Backend Developer – Ruby on Rails",
    description:
      "Spree-based gifting platform used by firms globally. Feature enhancements, Shopify embedded app integration, code quality via RSpec.",
    tags: ["Ruby on Rails", "Spree", "Shopify", "RSpec"],
  },
  {
    title: "EateryBook",
    period: "Full-Stack Developer",
    role: "Full-Stack Developer – Ruby on Rails",
    description:
      "A social platform for food enthusiasts offering restaurant discovery, blog posting, social connections, and ratings/reviews, with search filters and menu updates included.",
    tags: ["Ruby on Rails", "Docker", "GitHub Actions", "Elasticsearch", "Google APIs"],
  },
  {
    title: "ReactNeuro",
    period: "Full-Stack Developer",
    role: "Full-Stack Developer – Ruby on Rails",
    description:
      "A digital brain assessment platform used to detect brain-related diseases like Parkinson's before onset, by analyzing different cognitive and neurological assessments.",
    tags: ["Ruby on Rails"],
  },
];

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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
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
                <div className="flex gap-2">
                  <a href="#" className="p-2 bg-background rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="#" className="p-2 bg-background rounded-full hover:bg-primary/10 hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
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
