import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import kinhoPhoto from "@assets/Design_sem_nome_1765822512655.jpg";
import heroBg from "@assets/generated_images/abstract_blue_technology_background_with_digital_waves_and_code_elements_for_hero_section.png";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      </div>

      <div className="container px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            {t('hero.subtitle')}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-foreground">{t('hero.title')}</span>
            <span className="text-primary">.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed">
            {t('hero.tagline')}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-8">
              {t('hero.cta')} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-4 ml-4">
              <a href="https://www.linkedin.com/in/isidro-guiamba-0b3211346/" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:contact@kinho.dev" className="p-2 rounded-full bg-secondary/50 hover:bg-primary/20 text-foreground hover:text-primary transition-all">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse" />
            
            {/* Image container */}
            <div className="relative w-full h-full rounded-full border-4 border-primary/30 overflow-hidden shadow-2xl shadow-primary/20">
              <img 
                src={kinhoPhoto} 
                alt="Kinho" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating decorative elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-card p-3 rounded-xl border border-primary/20 shadow-lg backdrop-blur-md"
            >
              <div className="text-xs font-bold text-primary">Full-Stack</div>
              <div className="text-[10px] text-muted-foreground">Developer</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-card p-3 rounded-xl border border-primary/20 shadow-lg backdrop-blur-md"
            >
              <div className="text-xs font-bold text-primary">UI/UX</div>
              <div className="text-[10px] text-muted-foreground">Designer</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
