import { MapPin, Phone, Mail, Shield } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-20">
      <div className="container mx-auto px-8 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Company Info */}
          <div className="space-y-6">
            <div className="text-4xl font-bold text-accent">
              FBS Prime
            </div>
            <p className="text-white/90 leading-relaxed text-lg font-light">
              Soluções completas em crédito financeiro com atendimento humanizado 
              e transparente para Jundiaí e região.
            </p>
            <div className="flex items-center gap-3 text-accent">
              <Shield className="w-6 h-6" />
              <span className="font-semibold text-lg">Atendimento 100% Transparente</span>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
            <div className="space-y-6">
              {/* Atendimento e pós-venda */}
              <div>
                <h4 className="text-lg font-semibold text-accent mb-3">Atendimento e pós-venda</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-light mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">(11) 91725-0634</p>
                      <p className="text-white/70 text-sm">WhatsApp - Atendimento rápido</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary-light mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold">(11) 97054-1325</p>
                      <p className="text-white/70 text-sm">WhatsApp - Atendimento rápido</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Atendimento comercial */}
              <div>
                <h4 className="text-lg font-semibold text-accent mb-3">Atendimento comercial</h4>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary-light mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">(11) 94070-0447</p>
                    <p className="text-white/70 text-sm">WhatsApp - Atendimento rápido</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-light mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">fbsprime20@gmail.com</p>
                  <p className="text-white/70 text-sm">Resposta em até 4 horas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-light mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">Jundiaí</p>
                  <p className="text-white/70 text-sm">R. Seike Saito, 511 - Jardim Currupira, Jundiaí - SP, 13214-077</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                ✓ Financiamento Imobiliário
              </li>
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                ✓ Projeção de financiamento bancário
              </li>
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                ✓ Consórcio imobiliário
              </li>
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                ✓ Carta de crédito contemplada
              </li>
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                ✓ Crédito com Garantia
              </li>
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                ✓ Soluções Personalizadas
              </li>
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                ✓ Consultoria Financeira
              </li>
              <li className="text-white/80 hover:text-white transition-colors cursor-pointer">
                ✓ Renegociação de Dívidas
              </li>
            </ul>
          </div>
          
          {/* Compliance */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Informações Legais</h3>
            <div className="space-y-3">
              <a 
                href="#privacidade" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
              <a 
                href="#termos" 
                className="block text-white/80 hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
              <div className="pt-4">
                <p className="text-white/70 text-sm leading-relaxed">
                  FBS Prime - Correspondente Bancário autorizado pelo Banco Central do Brasil. 
                  Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2024 FBS Prime. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-6">
              <span className="text-white/70 text-sm">Desenvolvido com</span>
              <span className="text-red-400">❤️</span>
              <span className="text-white/70 text-sm">para realizar sonhos</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};