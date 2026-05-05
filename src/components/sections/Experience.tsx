import { motion } from "framer-motion";

const experiences = [
  {
    company: "Tkxel",
    role: "Senior Software Engineer",
    period: "2022 – Present",
    location: "Lahore, Pakistan",
    achievements: [
      "Led end-to-end development of React.js applications with seamless integration into Ruby on Rails APIs.",
      "Designed modular and scalable backend architectures using Rails and PostgreSQL for high-volume traffic.",
      "Worked closely with international product teams across time zones to deliver high-quality features.",
    ],
  },
  {
    company: "Octek",
    role: "Software Engineer",
    period: "2020 – 2022",
    location: "Lahore, Pakistan",
    achievements: [
      "Enhanced scalability and performance of large-scale Rails applications via ActiveRecord and background job optimizations.",
      "Deployed scalable apps using AWS EC2 and S3, and containerization with Docker.",
      "Applied BDD and TDD principles using RSpec and FactoryBot to ensure code reliability.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 border-t border-border/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Experience</h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:block absolute left-[-41px] top-2 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
              <div className="md:border-l border-border/50 md:pl-10 md:pb-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    <div className="text-xl text-primary mt-1">{exp.company}</div>
                  </div>
                  <div className="text-muted-foreground mt-2 md:mt-0 text-sm md:text-right">
                    <div>{exp.period}</div>
                    <div>{exp.location}</div>
                  </div>
                </div>
                <ul className="space-y-3 mt-6">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 opacity-70">▹</span>
                      <span className="leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
