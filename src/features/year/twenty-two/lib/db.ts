// Define type for a media item
interface MediaItem {
  name: string;
  keyword?: string;
  image?: string;
  video?: string;
}

// Define type for the media object
const media: Record<string, MediaItem> = {
  externalDefense: {
    name: 'external defense',
    keyword: 'GRADUATED',
    image: undefined,
    video:
      'https://res.cloudinary.com/dnw9fplsw/video/upload/v1731525023/birthday.joshuaedo.com/year/twenty-one/external-defense_i3rcp7.mp4',
  },
  internalDefense: {
    name: 'internal defense',
    image:
      'https://res.cloudinary.com/dnw9fplsw/image/upload/v1731525051/birthday.joshuaedo.com/year/twenty-one/internal-defense_lsc7cj.webp',
    video: undefined,
  },
  signOut: {
    name: 'bajohn and i',
    image:
      'https://res.cloudinary.com/dnw9fplsw/image/upload/v1731525048/birthday.joshuaedo.com/year/twenty-one/sign-out_h1giko.webp',
    video: undefined,
  },
  himymScene: {
    name: 'youre all alone ted',
    keyword: 'scene',
    image: undefined,
    video:
      'https://res.cloudinary.com/dnw9fplsw/video/upload/v1731525030/birthday.joshuaedo.com/year/twenty-one/youre-all-alone-ted_r3qgtp.mp4',
  },
  cve514: {
    name: 'uniuyo civil engineering 018 boys',
    image:
      'https://res.cloudinary.com/dnw9fplsw/image/upload/v1731525050/birthday.joshuaedo.com/year/twenty-one/cve514_yebpps.webp',
    video: undefined,
  },
  passport: {
    name: 'passport',
    image:
      'https://res.cloudinary.com/dnw9fplsw/image/upload/v1731525052/birthday.joshuaedo.com/year/twenty-one/passport_k4chnc.webp',
    video: undefined,
  },
};

export { media };
