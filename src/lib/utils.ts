import { WordData } from '@/types/word';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const parseParagraphToWords = (text: string): WordData[] => {
  const regex = /\*\*(.*?)\*\*/g;
  const words: WordData[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const beforeBold = text.slice(lastIndex, match.index).trim();
    if (beforeBold) {
      beforeBold.split(/\s+/).forEach((word) => {
        words.push({ text: word, bold: false });
      });
    }
    const boldText = match[1].trim();
    if (boldText) {
      boldText.split(/\s+/).forEach((word) => {
        words.push({ text: word, bold: true });
      });
    }
    lastIndex = regex.lastIndex;
  }

  const remaining = text.slice(lastIndex).trim();
  if (remaining) {
    remaining.split(/\s+/).forEach((word) => {
      words.push({ text: word, bold: false });
    });
  }

  return words;
};

export { cn, parseParagraphToWords };
