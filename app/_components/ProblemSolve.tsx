import React from 'react'
import WareHouse from "../../public/assets/warehouse.jpg"
import Image from 'next/image'

//a short into to the product page plus link would have this design
// <div className='bg-midnight rounded-lg p-6'>
//   <h2 className='text-orange'>Problems</h2>
// </div>

const ProblemSolve = () => {
  return (
    <section className='py-6 bg-blue/15'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className='text-[calc(2rem+2vw)] text-black mt-3'>Problems We Solve</h2>
        <p className='text-base text-midnight mb-8'>Solving the Visibility & Reliability Gap Across Critical Industries</p>

        <div className="grid grid-cols-2">
          <div>
            <h3>
              Fragmented Manual Process
            </h3>
            <p>
              Industries still rely on manual tracking, paperwork, and outdated identification methods that slow down operations and increase errors.+
            </p>
          </div>

          <div>
            <Image src={WareHouse} alt='' />
          </div>
        </div>
      </div>

    </section>
  )
}

export default ProblemSolve