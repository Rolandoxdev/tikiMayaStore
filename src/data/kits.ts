import type { Kit } from '../types/kit.ts'

export const kits: Kit[] = [
  {
    id: '1',
    slug: 'sabores-por-descubrir',
    name: 'Sabores por descubrir',
    type: 'Kit de entrada',
    description: 'Una primera aproximación al universo de TikiMaya Store: una forma sencilla de descubrir nuevas mezclas y comenzar el ritual del té.',
  },
  {
    id: '2',
    slug: 'ritual-del-altiplano',
    name: 'Ritual del Altiplano',
    type: 'Kit de experiencia',
    description: 'Un kit pensado para convertir la preparación del té en un pequeño ritual: preparar, descubrir y disfrutar cada detalle de la mezcla.',
  },
  {
    id: '3',
    slug: 'ceremonia-del-bosque',
    name: 'Ceremonia del Bosque',
    type: 'Kit premium · regalo · compartir',
    description: 'Una experiencia más completa para regalar, compartir o convertir una taza de té en un momento especial.',
  },
]
