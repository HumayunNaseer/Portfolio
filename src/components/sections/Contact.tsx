import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

// EmailJS Configuration
emailjs.init("Eh62kWt5YZ2OW467Y");

type Status = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Enter a valid email";
  if (!data.subject.trim()) errors.subject = "Subject is required";
  if (!data.message.trim()) errors.message = "Message is required";
  else if (data.message.trim().length < 10) errors.message = "Message must be at least 10 characters";
  return errors;
}

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const updated = { ...formData, [name]: value };
    setFormData(updated);
    if (touched[name]) setErrors(validate(updated));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(formData));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus("loading");
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString(),
      };

      await emailjs.send("service_fqryn1f", "template_iv84aow", templateParams);
      
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  const inputBase =
    "w-full rounded-xl bg-muted/30 border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/40 focus:border-primary/60";

  return (
    <section id="contact" className="py-32 px-6 md:px-12 border-t border-border/50 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I'm currently open to new opportunities. Drop me a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Get in touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project in mind, a role to fill, or just want to say hello — I'd love to hear from you.
              </p>
            </div>

            <a href="mailto:humayunnaseer5@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail size={20} className="text-primary" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-0.5">Email</div>
                <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  humayunnaseer5@gmail.com
                </div>
              </div>
            </a>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="p-3 bg-card border border-border/50 rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/humayun-naseer-rails/"
                className="p-3 bg-card border border-border/50 rounded-full hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center gap-4 py-16 rounded-2xl border border-primary/20 bg-primary/5"
                >
                  <CheckCircle size={48} className="text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">Message sent!</h3>
                    <p className="text-muted-foreground text-sm">I'll get back to you within 24 hours.</p>
                  </div>
                  <button onClick={() => setStatus("idle")} className="text-sm text-primary hover:underline mt-2">
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={form}
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5"
                  noValidate
                >
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                      <AlertCircle size={16} />
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputBase} ${errors.name && touched.name ? "border-red-400/60 focus:ring-red-400/30" : "border-border/50"}`}
                    />
                    {errors.name && touched.name && (
                      <p className="text-xs text-red-400 mt-1.5 ml-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputBase} ${errors.email && touched.email ? "border-red-400/60 focus:ring-red-400/30" : "border-border/50"}`}
                    />
                    {errors.email && touched.email && (
                      <p className="text-xs text-red-400 mt-1.5 ml-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputBase} ${errors.subject && touched.subject ? "border-red-400/60 focus:ring-red-400/30" : "border-border/50"}`}
                    />
                    {errors.subject && touched.subject && (
                      <p className="text-xs text-red-400 mt-1.5 ml-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <textarea
                      name="message"
                      placeholder="What's on your mind?"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputBase} resize-none ${errors.message && touched.message ? "border-red-400/60 focus:ring-red-400/30" : "border-border/50"}`}
                    />
                    {errors.message && touched.message && (
                      <p className="text-xs text-red-400 mt-1.5 ml-1">{errors.message}</p>
                    )}
                  </div>

                  <Button type="submit" size="lg" className="gap-2 h-12" disabled={status === "loading"}>
                    {status === "loading" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <div className="text-center mt-32 text-sm text-muted-foreground pb-8">
        <p>Designed & Built with precision.</p>
        <p className="mt-1">© {new Date().getFullYear()} Humayun Naseer.</p>
      </div>
    </section>
  );
}
