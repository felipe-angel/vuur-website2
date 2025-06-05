'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

const house1Images = [
  '/images/real-estate/house1/_DSC2099-HDR.jpg',
  '/images/real-estate/house1/_DSC2105-HDR.jpg',
  '/images/real-estate/house1/_DSC2111-HDR.jpg',
  '/images/real-estate/house1/_DSC2118.jpg',
  '/images/real-estate/house1/_DSC2129-HDR.jpg',
  '/images/real-estate/house1/_DSC2135-HDR.jpg',
  '/images/real-estate/house1/_DSC2138-HDR.jpg',
  '/images/real-estate/house1/_DSC2141-HDR-2.jpg',
  '/images/real-estate/house1/_DSC2141-HDR.jpg',
  '/images/real-estate/house1/_DSC2156-HDR.jpg',
  '/images/real-estate/house1/_DSC2159-HDR.jpg',
  '/images/real-estate/house1/_DSC2165-HDR.jpg',
  '/images/real-estate/house1/_DSC2168-HDR.jpg',
  '/images/real-estate/house1/_DSC2174-HDR.jpg',
  '/images/real-estate/house1/_DSC2186-HDR.jpg',
  '/images/real-estate/house1/DJI_0025.jpg',
  '/images/real-estate/house1/DJI_0031.jpg',
  '/images/real-estate/house1/DJI_0034.jpg',
  '/images/real-estate/house1/DJI_0059.jpg',
  '/images/real-estate/house1/DJI_0062.jpg',
  '/images/real-estate/house1/DJI_0063.jpg',
  '/images/real-estate/house1/DJI_0066.jpg',
  '/images/real-estate/house1/DJI_0080.jpg',
  '/images/real-estate/house1/DJI_0083.jpg',
  '/images/real-estate/house1/DJI_0088.jpg',
];

export default function RealEstateHouse1Gallery() {
  return (
    <>
      <Header />

      <section className="py-24 px-6 bg-gray-900 text-white">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-4xl md:text-5xl lg:text-6xl font-bold
              bg-clip-text text-transparent
              bg-gradient-to-r from-primary to-secondary
            "
          >
            House 1 Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-gray-400 text-lg"
          >
            Watch the video tour of House 1, then browse our curated photos.
          </motion.p>
        </div>

        {/* Video Section (large, up front) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-16 overflow-hidden rounded-3xl shadow-xl"
        >
          <video
            src="https://firebasestorage.googleapis.com/v0/b/vuursocial-media-9aed0.firebasestorage.app/o/h1v2.mp4?alt=media&token=f92d8046-ea93-4369-a72f-76dd478dd024"
            controls
            className="w-full h-96 object-cover rounded-3xl bg-black"
          />
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {house1Images.map((src, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="relative h-64 rounded-3xl overflow-hidden shadow-xl border border-gray-800"
            >
              <Image
                src={src}
                alt={`House 1 image ${idx + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
