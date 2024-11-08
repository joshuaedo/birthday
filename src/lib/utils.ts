import { WordData } from '@/types/word';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { years } from './year';

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

const optimizeCloudinaryAudio = (url: string): string => {
  const uploadIndex = url.indexOf('upload/');
  if (uploadIndex === -1) return url;

  const insertPosition = uploadIndex + 7;

  const optimizedUrl =
    url.slice(0, insertPosition) +
    'q_auto,f_auto,fl_attachment/' +
    url.slice(insertPosition);

  return optimizedUrl;
};

const optimizeCloudinaryImage = (url: string): string => {
  // Find the position after "upload/"
  const uploadIndex = url.indexOf('upload/');
  if (uploadIndex === -1) return url;

  const insertPosition = uploadIndex + 7; // "upload/".length = 7

  // Insert optimization parameters
  const optimizedUrl =
    url.slice(0, insertPosition) +
    'q_auto,f_auto,c_scale,w_auto/' +
    url.slice(insertPosition);

  return optimizedUrl;
};

const getYearFromUrl = (url: string) => {
  // Extract the `alt` value from the URL path
  const alt = url.split('/').pop();

  // Find the object in `year` with a matching `alt` value
  const year = years.find((item) => item.alt === alt);

  // Return the `src` if found, otherwise return undefined
  return year;
};

const formatAltText = (alt: string) => {
  return alt
    .split('-') // Split by hyphen
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' '); // Join words with a space
};

export { optimizeCloudinaryAudio, optimizeCloudinaryImage, getYearFromUrl, formatAltText };
