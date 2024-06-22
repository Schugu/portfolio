
interface TimelineItemProps {
  title: string;
  company: string;
  date: string;
  description: string
  linkDescription?: string;
}

const TimelineItem = ({ title, company, date, description, linkDescription }: TimelineItemProps) => {
  return (
    <section className="ml-7 md:ml-0 relative border-s 
    border-AZUL-dark 
    dark:border-AMARILLO-dark">

      <div className="mb-16 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 -start-3 ring-4 rounded-full
        bg-blue-100 ring-AZUL-dark 
        dark:ring-AMARILLO-dark dark:bg-AMARILLO-light">

          <svg className="w-2.5 h-2.5 text-AZUL dark:text-AZUL " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>

        <section className="w-full flex flex-col md:flex-row md:justify-start gap-4 md:gap-14">
          <article className="w-full md:w-4/12">
            <p className="flex justify-between text-lg font-semibold 
            text-AZUL-dark dark:text-AZUL">
              {title}
            </p>
            <p className="text-base font-medium text-gray-600 dark:text-white">{company}</p>
            <time className="text-sm font-normal leading-none text-AZUL dark:text-CREMA">{date}</time>

          </article>
          <article className="w-full md:w-6/12 flex flex-col gap-2">
            <p className="w-full text-balance text-base font-normal text-AZUL-dark dark:text-CREMA">{description}</p>
            {
              linkDescription &&
              <a href={linkDescription} className="w-fit text-xl hover:border-b-2 transition-colors duration-100 ease-in-out
              dark:text-AMARILLO dark:hover:border-AMARILLO 
              text-AZUL hover:border-AZUL 
              ">
                Ver más
              </a>
            }
          </article>
        </section>
      </div>

    </section>
  );
};

export default TimelineItem;