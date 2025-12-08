import React from 'react'
import WareHouse from "../../public/assets/warehouse.jpg"
import Image from 'next/image';
import { Big_Shoulders } from 'next/font/google';

const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});


//a short into to the product page plus link would have this design
// <div className='bg-midnight rounded-lg p-6'>
//   <h2 className='text-orange'>Problems</h2>
// </div>

const ProblemSolve = () => {
  return (
    <section className='py-6 bg-blue/15'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-stretch lg:flex-row flex-col gap-10">
          <div className='lg:flex-[55%]'>
            <h2 className={`text-[calc(2rem+2vw)] text-black mt-3 uppercase ${bigShoulders.className}`}>Problems We Solve</h2>
            <p className='text-lg text-midnight mb-8'>Solving the Visibility & Reliability Gap Across Critical Industries</p>

            <div className='grid sm:grid-cols-2 gap-4'>
              <div className="block p-4 border border-border rounded-lg shadow-md hover:scale-[1.01] transition transform bg-white">
                <h3 className={`text-xl mb-2 text-black ${bigShoulders.className}`}>
                  Fragmented Manual Process
                </h3>
                <p className='text-base text-gray-500'>
                  Industries still rely on manual tracking, paperwork, and outdated identification methods that slow down operations and increase errors.
                </p>
              </div>
              <div className="block p-4 border border-border rounded-lg shadow-md hover:scale-[1.01] transition transform bg-white">
                <h3 className={`text-xl mb-2 text-black ${bigShoulders.className}`}>
                  Low Visibility in Fast-Moving Environments
                </h3>
                <p className='text-base text-gray-500'>
                  Vehicles, fleets, assets, pharmaceuticals, equipment, and inventory often move across large, dynamic environments with little to no real-time visibility.
                </p>
              </div>
              <div className="block p-4 border border-border rounded-lg shadow-md hover:scale-[1.01] transition transform bg-white">
                <h3 className={`text-xl mb-2 text-black ${bigShoulders.className}`}>
                  Security & Compliance Risks
                </h3>
                <p className='text-base text-gray-500'>
                  Weak identification systems lead to asset theft, safety violations, expired permits, counterfeit pharmaceuticals, and unsecure supply chains.
                </p>
              </div>
              <div className="block p-4 border border-border rounded-lg shadow-md hover:scale-[1.01] transition transform bg-white">
                <h3 className={`text-xl mb-2 text-black ${bigShoulders.className}`}>
                  Inefficient City Infrastructure
                </h3>
                <p className='text-base text-gray-500'>
                  Urban centres suffer from congestion, revenue leakages, and poor enforcement due to unreliable vehicle identification and manual tolling processes.
                </p>
              </div>
              <div className="block p-4 border border-border rounded-lg shadow-md hover:scale-[1.01] transition transform bg-white">
                <h3 className={`text-xl mb-2 text-black ${bigShoulders.className}`}>
                  Costly Downtime & Operational Blind Spots
                </h3>
                <p className='text-base text-gray-500'>
                  Enterprises lose millions yearly due to misplaced assets, missing equipment, untracked fleet activity, and unverified events.
                </p>
              </div>
              <div className="block p-4 border border-border rounded-lg shadow-md hover:scale-[1.01] transition transform bg-white">
                <h3 className={`text-xl mb-2 text-black ${bigShoulders.className}`}>
                  Inaccurate Data & Poor Decision-Making
                </h3>
                <p className='text-base text-gray-500'>
                  Without real-time intelligence, organisations run on assumptions instead of data—leading to inefficiency, risk, and unnecessary costs.
                </p>
              </div>
            </div>
          </div>

          <div className='lg:flex-[33.3333%] flex'>
            <Image src={WareHouse} alt='' className='object-cover w-full rounded-lg' />
          </div>
        </div>

      </div>

    </section>
  )
}

export default ProblemSolve