
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-blue-50 to-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Soluções em
                <span className="text-blue-800 block">Engenharia Mecânica</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Desenvolvemos projetos mecânicos inovadores com precisão técnica e 
                qualidade excepcional. Do conceito à execução, transformamos suas 
                ideias em realidade.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white group w-full sm:w-auto">
                Ver Portfólio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 group w-full sm:w-auto"
              >
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                Nossos Serviços
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-800">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Projetos Concluídos</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-800">5+</div>
                <div className="text-xs sm:text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-blue-800">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl p-3 sm:p-4 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Engenharia Mecânica - Engrenagens e Projetos Técnicos"
                className="w-full h-60 sm:h-80 object-cover rounded-lg"
              />
              <div className="absolute top-6 sm:top-8 right-6 sm:right-8 bg-green-400 w-3 h-3 rounded-full animate-pulse"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4">
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  Precisão em Projetos
                </div>
                <div className="text-xs text-gray-600">
                  Desenvolvimento de sistemas mecânicos com máxima eficiência
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
