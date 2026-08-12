export interface StoryItem {
  id: number;
  number: string;
  title: string;
  text: string;
}

export type StoryItems = readonly StoryItem[];