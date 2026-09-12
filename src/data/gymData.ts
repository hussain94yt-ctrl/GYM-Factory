import { ExperienceCard, GalleryItem } from '../types';
import maleAthleteAboutImg from '../assets/images/male_athlete_rear_1789235715826.jpg';

export const BUSINESS_INFO = {
  name: 'Body Factory Gym',
  tagline: 'TRAIN. IMPROVE. REPEAT.',
  shortLocation: 'Latifabad Unit 7, Hyderabad',
  fullAddress: 'Latifabad Unit 7, Hyderabad, Sindh, Pakistan',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14420.021612194383!2d68.3356771554199!3d25.3711354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c710bee1bdcb7%3A0x8a61e659aa216a36!2sBody%20Factory%20Gym!5e0!3m2!1sen!2s!4v1789234150148!5m2!1sen!2s',
  mapsShortLink: 'https://maps.app.goo.gl/sLf93pRrgbzjBzNL9',
  directionsLink:
    'https://www.google.com/maps/dir/?api=1&destination=25.3711354,68.3537016',
  coordinates: {
    lat: 25.3711354,
    lng: 68.3537016,
  },
};

export const NAV_LINKS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'LOCATION', href: '#location' },
  { label: 'CONTACT', href: '#contact' },
];

export const EXPERIENCE_CARDS: ExperienceCard[] = [
  {
    id: 'exp-1',
    number: '01',
    title: 'STRENGTH',
    description: 'Build strength through consistent resistance training.',
    iconName: 'Dumbbell',
  },
  {
    id: 'exp-2',
    number: '02',
    title: 'FITNESS',
    description: 'Work toward better overall physical fitness.',
    iconName: 'Activity',
  },
  {
    id: 'exp-3',
    number: '03',
    title: 'DISCIPLINE',
    description: 'Turn training into a consistent routine.',
    iconName: 'Flame',
  },
  {
    id: 'exp-4',
    number: '04',
    title: 'PROGRESS',
    description: 'Keep improving one workout at a time.',
    iconName: 'TrendingUp',
  },
];

/**
 * Curated high-contrast dark fitness imagery.
 * Structured modularly so actual Body Factory Gym facility photographs
 * can replace these URLs once provided by the business owner.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Heavy Resistance & Free Weights',
    category: 'EQUIPMENT',
    imageUrl:
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'landscape',
    caption: 'Precision dumbbell rack and free weight training zone.',
  },
  {
    id: 'gal-2',
    title: 'Olympic Barbell & Iron Plates',
    category: 'TRAINING',
    imageUrl:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'portrait',
    caption: 'Chalked barbell ready for heavy compound movements.',
  },
  {
    id: 'gal-3',
    title: 'Dedicated Workout Floor',
    category: 'GYM',
    imageUrl:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'landscape',
    caption: 'Focused training arena designed for serious athletic sessions.',
  },
  {
    id: 'gal-4',
    title: 'Grip & Strength Focus',
    category: 'TRAINING',
    imageUrl:
      'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'portrait',
    caption: 'Pure focus and determination on every single rep.',
  },
  {
    id: 'gal-5',
    title: 'Cable & Pulley Stations',
    category: 'EQUIPMENT',
    imageUrl:
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'square',
    caption: 'Heavy selectorized pin-loaded cable machinery.',
  },
  {
    id: 'gal-6',
    title: 'Athletic Conditioning',
    category: 'FITNESS',
    imageUrl:
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'landscape',
    caption: 'Dynamic functional training and conditioning tools.',
  },
  {
    id: 'gal-7',
    title: 'Atmospheric Gym Interior',
    category: 'GYM',
    imageUrl:
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'portrait',
    caption: 'Spacious training floor built for consistency.',
  },
  {
    id: 'gal-8',
    title: 'Targeted Muscular Progression',
    category: 'FITNESS',
    imageUrl:
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'square',
    caption: 'Progressive overload and disciplined form in action.',
  },
];

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=2000&q=85';

export const ABOUT_IMAGE = maleAthleteAboutImg;

export const STATEMENT_IMAGE =
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2400&q=85';
