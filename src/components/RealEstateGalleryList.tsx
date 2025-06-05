// File: src/components/RealEstateGalleryList.tsx
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const houses = [
  {
    id: 'house1',
    title: 'House 1',
    description: 'Explore stunning interiors and aerial shots of House 1.',
    thumbnail: '/images/real-estate/house1/DJI_0025.jpg',
  },
  {
    id: 'house2',
    title: 'House 2',
    description: 'Watch the video tour of House 2, then browse our curated photos.',
    // Use one of the actual DJI stills (e.g. DJI_0132) as the card thumbnail:
    thumbnail: '/images/real-estate /house2/DJI_0145.jpg',
  },
  {
    id: 'house3',
    title: 'House 3',
    description: 'Browse elegant photos and drone views of House 3.',
    thumbnail: '/images/real-estate  /house3/DJI_0089.jpg',
  },
];

export default function RealEstateGalleryList() {
  return (
    <>
      <Header />

      <section className="py-24 px-6 bg-gray-900 text-white">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-4xl md:text-5xl lg:text-6xl font-bold
              bg-clip-text text-transparent
              bg-gradient-to-r from-primary to-secondary
            "
          >
            Select a House Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-gray-400 text-lg"
          >
            Click on any house below to view its complete photo and drone gallery.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {houses.map((house) => (
            <Link
              key={house.id}
              href={`/real-estate/gallery/${house.id}`}
              className="group block bg-gray-800/60 backdrop-blur-md border border-gray-700 rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Thumbnail */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="relative h-48"
              >
                <Image
                  src={house.thumbnail}
                  alt={`${house.title} thumbnail`}
                  fill
                  className="object-cover group-hover:brightness-75 transition"
                />
              </motion.div>

              {/* Text Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {house.title}
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                  {house.description}
                </p>
                <button
                  className="
                    inline-block mt-2
                    px-6 py-2
                    bg-gradient-to-r from-primary to-secondary
                    text-black font-semibold uppercase text-sm
                    rounded-full shadow-lg hover:scale-105 transition
                  "
                >
                  View Gallery
                </button>
              </div>
            </Link>
          ))}
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
