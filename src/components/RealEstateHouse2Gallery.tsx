'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

const house2Images = [
  '/images/real-estate /house2/DJI_0132.jpg',
  '/images/real-estate /house2/DJI_0133.jpg',
  '/images/real-estate /house2/DJI_0136.jpg',
  '/images/real-estate /house2/DJI_0145.jpg',
];

export default function RealEstateHouse2Gallery() {
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
            House 2 Gallery
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-gray-400 text-lg"
          >
            Watch the video tour of House 2, then browse our curated photos.
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
            src="https://firebasestorage.googleapis.com/v0/b/vuursocial-media-9aed0.firebasestorage.app/o/h3.mp4?alt=media&token=552230f1-ff4a-4344-9439-bf7f5d48f11b"
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
          {house2Images.map((src, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="relative h-64 rounded-3xl overflow-hidden shadow-xl border border-gray-800"
            >
              <Image
                src={src}
                alt={`House 2 image ${idx + 1}`}
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
