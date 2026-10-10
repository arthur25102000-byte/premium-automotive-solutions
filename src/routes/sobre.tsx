import { createFileRoute } from '@tanstack/react-router';
import { Layout } from '@/components/auto/layout';
import { About, Process, Contact, PageIntro } from '@/components/auto/sections';
export const Route = createFileRoute('/sobre')({
 head: () => ({ meta: [{ title: 'Sobre — AUTO/VF Premium Cars' }, { name: 'description', content: 'AUTO/VF Premium Cars. Automóveis. Pessoas. Soluções.' }, { property: 'og:title', content: 'Sobre — AUTO/VF Premium Cars' }, { property: 'og:description', content: 'AUTO/VF Premium Cars. Automóveis. Pessoas. Soluções.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: () => <Layout><PageIntro eyebrow="AUTO/VF Premium Cars" title="Sobre" /><About full /><Process /><Contact /></Layout>
});
