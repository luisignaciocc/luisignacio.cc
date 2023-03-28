import type { Metadata } from "next";
import {
  GitHubIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
} from "components/icons";

export const metadata: Metadata = {
  title: "About",
  description: "VP of Developer Experience at Vercel.",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I'm Ignacio. Most folks know me as <b>Nacho</b>.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm currently a <b>Software Developer at 500 Global</b>. where I build
          tools that make it easier for founders to achieve their goals and grow
          their businesses.
        </p>
        <hr />
        <p>
          I'm passionate about technology and constantly curious about the world
          around me. From a young age, I've been fascinated by science and
          technology and loved learning how things worked. This curiosity
          eventually led me to pursue a career in software development.
        </p>
        <p>
          I have a great <b>love</b> for building things from scratch, whether
          it's a small script or a large-scale application. There's something
          truly satisfying about creating something new and useful. That's why
          I'm always eager to learn new languages and technologies to expand my
          skill set and build innovative solutions to complex problems. The
          freedom to create is one of the things I love most about being a
          developer.
        </p>
        <p className="mb-8">
          Outside of Tech, I enjoy a variety of hobbies. I love listening to
          music and going to concerts whenever I can. Although I'm not a great
          musician myself, I'm always eager to try playing new instruments. I
          also enjoy spending time outdoors, playing video games, traveling to
          new places, and spending quality time at home with my family and my
          beloved cat, Caraota (named after the Venezuelan word for black
          beans).
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/luisignaciocc"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <TwitterIcon />
              <div className="ml-3">Twitter</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/luisignaciocc"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/@luisignaciocc"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <YoutubeIcon />
              <div className="ml-3">YouTube</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
