import { ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Sistema de Transporte Automatizado",
      category: "Automação Industrial",
      description: "Desenvolvimento de esteira transportadora automatizada para linha de produção automotiva.",
      image: "/lovable-uploads/173574f3-9f41-4063-8263-d82475f3241b.png",
      date: "2024",
      technologies: ["SolidWorks", "CLP Siemens", "Pneumática"],
      results: "40% aumento na produtividade"
    },
    {
      title: "Máquina de Embalagem Customizada",
      category: "Projeto Mecânico",
      description: "Projeto e desenvolvimento de máquina especial para embalagem de produtos alimentícios.",
      image: "/api/placeholder/400/250",
      date: "2023",
      technologies: ["AutoCAD", "Análise FEM", "Servo motores"],
      results: "60% redução no tempo de embalagem"
    },
    {
      title: "Otimização de Linha Produtiva",
      category: "Consultoria",
      description: "Análise e reestruturação de linha produtiva com foco em eficiência energética.",
      image: "/api/placeholder/400/250",
      date: "2023",
      technologies: ["Lean Manufacturing", "Análise energética", "IoT"],
      results: "30% economia energética"
    },
    {
      title: "Robô Colaborativo Industrial",
      category: "Automação",
      description: "Integração de robô colaborativo para operações de pick-and-place em linha de montagem.",
      image: "/api/placeholder/400/250",
      date: "2024",
      technologies: ["ROS", "Visão computacional", "Programação robótica"],
      results: "50% redução de erros"
    },
    {
      title: "Sistema de Climatização Industrial",
      category: "HVAC",
      description: "Projeto de sistema de climatização para ambiente industrial com controle automatizado.",
      image: "/api/placeholder/400/250",
      date: "2023",
      technologies: ["CFD", "Controle PID", "Sensoriamento"],
      results: "25% economia energética"
    },
    {
      title: "Protótipo de Veículo Elétrico",
      category: "Desenvolvimento",
      description: "Desenvolvimento de protótipo funcional de veículo elétrico urbano compacto.",
      image: "/api/placeholder/400/250",
      date: "2024",
      technologies: ["Impressão 3D", "Baterias Li-ion", "Motor elétrico"],
      results: "Autonomia de 80km"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Portfólio de Projetos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos mais recentes e os resultados 
            obtidos para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-blue-800 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-green-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-sm text-green-800 mb-1">Resultado:</h4>
                  <p className="text-sm text-green-700">{project.results}</p>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-800 group-hover:text-white group-hover:border-blue-800 transition-colors"
                >
                  Ver Detalhes
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-800 hover:bg-blue-900 text-white">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
