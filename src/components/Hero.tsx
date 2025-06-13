
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-blue-50 to-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Soluções em
                <span className="text-blue-600 block">Engenharia Mecânica</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Desenvolvemos projetos mecânicos inovadores com precisão técnica e 
                qualidade excepcional. Do conceito à execução, transformamos suas 
                ideias em realidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group">
                Ver Portfólio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 group"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Nossos Serviços
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projetos Concluídos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-4 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Engenharia Mecânica - Componentes e Circuitos"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute top-8 right-8 bg-green-400 w-3 h-3 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  Precisão em Cada Detalhe
                </div>
                <div className="text-xs text-gray-600">
                  Tecnologia avançada aplicada em projetos de engenharia mecânica
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
