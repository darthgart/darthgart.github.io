import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
            <section id='about' className=''>
                <div className='p-4 pt-12 md:p-8 md:pt-12'>
                <div className='hidden lg:block'>
                    <h2 className='ml-2 mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                    <span className='text-green-700 '>Sobre</span> Mi
                    </h2>
                </div>
                <div className='flex flex-col-reverse lg:flex-row'>
                    <div className='relative flex grow lg:basis-5/6'>
                    <div className='flex w-full flex-col items-start gap-y-6 overflow-visible rounded-2xl bg-stone-800 p-4 pt-12 shadow-xl shadow-black/30 md:p-8 md:pt-12 lg:pr-28 lg:pt-8'>
                        <p className='prose prose-sm whitespace-pre-line text-stone-400 sm:prose-base'>
                        Soy un entusiasta de la tecnología desde que tengo uso de razón. Como un eterno curioso, disfruto explorando nuevas tendencias, dispositivos y aplicaciones, y siempre
                        estoy emocionado por aprender y compartir todo lo relacionado con el mundo digital y mi carrera profesional. 
                        <br/><br/>
                        Pero mi interés no se limita únicamente a la tecnología, las artes también juegan un papel importante en mi vida. Me encanta explorar diversas formas de expresión 
                        artística, ya sea a través de la pintura, la música o los tatuajes. Además, soy un apasionado de las artes marciales, llevo practicando Taekwondo desde los 4 años. 
                        Actualmente soy Cinturón negro 2º Dan por la RFE de Taewkondo, una disciplina que no solo me ha brindado condecoraciones y habilidades físicas y mentales, sino también 
                        valiosas lecciones como son la perseverancia, el respeto y el autocontrol, estos valores son mi filosofía de vida.
                        <br/><br/>
                        Por otro lado, mi espíritu aventurero me lleva a disfrutar de los deportes de montaña y mar. Salir de ruta con mi MTB por la montaña , disfutar 
                        de un buen día de nieve bajando por una ladera en plena temporada de ski o simplemente estar en contacto con la naturaleza flotando sobre un paddle
                        surf es una fuente de inspiración y bienestar para mí.
                        </p>
                        <ul className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                        <li className='col-span-1 flex items-start gap-x-2'>
                            <i className="fa-regular fa-map"></i>
                            <span className='text-xs font-bold text-white sm:text-sm'>Ubicación: </span>
                            <span className='text-xs text-gray-300 sm:text-sm'>Tarragona, Cataluña</span>
                        </li>
                        <li className='col-span-1 flex items-start gap-x-2'>
                            <i className="fa-regular fa-calendar"></i>
                            <span className='text-xs font-bold text-white sm:text-sm'>Edad: </span>
                            <span className='text-xs text-gray-300 sm:text-sm'>24</span>
                        </li>
                        <li className='col-span-1 flex items-start gap-x-2'>
                            <i className="fa-regular fa-flag"></i>
                            <span className='text-xs font-bold text-white sm:text-sm'>Nacionalidad: </span>
                            <span className='text-xs text-gray-300 sm:text-sm'>Española</span>
                        </li>
                        <li className='col-span-1 flex items-start gap-x-2'>
                            <i className="fa-regular fa-heart"></i>
                            <span className='text-xs font-bold text-white sm:text-sm'>Intereses: </span>
                            <span className='text-xs text-gray-300 sm:text-sm'>Art, TKD, MTB, Snow</span>
                        </li>
                        <li className='col-span-1 flex items-start gap-x-2'>
                            <i className="fa-solid fa-graduation-cap"></i>
                            <span className='text-xs font-bold text-white sm:text-sm'>Estudios: </span>
                            <span className='text-xs text-gray-300 sm:text-sm'>DAM - Vidal i Barraquer</span>
                        </li>
                        <li className='col-span-1 flex items-start gap-x-2'>
                            <i className="fa-regular fa-building"></i>
                            <span className='text-xs font-bold text-white sm:text-sm'>Trabajo: </span>
                            <span className='text-xs text-gray-300 sm:text-sm'>CRM Manager - GOM</span>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className='flex w-full grow items-end gap-x-4 lg:flex-1 lg:basis-1/6'>
                    <div className='mr-auto flex flex-1 lg:hidden'>
                        <h2 className='ml-2 mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                        <span className='text-green-700 '>Sobre</span> Mi
                        </h2>
                    </div>
                    <div className='-my-8 flex w-full flex-1 justify-center self-center lg:-ml-24 lg:block  lg:py-16'>
                        <div className='relative z-20 aspect-square w-32 overflow-hidden rounded-3xl shadow-xl shadow-black/40 lg:w-auto '>
                        <img src="img2.jpg" alt="profile-image" fetchPriority='high' decoding='async' data-nimg='fill' id='prof-img' />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

    )
}
