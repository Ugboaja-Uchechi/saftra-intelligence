import React from 'react';
import { Big_Shoulders } from 'next/font/google';
import Image from 'next/image';
import Rfid from "../../public/assets/rfid.jpg"
import { GoDotFill } from 'react-icons/go';

const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

const WhyChooseUs = () => {
  return (
    <>
      <section className='py-12 bg-background'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className={`text-[calc(2rem+2vw)] text-black mt-3 uppercase ${bigShoulders.className}`}>Why Choose Us</h2>
          <div className='bg-blue/10 p-6 rounded-lg mt-6'>
            <div className='flex lg:flex-row items-stretch flex-col gap-10 '>
              <div className='lg:flex-[50%]'>
                <h3 className={`text-3xl ${bigShoulders.className} text-black`}>
                  Built for Africa. Engineered for scale.
                </h3>
                <p className='text-base text-gray-700 mt-2'>
                  Our platform is designed to solve real African operational challenges, unpredictable movement, limited visibility, poor enforcement, fragmented systems, and high losses. We build technologies that thrive in complexity, not break under it. We combine high-accuracy RFID detection with computer-vision intelligence (ANPR, object tracking, behavioural analysis) to deliver identification and insights that no single technology can match on its own.
                </p>
                <p className='text-base text-black my-2'>We focus on measurable ROI:</p>
                <ul className="grid md:grid-cols-2 gap-3.5">
                  <li className='flex items-center gap-2 text-lg text-gray-700'>
                    <GoDotFill className='text-blue w-3 h-3 shrink-0' />
                    <p>lower losses and theft</p></li>
                  <li className='flex items-center gap-2 text-lg text-gray-700'>
                    <GoDotFill className='text-blue w-3 h-3 shrink-0' /><p>reduced delays</p>
                  </li>
                  <li className='flex items-center gap-2 text-lg text-gray-700'>
                    <GoDotFill className='text-blue w-3 h-3 shrink-0' /><p>automated verification</p>
                  </li>
                  <li className='flex items-center gap-2 text-lg text-gray-700'>
                    <GoDotFill className='text-blue w-3 h-3 shrink-0' /><p>improved compliance</p>
                  </li>
                  <li className='flex items-center gap-2 text-lg text-gray-700'>
                    <GoDotFill className='text-blue w-3 h-3 shrink-0' /><p>better planning</p>
                  </li>
                  <li className='flex items-center gap-2 text-lg text-gray-700'>
                    <GoDotFill className='text-blue w-3 h-3 shrink-0' /><p>increased revenue capture</p>
                  </li>
                </ul>
              </div>
              <div className='lg:flex-[40%] flex'>
                <Image src={Rfid} alt='' className='object-cover w-full rounded-md' />
              </div>
            </div>
            <div className="border border-foreground/70 mt-12"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
              <div>
                <h4 className={`text-2xl ${bigShoulders.className} text-black`}>Reliability</h4>
                <p className='text-base text-gray-700 mt-2.5'>
                  Engineered for high-accuracy identification in challenging environments with multiple moving objects, weather conditions, and obstructions.
                </p>
              </div>
              <div>
                <h4 className={`text-2xl ${bigShoulders.className} text-black`}>Fast Deployment, Flexible Integration</h4>
                <p className='text-base text-gray-700 mt-2.5'>
                  Modular hardware and software components that integrate seamlessly with existing systems, ensuring rapid deployment and minimal disruption.
                </p>
              </div>
              <div>
                <h4 className={`text-2xl ${bigShoulders.className} text-black`}>Enterprise-Grade Data Security</h4>
                <p className='text-base text-gray-700 mt-2.5'>
                  Built with robust security protocols to protect sensitive data and ensure compliance with global industry standards.
                </p>
              </div>
              <div>
                <h4 className={`text-2xl ${bigShoulders.className} text-black`}>Real Results, Not Theoretical Gains</h4>
                <p className='text-base text-gray-700 mt-2.5'>
                  Proven track record of reducing losses, improving operational efficiency, and enhancing security across diverse industries.
                </p>
              </div>
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default WhyChooseUs