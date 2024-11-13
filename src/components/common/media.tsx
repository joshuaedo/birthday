import Image from '@/components/common/image';
import {
  cn,
  optimizeCloudinaryImage,
  optimizeCloudinaryVideo,
} from '@/lib/utils';
import { useEffect, useState, useCallback } from 'react';
import Video from './video';
import useSound from '@/hooks/use-sound';

interface MediaProps {
  src: string;
  className?: string;
  alt?: string;
}

const Media = ({ src, className, alt }: MediaProps) => {
  const [mediaType, setMediaType] = useState<'image' | 'video' | 'unknown'>(
    'unknown'
  );
  const { isSoundEnabled } = useSound();
  const optimizedVideoSrc = optimizeCloudinaryVideo(src);
  const optimizedImageSrc = optimizeCloudinaryImage(src);

  const getMediaType = useCallback(
    (url: string): 'image' | 'video' | 'unknown' => {
      if (typeof url !== 'string') return 'unknown';

      const extension = url?.split('.')?.pop()?.toLowerCase();

      if (['jpg', 'jpeg', 'png', 'gif'].includes(extension || ''))
        return 'image';
      if (['mp4', 'webm', 'ogg'].includes(extension || '')) return 'video';
      return 'unknown';
    },
    []
  );

  useEffect(() => {
    if (src) {
      const type = getMediaType(src);
      if (type !== mediaType) {
        setMediaType(type);
      }
    }
  }, [src, mediaType, getMediaType]);

  return (
    <div className={cn(`relative`, className)}>
      {mediaType === 'video' ? (
        <Video
          src={optimizedVideoSrc}
          muted={!isSoundEnabled}
          className='rounded-[4px]'
        />
      ) : (
        <Image
          src={optimizedImageSrc}
          alt={alt}
          className={cn('w-full h-full object-cover object-top rounded-[4px]')}
        />
      )}
    </div>
  );
};

export default Media;
