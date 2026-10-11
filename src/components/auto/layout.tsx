import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { contact, whatsappLink } from "@/lib/contact";

// cabeçalho: dois links de cada lado do logo centralizado, "Fale conosco" na ponta direita
const navLeft = [
  { label: "Início", to: "/" },
  { label: "Estoque", to: "/estoque" },
] as const;
const navRight = [
  { label: "Venda seu carro", to: "/contato", search: { interesse: "vender" } },
  { label: "Sobre nós", to: "/sobre" },
] as const;
const navigation = [
  ...navLeft,
  ...navRight,
  { label: "Serviços", to: "/servicos" },
  { label: "Contato", to: "/contato" },
] as const;
// home?: mantido para as rotas existentes; o cabeçalho agora é sempre branco e sólido
export function Layout({ children }: { children: ReactNode; home?: boolean }) {
  const [open, setOpen] = useState(false);
  const wa = whatsappLink("Olá, AUTO/VF! Gostaria de falar com um consultor.");
  useEffect(() => {
    document.documentElement.classList.add("js-reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <div className="site-shell">
      <a href="#main" className="skip-link">
        Ir para o conteúdo
      </a>
      <header className="site-header">
        <div className="header-inner">
          <Button
            variant="ghost"
            className="mobile-menu"
            size="icon"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
          <nav aria-label="Menu principal" className="desktop-nav nav-left">
            {navLeft.map((n) => (
              <Link
                key={n.label}
                to={n.to}
                activeProps={{ className: "active" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link to="/" aria-label="AUTO/VF — Início" className="header-logo">
            <Logo variant="wordmark" />
          </Link>
          <div className="nav-right">
            <nav aria-label="Menu secundário" className="desktop-nav">
              {navRight.map((n) => (
                <Link
                  key={n.label}
                  to={n.to}
                  search={"search" in n ? n.search : {}}
                  activeProps={{ className: "active" }}
                  activeOptions={{ exact: true, includeSearch: false }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <Link to="/contato" className="header-contact">
              Fale conosco
            </Link>
          </div>
        </div>
        <nav
          className="mobile-nav"
          id="mobile-nav"
          aria-label="Menu móvel"
          data-open={open}
          inert={!open}
        >
          {navigation.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              search={"search" in n ? n.search : {}}
              activeProps={{ className: "active" }}
              activeOptions={{ exact: true, includeSearch: false }}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      </header>
      <div
        className="nav-scrim"
        data-open={open}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div className="content-width footer-grid">
          <div>
            <Link to="/" aria-label="Voltar ao início">
              <Logo />
            </Link>
            <p>
              Mais que automóveis,
              <br />
              soluções para o seu momento.
            </p>
          </div>
          <div className="footer-links">
            {navigation.slice(1).map((n) => (
              <Link key={n.label} to={n.to} search={"search" in n ? n.search : {}}>
                {n.label}
              </Link>
            ))}
          </div>
          <div className="footer-signature">
            Sonhe.
            <br />
            Dirija.
            <br />
            <strong>Conquiste.</strong>
            <span className="gold-line" />
          </div>
        </div>
        <div className="content-width footer-bottom">
          <span>© 2026 AUTO/VF Premium Cars</span>
          <span>Automóveis. Pessoas. Soluções.</span>
          {contact.instagram && (
            <Button asChild variant="ghost" size="icon">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener"
                aria-label="Instagram da AUTO/VF"
              >
                <Instagram />
              </a>
            </Button>
          )}
        </div>
      </footer>
      <Button asChild variant="outline" className="floating-contact" size="icon">
        {wa ? (
          <a href={wa} target="_blank" rel="noopener" aria-label="Falar pelo WhatsApp">
            <MessageCircle />
          </a>
        ) : (
          <Link to="/contato" aria-label="Falar com um consultor">
            <MessageCircle />
          </Link>
        )}
      </Button>
    </div>
  );
}
