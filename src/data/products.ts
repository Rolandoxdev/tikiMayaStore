import type { Product } from '../types/product.ts'

export const products: Product[] = [
  {
    id: '1',
    slug: 'atardecer-carmesi',
    name: 'Atardecer Carmesí',
    type: 'Infusión frutal sin cafeína',
    description: 'Una mezcla frutal de fresa, blueberry, manzana, cáscara de naranja y flor de jamaica.',
    caracter: 'Frutal, intensa y de carácter vibrante. Una mezcla para descubrir primero por su aroma, después por su color y finalmente por su sabor.',
    profile: 'Dulce · frutal · intenso color rojo/rubí',
    ingredients: ['Fresa', 'blueberry', 'manzana', 'cáscara de naranja', 'flor de jamaica'],
  },
  {
    id: '2',
    slug: 'bruma-del-altiplano',
    name: 'Bruma del Altiplano',
    type: 'Infusión herbal sin cafeína',
    description: 'Una mezcla herbal fresca con menta, manzanilla y lemon grass.',
    caracter: 'Fresca y herbal, con la presencia de la menta y suaves notas florales de la manzanilla.',
    profile: 'Herbal · fresco · mentolado · notas florales',
    ingredients: ['Menta', 'manzanilla', 'lemon grass'],
  },
  {
    id: '3',
    slug: 'cacao-especiado',
    name: 'Cacao Especiado',
    type: 'Té negro con cafeína',
    description: 'Una mezcla de té negro, nibs de cacao, cardamomo de Cobán, canela y pimienta gorda.',
    caracter: 'El cacao lleva la mezcla al frente, acompañado por notas cálidas de canela y pimienta gorda, con una presencia suave de cardamomo.',
    profile: 'Cacao predominante · notas suaves de cardamomo',
    ingredients: ['Té negro', 'nibs de cacao', 'cardamomo', 'canela', 'pimienta gorda'],
  },
]
