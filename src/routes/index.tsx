import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/auto/layout";
import { Intro } from "@/components/auto/intro";
import { Hero, Stock, Services, Process, Contact, SellBand } from "@/components/auto/sections";
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AUTO/VF Premium Cars — Boutique de Soluções Automotivas" },
      {
        name: "description",
        content:
          "Seu próximo movimento, bem conduzido. Conheça a AUTO/VF Premium Cars: veículos premium, compra, venda e assessoria automotiva.",
      },
      {
        property: "og:title",
        content: "AUTO/VF Premium Cars — Seu próximo movimento, bem conduzido.",
      },
      {
        property: "og:description",
        content: "Boutique de Soluções Automotivas. Automóveis. Pessoas. Soluções.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
function Index() {
  return (
    <Layout home>
      <Intro />
      <Hero />
      <Stock />
      <SellBand />
      <Services />
      <Process />
      <Contact />
    </Layout>
  );
}
