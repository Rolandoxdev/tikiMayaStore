import type { Kit } from '../types/kit.ts'

export const kits: Kit[] = [
  {
    id: '1',
    slug: 'sabores-por-descubrir',
    name: '1. Sabores por descubrir',
    type: 'Kit de entrada',
    description: 'Una primera invitación a descubrir el universo de TikiMaya Store. Elige una de nuestras tres infusiones, prepara tu primera taza y disfruta un nuevo ritual a tu propio ritmo.',
    contents: [
      '1 infusión de 50 g a elegir entre tres variedades.',
      '1 infusor de té con dije decorativo.',
      '1 cuchara decorativa para té.',
      '1 palito de madera para miel.',
      '1 guía práctica de preparación.',
    ],
  },
  {
    id: '2',
    slug: 'ritual-del-altiplano',
    name: '2. Ritual del Altiplano',
    type: 'Kit de experiencia',
    description: 'Una invitación a hacer una pausa y disfrutar el ritual del té. Elige tu infusión favorita y prepárala en una tetera diseñada para acompañar tus momentos de calma.',
        contents: [
      '1 infusión de 50 g a elegir entre tres variedades.',
      '1 tetera de vidrio con infusor incluido | 12 oz.',
      '1 infusor de té con forma de corazón.',
      '1 palito de madera para miel.',
      '1 guía práctica de preparación.',
    ],
  },
  {
    id: '3',
    slug: 'ceremonia-del-bosque',
    name: '3. Ceremonia del Bosque',
    type: 'Kit premium · regalo · compartir',
    description: 'Una experiencia para disfrutar tus infusiones en casa o llevarlas contigo. Descubre dos mezclas a tu elección y disfruta de la versatilidad de una botella de vidrio con infusor integrado, ideal para acompañar distintos momentos del día.',
    contents: [
      '2 infusiones de 50 g a elegir entre tres variedades.',
      '1 botella de vidrio con infusor integrado y correa de transporte, disponible en negro o rosa.',
      '1 infusor de té con forma de corazón.',
      '1 palito de madera para miel.',
      '1 guía práctica de preparación.',
    ],
  },
]
