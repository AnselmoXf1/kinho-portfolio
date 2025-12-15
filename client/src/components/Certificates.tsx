import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { ZoomIn } from "lucide-react";

// Import images
import cert1 from "@assets/Imagem_do_WhatsApp_de_2025-12-15_à(s)_19.56.32_04bb100e_1765821513103.jpg";
import cert2 from "@assets/Imagem_do_WhatsApp_de_2025-12-15_à(s)_19.57.18_13112695_1765821513103.jpg";
import cert3 from "@assets/Imagem_do_WhatsApp_de_2025-12-15_à(s)_19.57.19_5aece132_1765821513104.jpg";
import cert4 from "@assets/Imagem_do_WhatsApp_de_2025-12-15_à(s)_19.57.19_20a584ec_1765821513104.jpg";
import cert5 from "@assets/Imagem_do_WhatsApp_de_2025-12-15_à(s)_19.57.20_07831f64_1765821513105.jpg";

export function Certificates() {
  const { t } = useTranslation();

  const certificates = [
    { id: 1, src: cert2, title: t('certificates.diploma'), desc: "Universidade Metodista" },
    { id: 2, src: cert3, title: "Bootcamp Python", desc: "MozDevz" },
    { id: 3, src: cert5, title: t('certificates.workshop_web'), desc: "MozDevz" },
    { id: 4, src: cert4, title: "Jornadas Científicas", desc: "IAgroMoz Presentation" },
    { id: 5, src: cert1, title: "12ª Classe", desc: "Habilitações Literárias" },
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            {t('certificates.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="cursor-pointer overflow-hidden border-border/50 bg-card/50 hover:bg-card hover:border-primary/50 transition-all group">
                    <CardContent className="p-0 relative aspect-[4/3]">
                      <img 
                        src={cert.src} 
                        alt={cert.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <ZoomIn className="text-white w-10 h-10" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                        <h4 className="text-white font-semibold truncate">{cert.title}</h4>
                        <p className="text-white/70 text-sm">{cert.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-card border-primary/20 p-0 overflow-hidden">
                  <img src={cert.src} alt={cert.title} className="w-full h-auto" />
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
