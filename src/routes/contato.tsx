import { createFileRoute } from '@tanstack/react-router';
import { Layout } from '@/components/auto/layout';
import { Contact, PageIntro, type Interest } from '@/components/auto/sections';

const valid: Interest[] = ['comprar', 'vender', 'servicos'];
export const Route = createFileRoute('/contato')({
 validateSearch: (s: Record<string, unknown>): { interesse?: Interest } => (valid.includes(s['interesse'] as Interest) ? { interesse: s['interesse'] as Interest } : {}),
 head: () => ({ meta: [{ title: 'Contato — AUTO/VF Premium Cars' }, { name: 'description', content: 'Converse com a AUTO/VF sobre seu próximo movimento.' }, { property: 'og:title', content: 'Contato — AUTO/VF Premium Cars' }, { property: 'og:description', content: 'Converse com a AUTO/VF sobre seu próximo movimento.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: ContactPage,
});
function ContactPage() { const { interesse } = Route.useSearch(); return <Layout><PageIntro eyebrow="AUTO/VF Premium Cars" title="Contato" /><Contact full interest={interesse} /></Layout>; }
