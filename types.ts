export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
}

export interface HighlightItem {
  icon: string;
  label: string;
  color: 'lime' | 'cyan' | 'orange' | 'pink';
}

export interface ImageAsset {
  src: string;
  alt: string;
  title?: string;
}
