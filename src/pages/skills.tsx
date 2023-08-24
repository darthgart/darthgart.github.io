import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Skills() {
    return (
            <section id='skills' className='p-4 md:p-8'>
                <h2 className='mb-4 text-2xl font-extrabold tracking-tight text-stone-200 sm:text-3xl'>
                <span className='text-green-700'>Hab</span>ilidades
                </h2>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8'>
                {/* Mobile Version */}
                <div className='grid-cols-[max-content_1fr] place-content-start gap-2 grid sm:hidden'>
                <h3 className='col-start-1 col-end-[span_2] text-xl font-bold text-stone-200'>Frontend</h3>
                <div className='grid grid-flow-col justify-start'>
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">React</span>
                </div>
                <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                </div>
                <div className='grid grid-flow-col justify-start'>
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Typescript</span>
                </div>
                <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                </div>
                <div className='grid grid-flow-col justify-start'>
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Next</span>
                </div>
                <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                </div>
                <h3 className='col-start-1 col-end-[span_2] text-xl font-bold text-stone-200'>Mobile</h3>
                <div className='grid grid-flow-col justify-start'>
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Java</span>
                </div>
                <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                </div>
                <div className='grid grid-flow-col justify-start'>
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Kotlin</span>
                </div>
                <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                </div>
                <div className='grid grid-flow-col justify-start'>
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Flutter</span>
                </div>
                <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                </div>
                <h3 className='col-start-1 col-end-[span_2] text-xl font-bold text-stone-200'>Backend</h3>
                <div className='grid grid-flow-col justify-start'>
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Java</span>
                </div>
                <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                </div>
                <div className='grid grid-flow-col justify-start'>
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Python</span>
                </div>
                <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                </div>
                <div className='grid grid-flow-col justify-start'>
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">C#</span>
                </div>
                <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                </div>
                <div className='grid grid-flow-col justify-start'>
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Node.js</span>
                </div>
                <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                </div>
                {/* <h3 className='col-start-1 col-end-[span_2] text-xl font-bold text-stone-200'>Security</h3>
                <div className='grid grid-flow-col justify-start'>
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">React</span>
                </div>
                <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                </div>
                <div className='grid grid-flow-col justify-start'>
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Typescript</span>
                </div>
                <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                </div>
                <div className='grid grid-flow-col justify-start'>
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Vue</span>
                </div>
                <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                </div>
                <div className='grid grid-flow-col justify-start'>
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Next</span>
                </div>
                <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                </div> */}
                </div>
                
                {/* Desktop Version */}
                <div className='grid-cols-[max-content_1fr] place-content-start gap-2 hidden sm:grid'>
                    <h3 className='col-start-1 col-end-[span_2] text-xl font-bold text-stone-200'>Frontend</h3>
                    <div className="grid grid-flow-col justify-start">
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">React</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    </div>
                    <div className="grid grid-flow-col justify-start">
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Typescript</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    </div>
                    <div className="grid grid-flow-col justify-start">
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Next</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    </div>
                    <h3 className='col-start-1 col-end-[span_2] text-xl font-bold text-stone-200'>Mobile</h3>
                    <div className="grid grid-flow-col justify-start">
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Java</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    </div>
                    <div className="grid grid-flow-col justify-start">
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Kotlin</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    </div>
                    <div className="grid grid-flow-col justify-start">
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Flutter</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    </div>
                </div>
                <div className='grid-cols-[max-content_1fr] place-content-start gap-2 hidden sm:grid'>
                    <h3 className='col-start-1 col-end-[span_2] text-xl font-bold text-stone-200'>Backend</h3>
                    <div className="grid grid-flow-col justify-start">
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Java</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    </div>
                    <div className="grid grid-flow-col justify-start">
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Python</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    </div>
                    <div className="grid grid-flow-col justify-start">
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">C#</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    </div>
                    <div className="grid grid-flow-col justify-start">
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">Node.js</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    </div>
                    {/* <h3 className='col-start-1 col-end-[span_2] text-xl font-bold text-stone-200'>Security</h3>
                    <div className="grid grid-flow-col justify-start">
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">React</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    </div>
                    <div className="grid grid-flow-col justify-start">
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">React</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    </div>
                    <div className="grid grid-flow-col justify-start">
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">React</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    </div>
                    <div className="grid grid-flow-col justify-start">
                    <span className=" whitespace-nowrap text-sm font-medium text-stone-400">React</span>
                    </div>
                    <div className='flex w-full items-center justify-start space-x-0.5'>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-green-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    <span className="flex h-1/3 flex-grow rounded-md bg-stone-700"></span>
                    </div> */}
                </div>
                </div>
            </section>
    )
}
