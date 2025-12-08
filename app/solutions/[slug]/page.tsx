// app/solutions/[slug]/page.tsx
import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import solutions from '@/data/solutions';
import { LuMail } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";
import { Big_Shoulders } from 'next/font/google';

const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
});

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; // ← AWAIT params
  const sol = solutions.find((s) => s.slug === slug);
  return {
    title: sol ? `${sol.name} — Solutions` : "Solution not found",
    description: sol ? sol.description : undefined,
  };
}

export default async function SolutionPage({ params }: Props) {

  const { slug } = await params; // ← AWAIT params

  console.log('URL slug:', slug);
  console.log('Available solutions:', solutions.map(s => s.slug));

  const current = solutions.find((s) => s.slug === slug);

  console.log('Found solution:', current);

  if (!current) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-lg md:text-2xl font-bold text-black">Solution not found</h1>
          <p className="mt-2 text-gray-500">Try browsing our other solutions.</p>
          <Link href="/" className="mt-4 inline-block text-blue underline">
            Go home
          </Link>
        </div>
      </div>
    );
  }

  const otherSolutions = solutions.filter((s) => s.slug !== slug);

  return (
    <main className="pt-40 pb-20  bg-background">

        <div className="bg-cover bg-center relative -mt-40 h-screen lg:h-[70vh] bg-no-repeat" style={{ backgroundImage: `url(${current.bgImage.src})` }}>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

          <div className="mb-12 relative z-10">
            <div className="flex flex-col justify-center h-screen lg:h-[70vh] max-w-7xl mx-auto gap-x-4 px-4 pt-16">
              <div>
                <h1 className={`text-2xl md:text-4xl font-bold text-foreground ${bigShoulders.className}`}>{current?.name}</h1>
                <h3 className="text-foreground my-4 text-xl">{current?.headline}</h3>
                <p className="mt-2 text-foreground max-w-2xl text-base">{current?.description}</p>

              </div>
            </div>
          </div>
        </div>
        {/* Hero */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6">


        {/* Page body */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8 lg:py-12">
          <article className="lg:col-span-2">
            <div>
              <div>
                <div>
                  <h2 className={`text-2xl md:text-4xl mb-2 text-black ${bigShoulders.className}`}>Challenges</h2>
                  <h3 className="text-black text-lg md:text-2xl mb-3">{current.challenge?.title}</h3>
                </div>
                <div>
                  <ul className="grid md:grid-cols-2 gap-3.5">
                    {current.challenge?.points.map((point, index) => (
                      <li key={index} className="text-lg text-black flex items-center gap-2">
                        <GoDotFill className='text-blue w-3 h-3 shrink-0' />
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>


            </div>

            <div className="my-10">
              <h2 className={`text-2xl md:text-4xl mb-2 text-black ${bigShoulders.className}`}>
                Solution
              </h2>
              <h3 className="text-black text-lg md:text-2xl">
                {current.solution?.title}
              </h3>
              <p className="text-black text-base my-2.5">{current.solution?.points}</p>
              <Link
                href="/contact"
                className="whitespace-nowrap inline-flex items-center justify-center px-6 p-2.5 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue hover:bg-blue/50 hover:text-black outline-none focus:outline-none cursor-pointer transition-colors duration-150 ease-in-out"
              >
                Contact Us
              </Link>
            </div>

            <div>
              <h2 className={`text-2xl md:text-4xl mb-4 text-black ${bigShoulders.className}`}>
                Core Features
              </h2>

              <div className="grid mt-4  bg-black rounded-lg p-6">
                {current.coreFeatures?.map((feature, index) => (
                  <div key={index} className="border-b border-border py-5 last:border-0">
                    <h3 className="text-blue-300 text-lg md:text-2xl">{feature?.title}</h3>
                    <p className="text-foreground text-base mt-1.5">{feature?.subtext}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid lg:grid-cols-2 gap-4">
              <div>
                <h2 className={`text-2xl md:text-4xl mb-4 text-black ${bigShoulders.className}`}>
                  Use Cases
                </h2>
                <div className="rounded-lg hover:shadow transition transform bg-white p-6">

                  <ul className="list-disc ml-5">
                    {current.useCases?.map((reason, index) => (
                      <li key={index} className="text-lg text-gray-500 mb-2">{reason}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className={`text-2xl md:text-4xl mb-4 text-black ${bigShoulders.className}`}>
                  Why Choose Us
                </h2>
                <div className="rounded-lg hover:shadow transition transform bg-white p-6">

                  <ul className="list-disc ml-5">
                    {current.chooseUs?.map((reason, index) => (
                      <li key={index} className="text-lg text-gray-500 mb-2">{reason}</li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

          </article>

          <aside className="bg-midnight p-6 rounded-lg text-foreground sticky top-24 self-start max-h-[calc(100vh-12rem)] overflow-y-auto">
            <h3 className="text-3xl font-medium mb-4 border-b border-border pb-4">Have additional questions?</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <LuMail />
                <a href="mailto:saftraintelligence@gmail.com" className="hover:border-b hover:border-border">saftraintelligence@gmail.com</a>
              </li>
            </ul>
          </aside>
        </section>

        {/* Other Solutions */}
        <section className="mt-16">
          <div className="flex items-center justify-between">
            <h3 className={`text-2xl md:text-4xl text-black capitalize  ${bigShoulders.className}`}>Explore other solutions</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {otherSolutions.map((s) => (
              <Link
                key={s.slug}
                href={s.href}
                className="block p-6 border border-border rounded-lg hover:shadow hover:scale-[1.01] transition transform bg-white"
              >
                <div className="flex items-start gap-4">
                  <s.icon className="h-6 w-6 text-blue shrink-0" />
                  <div>
                    <p className="font-medium text-black">{s.name}</p>
                    <p className="text-sm text-gray-500 mt-1">{s.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}