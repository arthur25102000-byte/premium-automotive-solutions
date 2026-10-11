import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/auto/layout";
import { Services, Process, Contact, PageIntro } from "@/components/auto/sections";
export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Serviços — AUTO/VF Premium Cars" },
      {
        name: "description",
        content: "Compra, venda, documentação, seguro e soluções automotivas AUTO/VF.",
      },
      { property: "og:title", content: "Serviços — AUTO/VF Premium Cars" },
      {
        property: "og:description",
        content: "Compra, venda, documentação, seguro e soluções automotivas AUTO/VF.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <Layout>
      <PageIntro eyebrow="AUTO/VF Premium Cars" title="Serviços" />
      <Services />
      <Process />
      <Contact />
    </Layout>
  ),
});
