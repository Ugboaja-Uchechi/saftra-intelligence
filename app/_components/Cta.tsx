"use client";

import React from 'react';
import { Big_Shoulders } from 'next/font/google';
import { useRouter } from 'next/navigation';

const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

const Cta = () => {
  const route = useRouter();
  const joinWaitlistNav = () => {
    route.push('/contact');
  }
  return (
    <section className='py-12 bg-blue/15'>
      <div className='px-4 sm:px-6 max-w-7xl mx-auto'>
        <div className='flex flex-col items-center justify-center text-center gap-6'>
          <div>
            <h2 className={`text-3xl text-black mt-3 uppercase ${bigShoulders.className}`}>Transform the Way You Track, Manage & Secure Assets - Automatically</h2>
            <p className='text-lg text-midnight my-4 mx-auto max-w-2xl'>
              Be among the first to access the most advanced identification and automation platform built for Africa. Join our waitlist today and revolutionize your operations with cutting-edge RFID + AI technology.
            </p>
            <button
              className="whitespace-nowrap inline-flex items-center justify-center px-12 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-blue hover:bg-blue/70 outline-none focus:outline-none cursor-pointer transition-colors duration-150 ease-in-out"
              onClick={joinWaitlistNav}
            >
              Join Waitlist
            </button>
          </div>

        </div>
      </div>


    </section>
  )
}

export default Cta