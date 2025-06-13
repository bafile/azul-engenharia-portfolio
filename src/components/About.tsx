
import { Award, BookOpen, Users, Lightbulb } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, value: "5+", label: "Anos de Experiência" },
    { icon: Users, value: "50+", label: "Projetos Concluídos" },
    { icon: BookOpen, value: "15+", label: "Certificações" },
    { icon: Lightbulb, value: "100%", label: "Soluções Inovadoras" }
  ];

  const qualifications = [
    "Engenheiro Mecânico - CREA ativo",
    "Especialização em Automação Industrial",
    "Certificação em SolidWorks Professional",
    "Curso avançado em Lean Manufacturing",
    "Certificação em Segurança do Trabalho",
    "MBA em Gestão de Projetos"
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Sobre Nosso Trabalho
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Com mais de 5 anos de experiência em engenharia mecânica, nossa missão é 
                  transformar desafios técnicos em soluções inovadoras e eficientes. 
                  Especializamos-nos em projetos que demandam precisão, criatividade e 
                  conhecimento técnico avançado.
                </p>
                <p>
                  Nossa abordagem combina metodologias modernas de engenharia com tecnologias 
                  de ponta, garantindo resultados que superam as expectativas dos clientes. 
                  Cada projeto é tratado como único, recebendo atenção personalizada do 
                  conceito à entrega final.
                </p>
                <p>
                  Acreditamos que a excelência técnica deve andar lado a lado com a 
                  sustentabilidade e a eficiência energética, sempre buscando soluções 
                  que agreguem valor ao negócio de nossos clientes.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Qualificações e Certificações
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                Nossos Números
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-blue-600 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Nossa Filosofia</h3>
              <blockquote className="text-lg italic mb-4">
                "A engenharia não é apenas sobre criar máquinas, 
                é sobre criar soluções que transformam a vida das pessoas 
                e o futuro das empresas."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">EP</span>
                </div>
                <div>
                  <div className="font-semibold">Engenheiro Responsável</div>
                  <div className="text-sm text-gray-300">CREA: 123456789</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
