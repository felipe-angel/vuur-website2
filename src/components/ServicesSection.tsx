'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function ServicesSection() {
  const [showArrow, setShowArrow] = useState(false);

  // ref to the 70 % sentinel inside the 4-th card
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  // ref to this whole section (for initial show)
  const sectionRef   = useRef<HTMLElement | null>(null);

  /* ───────── Intersection logic ───────── */
  useEffect(() => {
    if (!sentinelRef.current || !sectionRef.current) return;

    /* Show arrow once section enters view (card #1). */
    const sectionObserver = new IntersectionObserver(
      ([entry]) => setShowArrow(entry.isIntersecting),
      { root: null, threshold: 0.01 } // 1 % of section visible
    );
    sectionObserver.observe(sectionRef.current);

    /* Hide arrow when sentinel (70 % point in card #4) enters view. */
    const sentinelObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowArrow(false);
      },
      { root: null, threshold: 0.01 } // sentinel appears
    );
    sentinelObserver.observe(sentinelRef.current);

    return () => {
      sectionObserver.disconnect();
      sentinelObserver.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative bg-black">
      {/* ————— Down-arrow (always fixed, only rendered when showArrow) ————— */}
      {showArrow && (
        <div
          className="
            fixed right-4 top-1/2 -translate-y-1/2 z-20
            flex items-center justify-center
            h-[48px] w-[48px] animate-bounce
          "
        >
          <Image
            src="/images/down-arrow1.png"          /* placed in /public */
            alt="Scroll down"
            width={48}
            height={48}
            className="object-contain"
            priority
          />
        </div>
      )}

      {/* ————— Service cards ————— */}
      <div>
        {services.map((svc, idx) => {
          const isLast = idx === services.length - 1;
          return (
            <div key={svc.title} className="relative">
              {/* insert sentinel 70 % down inside card #4 */}
              {isLast && (
                <div
                  ref={sentinelRef}
                  className="
                    absolute left-0 right-0
                    top-[70%]         /* 70 % from card top */
                    h-1               /* tiny invisible strip */
                  "
                />
              )}
              <ServiceCard svc={svc} idx={idx} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
