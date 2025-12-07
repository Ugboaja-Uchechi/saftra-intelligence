import React from 'react'
import Link from 'next/link'
import Fleet from "../../public/assets/fleet.jpg"
import WareHouse from "../../public/assets/warehouse.jpg"
import Toll from "../../public/assets/toll.jpg"
import Security from "../../public/assets/security.jpg"
import Pharmaceuticals from "../../public/assets/pharmacy.jpg"
import Construction from "../../public/assets/construction.jpg"
import Image from 'next/image'
import solutions from '@/data/solutions'
import { ArrowUpRightIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Big_Shoulders } from 'next/font/google';

const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});


const verticals = [
  {
    name: "Fleet Management & Logistics",
    subText: "Reliable vehicle identification, live fleet visibility, automated checkpoint logging, cargo authentication, and movement analytics to optimise logistics operations.",
    img: Fleet,
    link: "",
    // icon: TruckIcon,
  },
  {
    name: "Construction & Heavy Equipments",
    subText: "Track heavy machinery, validate operator access, prevent equipment theft, and automate site-level asset movements for improved safety and uptime across construction and industrial sites.",
    img: Construction,
    link: "/",
    // icon: TruckIcon,
  },
  {
    name: "Military & Security",
    subText: "Secure, encrypted RFID for controlled access, vehicle verification, perimeter intelligence, asset movement tracking, and mission-critical situational awareness.",
    img: Security,
    link: "",
    //icon: FaWarehouse,
  },
  {
    name: "Healthcare & Pharmaceuticals",
    subText: "End-to-end visibility of pharmaceuticals, medical equipments, ambulances, and supply chain integrity. Protect against counterfeits and ensure compliance",
    img: Pharmaceuticals,
    link: "",
    //icon: "",
  },
  {
    name: "Smart Cities & Tolling",
    subText: "RFID + AI powering automated tolling, traffic visibility, urban mobility analytics, secure permitting, congestion management, and revenue assurance.",
    img: Toll,
    link: "",
    // icon: "",
  },
  {
    name: "Retail, Warehouse & Supply Chain",
    subText: "Track inventory, automate warehouse flows, monitor pallet and container movements, reduce shrinkage, and maintain real-time data accuracy across the entire supply chain and network.",
    img: WareHouse,
    link: "/",
    // icon: FaWarehouse,
  },

]

const Industries = () => {
  return (
    <section className='py-6 bg-background'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className={`text-[calc(2rem+2vw)] text-black mt-3 uppercase ${bigShoulders.className}`}>
          Industries
        </h2>
        <p className='text-lg text-midnight mb-8'>One platform, endless possibilities tailored to your industry.</p>

        <div className=' bg-border p-6 rounded-lg'>
          <p className='text-lg text-black mb-4 max-w-xl'>Our unified RFID + AI platform adapts to multiple sectors, delivering accurate identification, real-time tracking, automated security, and actionable data intelligence.</p>
          <div className="grid sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
            {verticals.map((vertical, index) => (
              <div key={index} className='border border-white bg-background  rounded-xl'>
                <div className='flex flex-col gap-3 py-8 px-3'>
                  <h2 className={`text-3xl text-blue/85 ${bigShoulders.className}`}>{vertical?.name}</h2>
                  <p className='text-base text-gray-700'>{vertical?.subText}</p>
                  {solutions.map((solution) => (
                    <Link
                      key={solution.slug} href={solution.href}
                      className='text-[0.95rem] cursor-pointer btns h-7'
                    >
                      <span className="text-gray-700 btn-text-one">
                        Let&apos;s work together
                        <ArrowUpRightIcon className='h-4 w-4 ml-1 inline-block' />
                      </span>
                      <span className="text-blue btn-text-two">
                        Let&apos;s work together
                        <ArrowRightIcon className='h-4 w-4 ml-1 inline-block' />
                      </span>

                    </Link>
                  )).slice(index, index + 1)
                  }


                </div>
                <Image src={vertical?.img} alt={vertical?.name} className='w-full h-full sm:max-h-44 max-h-32 object-cover rounded-b-xl' />
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}

export default Industries