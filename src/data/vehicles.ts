import rangeRover from '@/assets/range-rover.webp';
import porsche from '@/assets/porsche.webp';
import mercedes from '@/assets/mercedes.webp';

export const vehicles = [
  { slug: 'range-rover-sport', brand: 'Range Rover', model: 'Sport', version: 'HSE D350', year: 2023, price: 799000, image: rangeRover, fuel: 'Diesel', color: 'Prata', mileage: '28.000 km', transmission: 'Automático', category: 'SUV' },
  { slug: 'porsche-911', brand: 'Porsche', model: '911 Carrera', version: '3.0 biturbo', year: 2022, price: 869000, image: porsche, fuel: 'Gasolina', color: 'Grafite', mileage: '16.000 km', transmission: 'PDK', category: 'Coupé' },
  { slug: 'mercedes-glc', brand: 'Mercedes-Benz', model: 'GLC 300', version: 'AMG Line', year: 2024, price: 459000, image: mercedes, fuel: 'Gasolina', color: 'Branco', mileage: '12.000 km', transmission: 'Automático', category: 'SUV' },
];
export type Vehicle = typeof vehicles[number];
export function filterVehicles(brand: string, year: string, price: string) {
  return vehicles.filter(v => (!brand || v.brand === brand) && (!year || v.year === Number(year)) && (!price || (price === 'under' ? v.price <= 500000 : v.price > 500000)));
}