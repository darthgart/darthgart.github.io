import { Inter } from 'next/font/google';
import About from './about';
import Footer from './footer';
import Hero from './hero';
import Resume from './resume';
import Skills from './skills';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex min-h-screen w-screen justify-center bg-striped-background bg-cover bg-no-repeat p-0 sm:p-8'>
      <div className='flex min-h-full w-full max-w-screen-xl grow flex-col items-start overflow-hidden border border-stone-900 bg-stone-900 shadow-strong sm:rounded-3xl animate-page-in'>
        <div className='flex w-full items-center justify-between p-4 md:p-8'>
          <a className='inline-flex items-center rounded-md text-xl text-white focus:outline-none focus:ring-2 focus:ring-green-600 sm:text-3xl' href='/'>
            <span>DARTH</span>
            <span className='font-bold mr-1'>GART </span>
            <span className='font-bold text-green-700 '>DEV</span>
          </a>
        </div>
        <div className='w-full grow pb-6'>
          <Hero/>
          <About/>
          <Skills/>
          <Resume/>
          {/* <Contact/> */}
        </div>
        <Footer/>
      </div>
    </div>
  )
}
