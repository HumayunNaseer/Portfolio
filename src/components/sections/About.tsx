import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "", label: "Companies" },
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Happy Clients" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const stepTime = Math.max(20, Math.floor(duration / target));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 border-t border-border/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            About Me
          </h2>

          <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              I am a Full-stack developer with over 6 years of experience specializing in{" "}
              <strong className="text-foreground">Ruby on Rails</strong> and{" "}
              <strong className="text-foreground">React.js</strong>. My expertise lies in
              building scalable, maintainable, and high-performance web applications for
              international clients across diverse industries.
            </p>
            <p>
              I approach software engineering with a focus on clean architecture and rigorous
              testing. Whether I'm designing modular backend systems for high-volume traffic or
              crafting seamless frontend experiences, I care deeply about the quality of the
              codebase and the end-user experience.
            </p>
            <p>
              With a strong foundation in Computer Science from Comsats University Islamabad, I
              am continuously learning and adapting to new technologies to deliver optimal
              solutions.
            </p>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border/60 bg-muted/20 py-8 px-4 text-center hover:border-primary/40 hover:bg-primary/5 transition-colors duration-300"
            >
              <span className="text-4xl md:text-5xl font-bold text-primary tabular-nums">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-muted-foreground font-medium tracking-wide">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
