
export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  image?: string;
}

export interface Supplier {
  id: string;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  categories: string[];
  products: string[];
  yearsActive: number;
}

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Industrial Steel Pipes',
    category: 'Construction Materials',
    price: '150.00',
  },
  {
    id: '2',
    name: 'LED Light Fixtures',
    category: 'Electronics',
    price: '85.00',
  },
  {
    id: '3',
    name: 'Safety Helmets',
    category: 'Safety Equipment',
    price: '45.00',
  },
  {
    id: '4',
    name: 'Industrial Pumps',
    category: 'Machinery',
    price: '1200.00',
  },
  {
    id: '5',
    name: 'Copper Wire Cables',
    category: 'Electronics',
    price: '95.00',
  },
  {
    id: '6',
    name: 'Concrete Mixers',
    category: 'Construction Materials',
    price: '2500.00',
  },
  {
    id: '7',
    name: 'Safety Gloves',
    category: 'Safety Equipment',
    price: '25.00',
  },
  {
    id: '8',
    name: 'Hydraulic Jacks',
    category: 'Machinery',
    price: '350.00',
  },
  {
    id: '9',
    name: 'Circuit Breakers',
    category: 'Electronics',
    price: '120.00',
  },
  {
    id: '10',
    name: 'Steel Rebar',
    category: 'Construction Materials',
    price: '75.00',
  },
  {
    id: '11',
    name: 'Industrial Motors',
    category: 'Machinery',
    price: '800.00',
  },
  {
    id: '12',
    name: 'Fire Extinguishers',
    category: 'Safety Equipment',
    price: '180.00',
  },
];

export const sampleSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'Global Steel Solutions',
    location: 'Pittsburgh, PA',
    rating: 4.8,
    reviewCount: 245,
    categories: ['Construction Materials', 'Machinery'],
    products: ['1', '6', '10'],
    yearsActive: 15,
  },
  {
    id: '2',
    name: 'ElectroTech Industries',
    location: 'Austin, TX',
    rating: 4.6,
    reviewCount: 189,
    categories: ['Electronics'],
    products: ['2', '5', '9'],
    yearsActive: 8,
  },
  {
    id: '3',
    name: 'SafeGuard Equipment Co.',
    location: 'Denver, CO',
    rating: 4.9,
    reviewCount: 156,
    categories: ['Safety Equipment'],
    products: ['3', '7', '12'],
    yearsActive: 12,
  },
  {
    id: '4',
    name: 'Industrial Machinery Corp',
    location: 'Detroit, MI',
    rating: 4.7,
    reviewCount: 298,
    categories: ['Machinery'],
    products: ['4', '8', '11'],
    yearsActive: 22,
  },
  {
    id: '5',
    name: 'BuildPro Materials',
    location: 'Phoenix, AZ',
    rating: 4.5,
    reviewCount: 167,
    categories: ['Construction Materials'],
    products: ['1', '6', '10'],
    yearsActive: 18,
  },
  {
    id: '6',
    name: 'TechFlow Electronics',
    location: 'San Jose, CA',
    rating: 4.8,
    reviewCount: 203,
    categories: ['Electronics'],
    products: ['2', '5', '9'],
    yearsActive: 10,
  },
];
