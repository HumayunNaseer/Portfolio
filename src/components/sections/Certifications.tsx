import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  // {
  //   title: "AWS Certified Developer – Associate",
  //   issuer: "Amazon Web Services (AWS)",
  //   date: "Jan 2024",
  //   credentialId: "AWS-DEV-2024-XXXXX",
  //   description:
  //     "Validates proficiency in developing, deploying, and debugging cloud-based applications using AWS services.",
  //   badgeColor: "from-orange-500/20 to-yellow-500/10",
  //   borderColor: "border-orange-500/30",
  //   iconColor: "text-orange-400",
  // },
  {
    title: "Ruby on Rails Professional Developer",
    issuer: "Michael Hartl",
    date: "Mar 2020",
    // credentialId: "LF-RORPD-2023-XXXXX",
    description:
      "Demonstrates expertise in building, testing, and deploying production-grade Ruby on Rails applications with best practices.",
    badgeColor: "from-red-500/20 to-pink-500/10",
    borderColor: "border-red-500/30",
    iconColor: "text-red-400",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 border-t border-border/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`group relative bg-card rounded-2xl p-7 border ${cert.borderColor} hover:border-primary/40 transition-all duration-300`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.badgeColor} opacity-40 pointer-events-none`} />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-card border ${cert.borderColor} flex items-center justify-center ${cert.iconColor}`}>
                    <Award size={22} />
                  </div>
                  <a href="#" className="p-2 rounded-full bg-background/50 hover:bg-primary/10 hover:text-primary transition-colors">
                    <ExternalLink size={15} />
                  </a>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-1 leading-snug group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm font-semibold text-primary/80 mb-3">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{cert.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/40 pt-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    <span>{cert.date}</span>
                  </div>
                  <span className="font-mono opacity-60">{cert.credentialId}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
