"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";

const navigation = {
  solutions: [
    { name: 'Fleet Management & Logistics', href: '#' },
    { name: 'Construction & Heavy Equipment', href: '#' },
    { name: 'Military & Security', href: '#' },
    { name: 'Healthcare & Pharmaceuticals', href: '#' },
    { name: 'Smart Cities & Tolling', href: '#' },
    { name: 'Retail, Warehousing & Supply Chain', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Product', href: '#' },
    { name: 'Contact Us', href: '/contact' },

  ],
  legal: [
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

export default function Footer() {
    const route = useRouter();
    const joinWaitlistNav = () => {
      route.push('/contact');
    }
  return (
    <footer className="bg-midnight" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="grid gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Interested?
            </h3>
            <p className="mt-4 text-base text-gray-300">
              Join our waitlist to get early access and priority onboarding as we roll out.
            </p>
            <div className="mt-4 sm:flex sm:max-w-md">
              <div className="mt-3 rounded-md sm:mt-0 sm:shrink-0 w-full">
                <button
                  type="submit"
                  className="w-full border border-transparent rounded-full py-3 px-4 flex items-center justify-center text-base font-medium text-white bg-blue hover:bg-blue/80 outline-none cursor-pointer transition-colors duration-150 ease-in-out"
                  onClick={joinWaitlistNav}
                >
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">

          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; Saftra Intelligence, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}