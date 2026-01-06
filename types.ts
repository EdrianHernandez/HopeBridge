
export interface Cause {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  raised: number;
  goal: number;
  category: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export type DonationAmount = 10 | 25 | 50 | 100 | number;
