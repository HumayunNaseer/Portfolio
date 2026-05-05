import { motion } from "framer-motion";
import { Cloud, GitBranch, Code, Database, Server, Globe, Terminal, Package } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  icon: LucideIcon;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: Code },
      { name: "JavaScript", icon: Code },
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Globe },
      { name: "Bootstrap", icon: Package },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Ruby on Rails", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "MySQL", icon: Database },
      { name: "Elasticsearch", icon: Database },
      { name: "REST APIs", icon: Globe },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Docker", icon: Package },
      { name: "AWS", icon: Cloud },
      { name: "CI/CD", icon: GitBranch },
      { name: "RSpec / TDD", icon: Terminal },
      { name: "Redis", icon: Database },
      { name: "GraphQL", icon: Globe },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 border-t border-border/50 bg-muted/20">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Capabilities</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Arsenal</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-7 border border-border/50 hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold mb-6 text-foreground tracking-tight">{category.title}</h3>
              <div className="flex flex-col gap-3">
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon size={16} />
                      </div>
                      <span className="text-muted-foreground font-medium text-sm group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
