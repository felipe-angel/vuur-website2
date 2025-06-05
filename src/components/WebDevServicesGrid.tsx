// File: src/components/WebDevServicesGrid.tsx
'use client';

import { Code, Layout, ShoppingCart, Database, Zap, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    name: 'UI/UX Design',
    icon: <Layout size={48} />,
    description:
      'Craft intuitive user interfaces and seamless user experiences—wireframes, mockups, prototypes, and user testing to ensure your site resonates with real users.',
  },
  {
    name: 'Responsive Development',
    icon: <Code size={48} />,
    description:
      'Build fully responsive WordPress sites using modern front-end techniques (HTML5, CSS3, JavaScript) so your site looks and performs flawlessly on any device.',
  },
  {
    name: 'E-commerce Solutions',
    icon: <ShoppingCart size={48} />,
    description:
      'Implement scalable online stores with WooCommerce or Shopify headless integrations—secure checkout, inventory management, and conversion-focused UX.',
  },
  {
    name: 'CMS Integration',
    icon: <Database size={48} />,
    description:
      'Customize WordPress end-to-end—themes, plugins, custom post types, ACF—so you can update content without touching code.',
  },
  {
    name: 'Performance Optimization',
    icon: <Zap size={48} />,
    description:
      'Speed up your site with image optimisation, caching (Redis, WP Rocket), code minification, and Lighthouse audits to hit 90+ scores.',
  },
  {
    name: 'Ongoing Maintenance',
    icon: <Settings size={48} />,
    description:
      'Keep your site secure and up-to-date—backups, plugin & theme updates, security scans, bug fixes, and feature enhancements.',
  },
];

export default function WebDevServicesGrid() {
  return (
    <section className="relative py-24 px-4 bg-black">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Our Core Services
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          End-to-end solutions—from concept to launch and beyond.
        </p>
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
            {/* Front face */}
            <div className="flex flex-col items-center justify-center h-full transition-opacity duration-300 group-hover:opacity-0">
              <div
                className="
                  w-16 h-16 mb-4 rounded-full
                  bg-gradient-to-r from-primary to-secondary
                  flex items-center justify-center
                  text-black                /* <-- keeps the Lucide icon black */
                "
              >
                {svc.icon}
              </div>
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                {svc.name}
              </h3>
            </div>

            {/* Back face */}
            <div
              className="
                absolute inset-0 flex flex-col justify-center items-center text-center
                bg-gray-800/80 p-6 rounded-3xl
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              "
            >
              <h3 className="text-xl font-semibold text-white mb-2">{svc.name}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{svc.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
