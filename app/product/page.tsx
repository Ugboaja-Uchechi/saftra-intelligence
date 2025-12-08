import React from 'react'
import WareHouse from "../../public/assets/product-warehouse.jpg";
import ProdWare from "../../public/assets/prod-ware.jpg";
import Toll from "../../public/assets/toll.jpg"
import Containers from "../../public/assets/product-container.jpg"
import Image from 'next/image';
import { ShieldCheckIcon, LockClosedIcon, CloudArrowUpIcon, CogIcon, ServerIcon, QueueListIcon } from '@heroicons/react/20/solid';
import { IoHardwareChip } from "react-icons/io5";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import { FaBrain } from "react-icons/fa6";
import { IoIosApps } from "react-icons/io";
import { SiSimpleanalytics } from "react-icons/si";
import { MdIntegrationInstructions } from "react-icons/md";
import { GoDotFill } from 'react-icons/go';
import { Big_Shoulders } from 'next/font/google';

const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});


const features = [
  {
    name: 'RFID Hardware Layer',
    description: 'High-performance windshield tags, equipment tags, asset labels, handheld readers, fixed gateways, and ruggedised industrial antennas engineered for accuracy.',
    list: [
      
    ],
    icon: IoHardwareChip,
  },
  {
    name: 'AI Identification Engine',
    description: 'Computer vision + machine learning that validates plate numbers, matches RFID events, detects anomalies, and enriches raw data with intelligence.',
    list: [
      
    ],
    icon: GiArtificialIntelligence,
  },
  {
    name: 'Real-Time Operations Dashboard',
    description: 'Live monitoring of vehicles, assets, movements, checkpoints, user access, alerts, and compliance events',
    list: [
      
    ],
    icon: MdSpaceDashboard,
  },
  {
    name: 'Event Intelligence & Automation',
    description: 'Trigger Automatic Rules:',
    list: [
      "Unauthorized equipment movement",
      "Expired permits",
      "Mismatched cargo",
      "Toll violation",
      "Restricted zone breaches",
      "Counterfeit pharmaceuticals"
    ],
    icon: FaBrain,
  },
  {
    name: 'Mobile App (Field Operations)',
    description: 'Equip field officers, security personnel, and supervisors with a real-time operational app for:',
    list: [
      "Verification",
      "Inspections",
      "Enforcements",
      "Asset checks"
    ],
    icon: IoIosApps,
  },
  {
    name: 'Analytics & Reporting',
    description: 'Generate audits, operational reports, compliance summaries, movement heatmaps, and performance KPIs.',
    list: [
      
    ],
    icon: SiSimpleanalytics,
  },
  {
    name: 'Integrations',
    description: 'APIs for connecting with:',
    list: [
      "ERP Systems",
      "Fleet management tools",
      "Warehouse systems",
      "Government databases",
      "Invoice/tolling systems"
    ],
    icon: MdIntegrationInstructions,
  },
]

const Product = () => {
  return (
    <section className='pb-20 pt-30 md:pt-40 bg-background'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div>
          <h2 className={`md:text-[calc(1rem+2vw)] text-lg text-black mt-3 uppercase text-center ${bigShoulders.className}`}>The RFID + AI Platform Powering Visibility, Automation & Security Across Industries</h2>
          <p className='md:text-xl text-[16px] text-gray-500 mb-8 text-center max-w-3xl mx-auto mt-3'>A modular, end-to-end system designed for demanding environments, combining hardware, software, AI, and analytics into a unified solution tailored to your needs.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-1.5">
          <div>
            <Image src={WareHouse} alt='' className='max-h-[150px] md:max-h-100 h-full object-cover' />
          </div>
          <div>
            <Image src={Containers} alt='' className='max-h-[150px] md:max-h-100 h-full object-cover' />
          </div>
          <div>
            <Image src={Toll} alt='' className='max-h-[150px] md:max-h-100 h-full object-cover' />
          </div>
          <div>
            <Image src={ProdWare} alt='' className='max-h-[150px] md:max-h-100 h-full object-cover' />
          </div>
        </div>

        <div className='my-10'>
          <h3 className={`text-3xl text-black ${bigShoulders.className}`}>Platform Overview</h3>

          <div className="mt-10 bg-border p-6 rounded-md">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6 min-h-80">
                  <div className="flow-root rounded-lg bg-background px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-blue/70 p-3 shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className={`mt-8 text-2xl font-medium tracking-wide text-black ${bigShoulders.className}`}>{feature.name}</h3>
                      <p className="mt-5 text-base text-black/90">{feature.description}</p>
                      <ul className='mt-4'>
                        {feature.list.map((item, index) => (
                          <li key={index} className="text-gray-700 text-base font-medium flex gap-2 items-center">
                            <GoDotFill className='text-blue' />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product