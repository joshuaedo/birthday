import { WordData } from '@/types/word';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const parseParagraphToWords = (text: string): WordData[] => {
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

export const splitTitle = (
  input: string
): {
  title1: string;
  title2: string;
} => {
  const midIndex = Math.floor(input.length / 2);

  // Find the nearest space to the midpoint, so we split at a natural word boundary
  const leftSpaceIndex = input.lastIndexOf(' ', midIndex);
  const rightSpaceIndex = input.indexOf(' ', midIndex);

  // Decide the best split point to avoid breaking words if possible
  const splitIndex = leftSpaceIndex !== -1 ? leftSpaceIndex : rightSpaceIndex;

  if (splitIndex !== -1) {
    const title1 = input.slice(0, splitIndex).trim();
    const title2 = input.slice(splitIndex + 1).trim();
    return { title1, title2 };
  } else {
    // If no space is found, split at the midpoint
    return {
      title1: input.slice(0, midIndex).trim(),
      title2: input.slice(midIndex).trim(),
    };
  }
};

export function truncateString(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + '...';
  }
}

export function getRandomNumber(): number {
  const min = 7;
  const max = 28;
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}
