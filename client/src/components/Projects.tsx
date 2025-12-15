import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, CloudSun, Users, ShoppingCart, Info } from "lucide-react";
import iagroLogo from "@assets/Captura_de_tela_2025-08-31_174719_1765822512653.png";

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            {t('projects.title')}
          </h2>
        </motion.div>

        {/* IAgroMoz Feature Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group rounded-xl overflow-hidden border border-border bg-card/50 hover:bg-card/80 transition-all duration-300"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="bg-white/5 p-12 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
              <img 
                src={iagroLogo} 
                alt="IAgroMoz" 
                className="relative z-10 w-64 h-64 object-contain drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                  {t('projects.iagromoz.title')}
                </h3>
                <p className="text-primary font-medium mb-4">{t('projects.iagromoz.subtitle')}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('projects.iagromoz.description')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <CloudSun className="h-4 w-4 text-primary" />
                  {t('projects.iagromoz.features.weather')}
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Info className="h-4 w-4 text-primary" />
                  {t('projects.iagromoz.features.assistance')}
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Users className="h-4 w-4 text-primary" />
                  {t('projects.iagromoz.features.community')}
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <ShoppingCart className="h-4 w-4 text-primary" />
                  {t('projects.iagromoz.features.marketplace')}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Django', 'Python', 'Full-Stack', 'UI/UX'].map((tech) => (
                  <Badge key={tech} variant="outline" className="border-primary/30 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="pt-4">
                <Button variant="default" className="gap-2">
                   View Project <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
