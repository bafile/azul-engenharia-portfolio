
import { Cog, Settings, Zap, Shield, Target, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: "Projeto Mecânico",
      description: "Desenvolvimento completo de projetos mecânicos desde a concepção até a execução final.",
      features: ["Modelagem 3D", "Análise estrutural", "Documentação técnica"]
    },
    {
      icon: Settings,
      title: "Automação Industrial",
      description: "Sistemas automatizados para otimização de processos industriais e aumento de produtividade.",
      features: ["Sistemas pneumáticos", "Controle CLP", "Interface homem-máquina"]
    },
    {
      icon: Zap,
      title: "Otimização de Processos",
      description: "Análise e melhoria de processos existentes para redução de custos e aumento de eficiência.",
      features: ["Análise de tempos", "Redução de desperdícios", "Melhoria contínua"]
    },
    {
      icon: Shield,
      title: "Consultoria Técnica",
      description: "Consultoria especializada em engenharia mecânica para suporte em projetos complexos.",
      features: ["Análise de viabilidade", "Laudos técnicos", "Suporte especializado"]
    },
    {
      icon: Target,
      title: "Prototipagem",
      description: "Desenvolvimento de protótipos funcionais para validação de conceitos e testes.",
      features: ["Impressão 3D", "Usinagem CNC", "Testes funcionais"]
    },
    {
      icon: Users,
      title: "Treinamento Técnico",
      description: "Capacitação de equipes em tecnologias e processos de engenharia mecânica.",
      features: ["CAD/CAM", "Manutenção preventiva", "Segurança industrial"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em engenharia mecânica, 
            desde projetos conceituais até implementação e suporte técnico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-blue-800">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-800 transition-colors duration-300">
                    <IconComponent className="h-8 w-8 text-blue-800 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 group-hover:text-blue-800 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-800 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
