import { useParams, Link } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar.tsx";
import { TagOpen, TagClose } from "../../components/TagsSection.tsx";
import dataProjects from '../../data/dataProjects';
import Techs from "../../components/Techs.tsx";
import { Tooltip } from 'react-tooltip';

export default function Project() {
  const { projectId } = useParams();

  const project = dataProjects.find(p => p.id === projectId);

  if (!project) {
    return <div>Proyecto no encontrado...</div>;
  }

  return (
    <section className="w-full min-h-screen flex flex-col items-center 
    bg-LIGHT-BG-P dark:bg-DARK-BG dark:text-CREMA text-L-T-P">

      <Navbar />

      <article className="mx-0 my-6 w-full h-auto md:h-auto md:w-11/12 md:pt-4 md:pr-4 md:pb-6 md:pl-7 p-2
      bg-LIGHT-BG-P-dark dark:bg-DARK-BG-dark 
        rounded-md border-2 border-DARK-BORDER-light"
      >
        <TagOpen section={`Proyectos["${project.title}"]`} />

        <section className="flex w-full">
          <article className="w-full flex flex-col gap-3 py-2 md:py-2 md:pl-[5vw]">
            <div className="
            w-full
            flex flex-col justify-center items-center
            md:flex-row md:justify-evenly md:items-center gap-2"
            >

              <article className="w-full h-full flex flex-col gap-2 p-2"
              >

                <div className="w-full flex flex-col gap-2">
                  <p className="w-full text-center text-xl border-b-2 border-AMARILLO">{project.title}</p>

                  <section className="w-full flex gap-2">
                    <article className="w-11/12 flex flex-col gap-2 pl-2">
                      <p className="indent-4">{project.description}</p>
                    </article>

                    <article className="w-1/12 flex flex-col items-center gap-2">
                      <a data-tooltip-id="my-tooltip" data-tooltip-content="Github" href={project.linkGithub} target="_blank"><span className="w-9 h-9 icon-[iconoir--github-circle] hover:text-AMARILLO"></span></a>
                      <Tooltip id="my-tooltip" />
                    </article>
                  </section>

                  <section className="w-full flex gap-2 flex-wrap justify-center">
                    {project.techs.map(tech => (
                      <Techs key={tech} tech={tech} />
                    ))}
                  </section>
                </div>
              </article>

            </div>
          </article>

          <article className="min-h-full w-auto my-auto">
            <p className="hidden md:inline-block text-8xl md:text-9xl font-ubuntu font-normal text-AZUL">;</p>
          </article>

        </section>

        <TagClose />
      </article>

    </section>
  );
}
