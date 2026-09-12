export type GalleryCategory = 'ALL' | 'GYM' | 'TRAINING' | 'EQUIPMENT' | 'FITNESS';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'GYM' | 'TRAINING' | 'EQUIPMENT' | 'FITNESS';
  imageUrl: string;
  aspectRatio: 'landscape' | 'portrait' | 'square';
  caption: string;
}

export interface ExperienceCard {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'Dumbbell' | 'Activity' | 'Flame' | 'TrendingUp';
}

export interface InquiryFormData {
  fullName: string;
  phoneNumber: string;
  message: string;
}
