import { motion } from "framer-motion";
import kukulaLogo from "@assets/Imagem_do_WhatsApp_de_2025-10-30_à(s)_10.43.15_771e054f_1765822578132.jpg";

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Sobre Mim
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Sou um desenvolvedor full-stack apaixonado por criar soluções digitais inovadoras. 
                Com experiência em desenvolvimento web moderno, design de interfaces e experiência do usuário.
              </p>
              <p className="text-foreground font-medium border-l-4 border-primary pl-4">
                Meu objetivo é transformar ideias complexas em produtos digitais simples, funcionais e impactantes.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="text-sm text-muted-foreground">Membro orgulhoso de:</div>
              <div className="h-12 w-auto bg-white rounded-md p-1">
                <img 
                  src={kukulaLogo} 
                  alt="Ku_kulaDevs" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/50 border border-primary/10 rounded-lg p-6 flex flex-col items-center justify-center text-center aspect-square hover:bg-card/80 transition-colors">
                <span className="text-4xl font-bold text-primary mb-2">22</span>
                <span className="text-sm text-muted-foreground">Anos</span>
              </div>
              <div className="bg-card/50 border border-primary/10 rounded-lg p-6 flex flex-col items-center justify-center text-center aspect-square hover:bg-card/80 transition-colors mt-8">
                <span className="text-4xl font-bold text-primary mb-2">5+</span>
                <span className="text-sm text-muted-foreground">Projetos</span>
              </div>
              <div className="bg-card/50 border border-primary/10 rounded-lg p-6 flex flex-col items-center justify-center text-center aspect-square hover:bg-card/80 transition-colors -mt-8">
                <span className="text-4xl font-bold text-primary mb-2">3+</span>
                <span className="text-sm text-muted-foreground">Linguagens</span>
              </div>
              <div className="bg-card/50 border border-primary/10 rounded-lg p-6 flex flex-col items-center justify-center text-center aspect-square hover:bg-card/80 transition-colors">
                <span className="text-4xl font-bold text-primary mb-2">100%</span>
                <span className="text-sm text-muted-foreground">Dedicação</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
