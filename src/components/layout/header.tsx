import {
  SiLinkedin as LinkedinIcon,
  SiGithub as GithubIcon,
  SiX as TwitterIcon,
  SiYoutube as YoutubeIcon,
} from '@icons-pack/react-simple-icons';
import { creator, images } from '@/config/site';
import useTextReveal from '@/hooks/use-text-reveal';
import useMediaQuery from '@/hooks/use-media-query';

const Header = () => {
  useTextReveal();
  const { lg } = useMediaQuery();

  return (
    <nav className='absolute z-[4] flex h-[11vh] w-screen items-center justify-between bg-opacity-50 p-7 text-lg text-reveal'>
      <div className='flex'>
        <div className='mr-[12vh] flex items-center font-medium md:mr-[14vh]'>
          <a href='/'>{creator.name}</a>
        </div>
      </div>
      <div className='flex ml-auto space-x-10'>
        <a href={creator.website} target='_blank' rel='noopener noreferrer'>
          <img
            src={images[1]}
            alt={`${creator.name}'s logo`}
            width={25}
            height={25}
          />
        </a>
        {lg && (
          <>
            <a href={creator.x} target='_blank' rel='noopener noreferrer'>
              <TwitterIcon />
            </a>
            <a href={creator.github} target='_blank' rel='noopener noreferrer'>
              <GithubIcon />
            </a>
            <a
              href={creator.linkedin}
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedinIcon />
            </a>
            <a href={creator.youtube} target='_blank' rel='noopener noreferrer'>
              <YoutubeIcon />
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
