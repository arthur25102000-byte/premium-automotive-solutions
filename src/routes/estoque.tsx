import { createFileRoute, Outlet } from '@tanstack/react-router';
export const Route = createFileRoute('/estoque')({
 head: () => ({ meta: [{ title: 'Estoque — AUTO/VF Premium Cars' }, { name: 'description', content: 'Uma seleção extraordinária de veículos premium.' }, { property: 'og:title', content: 'Estoque — AUTO/VF Premium Cars' }, { property: 'og:description', content: 'Uma seleção extraordinária de veículos premium.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Outlet
});
