"use client"

import React from 'react';
import { Fragment } from 'react'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel, Transition } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDownIcon, ChartBarIcon, CursorArrowRippleIcon, ShieldCheckIcon, ArrowPathIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';


const solutions = [
  {
    name: 'Fleet Management & Logistics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Construction & Heavy Equipment',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRippleIcon,
  },
  {
    name: 'Military & Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon
  },
  {
    name: 'Healthcare & Pharmaceuticals',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Smart Cities & Tolling',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Retail, Warehousing & Supply Chain',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]


const Header = () => {
  const route = useRouter();
  const joinWaitlistNav = () => {
    route.push('/contact');
  }

  return (
<header>
  <nav>
    <Popover className="relative">
      {({ close }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 w-[inherit] mt-6 block fixed inset-0 z-50 pointer-events-none">
            <div className="flex justify-between items-center border border-border rounded-b-2xl bg-foreground p-6 md:justify-start md:space-x-10 pointer-events-auto">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/">
                  <span className="sr-only">Home</span>
                </Link>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <PopoverButton className="rounded-md p-2 inline-flex items-center justify-center text-black hover:text-black/50 hover:bg-gray-100 focus:outline-none">
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
              <PopoverGroup as="nav" className="hidden md:flex space-x-10">
                <Popover className="relative">
                  {({ open, close: closeDropdown }) => (
                    <>
                      {/* Backdrop overlay when dropdown is open */}
                      {open && (
                        <div
                          className="fixed inset-0 z-[5] pointer-events-auto"
                          onClick={() => closeDropdown()}
                          aria-hidden="true"
                        />
                      )}

                      <PopoverButton
                        className={`
                      ${open ? 'text-gray-500' : 'text-black'}
                      group inline-flex items-center text-base font-medium hover:text-gray-500 focus:outline-none cursor-pointer relative z-10
                    `}
                      >
                        <span className='cursor-pointer text-base'>Solutions</span>
                        <ChevronDownIcon
                          className={`
                        ${open ? 'text-gray-500' : 'text-black'}
                        ml-2 h-5 w-5 group-hover:text-gray-500 cursor-pointer
                      `}
                          aria-hidden="true"
                        />
                      </PopoverButton>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <PopoverPanel className="absolute z-10 -ml-4 mt-4 transform px-2 w-screen max-w-xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                          <div className="rounded-lg overflow-hidden border-border">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {solutions.map((item) => (
                                <Link
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  onClick={() => closeDropdown()}
                                >
                                  <item.icon className="shrink-0 h-6 w-6 text-blue" aria-hidden="true" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-black">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </PopoverPanel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Link href="/product" className="text-base font-medium text-black hover:text-gray-500">
                  Product
                </Link>
                <Link href="/about-us" className="text-base font-medium text-black hover:text-gray-500">
                  About
                </Link>
                <Link href="/contact" className="text-base font-medium text-black hover:text-gray-500">
                  Contact
                </Link>
              </PopoverGroup>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <p className="text-base font-medium text-black">Interested?</p>
                <button
                  className="ml-4 whitespace-nowrap inline-flex items-center justify-center lg:px-12 lg:py-3 px-2 py-4 border border-transparent rounded-md lg:rounded-full shadow-sm text-base font-medium text-white bg-blue hover:bg-blue/50 hover:text-black outline-none focus:outline-none cursor-pointer transition-colors duration-150 ease-in-out"
                  onClick={joinWaitlistNav}
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <PopoverPanel focus className="fixed top-0 inset-x-0 p-2 z-[60] transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-border max-h-screen overflow-y-auto">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div></div>
                    <div className="-mr-2">
                      <PopoverButton className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-black hover:text-gray-500 hover:bg-background outline-none">
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </PopoverButton>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {solutions.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          onClick={() => close()}
                        >
                          <item.icon className="shrink-0 h-6 w-6 text-blue" aria-hidden="true" />
                          <span className="ml-3 text-base font-medium text-black">{item.name}</span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5 space-y-6">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    <Link 
                      href="/product" 
                      className="text-base font-medium text-black hover:text-gray-500"
                      onClick={() => close()}
                    >
                      Product
                    </Link>
                    <Link 
                      href="/about-us" 
                      className="text-base font-medium text-gray-900 hover:text-gray-500"
                      onClick={() => close()}
                    >
                      About
                    </Link>
                    <Link 
                      href="/contact" 
                      className="text-base font-medium text-gray-900 hover:text-gray-500"
                      onClick={() => close()}
                    >
                      Contact
                    </Link>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-black">Interested?</p>
                    <button
                      className="w-full mt-2 whitespace-nowrap inline-flex items-center justify-center px-12 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue hover:bg-blue/50 hover:text-black outline-none focus:outline-none cursor-pointer transition-colors duration-150 ease-in-out"
                      onClick={() => {
                        joinWaitlistNav();
                        close();
                      }}
                    >
                      Join Waitlist
                    </button>
                  </div>
                </div>
              </div>
            </PopoverPanel>
          </Transition>
        </>
      )}
    </Popover>
  </nav>
</header>
  )
}

export default Header