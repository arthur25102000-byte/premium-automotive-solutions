import rangeRover from '@/assets/range-rover.webp';
import porsche from '@/assets/porsche.webp';
import mercedes from '@/assets/mercedes.webp';

// gallery: fotos do anúncio, a primeira é a capa; acrescentar as fotos reais de cada carro aqui
export const vehicles: { slug: string; brand: string; model: string; version: string; year: number; price: number; image: string; gallery: string[]; fuel: string; color: string; mileage: string; transmission: string; category: string }[] = [
  { slug: 'range-rover-sport', brand: 'Range Rover', model: 'Sport', version: 'HSE D350', year: 2023, price: 799000, image: rangeRover, gallery: [rangeRover], fuel: 'Diesel', color: 'Prata', mileage: '28.000 km', transmission: 'Automático', category: 'SUV' },
  { slug: 'porsche-911', brand: 'Porsche', model: '911 Carrera', version: '3.0 biturbo', year: 2022, price: 869000, image: porsche, gallery: [porsche], fuel: 'Gasolina', color: 'Grafite', mileage: '16.000 km', transmission: 'PDK', category: 'Coupé' },
  { slug: 'mercedes-glc', brand: 'Mercedes-Benz', model: 'GLC 300', version: 'AMG Line', year: 2024, price: 459000, image: mercedes, gallery: [mercedes], fuel: 'Gasolina', color: 'Branco', mileage: '12.000 km', transmission: 'Automático', category: 'SUV' },
];
export type Vehicle = typeof vehicles[number];
export function filterVehicles(brand: string, year: string, price: string) {
  return vehicles.filter(v => (!brand || v.brand === brand) && (!year || v.year === Number(year)) && (!price || (price === 'under' ? v.price <= 500000 : v.price > 500000)));
}