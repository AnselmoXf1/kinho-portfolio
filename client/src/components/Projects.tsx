import { motion } from "framer-motion";
import { ExternalLink, CloudSun, Users, ShoppingCart, Info } from "lucide-react";
import iagroLogo from "@assets/Captura_de_tela_2025-08-31_174719_1765822512653.png";

export function Projects() {
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Projetos
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
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  IAgroMoz
                </h3>
                <p className="text-primary font-medium mb-4">Plataforma Agrícola Inteligente</p>
                <p className="text-muted-foreground leading-relaxed">
                  Uma plataforma completa para agricultores moçambicanos com previsão do tempo, 
                  assistência técnica, comunidade e marketplace integrado.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <CloudSun className="h-4 w-4 text-primary" />
                  Previsão do Tempo
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Info className="h-4 w-4 text-primary" />
                  Assistência Técnica
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <Users className="h-4 w-4 text-primary" />
                  Comunidade
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground/80">
                  <ShoppingCart className="h-4 w-4 text-primary" />
                  Marketplace
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Django', 'Python', 'Full-Stack', 'UI/UX'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs border border-primary/30 text-primary rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md flex items-center gap-2 transition-colors">
                   Ver Projeto <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
