import { motion } from "framer-motion";
import { Phone, MessageSquare, Linkedin, Send, Mail } from "lucide-react";

export function Contact() {

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-foreground">
            Contacto
          </h2>
          <p className="text-muted-foreground">
            Tem um projeto em mente ou quer apenas dizer olá? Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card/50 border border-primary/10 hover:border-primary/30 transition-colors rounded-lg p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Telefone</h3>
                  <p className="text-muted-foreground">870038117</p>
                </div>
              </div>
            </div>

            <a href="mailto:isidroguiamba@gmail.com" className="block">
              <div className="bg-card/50 border border-primary/10 hover:border-primary/30 transition-colors cursor-pointer group rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:bg-red-500/20 transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">isidroguiamba@gmail.com</p>
                  </div>
                </div>
              </div>
            </a>

            <a 
              href="https://wa.me/qr/3U3UMZKWPTHGJ1" 
              target="_blank" 
              rel="noreferrer"
              className="block"
            >
              <div className="bg-card/50 border border-primary/10 hover:border-primary/30 transition-colors cursor-pointer group rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500/20 transition-colors">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-muted-foreground">Chat no WhatsApp</p>
                  </div>
                </div>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/isidro-guiamba-0b3211346/" 
              target="_blank" 
              rel="noreferrer"
              className="block"
            >
              <div className="bg-card/50 border border-primary/10 hover:border-primary/30 transition-colors cursor-pointer group rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-600 group-hover:bg-blue-600/20 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">LinkedIn</h3>
                    <p className="text-muted-foreground">Conectar no LinkedIn</p>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Nome</label>
                  <input id="name" placeholder="Seu nome" className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input id="email" type="email" placeholder="seu@email.com" className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Assunto</label>
                <input id="subject" placeholder="Consulta de Projeto" className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Mensagem</label>
                <textarea id="message" placeholder="Conte-me sobre seu projeto..." className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary min-h-[150px] resize-vertical"></textarea>
              </div>

              <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-md flex items-center justify-center transition-colors">
                <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
