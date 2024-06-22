import SectionCard from "../../components/SectionCard.tsx";
import Tooltip from "../../components/tooltip/Tooltip.tsx";
import dataProfile from "../../data/dataProfile.ts";
import { Subtitle, Flag } from "../../components/profile/Subtitle.tsx";
import SocialNetworkIcon from "../../components/SocialNetworkIcon.tsx";
import IconosTechs from "../../components/IconosTechs.tsx";

export default function Home() {
  return (
    <SectionCard sectionTitle="Presentación">
      <article className="w-full flex flex-col justify-center items-center
                          md:flex-row md:justify-evenly md:items-center gap-2">

        <div className="w-48 h-48 md:min-w-80 md:h-80 rounded-full overflow-hidden border-2 border-solid border-AZUL
        bg-gradient-to-b  from-AZUL to-AMARILLO">
          <img className="w-full h-full object-cover object-center" src={dataProfile.profilePicture} alt="Foto de perfil" />
        </div>

        <div className="md:w-full flex flex-col gap-5 md:gap-10">
          <p className="text-center text-lg md:text-4xl text-AZUL dark:text-AMARILLO"
            tabIndex={7}
          >{dataProfile.fullname}
          </p>

          <section className="w-full flex gap-5 flex-wrap justify-center items-center text-base md:text-2xl">
            <Subtitle string={dataProfile.dev} tabIndex={8} />
            <Subtitle string={dataProfile.years} tabIndex={9} />
            <Tooltip text={dataProfile.nationality}>
              <Flag nationality={dataProfile.nationality.toLowerCase()} tabIndex={10} />
            </Tooltip>
          </section>



          <section className="flex flex-wrap gap-0.5 md:gap-4 justify-center items-center">
            {
              Object.entries(dataProfile.linksSocialNetworks).map(([network, link], index) => (
                <Tooltip text={network}>
                  <SocialNetworkIcon key={network} socialNetwork={network} link={link} tabIndex={10 + index} />
                </Tooltip>
              ))
            }
          </section>

          <section className="w-full flex flex-col gap-2 items-center">
            <p
              className="text-LIGHT-AzulOscuro dark:text-AZUL text-base md:text-2xl"
              tabIndex={50}
            >SKILLS</p>
            <article className="flex flex-col items-start gap-4">
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <p
                  className="text-AZUL-dark dark:text-AMARILLO text-md md:text-xl"
                  tabIndex={51}
                >Desarrollo Front-end:</p>

                {dataProfile.skills.frontEnd.map((tech, index) => (
                  <Tooltip text={tech}>
                    <IconosTechs key={tech} tech={tech} tabIndex={51 + index} />
                  </Tooltip>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <p
                  className="text-AZUL-dark dark:text-AMARILLO text-md md:text-xl"
                  tabIndex={100}
                >Base de datos:</p>
                {dataProfile.skills.dataBase.map((tech, index) => (
                  <Tooltip text={tech}>
                    <IconosTechs key={tech} tech={tech} tabIndex={101 + index} />
                  </Tooltip>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <p
                  className="text-AZUL-dark dark:text-AMARILLO text-md md:text-xl"
                  tabIndex={150}
                >Control de versiones:</p>
                {dataProfile.skills.versionControl.map((tech, index) => (
                  <Tooltip text={tech}>
                    <IconosTechs key={tech} tech={tech} tabIndex={151 + index} />
                  </Tooltip>
                ))}
              </div>
            </article>
          </section>

          {
            dataProfile.descript && <p className="text-base md:text-xl text-balance text-center">{dataProfile.descript}</p>
          }

        </div>

      </article>
    </SectionCard>
  )
}
