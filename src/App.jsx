import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Check, 
  Globe, 
  Server, 
  Zap, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Code2 
} from 'lucide-react';
import heroWorkspaceImg from './assets/hero_workspace.jpg';
import logoImg from './assets/logo.png';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappPhone = '5542984212013';
  const whatsappDisplay = '(42) 98421-2013';
  const contactEmail = 'ghdevcontato@gmail.com';

  const getWhatsAppLink = (message) => {
    return `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="app-container">
      {/* Background Technical Grid */}
      <div className="tech-grid-bg"></div>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <a href="#" className="brand-logo-wrap">
            <img src={logoImg} alt="ghdev Studio" className="brand-logo-img" />
          </a>

          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#" onClick={() => setMobileMenuOpen(false)}>Início</a></li>
            <li><a href="#pacotes" onClick={() => setMobileMenuOpen(false)}>Pacotes</a></li>
            <li><a href="#como-trabalhamos" onClick={() => setMobileMenuOpen(false)}>Processo</a></li>
            <li><a href="#contato" onClick={() => setMobileMenuOpen(false)}>Contato</a></li>
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href={getWhatsAppLink('Olá! Vim pelo site da ghdev e gostaria de conversar sobre um projeto.')} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-nav-whatsapp"
            >
              <MessageCircle size={17} />
              <span>WhatsApp</span>
            </a>

            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-left">
              <span className="mono-tag">ESTÚDIO DE DESENVOLVIMENTO WEB</span>

              <h1 className="hero-title">
                Sua Presença Digital, <br />
                <span className="text-gradient">Feita à Mão</span>
              </h1>

              <p className="hero-lead-text">
                Construímos sites e páginas de alta performance para <strong>empreendedores e negócios locais</strong> que querem se destacar com design sob medida, velocidade extrema e estratégia de conversão.
              </p>

              <div className="hero-cta-group">
                <a href="#pacotes" className="btn-primary-action">
                  <span>Ver Pacotes</span>
                  <ArrowRight size={18} />
                </a>

                <a href="#contato" className="btn-secondary-action">
                  <span>Falar com Desenvolvedor</span>
                </a>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-visual-container">
                <div className="mockup-window">
                  <div className="mockup-header">
                    <span className="dot-btn red"></span>
                    <span className="dot-btn yellow"></span>
                    <span className="dot-btn green"></span>
                    <span className="mockup-url">https://seu-site.com.br</span>
                  </div>
                  <div className="mockup-body">
                    <img src={heroWorkspaceImg} alt="Desenvolvimento Web ghdev" />
                  </div>
                </div>

                <div className="asymmetric-badge">
                  <div className="badge-icon-box">
                    <Code2 size={22} />
                  </div>
                  <div>
                    <div className="badge-text-title">INVESTIMENTO INICIAL</div>
                    <div className="badge-text-price">R$ 650</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="trust-strip">
            <div className="trust-cell">
              <Globe className="trust-cell-icon" size={20} />
              <div>
                <div className="trust-cell-title">Domínio Próprio</div>
                <div className="trust-cell-desc">Configuração e suporte técnico</div>
              </div>
            </div>

            <div className="trust-cell">
              <Server className="trust-cell-icon" size={20} />
              <div>
                <div className="trust-cell-title">Hospedagem Inclusa</div>
                <div className="trust-cell-desc">Servidor ultrarrápido com SSL</div>
              </div>
            </div>

            <div className="trust-cell">
              <Zap className="trust-cell-icon" size={20} />
              <div>
                <div className="trust-cell-title">Alta Performance</div>
                <div className="trust-cell-desc">Carregamento em menos de 1 segundo</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 2: Pacotes de Excelência */}
      <section id="pacotes" className="section-padding">
        <div className="container">
          <div className="section-header-editorial center">
            <span className="mono-tag">OPÇÕES SOB MEDIDA</span>
            <h2 className="editorial-h2">Pacotes de Excelência</h2>
            <p className="editorial-p">
              Transparência total desde o primeiro contato. Sem custos escondidos ou mensalidades abusivas.
            </p>
          </div>

          <div className="pricing-grid-editorial">
            {/* Card 1: Landing Page */}
            <div className="bespoke-card card-pricing">
              <div className="card-plan-header">
                <span className="card-plan-category">Individual</span>
                <h3 className="card-plan-name">Landing Page</h3>
                <div className="card-plan-price-wrap">
                  <span className="card-plan-price">R$ 650</span>
                  <span className="card-plan-sub">/ pagamento único</span>
                </div>
                <p className="card-plan-desc">Solução objetiva e focada em gerar contatos e vendas diretas.</p>
              </div>

              <ul className="card-feature-list">
                <li>
                  <Check size={18} />
                  <span>Página única responsiva (Mobile-first)</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Botão de WhatsApp flutuante estratégico</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Otimização técnica para Google (SEO básico)</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Entrega rápida em 5 a 7 dias úteis</span>
                </li>
              </ul>

              <a 
                href={getWhatsAppLink('Olá! Gostaria de contratar o pacote Landing Page por R$ 650.')}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary-action"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Contratar via WhatsApp
              </a>
            </div>

            {/* Card 2: Site Vitrine (Featured) */}
            <div className="bespoke-card card-pricing featured">
              <span className="featured-ribbon">Mais Solicitado</span>
              <div className="card-plan-header">
                <span className="card-plan-category" style={{ color: '#38bdf8' }}>Negócios</span>
                <h3 className="card-plan-name">Site Vitrine</h3>
                <div className="card-plan-price-wrap">
                  <span className="card-plan-price">R$ 850</span>
                  <span className="card-plan-sub">/ pagamento único</span>
                </div>
                <p className="card-plan-desc">Sua empresa com presença completa e profissional na internet.</p>
              </div>

              <ul className="card-feature-list">
                <li>
                  <Check size={18} />
                  <span>Até 5 páginas completas (Início, Sobre, Serviços...)</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Painel administrativo intuitivo</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>SEO avançado & integração Google Maps</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Formulário de contato + WhatsApp integrado</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Entrega em 10 a 15 dias úteis</span>
                </li>
              </ul>

              <a 
                href={getWhatsAppLink('Olá! Gostaria de contratar o pacote Site Vitrine por R$ 850.')}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-cta-green"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Contratar via WhatsApp
              </a>
            </div>

            {/* Card 3: Loja Virtual */}
            <div className="bespoke-card card-pricing">
              <div className="card-plan-header">
                <span className="card-plan-category">E-commerce</span>
                <h3 className="card-plan-name">Loja Virtual</h3>
                <div className="card-plan-price-wrap">
                  <span className="card-plan-price">R$ 1.400</span>
                  <span className="card-plan-sub">/ pagamento único</span>
                </div>
                <p className="card-plan-desc">Estrutura completa para vender seus produtos online 24h por dia.</p>
              </div>

              <ul className="card-feature-list">
                <li>
                  <Check size={18} />
                  <span>Catálogo de produtos com categorias</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Carrinho de compras & Checkout seguro</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Integração de pagamento (Pix & Cartões)</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Painel completo de gestão de pedidos</span>
                </li>
                <li>
                  <Check size={18} />
                  <span>Entrega em 15 a 20 dias úteis</span>
                </li>
              </ul>

              <a 
                href={getWhatsAppLink('Olá! Tenho interesse no pacote Loja Virtual por R$ 1.400.')}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary-action"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Contratar via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Como Trabalhamos */}
      <section id="como-trabalhamos" className="section-padding process-section">
        <div className="container">
          <div className="process-layout-grid">
            <div className="sticky-process-sidebar">
              <span className="mono-tag">METODOLOGIA CLARA</span>
              <h2 className="editorial-h2">Como Trabalhamos</h2>
              <p className="editorial-p">
                Nosso processo é transparente e colaborativo. Garantimos que cada detalhe reflita a essência da sua marca.
              </p>

              <div className="guarantee-box-editorial">
                <div className="guarantee-icon">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <div className="guarantee-title">Qualidade ghdev</div>
                  <div className="guarantee-text">
                    Garantia de suporte por 30 dias após a entrega oficial para pequenos ajustes e dúvidas.
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-steps-container">
              <div className="bespoke-card timeline-step-card">
                <div className="step-num-badge">01</div>
                <div className="step-body">
                  <h4>Conversa Inicial</h4>
                  <p>Entendemos seu negócio, seus objetivos e o público que você deseja alcançar na internet.</p>
                </div>
              </div>

              <div className="bespoke-card timeline-step-card">
                <div className="step-num-badge">02</div>
                <div className="step-body">
                  <h4>Planejamento</h4>
                  <p>Definimos a estrutura, o conteúdo e as funcionalidades essenciais para converter visitantes em clientes.</p>
                </div>
              </div>

              <div className="bespoke-card timeline-step-card">
                <div className="step-num-badge">03</div>
                <div className="step-body">
                  <h4>Desenvolvimento</h4>
                  <p>Nossos artesãos digitais colocam a mão na massa para construir seu site com as melhores tecnologias.</p>
                </div>
              </div>

              <div className="bespoke-card timeline-step-card">
                <div className="step-num-badge">04</div>
                <div className="step-body">
                  <h4>Revisões</h4>
                  <p>Você avalia o resultado e solicita ajustes finais para que tudo fique exatamente como imaginou.</p>
                </div>
              </div>

              <div className="bespoke-card timeline-step-card">
                <div className="step-num-badge">05</div>
                <div className="step-body">
                  <h4>Publicação</h4>
                  <p>Seu site vai ao ar e começamos a monitorar o desempenho para garantir que tudo funcione perfeitamente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Call to Action Banner & Direct Contacts */}
      <section id="contato" className="section-padding">
        <div className="container">
          <div className="cta-banner-editorial">
            <div>
              <span className="mono-tag" style={{ color: '#93c5fd' }}>PRÓXIMO PASSO</span>
              <h2 className="cta-banner-h2">Pronto para elevar seu negócio?</h2>
              <p className="cta-banner-p">
                Transforme sua presença digital hoje mesmo com uma solução sob medida para sua necessidade e seu bolso.
              </p>

              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a 
                  href={`mailto:${contactEmail}`} 
                  style={{ color: '#93c5fd', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}
                >
                  <Mail size={18} />
                  <span>{contactEmail}</span>
                </a>

                <a 
                  href={getWhatsAppLink('Olá!')} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#34d399', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}
                >
                  <Phone size={18} />
                  <span>{whatsappDisplay}</span>
                </a>
              </div>
            </div>

            <div className="cta-banner-action-box">
              <a 
                href={getWhatsAppLink('Olá! Gostaria de iniciar o desenvolvimento do meu site.')}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-cta-green"
              >
                <MessageCircle size={20} />
                <span>Falar no WhatsApp</span>
              </a>
              <span className="cta-response-time">Resposta em até 2 horas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-editorial">
        <div className="container footer-flex">
          <div>
            <a href="#" className="brand-logo-wrap">
              <img src={logoImg} alt="ghdev Studio" className="brand-logo-img" style={{ height: '32px' }} />
            </a>
            <div className="footer-copy">
              © 2026 ghdev. Todos os direitos reservados. Sua Presença Digital, Feita à Mão.
            </div>
            <div style={{ marginTop: '8px', fontSize: '12px', color: '#64748b' }}>
              WhatsApp: {whatsappDisplay} | E-mail: {contactEmail}
            </div>
          </div>

          <ul className="footer-nav-list">
            <li>
              <a href={`mailto:${contactEmail}`}>E-mail</a>
            </li>
            <li>
              <a 
                href={getWhatsAppLink('Olá!')} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </footer>

      {/* Fixed WhatsApp Floating Button */}
      <a 
        href={getWhatsAppLink('Olá! Gostaria de conversar com a equipe da ghdev.')}
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-floating-btn"
        aria-label="WhatsApp"
        title="Falar no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
