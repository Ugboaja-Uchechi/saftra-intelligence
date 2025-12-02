import React from 'react'
import WareHouse from "../../public/assets/product-warehouse.jpg";
import ProdWare from "../../public/assets/prod-ware.jpg";
import Toll from "../../public/assets/toll.jpg"
import Containers from "../../public/assets/product-container.jpg"
import Image from 'next/image';

import { ShieldCheckIcon, LockClosedIcon, CloudArrowUpIcon, CogIcon, ServerIcon, QueueListIcon } from '@heroicons/react/20/solid';
import { GoDotFill } from 'react-icons/go';

const features = [
  {
    name: 'RFID Hardware Layer',
    description: 'High-performance windshield tags, equipment tags, asset labels, handheld readers, fixed gateways, and ruggedised industrial antennas engineered for accuracy.',
    list: [
      
    ],
    icon: CloudArrowUpIcon,
  },
  {
    name: 'AI Identification Engine',
    description: 'Computer vision + machine learning that validates plate numbers, matches RFID events, detects anomalies, and enriches raw data with intelligence.',
    list: [
      
    ],
    icon: LockClosedIcon,
  },
  {
    name: 'Real-Time Operations Dashboard',
    description: 'Live monitoring of vehicles, assets, movements, checkpoints, user access, alerts, and compliance events',
    list: [
      
    ],
    icon: QueueListIcon,
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
    icon: ShieldCheckIcon,
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
    icon: CogIcon,
  },
  {
    name: 'Analytics & Reporting',
    description: 'Generate audits, operational reports, compliance summaries, movement heatmaps, and performance KPIs.',
    list: [
      
    ],
    icon: ServerIcon,
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
    icon: CogIcon,
  },
]

const Product = () => {
  return (
    <section className='pb-20 pt-40 bg-background'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div>
          <h2 className='text-[calc(1rem+2vw)] text-black mt-3 uppercase text-center'>The RFID + AI Platform Powering Visibility, Automation & Security Across Industries</h2>
          <p className='text-xl text-gray-500 mb-8 text-center max-w-3xl mx-auto mt-3'>A modular, end-to-end system designed for demanding environments, combining hardware, software, AI, and analytics into a unified solution tailored to your needs.</p>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          <div>
            <Image src={WareHouse} alt='' className='max-h-100 h-full object-cover' />
          </div>
          <div>
            <Image src={Containers} alt='' className='max-h-100 h-full object-cover' />
          </div>
          <div>
            <Image src={Toll} alt='' className='max-h-100 h-full object-cover' />
          </div>
          <div>
            <Image src={ProdWare} alt='' className='max-h-100 h-full object-cover' />
          </div>
        </div>

        <div className='my-10'>
          <h3 className='text-3xl text-black'>Platform Overview</h3>

          <div className="mt-12 bg-border p-6 rounded-md">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6 min-h-80">
                  <div className="flow-root rounded-lg bg-background px-6 pb-8 h-full">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-blue/90 p-3 shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-black">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                      <ul className='mt-4'>
                        {feature.list.map((item, index) => (
                          <li key={index} className="text-gray-400 text-sm flex gap-2 items-center">
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