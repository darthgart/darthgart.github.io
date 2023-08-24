import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

declare global {
    interface Window {
        my_modal_5: HTMLDialogElement;
    }
}

export default function Hero() {
    const openModal = () => {
        window.my_modal_5.showModal();
    };
    return (
            <section id='hero' className=''>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='relative col-span-1 h-full min-h-[200px] w-full overflow-hidden shadow-xl shadow-black/40  sm:rounded-r-3xl'>
                    <img className='object-cover' alt='Edgar-Image' decoding='async' sizes='full' src='img1.jpg' />
                </div>
                <div className='relative col-span-1 sm:-ml-4 sm:mr-4 sm:py-6 md:-ml-8 md:mr-8 md:py-12'>
                    <div className='z-20 flex w-full flex-col items-start overflow-visible bg-stone-800 px-4 py-8 shadow-xl shadow-black/30 sm:rounded-2xl sm:p-8 lg:p-12'>
                    <div className='relative mb-4 flex flex-row  flex-wrap items-center'>
                        <p className='whitespace-nowrap text-xs font-bold text-stone-300 lg:text-sm'>
                        &lt;
                        <span className='font-bold text-green-600'>code</span>
                        &gt;
                        <span className='font-medium text-stone-400'>Hello World !</span>
                        &lt;/
                        <span className='font-bold text-green-600'>code</span>
                        &gt;
                        </p>
                    </div>
                    <div className='mb-4 flex w-full flex-wrap items-center gap-y-2'>
                        <h1 className='mr-4 w-max text-3xl font-black text-white'> Edgar Sanchez</h1>
                        <div className='flex gap-x-6 sm:gap-x-3'>
                        <a href="https://github.com/darthgart" className="btn btn-ghost btn-square btn-lg normal-case" aria-label='Github'>
                            <i className="fa-brands fa-github fa-xl align-baseline"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/edgar-sanchez-gimenez-365739234/" className="btn btn-ghost btn-square btn-lg normal-case" aria-label='LinkedIn'>
                            <i className="fa-brands fa-linkedin fa-xl"></i>
                        </a>
                        <a href="https://www.instagram.com/edsagi_99/" className="btn btn-ghost btn-square btn-lg normal-case" aria-label='Instagram'>
                            <i className="fa-brands fa-instagram fa-xl"></i>
                        </a>
                        <a href="https://twitter.com/darthgart" className="btn btn-ghost btn-square btn-lg normal-case" aria-label='Twitter'>
                            <i className="fa-brands fa-twitter fa-xl"></i>
                        </a>
                        </div>
                        <p className='prose mb-4 text-stone-400'>
                        Soy Técnico Superior en <strong className='text-stone-300'>Desarrollo de Aplicaciones Multiplataforma (DAM)</strong>
                        , actualmente trabajo como <strong className='text-stone-300'>Manager de CRM</strong> en una importante empresa
                        automobilística en Tarragona, España.
                        </p>
                        <p className='prose mb-4 text-stone-400'>
                        En mis ratos libres puedes encontrarme entrenando <strong className='text-stone-300'>taekwondo</strong>
                        , realizando <strong className='text-stone-300'>tatuajes</strong> o simplemente disfrutando del arie libre de la montaña,
                        explorando nuevas trialeras para ir en <strong className='text-stone-300'>MTB</strong>.
                        </p>
                        <div className='flex space-x-2'>
                        
                        <button className="flex rounded-full border-2  bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2
                                        focus:ring-offset-2 focus:ring-offset-stone-800 border-green-800 focus:ring-green-800" onClick={()=>window.my_modal_5.showModal()}>Contacto</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <form method="dialog" className="modal-box bg-stone-800 text-justify">
                                <h3 className="font-bold text-xl text-center mx-1 my-1">Hola!</h3>
                                <p className="py-4">Puedes contactar conmigo en redes sociales preguntandome cualquier duda, o bien puedes enviarme un correo clicando en el siguiente link
                                y explicandome que es lo que necesitas. <br/>¡En cuanto lea el mensaje trataré de contrestar lo antes posible!
                                </p>
                                <div className="text-center sm:text-xs">
                                    <a className="btn btn-outline btn-success text-sm sm:text-md md:text-xl lg:text-2xl" href="mailto:darthgar.dev@gmail.com">
                                    darthgar.dev@gmail.com
                                    </a>
                                </div>
                                <div className="modal-action">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-success">Cerrar</button>
                                </div>
                            </form>
                        </dialog>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
    )
}
