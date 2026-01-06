
import { Cause, Stat } from './types';

export const CAUSES: Cause[] = [
  {
    id: '1',
    title: 'Clean Water Initiative',
    description: 'Building sustainable solar-powered wells for remote villages in sub-Saharan Africa.',
    imageUrl: 'https://images.unsplash.com/photo-1541810270634-fce54094e19b?q=80&w=800&auto=format&fit=crop',
    raised: 45000,
    goal: 60000,
    category: 'Environment'
  },
  {
    id: '2',
    title: 'Rural Education Fund',
    description: 'Providing tablet computers and offline digital libraries to students in mountainous regions.',
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
    raised: 12000,
    goal: 25000,
    category: 'Education'
  },
  {
    id: '3',
    title: 'Emergency Medical Care',
    description: 'Deploying mobile clinics to provide urgent vaccinations and maternal care in crisis zones.',
    imageUrl: 'https://images.unsplash.com/photo-1579154235602-3c2cbfac3571?q=80&w=800&auto=format&fit=crop',
    raised: 85000,
    goal: 100000,
    category: 'Health'
  }
];

export const IMPACT_STATS: Stat[] = [
  { label: 'Lives Changed', value: '120,000+', icon: '👥' },
  { label: 'Trees Planted', value: '500k', icon: '🌳' },
  { label: 'Wells Built', value: '850', icon: '💧' },
  { label: 'Countries Served', value: '42', icon: '🌎' }
];
