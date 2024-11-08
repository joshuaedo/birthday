import { forwardRef, VideoHTMLAttributes } from 'react';

export interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  className?: string;
}

const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ className, src, loop = true, ...props }, ref) => {
    return (
      <video
        ref={ref} 
        data-nosnippet
        playsInline
        disablePictureInPicture
        preload='metadata'
        loop={loop}
        muted
        autoPlay
        className={`${className} object-cover w-full h-full`}
        {...props}
      >
        <source src={src} type='video/mp4' />
      </video>
    );
  }
);

Video.displayName = 'Video';

export default Video;
