import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImg from "@/assets/avatar.png";
import myImage from "@/assets/personal-image.png";

const TITLES = [
  "Senior Full Stack Engineer",
  "Ruby on Rails Developer",
  "React Specialist",
];

const TYPING_SPEED = 60;
const DELETING_SPEED = 35;
const PAUSE_AFTER_TYPE = 1800;
const PAUSE_AFTER_DELETE = 400;

function useTypingAnimation(words: string[]) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    if (!isDeleting && displayed === current) {
      const pause = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(pause);
    }
    if (isDeleting && displayed === "") {
      const pause = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, PAUSE_AFTER_DELETE);
      return () => clearTimeout(pause);
    }
    const speed = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    const timer = setTimeout(() => {
      setDisplayed(
        isDeleting
          ? current.slice(0, displayed.length - 1)
          : current.slice(0, displayed.length + 1)
      );
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, isDeleting, wordIndex, words]);

  return displayed;
}

const blobs = [
  { color: "99,102,241", x: "10%", y: "20%", size: 500, dur: 18 },
  { color: "139,92,246", x: "70%", y: "60%", size: 420, dur: 22 },
  { color: "79,70,229", x: "50%", y: "10%", size: 380, dur: 26 },
  { color: "99,102,241", x: "85%", y: "80%", size: 300, dur: 20 },
];

export function Hero() {
  const typedTitle = useTypingAnimation(TITLES);

  return (
    <section
      id="top"
      className="min-h-screen flex items-center pt-20 pb-12 px-6 md:px-12 relative overflow-hidden"
    >
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: blob.x,
            top: blob.y,
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle, rgba(${blob.color},0.18) 0%, transparent 70%)`,
            filter: "blur(60px)",
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            x: ["0%", "8%", "-6%", "4%", "0%"],
            y: ["0%", "-6%", "8%", "-4%", "0%"],
            scale: [1, 1.08, 0.95, 1.04, 1],
          }}
          transition={{
            duration: blob.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
        />
      ))}

      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            Humayun Naseer
            <span className="block text-primary mt-3 text-3xl md:text-4xl min-h-[1.25em]">
              {typedTitle}
              <span className="inline-block w-[3px] h-[0.85em] ml-1 bg-primary align-middle animate-pulse" />
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-[500px] leading-relaxed">
            I craft high-quality, international-grade software using Ruby on
            Rails and React. Precision, scalability, and clean code are my
            default states.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <Button size="lg" className="gap-2 text-base h-12 px-8" asChild>
              <a href="#projects">
                View Work <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-base h-12 px-8" asChild>
              <a href="#">
                Download Resume <Download className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full shadow-2xl">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-transparent opacity-60 z-10" />
            <img
              src={myImage}
              alt="Humayun Naseer profile"
              className="w-full h-full rounded-full object-cover border-2 border-primary/30"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
