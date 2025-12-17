import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Backend & Core",
      icon: <Terminal className="h-6 w-6 text-primary" />,
      skills: ["Python", "Django", "Java", "C++ (Basic)", "OOP"]
    },
    {
      title: "Frontend",
      icon: <Layout className="h-6 w-6 text-primary" />,
      skills: ["HTML5", "CSS3", "JavaScript", "React"]
    },
    {
      title: "Design",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      skills: ["UI/UX Design", "Figma", "Prototyping"]
    },
    {
      title: "Architecture",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["Full-Stack Systems", "MVC Pattern", "REST APIs"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Habilidades
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-6 rounded-xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
