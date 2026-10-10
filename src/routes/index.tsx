import { createFileRoute } from "@tanstack/react-router";
import { Layout } from '@/components/auto/layout';
import { Hero, Stock, About, Services, Process, Contact } from '@/components/auto/sections';
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({ meta: [
    { title: 'AUTO/VF Premium Cars — Boutique de Soluções Automotivas' },
    { name: 'description', content: 'Seu próximo movimento, bem conduzido. Conheça a AUTO/VF Premium Cars: veículos premium, compra, venda e assessoria automotiva.' },
    { property: 'og:title', content: 'AUTO/VF Premium Cars — Seu próximo movimento, bem conduzido.' },
    { property: 'og:description', content: 'Boutique de Soluções Automotivas. Automóveis. Pessoas. Soluções.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
});
function Index() {
  return <Layout home><Hero /><Stock /><About /><Services /><Process /><Contact /></Layout>;
}
