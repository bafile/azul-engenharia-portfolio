import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    tipoDrawing: "",
    mensagem: ""
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "+55 (11) 99999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@engmechpro.com.br",
      link: "mailto:contato@engmechpro.com.br"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "São Paulo, SP - Brasil",
      link: "#"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Seg-Sex: 8h às 18h",
      link: "#"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.email || !formData.mensagem) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simular envio do formulário
      console.log("Dados do formulário:", formData);
      
      // Aqui você pode integrar com um serviço de envio de email
      // Por exemplo: EmailJS, Formspree, ou uma API própria
      
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simular delay

      toast({
        title: "Mensagem enviada!",
        description: "Sua solicitação foi enviada com sucesso. Responderemos em até 24 horas.",
      });

      // Limpar formulário
      setFormData({
        nome: "",
        empresa: "",
        email: "",
        telefone: "",
        tipoDrawing: "",
        mensagem: ""
      });

    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Pronto para transformar sua ideia em realidade? Entre em contato conosco 
            e vamos discutir seu próximo projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                Informações de Contato
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 gap-4 sm:gap-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-800 rounded-full flex items-center justify-center flex-shrink-0">
                            <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                              {item.title}
                            </h4>
                            <a 
                              href={item.link}
                              className="text-gray-600 hover:text-blue-800 transition-colors text-sm sm:text-base break-all"
                            >
                              {item.info}
                            </a>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                Solicite um Orçamento Gratuito
              </h3>
              <p className="text-blue-100 mb-6 text-sm sm:text-base">
                Oferecemos consulta inicial gratuita para avaliar seu projeto 
                e apresentar a melhor solução técnica.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Análise técnica inicial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Proposta personalizada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">Prazo de resposta: 24h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl sm:text-2xl text-gray-900">
                Envie sua Mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nome *
                    </label>
                    <Input 
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <Input 
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleInputChange}
                      placeholder="Nome da empresa" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <Input 
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Desenho
                  </label>
                  <select 
                    name="tipoDrawing"
                    value={formData.tipoDrawing}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                  >
                    <option value="">Selecione um tipo</option>
                    <option value="planta-baixa">Planta Baixa</option>
                    <option value="desenho-tecnico">Desenho Técnico</option>
                    <option value="layout-industrial">Layout Industrial</option>
                    <option value="detalhamento-mecanico">Detalhamento Mecânico</option>
                    <option value="diagrama-eletrico">Diagrama Elétrico</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea 
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Descreva seu projeto ou necessidade..."
                    rows={4}
                    className="resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  * Campos obrigatórios. Responderemos em até 24 horas.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
