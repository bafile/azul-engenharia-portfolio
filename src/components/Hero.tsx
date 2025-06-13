
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
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 shadow-2xl">
              <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">Projeto em Andamento</div>
                  <div className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    95% Concluído
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-blue-600 rounded-full" style={{width: "95%"}}></div>
                  </div>
                  <div className="text-lg font-semibold text-gray-900">
                    Sistema Automatizado Industrial
                  </div>
                  <div className="text-sm text-gray-600">
                    Linha de produção otimizada com redução de 40% no tempo de processo
                  </div>
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
