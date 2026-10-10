import { createFileRoute } from '@tanstack/react-router';
import { Layout } from '@/components/auto/layout';
import { Contact, PageIntro } from '@/components/auto/sections';
export const Route = createFileRoute('/contato')({
 head: () => ({ meta: [{ title: 'Contato — AUTO/VF Premium Cars' }, { name: 'description', content: 'Converse com a AUTO/VF sobre seu próximo movimento.' }, { property: 'og:title', content: 'Contato — AUTO/VF Premium Cars' }, { property: 'og:description', content: 'Converse com a AUTO/VF sobre seu próximo movimento.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: () => <Layout><PageIntro eyebrow="AUTO/VF Premium Cars" title="Contato" /><Contact full /></Layout>
});
