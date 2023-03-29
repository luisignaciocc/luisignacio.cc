import type { Metadata } from "next";
import {
  GitHubIcon,
  YoutubeIcon,
  ArrowIcon,
  TwitterIcon,
} from "components/icons";

export const metadata: Metadata = {
  title: "About",
  description: "Fullstack Developer at 500 Global",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey! soy Ignacio, aunque la mayoría de las personas me conocen como <b>Nacho</b>.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          Actualmente soy <b>Desarrollador de Software en <a target="_blank" rel="noopener noreferrer" href="https://500.co/">500 Global</a></b>, donde construyo herramientas que facilitan a los fundadores alcanzar sus objetivos y hacer crecer sus negocios.
        </p>
        <hr />
        <p>
          Soy apasionado de la tecnología y constantemente curioso acerca del mundo que me rodea. Desde joven, he estado fascinado por la ciencia y la tecnología, y me encantaba aprender cómo funcionaban las cosas. Esta curiosidad finalmente me llevó a seguir una carrera en el desarrollo de software.
        </p>
        <p>
          Tengo un gran amor por construir cosas desde cero, ya sea un pequeño script o una aplicación a gran escala. Hay algo realmente satisfactorio en crear algo nuevo y útil. Es por eso que siempre estoy impaciente por aprender nuevas tecnologías para expandir mis habilidades y construir soluciones innovadoras a problemas complejos. La libertad para crear es una de las cosas que más amo de ser desarrollador.
        </p>
        <p className="mb-8">
          Fuera del ámbito tecnológico, disfruto de una variedad de pasatiempos. Me encanta escuchar música y asistir a conciertos siempre que puedo. Aunque no soy músico, siempre me emociona probar nuevos instrumentos. También disfruto pasar tiempo al aire libre, jugar videojuegos, viajar a nuevos lugares y pasar tiempo de calidad en casa con mi familia y mi querida gata, Caraota (llamada así por la palabra venezolana para frijoles negros).
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
