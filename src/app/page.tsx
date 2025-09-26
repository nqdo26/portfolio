"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import AnimatedText from "@/components/AnimatedText";
import FloatingElements from "@/components/FloatingElements";
import ProjectCard from "@/components/ProjectCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleOnHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <FloatingElements />
      {/* Navigation Header */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.h1>
            <div className="hidden md:flex space-x-8">
              {[
                "nav.home",
                "nav.about",
                "nav.skills",
                "nav.projects",
                "nav.contact",
              ].map((key, index) => (
                <motion.a
                  key={key}
                  href={`#${
                    ["home", "about", "skills", "projects", "contact"][index]
                  }`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {t(key)}
                </motion.a>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div
            className="mb-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary shadow-lg"
              variants={fadeInUp}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-4"
              variants={fadeInUp}
            >
              {t("hero.name")}
            </motion.h1>
            <motion.div variants={fadeInUp}>
              <AnimatedText />
            </motion.div>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
              variants={fadeInUp}
            >
              {t("hero.description")}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <motion.div {...scaleOnHover}>
                <Button asChild size="lg">
                  <a href="#projects">{t("hero.viewProjects")}</a>
                </Button>
              </motion.div>
              <motion.div {...scaleOnHover}>
                <Button variant="outline" asChild size="lg">
                  <a href="#contact">{t("hero.contact")}</a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("about.title")}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">
                {t("about.aboutMe")}
              </h3>
              <p className="text-muted-foreground mb-4">
                {t("about.description1")}
              </p>
              <p className="text-muted-foreground mb-6">
                {t("about.description2")}
              </p>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {["React", "Node.js", "TypeScript", "JavaScript"].map(
                  (tech) => (
                    <motion.div key={tech} variants={fadeInUp}>
                      <Badge variant="secondary">{tech}</Badge>
                    </motion.div>
                  )
                )}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{t("about.experience")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Project 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-primary">
                        {t("experience.project1.title")}
                      </h5>
                      <span className="text-sm font-medium bg-primary/10 px-2 py-1 rounded">
                        {t("experience.project1.year")}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {t("experience.project1.description")}
                    </p>
                    <p className="text-xs text-primary/70 font-medium">
                      {t("experience.techUsed")} {t("experience.project1.tech")}
                    </p>
                  </motion.div>

                  <Separator />

                  {/* Project 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-primary">
                        {t("experience.project2.title")}
                      </h5>
                      <span className="text-sm font-medium bg-primary/10 px-2 py-1 rounded">
                        {t("experience.project2.year")}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {t("experience.project2.description")}
                    </p>
                    <p className="text-xs text-primary/70 font-medium">
                      {t("experience.techUsed")} {t("experience.project2.tech")}
                    </p>
                  </motion.div>

                  <Separator />

                  {/* Project 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-primary">
                        {t("experience.project3.title")}
                      </h5>
                      <span className="text-sm font-medium bg-primary/10 px-2 py-1 rounded">
                        {t("experience.project3.year")}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {t("experience.project3.description")}
                    </p>
                    <p className="text-xs text-primary/70 font-medium">
                      {t("experience.techUsed")} {t("experience.project3.tech")}
                    </p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("skills.title")}
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                titleKey: "skills.frontend",
                skills: [
                  "ReactJs",
                  "NextJs",
                  "JavaScript",
                  "TypeScript",
                  "Tailwind CSS",
                  "Sass (SCSS)",
                  "UI Library (Ant Design, Shadcn UI, Framer Motion)",
                ],
              },
              {
                titleKey: "skills.backend",
                skills: [
                  "Node.js",
                  "Express.js",
                  "PostgreSQL",
                  "Database/Storage (MongoDB, Supabase, Cloudinary, Pinecone)",
                  "RAG Server",
                ],
              },
              {
                titleKey: "skills.tools",
                skills: [
                  "Git & GitHub",
                  "VS Code & Cursor",
                  "Vercel & Render",
                  "Groq (LLM)",
                  "OpenAI API",
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={category.titleKey}
                variants={fadeInUp}
                {...scaleOnHover}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{t(category.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.li
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: skillIndex * 0.1 + index * 0.2 }}
                          viewport={{ once: true }}
                        >
                          • {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-muted/50">
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("projects.title")}
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                titleKey: "projects.ecommerce.title",
                descriptionKey: "projects.ecommerce.description",
                technologies: [
                  "React.js",
                  "Node.js",
                  "Javascript",
                  "LLM",
                  "RAG Server",
                  "Cloudinary",
                ],
                demoLink: "https://goohno.vercel.app/",
                githubLink: "https://github.com/nqdo26",
                hasDemo: true,
              },
              {
                titleKey: "projects.taskApp.title",
                descriptionKey: "projects.taskApp.description",
                technologies: [
                  "React.js",
                  "Node.js",
                  "Javascript",
                  "MongoDB",
                  "Supabase",
                ],
                githubLink: "https://github.com/nqdo26/Project-NienLuanNganh",
                hasDemo: false,
              },
              {
                titleKey: "projects.weatherApp.title",
                descriptionKey: "projects.weatherApp.description",
                technologies: [
                  "React.js",
                  "Node.js",
                  "Javascript",
                  "MongoDB",
                  "Cloudinary",
                ],
                githubLink: "https://github.com/nqdo26/Project_NienLuanCoSo",
                hasDemo: false,
              },
            ].map((project, index) => (
              <motion.div
                key={project.titleKey}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ProjectCard
                  title={t(project.titleKey)}
                  description={t(project.descriptionKey)}
                  technologies={project.technologies}
                  demoLink={project.demoLink}
                  githubLink={project.githubLink}
                  hasDemo={project.hasDemo}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t("contact.title")}
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <motion.p
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t("contact.description")}
            </motion.p>
            <motion.div
              className="grid md:grid-cols-3 gap-8 mb-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[
                {
                  titleKey: "contact.email",
                  content: "nqdo26@gmail.com",
                },
                { titleKey: "contact.phone", content: "0395 462 092" },
                { titleKey: "contact.address", content: t("contact.location") },
              ].map((contact) => (
                <motion.div key={contact.titleKey} variants={fadeInUp}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">
                        {t(contact.titleKey)}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{contact.content}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="flex justify-center space-x-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                {
                  name: "LinkedIn",
                  url: "https://www.linkedin.com/in/nqdo0206",
                },
                { name: "GitHub", url: "https://github.com/nqdo26" },
                { name: "Zalo", url: "https://zalo.me/84395462092" },
              ].map((social) => (
                <motion.div key={social.name} {...scaleOnHover}>
                  <Button variant="default" size="lg" asChild>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.name}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-6">
        <div className="container mx-auto text-center">
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            © 2025 by Nguyễn Quang Độ
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
