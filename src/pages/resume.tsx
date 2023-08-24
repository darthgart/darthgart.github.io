import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Resume() {
    return (
            <section id='resume' className='p-4 md:p-8'>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8'>
                    <div className='col-span-1'>
                        <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                            <span className='text-green-700'>Est</span>udios
                        </h2>
                        <ul>
                            <li className='relative border-b border-l border-stone-700 py-4 pl-4 last:border-b-0'>
                                <div className='absolute -left-2 top-3 flex items-center space-x-2 md:-left-4'>
                                    <span className='whitespace-nowrap rounded-full border border-green-700 bg-stone-900 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30'>2022 - 2024</span>
                                    <span className='text-xs font-medium text-stone-400'>INS Vidal i Barraquer</span>
                                </div>
                                <div className='prose prose-sm flex flex-col pt-10 prose-ul:list-none'>
                                    <h2 className='font-bold text-stone-200'>CFGS Desarrollo de Aplicaciones Multiplataforma</h2>
                                    <p className='text-stone-400'>
                                        En mi ciudad natal, Tarragona, inicie mi carrera como desarrollador accediendo al Ciclo Formativo de Grado Superior en DAM en el Instituto Vidal
                                        i Barraquer. Aquí fue donde descubrí mi pasión por la programación de aplicaciones escalables, y mi interés por la seguridad detrás de los sistemas
                                        informáticos.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='col-span-1'>
                        <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                            <span className='text-green-700'>Exp</span>eriencia
                        </h2>
                        <ul>
                            <li className='relative border-b border-l border-stone-700 py-4 pl-4 last:border-b-0'>
                                <div className='absolute -left-2 top-3 flex items-center space-x-2 md:-left-4'>
                                    <span className='whitespace-nowrap rounded-full border border-green-700 bg-stone-900 px-2 py-1 text-xs font-bold text-white shadow-xl shadow-black/30'>2023 - ACTUAL</span>
                                    <span className='text-xs font-medium text-stone-400'>Grup Oliva Motor</span>
                                </div>
                                <div className='prose prose-sm flex flex-col pt-10 prose-ul:list-none'>
                                    <h2 className='font-bold text-stone-200'>Manager CRM (Walcu)</h2>
                                    <p className='text-stone-400'>
                                        Durante mi periodo de estudio en DAM accedí a la beca FP DUAL, realizaé mis prácticas como Desarrollador en Grup Oliva Motor, holding empresarial dedicado principalmente al sector
                                        de la automoción, donde tuve la suerte realizar la formación en CRM y optar al puesto de Manager de WALCU.
                                    </p>
                                    <ul>
                                        <li className=" text-stone-400"><strong className="text-stone-200">Frontend:</strong> React/Typescript + Next.js, TailwindCss
                                        </li>
                                        <li className=" text-stone-400"><strong className="text-stone-200">Backend:</strong> MongoDB, Node.js, Python
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

    )
}