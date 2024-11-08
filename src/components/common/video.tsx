import { FC, VideoHTMLAttributes } from 'react';

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const Video: FC<VideoProps> = ({
  className,
  src,
  onLoad,
  onError,
  loop = true,
  ...props
}) => {
  return (
    <video
      data-nosnippet
      playsInline
      disablePictureInPicture
      preload='metadata'
      loop={loop}
      muted
      autoPlay
      onLoad={onLoad}
      onError={onError}
      className={`${className} object-cover w-full h-full`}
      {...props} // Spread other video element attributes
    >
      <source src={src} type='video/mp4' />
    </video>
  );
};

export default Video;
