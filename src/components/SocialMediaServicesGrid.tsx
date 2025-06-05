// File: src/components/SocialMediaServicesGrid.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    name: 'Social Content Creation',
    img: '/images/service-content.png',
    description:
      'Crafting high-quality posts, graphics, and copy designed to engage your audience, maintain brand consistency, and drive meaningful interaction.',
  },
  {
    name: 'Community Management',
    img: '/images/service-community.png',
    description:
      'Proactively monitoring and moderating your social channels, responding to comments and messages, and fostering a positive, on-brand community around your business.',
  },
  {
    name: 'Affiliate Program',
    img: '/images/service-tiktok.png',
    description:
      'Building and managing partnerships with influencers and affiliates to extend your reach, drive conversions, and grow revenue through targeted referral incentives.',
  },
  {
    name: 'Boosted Post Strategy',
    img: '/images/service-boosted.png',
    description:
      'Strategically amplifying your top-performing content with targeted ad spend, optimizing reach and ROI through precise audience segmentation.',
  },
  {
    name: 'User-Generated Content',
    img: '/images/service-ugc.png',
    description:
      'Encouraging and curating authentic customer-created media to boost trust, credibility, and organic engagement across your social channels.',
  },
  {
    name: 'Ember AI Analytics',
    img: '/images/service-analytics.png',
    description:
      'Leveraging AI-driven insights to track performance metrics, uncover growth opportunities, and refine your social strategies for data-backed success.',
  },
];

export default function SocialMediaServicesGrid() {
  return (
    <section className="relative py-24 px-4 bg-black">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff5400] to-[#6f3ff5]">
          Our Specialized Services
        </h2>
      </div>

      {/* Card grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((svc, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="
              group relative cursor-pointer
              bg-gray-900/50 backdrop-blur-lg border border-gray-700
              rounded-3xl p-6 min-h-[16rem]
              shadow-lg hover:shadow-[0_0_15px_#ff5400]
              transition-shadow duration-300
              overflow-hidden
            "
          >
            {/*** Front face ***/}
            <div className="flex flex-col items-center justify-center h-full transition-opacity duration-300 group-hover:opacity-0">
              {/* ↑ Increased the circle size from w-16 h-16 → w-24 h-24 */}
              <div
                className="
                  w-24 h-24 mb-4 rounded-full
                  bg-gradient-to-r from-[#ff5400] to-[#6f3ff5]
                  flex items-center justify-center
                "
              >
                {/* ↑ Increased the Image wrapper from w-10 h-10 → w-20 h-20 */}
                <div className="relative w-20 h-20">
                  <Image
                    src={svc.img}
                    alt={svc.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Gradient title */}
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ff5400] to-[#6f3ff5]">
                {svc.name}
              </h3>
            </div>

            {/*** Back face (hover overlay) ***/}
            <div
              className="
                absolute inset-0 flex flex-col justify-center items-center text-center
                bg-gray-800/80 p-6 rounded-3xl
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              "
            >
              <h3 className="text-xl font-semibold text-white mb-2">{svc.name}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {svc.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
