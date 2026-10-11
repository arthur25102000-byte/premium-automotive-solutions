import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Maximize, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/auto/layout';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { vehicles } from '@/data/vehicles';
import { contact, whatsappLink } from '@/lib/contact';

export const Route = createFileRoute('/estoque/$slug')({
 loader: ({ params }) => { const vehicle = vehicles.find(v => v.slug === params.slug); if (!vehicle) throw notFound(); return vehicle; },
 head: ({ loaderData }) => ({ meta: [
  { title: `${loaderData?.brand ?? 'Veículo'} ${loaderData?.model ?? ''} — AUTO/VF Premium Cars` },
  { name: 'description', content: `Conheça o ${loaderData?.brand ?? 'veículo'} ${loaderData?.model ?? ''}. Estoque demonstrativo AUTO/VF Premium Cars.` },
  { property: 'og:title', content: `${loaderData?.brand ?? 'Veículo'} ${loaderData?.model ?? ''} — AUTO/VF` },
  { property: 'og:description', content: 'Seu próximo movimento, bem conduzido. Veículo ilustrativo da seleção AUTO/VF.' },
  { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
 ] }), component: VehiclePage,
});
function VehiclePage() {
 const v = Route.useLoaderData(); const [zoom, setZoom] = useState(false); const [active, setActive] = useState(0);
 const photos = v.gallery.length ? v.gallery : [v.image]; const photo = photos[Math.min(active, photos.length - 1)];
 const wa = whatsappLink(`Olá, AUTO/VF! Tenho interesse no ${v.brand} ${v.model} ${v.version} ${v.year}.`);
 const specs = [['Marca',v.brand],['Modelo',v.model],['Versão',v.version],['Ano',String(v.year)],['Quilometragem',v.mileage],['Combustível',v.fuel],['Câmbio',v.transmission],['Cor',v.color],['Categoria',v.category]];
 return <Layout><section className="detail-section light-section"><div className="content-width"><Button asChild variant="link" className="text-link"><Link to="/estoque"><ArrowLeft /> Voltar ao estoque</Link></Button><div className="detail-heading"><div><p className="eyebrow">{v.brand}</p><h1>{v.model}</h1><p>{v.version} · {v.year}</p></div><span className="placeholder-label">Veículo demonstrativo</span></div><div className="detail-gallery"><img src={photo} alt={`${v.brand} ${v.model} — foto ${active + 1} de ${photos.length}`} width="1536" height="1024" /><button type="button" className="gallery-zoom" aria-label="Ampliar foto" onClick={() => setZoom(true)}><Maximize /></button></div><div className="gallery-tabs">{photos.length > 1 && <div className="gallery-thumbs" role="group" aria-label="Fotos do veículo">{photos.map((src, i) => <button type="button" key={src + i} aria-label={`Ver foto ${i + 1}`} aria-pressed={i === active} onClick={() => setActive(i)}><img src={src} alt="" /></button>)}</div>}<span>Imagem ilustrativa · fotos reais a substituir</span></div><div className="detail-grid"><div><h2>Ficha <strong>técnica.</strong></h2><p className="placeholder-label">Informações ilustrativas · confirmar com a equipe</p><table><tbody>{specs.map(([name,value]) => <tr key={name}><th scope="row">{name}</th><td>{value}</td></tr>)}</tbody></table></div><aside><p className="eyebrow">Seu próximo movimento</p><h2>{v.price.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0})}</h2><p className="placeholder-label">Valor ilustrativo · a substituir</p><Button asChild className="light-button">{wa ? <a href={wa} target="_blank" rel="noopener"><MessageCircle /> Consultar pelo WhatsApp <ArrowUpRight /></a> : <Link to="/contato"><MessageCircle /> Falar com consultor <ArrowUpRight /></Link>}</Button><p>{contact.phone || 'Telefone de atendimento a definir.'}</p><span className="gold-line" /><p>Sonhe. Dirija. Conquiste.</p></aside></div></div></section><Dialog open={zoom} onOpenChange={setZoom}><DialogContent className="photo-dialog"><DialogTitle>{v.brand} {v.model} — imagem ilustrativa</DialogTitle><img src={photo} alt={`${v.brand} ${v.model} em tamanho ampliado`} width="1536" height="1024" /></DialogContent></Dialog></Layout>;
}