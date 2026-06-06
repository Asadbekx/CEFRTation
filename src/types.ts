export type LanguageLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "0 (Boshlang'ich)";

export interface Example {
  id: string;
  original: string;
  translation: string;
  pronunciationText?: string;
}

export interface Topic {
  id: string;
  title: string;
  level: LanguageLevel;
  description: string;
  rules: string[];
  examples: Example[];
}

export interface Language {
  id: string;
  name: string;
  localName: string;
  flag: string; // Emoji representing the flag
  isFree: boolean;
  priceUZS: number;
  description: string;
  topics: Topic[];
}

export interface Flashcard {
  id: string;
  english: string;
  uzbek: string;
  contextIcon: string; // Emoji
  example: string;
  exampleTr: string;
  isUserAdded?: boolean;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: string;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  appLanguage: "uz" | "en" | "ru";
  theme: "light" | "dark";
  unlockedLanguages: string[]; // array of language IDs
  premiumAllUnlocked: boolean;
}
