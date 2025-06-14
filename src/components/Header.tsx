
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center justify-center flex-1 md:flex-none md:justify-start">
            <img 
              src="/lovable-uploads/d28a5838-200c-404c-a1ad-254386cda0bb.png" 
              alt="HLB Engenharia" 
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 flex-1 justify-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-800 transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex flex-1 justify-end">
            <Button className="bg-blue-800 hover:bg-blue-900 text-white text-sm xl:text-base px-4 xl:px-6">
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Menu de navegação"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white">
            <nav className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-800 hover:bg-gray-50 py-3 px-4 rounded-md transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2 px-4">
                <Button className="bg-blue-800 hover:bg-blue-900 text-white w-full">
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
