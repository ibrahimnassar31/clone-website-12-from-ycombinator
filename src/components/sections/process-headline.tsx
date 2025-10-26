"use client";

import React, { useEffect, useRef } from 'react';
import { Drill, Pencil, Wrench } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CraneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 256 256"
    fill="currentColor"
    {...props}
  >
    <path d="M228.12,17.14a8,8,0,0,0-7.88-.2L102,80H32A16,16,0,0,0,16,96V200a16,16,0,0,0,16,16h88a16,16,0,0,0,16-16V168a7.81,7.81,0,0,0-.34-2.3L113.54,92,216,37.33V160H200v-8a8,8,0,0,0-16,0v8a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V24A8,8,0,0,0,228.12,17.14ZM98.05,96l19.2,64H64V96ZM48,96v64H32V96ZM32,200h0V176h88v24Z" />
  </svg>
);

const servicesData = [
  {
    icon: Drill,
    title: 'Manufacturing',
    description: 'From raw material to refined retreat, we manage every step — delivering precision-engineered results that embody excellence, efficiency, utilizing cutting-edge manufacturing expertise.',
  },
  {
    icon: Pencil,
    title: 'Design',
    description: 'A licensed engineering firm — Where your vision is sculpted with precision and artistry, transforming ideas into signature, enduring design.',
  },
  {
    icon: CraneIcon,
    title: 'Building',
    description: 'A trusted partner to visionaries—transforming architectural aquatic concepts into timeless destinations through artisan precision, luxurious finishes, and flawless execution that inspires, captivates, and endures.',
  },
  {
    icon: Wrench,
    title: 'Servicing',
    description: 'Elegant pools deserve elegant care — we combine cutting-edge automation, elevated service, and exclusive supply to protect the beauty and function of your aquatic retreat.',
  },
];

const ProcessAndServices = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef(null);
  const descriptionRef = useRef(null);
  const deliveredRef = useRef(null);
  const serviceCardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        const headlineChars = headlineRef.current.querySelectorAll('.char');
        gsap.fromTo(
          headlineChars,
          {
            opacity: 0,
            y: 100,
            rotationX: -90,
            z: -200,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            z: 0,
            duration: 1.2,
            stagger: 0.03,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: headlineRef.current,
              start: 'top 80%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.to(headlineRef.current, {
          y: -20,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          scrollTrigger: {
            trigger: headlineRef.current,
            start: 'top 80%',
          },
        });
      }

      gsap.fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        deliveredRef.current,
        {
          opacity: 0,
          x: 100,
          rotation: 10,
        },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: deliveredRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.to(deliveredRef.current, {
        y: -15,
        rotation: -2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      serviceCardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            rotationY: -15,
            z: -100,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            z: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              end: 'bottom 60%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.15,
          }
        );

        gsap.to(card, {
          y: -10,
          duration: 2 + index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        });

        const icon = card.querySelector('.service-icon');
        if (icon) {
          gsap.to(icon, {
            y: -8,
            rotation: 5,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.15,
          });
        }

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            z: 50,
            duration: 0.4,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            z: 0,
            duration: 0.4,
            ease: 'power2.out',
          });
        });
      });

      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split('').map((char: string, index: number) => (
      <span
        key={index}
        className="char inline-block"
        style={{ 
          display: 'inline-block',
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div ref={sectionRef} className="bg-background text-foreground font-primary">
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 lg:py-28">
          <div className="flex flex-col items-center">
            <h1
              ref={headlineRef}
              className="text-center text-5xl font-light uppercase tracking-tight md:text-7xl lg:text-8xl"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              {splitText('ENVISIONED, DESIGNED, REFINED')}
            </h1>
            <div className="mt-10 w-full max-w-3xl md:mt-16">
              <p
                ref={descriptionRef}
                className="text-center text-xl font-normal text-muted-foreground md:text-2xl"
              >
                Transforming ideas into timeless aquatic masterpieces &mdash; built
                for beauty, strength, and enduring luxury.
              </p>
              <h1
                ref={deliveredRef}
                className="mt-10 text-right text-5xl font-light italic md:mt-16 md:text-7xl"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                delivered.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  ref={(el) => {
                    if (el) serviceCardsRef.current[index] = el;
                  }}
                  className="bg-background p-8 md:p-12 flex flex-col items-start border-r border-b border-border relative"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px',
                  }}
                >
                  <div className="mb-6 service-icon">
                    <Icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-normal text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base font-normal text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessAndServices;
