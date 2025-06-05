// File: src/components/RealEstateGalleryCTA.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RealEstateGalleryCTA() {
  return (
    <section className="py-24 px-6 bg-gray-900 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-4xl md:text-5xl font-bold 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-primary to-secondary 
            mb-4
          "
        >
          Explore Our Gallery
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-300 text-lg mb-8"
        >
          Browse a showcase of our best real estate photography, aerial drone shots, 
          and interactive walkthroughs—crafted to elevate your property listings.
        </motion.p>

        {/* Button */}
        <Link href="/real-estate/gallery" passHref>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="
              inline-block 
              bg-gradient-to-r from-primary to-secondary 
              text-black font-semibold uppercase tracking-wide 
              py-3 px-8 rounded-full 
              hover:from-secondary hover:to-primary 
              transition duration-200
            "
          >
            View Gallery
          </motion.a>
        </Link>
      </div>
    </section>
  );
}
