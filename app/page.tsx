"use client";


import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const images = [
  '/assets/image-1.jpg',
  '/assets/image-2.jpg',
  '/assets/image-3.jpg',
  '/assets/image-4.jpg',
  '/assets/image-5.jpg',
  '/assets/image-6.jpg',
]

const navigationLinks = [
  { href: '#', label: 'Services' },
  { href: '#', label: 'Stylists' },
  { href: '#', label: 'Join Our Team' },
  { href: '#', label: 'Contacts' },
]

const Home = () => {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#eaeaec] text-black flex flex-col pb-12 dark:bg-[#2b2b2b] overflow-hidden">

      <header className="bg-white py-6 shadow-sm w-full mb-24">
        <nav className="flex justify-center gap-6 md:gap-16 font-medium text-gray-800 text-[clamp(0.8rem,2vw,1rem)] tracking-wide font-montserrat">
          {navigationLinks.map((link, index) => (
            <Link key={index} href={link.href} className="hover:text-black hover:-translate-y-0.5 transition-transform">{link.label}</Link>
          ))}
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-[95%] mx-auto px-6 gap-10">

        <ThemeToggle />

        <h1 className="text-[clamp(1rem,5vw,5rem)] whitespace-nowrap font-normal text-center leading-normal uppercase text-black dark:text-white font-notable select-none">
          Visuals That Convert <br /> Visitors Into Customers
        </h1>

        <div className="bg-white px-4 min-w-60 rounded-xl border border-gray-300 relative py-5 overflow-hidden">

          <div className="progress-gradient absolute bottom-0 left-0 h-full w-1/2 z-0"></div>

          <div className="flex items-center justify-between w-full font-bold text-xs md:text-sm lg:text-base gap-16 text-white relative z-10">
            <p>Design</p>
            <p>Develop</p>
            <p>Test</p>
          </div>

          <Image
            src="/assets/car.svg"
            alt="car"
            width={80}
            height={40}
            className="absolute -bottom-6 left-0 car-animation z-20 w-16"
          />

        </div>


        <div className="flex gap-3 md:gap-4 w-full h-[300px] md:h-[500px] lg:h-[700px]" onMouseLeave={() => setHoveredIndex(null)}>

          {images.map((image, index) => {
            const isHovered = hoveredIndex === index;
            const isDefaultActive = hoveredIndex === null && index === 0;
            const flexValue = isHovered || isDefaultActive ? 12 : 1;
            const reverseIndex = images.length - index - 1;

            return (
              <div
                key={index}
                className="relative rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-[flex] duration-700 ease-in-out"
                style={{ flex: flexValue + reverseIndex }}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <Image
                  src={image}
                  alt={`image-${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>

      </main>

    </div>
  );
}

export default Home;
