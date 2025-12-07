"use client"

import React, { Fragment, useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import email from "../../public/assets/Email.svg"
import Image from 'next/image';

const Contact = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    companyName: "",
    businessSector: "",
    message: "",
  });
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [waitlistModal, setWaitlistModal] = useState(false);


  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const sendEmail = (e: { preventDefault: any; }) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, message, companyName, businessSector } = userDetails;

    const templateParams = {
      email: email,
      name: name,
      company_name: companyName,
      business_sector: businessSector,
      message: message,
    };

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

    emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    ).then((response) => {
      console.log('Email sent successfully!', response);
      console.log(userDetails)
      setUserDetails({ name: "", email: "", companyName: "", businessSector: "", message: "" })
    }).catch((error) => {
      console.log('Something went wrong...', error);
    }).finally(() => {
      setLoading(false)
      // Show the waitlist modal
      setWaitlistModal(true);
    });
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // You can handle form submission here, including the attachment if it's not null.
    // For example, you can use the FormData API to send the form data to a server.

    setActive(false);

    //send mail
    sendEmail(e);
  };

  useEffect(() => {
    if (userDetails.name && userDetails.email && userDetails.message) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [userDetails.email, userDetails.message, userDetails.name]);

  return (
    <div className='pt-6 pb-20 bg-background'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <main className="flex flex-col lg:flex-row items-center justify-between gap-5 mt-30 md:mt-40 rounded-xs lg:mb-0 mb-16">
          <form
            action=""
            className="max-w-[700px] w-full border border-border bg-midnight rounded-2xl md:p-12 p-6"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <h4 className='text-[calc(2rem+2vw)] text-foreground uppercase font-normal '>Contact</h4>
            <h2 className='text-foreground text-5xl font-light '>Let&apos;s get in touch.</h2>

            <div className="mt-8 py-5">
              <div className='grid md:grid-cols-2 gap-x-3 gap-y-5'>
                <div>
                  <input
                    type="text"
                    className="py-4 px-6 rounded-xs border border-border bg-midnight placeholder:uppercase text-[13px] outline-none text-foreground w-full font-normal"
                    placeholder="Name"
                    name="name"
                    value={userDetails.name}
                    onChange={handleChange}
                  />
                </div>


                <div className=''>
                  <input
                    type="email"
                    className="py-4 px-6 rounded-xs border border-border bg-midnight placeholder:uppercase text-[13px] outline-none text-foreground w-full font-normal"
                    placeholder="Email"
                    name="email"
                    value={userDetails.email}
                    required
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    className="py-4 px-6 rounded-xs border border-border bg-midnight placeholder:uppercase text-[13px] outline-none text-foreground w-full font-normal"
                    placeholder="Company Name"
                    name="companyName"
                    value={userDetails.companyName}
                    onChange={handleChange}
                  />
                </div>


                <div className=''>
                  <input
                    type="text"
                    className="py-4 px-6 rounded-xs border border-border bg-midnight placeholder:uppercase text-[13px] outline-none text-foreground w-full font-normal"
                    placeholder="Business Sector"
                    name="businessSector"
                    value={userDetails.businessSector}
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className='md:col-span-2'>
                  <input
                    type="text"
                    className="py-4 px-6 rounded-xs border border-border bg-midnight placeholder:uppercase text-[13px] outline-none text-foreground w-full font-normal"
                    placeholder="Message"
                    name="message"
                    value={userDetails.message}
                    required
                    onChange={handleChange}
                  />
                </div>

              </div>




            </div>

            <button
              className={`w-full rounded-xs px-4 py-2.5 border ${active ? "opacity-100" : "opacity-40"} text-[13px] tracking-[1.5px] bg-foreground border-border text-black font-medium uppercase cursor-pointer transition duration-150 ease-in-out focus:outline-none hover:bg-black/95 hover:text-foreground`}
              disabled={!active}
              onClick={handleSubmit}
              ref={formRef}
            >
              {loading ? "Sending..." : "Send Message"}

            </button>
          </form>

          <div className="lg:block hidden lg:w-[380px]">
            <div className="w-full flex flex-col justify-center">
              <div className="border border-border bg-midnight p-6  rounded-[20px] flex items-center rounded-20 gap-4 cursor-pointer hover:shadow-sm hover:shadow-foreground/10 transition duration-150 ease-in-out">
                <div className="rounded-full h-[76px] w-[76px] flex items-center justify-center ml-3">
                  <a
                    href="mailto:saftraintelligence@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Image
                      src={email}
                      alt="icon"
                      className="h-[76px] w-[76px] rounded-full"
                    />
                  </a>
                </div>

                <div className="gap-4">
                  <h3 className="font-bold text-[26px] leading-8 tracking-[0.5px]">
                    <a
                      href="mailto:saftraintelligence@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/60"
                    >
                      Email
                    </a>
                  </h3>
                  <p className="text-base text-foreground">
                    <a
                      href="mailto:saftraintelligence@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className=""
                    >
                      Send us a mail
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>

          {waitlistModal && (
            <Dialog open={waitlistModal} as="div" className="relative z-10 focus:outline-none" onClose={() => setWaitlistModal(false)}>
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-midnight/90 backdrop-opacity-10">
                <div className="flex min-h-full items-center justify-center p-4 ">
                  <DialogPanel
                    transition
                    className="w-full max-w-md rounded-xl bg-background/5 p-6 backdrop-blur-3xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                  >
                    <DialogTitle as="h3" className="text-lg font-medium text-foreground text-center tracking-[1px]">
                      Message successful
                    </DialogTitle>
                    <p className="mt-2 text-base text-foreground/50 ">
                      Your message has been sent successfully. We would get back to you soon.
                    </p>
                    <div className="mt-4">
                      <button
                        className="inline-flex items-center gap-2 rounded-md bg-sand/15 tracking-[1px] px-3 py-1.5 text-sm/6 font-semibold text-foreground shadow-inner bg-blue cursor-pointer focus:outline-none hover:bg-blue/80  outline-none"
                        onClick={() => setWaitlistModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </DialogPanel>
                </div>
              </div>
            </Dialog>

          )}
        </main>
      </div>
    </div>

  )
}

export default Contact;