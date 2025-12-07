import React from 'react';
import { GoDotFill } from 'react-icons/go';
import { Big_Shoulders } from 'next/font/google';

const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});


const About = () => {
  return (
    <section className='pb-20 pt-30 md:pt-40 bg-background'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-start">
          <div>
            <p className='uppercase text-midnight text-sm'>
              Our Mission, Vission & Values
            </p>
            <h2 className={`text-[calc(2rem+2vw)]  text-black uppercase ${bigShoulders.className}`}>
              What Drives Us
            </h2>
            <p className={`text-gray-500 text-lg `}><span className={`text-blue text-2xl ${bigShoulders.className}`}>Saftra Intelligence</span>  is an African technology company pioneering AI-powered RFID and IoT systems for real-time tracking, automation, and intelligent decision-making across key industries.</p>
          </div>

          <div className='lg:mt-0 mt-6'>
            <div className="flex items-start gap-3">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none"><path fill="#0369ea" d="M21.439 8.44a1.503 1.503 0 0 1 2.122 0l7.939 7.938A5.089 5.089 0 0 1 33 20a5.09 5.09 0 0 1-1.5 3.623l-7.939 7.938A1.493 1.493 0 0 1 22.5 32c-.386 0-.77-.146-1.061-.439a1.503 1.503 0 0 1 0-2.122l7.939-7.939H12v9a1.5 1.5 0 1 1-3 0v-21a1.5 1.5 0 0 1 3 0v9h17.378l-7.94-7.938a1.503 1.503 0 0 1 0-2.123Z"/></svg>
              </div>
              <div>
                <h3 className={`text-3xl text-black ${bigShoulders.className}`}>
                  Our Mission
                </h3>
                <p className='text-gray-500 text-lg mt-2'>
                  To deliver trusted, intelligent, and scalable RFID + AI systems that transform how organisations track vehicles, assets, equipment, pharmaceuticals, and city mobility.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 my-12">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none"><path fill="#0369ea" d="M21.439 8.44a1.503 1.503 0 0 1 2.122 0l7.939 7.938A5.089 5.089 0 0 1 33 20a5.09 5.09 0 0 1-1.5 3.623l-7.939 7.938A1.493 1.493 0 0 1 22.5 32c-.386 0-.77-.146-1.061-.439a1.503 1.503 0 0 1 0-2.122l7.939-7.939H12v9a1.5 1.5 0 1 1-3 0v-21a1.5 1.5 0 0 1 3 0v9h17.378l-7.94-7.938a1.503 1.503 0 0 1 0-2.123Z"/></svg>
              </div>
              <div>
                <h3 className={`text-3xl text-black ${bigShoulders.className}`}>
                  Our Vision
                </h3>
                <p className='text-gray-500 text-lg mt-2'>
                  A continent where movement is transparent, supply chains are secure, and infrastructure operates with real-time intelligence.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 ">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none"><path fill="#0369ea" d="M21.439 8.44a1.503 1.503 0 0 1 2.122 0l7.939 7.938A5.089 5.089 0 0 1 33 20a5.09 5.09 0 0 1-1.5 3.623l-7.939 7.938A1.493 1.493 0 0 1 22.5 32c-.386 0-.77-.146-1.061-.439a1.503 1.503 0 0 1 0-2.122l7.939-7.939H12v9a1.5 1.5 0 1 1-3 0v-21a1.5 1.5 0 0 1 3 0v9h17.378l-7.94-7.938a1.503 1.503 0 0 1 0-2.123Z"/></svg>
              </div>
              <div>
                <h3 className={`text-3xl text-black ${bigShoulders.className}`}>
                  Values
                </h3>
                <ul className='flex flex-col mt-2 gap-4'>
                  <li className='flex items-center gap-2 text-lg text-gray-500'>
                    <GoDotFill className='text-blue w-3 h-3 shrink-0' />
                    <p>Security: Data protection and encryption at every layer.</p>
                  </li>
                  <li className='flex items-center gap-2 text-lg text-gray-500'>
                    <GoDotFill className='text-blue w-3 h-3 shrink-0' />
                    <p>Reliability: Works in tough weather, heavy traffic, dust, heat, and high-volume environments.</p>
                  </li>
                  <li className='flex items-center gap-2 text-lg text-gray-500'>
                    <GoDotFill className='text-blue w-3 h-3 shrink-0' />
                    <p>Accuracy: Zero compromises in identification.</p>
                  </li>
                  <li className='flex items-center gap-2 text-lg text-gray-500'>
                    <GoDotFill className='text-blue w-3 h-3 shrink-0' />
                    <p>Scalability: Built for nations and enterprise-level operations.</p>
                  </li>
                  <li className='flex items-center gap-2 text-lg text-gray-500'>
                    <GoDotFill className='text-blue w-3 h-3 shrink-0' />
                    <p>Impact: Solving real, systemic challenges in fast-growing cities and industries.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>


    </section>
  )
}

export default About;