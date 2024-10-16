import { CountdownTimer } from '@/components/common/counter';
import useDate from '@/hooks/use-date';
import { Paragraph } from '@/components/common/animated-text';

const article = `
**Hey there,**  
You know, the cool thing about having a birthday near the end of the year is that it kind of doubles as a year-in-review, right? It's like, while I’m celebrating another lap around the sun, I also get this built-in opportunity to pause and reflect on everything that’s happened in the past 12 months. And wow, **a lot** has happened this year.

For starters, I landed my **first-ever job** as a web designer and web developer. Honestly, it still feels surreal sometimes—finally stepping into the world I’ve been preparing for all this time, turning code into something real, functional, and creative. I learned more than I ever thought possible and probably debugged more than I care to admit, but it’s been such an incredible experience. 

Oh, and if that wasn't enough, I also **graduated from university** this year! Walking out of those gates for the last time felt like I was closing one chapter while opening an even bigger, more exciting one. A whole new world of possibilities is ahead of me, and the feeling is a mix of relief, excitement, and, yeah, a little fear of the unknown—but that's all part of the journey, right?

Then, there was the unexpected: I **got drunk for the first time ever**. I mean, really drunk. It wasn't planned, but let’s just say I have stories now—memories (and maybe some missing pieces) that’ll stick with me for a long time. And while it was a once-in-a-lifetime kind of night, I think it’s safe to say I’m good with sticking to water for a while.

One of the quieter, more personal milestones this year was in my reading. I actually read **70 more books than I did last year**. Now, that might not sound like a lot to some people, but for me, it was a big deal. It wasn’t just about the number of books but about making time for something I love amidst everything else going on in life. It’s been a great escape and a way to keep learning, imagining, and growing.

And then there was my phone… I probably got **called, like, 48,000 times** this year. Okay, maybe I’m exaggerating a little, but I’m not kidding when I say my phone rang **constantly**. Between work, friends, family, and all the random notifications, it sometimes felt like I barely had a moment to myself. But, honestly, being so connected to everyone, especially during such a transitional time, has been a blessing too. It’s made me appreciate the relationships that have stayed strong and the new ones I’ve formed this year.

So yeah, this year has been a **wild ride**. It hasn’t always been easy, but every step has been worth it, and I’ve grown in ways I couldn’t have imagined. I’m not the same person I was at the start of the year, and that’s the most exciting part. I’m learning, evolving, and figuring things out as I go. And if this year was any indication, there’s even more good stuff waiting on the other side.

Here’s to closing out one chapter and stepping into the next. **2024**, I see you.
`;

const paragraphs = article.trim().split('\n\n');

interface HomePageProps {}

const HomePage = ({}: HomePageProps) => {
  const { isBirthday } = useDate();

  if (isBirthday) {
    return <CountdownTimer />;
  }

  return (
    <div className=''>
      <article className='relative py-64 flex flex-col items-center space-y-[100vh] container'>
        {paragraphs.map((paragraph, i) => {
          return <Paragraph key={i} paragraph={paragraph} />;
        })}
      </article>
    </div>
  );
};

export default HomePage;
