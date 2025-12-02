import React from 'react'
import Link from 'next/link'
import Fleet from "../../public/assets/fleet.jpg"
import WareHouse from "../../public/assets/warehouse.jpg"
import Toll from "../../public/assets/toll.jpg"
import Security from "../../public/assets/security.jpg"
import Pharmaceuticals from "../../public/assets/pharmacy.jpg"
import Construction from "../../public/assets/construction.jpg"
import Image from 'next/image'

const verticals = [
  {
    name: "Fleet Management & Logistics",
    subText: "Reliable vehicle identification, live fleet visibility, automated checkpoint logging, cargo authentication, and movement analytics to optimise logistics operations.",
    img: Fleet,
    link: "",
    // icon: TruckIcon,
  },
  {
    name: "Smart Cities & Tolling",
    subText: "RFID + AI powering automated tolling, traffic visibility, urban mobility analytics, secure permitting, congestion management, and revenue assurance.",
    img: Toll,
    link: "",
    // icon: "",
  },
  {
    name: "Military & Security",
    subText: "Secure, encrypted RFID for controlled access, vehicle verification, perimeter intelligence, asset movement tracking, and mission-critical situational awareness.",
    img: Security,
    link: "",
    //icon: FaWarehouse,
  },
  {
    name: "Retail, Warehouse & Supply Chain",
    subText: "Track inventory, automate warehouse flows, monitor pallet and container movements, reduce shrinkage, and maintain real-time data accuracy across the entire supply chain and network.",
    img: WareHouse,
    link: "/",
    // icon: FaWarehouse,
  },
  {
    name: "Construction & Heavy Equipments",
    subText: "Track heavy machinery, validate operator access, prevent equipment theft, and automate site-level asset movements for improved safety and uptime across construction and industrial sites.",
    img: Construction,
    link: "/",
    // icon: TruckIcon,
  },
  {
    name: "Healthcare & Pharmaceuticals",
    subText: "End-to-end visibility of pharmaceuticals, medical equipment, ambulances, and supply chain integrity. Protect against counterfeits, ensure compliance, and maintain chain-of-custody.",
    img: Pharmaceuticals,
    link: "",
    //icon: "",
  },

]

const Industries = () => {
  return (
    <section className='py-6 bg-background'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className='text-[calc(2rem+2vw)] text-black mt-3 uppercase'>
          Industries
        </h2>
        <p className='text-base text-midnight mb-8'>One platform, endless Possibilities tailored to your industry.</p>

        <div className=' bg-border p-6 rounded-lg'>
          <p className='text-lg text-black mb-4 max-w-xl'>Our unified RFID + AI platform adapts to multiple sectors, delivering accurate identification, real-time tracking, automated security, and actionable data intelligence.</p>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4">
            {verticals.map((vertical, index) => (
              <div key={index} className='border border-white bg-background  rounded-xl'>
                <div className='flex flex-col gap-3 py-8 px-3'>
                  <h2 className='text-[calc(.75rem+.75vw)] text-black'>{vertical?.name}</h2>
                  <p className='text-[calc(.35rem+.75vw)] text-gray-700'>{vertical?.subText}</p>
                  <Link
                    href={vertical?.link}
                    target='_blank'
                    className='text-[calc(.25rem+.75vw)] text-gray-700'
                  >
                    Let&apos;s work together
                  </Link>

                </div>
                <Image src={vertical?.img} alt={vertical?.name} className='w-full h-full max-h-44 object-cover rounded-b-xl' />
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  )
}

export default Industries