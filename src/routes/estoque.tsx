import { createFileRoute } from '@tanstack/react-router';
import { Layout } from '@/components/auto/layout';
import { Stock, PageIntro } from '@/components/auto/sections';
export const Route = createFileRoute('/estoque')({
 head: () => ({ meta: [{ title: 'Estoque — AUTO/VF Premium Cars' }, { name: 'description', content: 'Uma seleção extraordinária de veículos premium.' }, { property: 'og:title', content: 'Estoque — AUTO/VF Premium Cars' }, { property: 'og:description', content: 'Uma seleção extraordinária de veículos premium.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: () => <Layout><PageIntro eyebrow="AUTO/VF Premium Cars" title="Estoque" /><Stock full /></Layout>
});
