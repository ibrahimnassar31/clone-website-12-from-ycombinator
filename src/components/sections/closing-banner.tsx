'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ClosingBanner = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLParagraphElement>(null);
  const line2Ref = useRef<HTMLParagraphElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
        },
      });

      masterTL.fromTo(imageRef.current,
        {
          scale: 1.2,
          y: 100,
        },
        {
          scale: 1,
          y: 0,
          duration: 2,
          ease: 'power3.out',
        },
        0
      );

      masterTL.fromTo(overlayRef.current,
        {
          backgroundColor: 'rgba(0,0,0,0.9)',
        },
        {
          backgroundColor: 'rgba(0,0,0,0.7)',
          duration: 1.5,
          ease: 'power2.inOut',
        },
        0.2
      );

      masterTL.fromTo(textContainerRef.current,
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
        },
        0.5
      );

      masterTL.fromTo([line1Ref.current, line2Ref.current],
        {
          opacity: 0,
          y: 30,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1.4,
          stagger: 0.3,
          ease: 'power2.out',
        },
        0.8
      );

      createParticlesAnimation();

      const floatAnimation = gsap.timeline({ repeat: -1, yoyo: true });
      floatAnimation.to(textContainerRef.current, {
        y: -5,
        duration: 3,
        ease: 'sine.inOut',
      });

      if (sectionRef.current) {
        sectionRef.current.addEventListener('mousemove', handleMouseMove);
      }

      gsap.to(sectionRef.current, {
        scale: 1.02,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    if (!sectionRef.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = sectionRef.current.getBoundingClientRect();
    
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    gsap.to(imageRef.current, {
      x: x * 20,
      y: y * 20,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.to(textContainerRef.current, {
      x: x * -10,
      y: y * -10,
      duration: 1,
      ease: 'power2.out',
    });
  };

  const createParticlesAnimation = () => {
    if (!particlesRef.current) return;

    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full bg-white/10';
      
      const size = Math.random() * 4 + 1;
      const left = Math.random() * 100;
      const animationDelay = Math.random() * 2;
      
      gsap.set(particle, {
        width: size,
        height: size,
        left: `${left}%`,
        top: '-10%',
      });

      particlesRef.current.appendChild(particle);

      gsap.to(particle, {
        top: '110%',
        left: `${left + (Math.random() * 20 - 10)}%`,
        opacity: 0,
        duration: Math.random() * 10 + 10,
        delay: animationDelay,
        repeat: -1,
        ease: 'none',
      });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative flex h-[70vh] w-full items-center justify-center bg-black text-white overflow-hidden cursor-default"
    >
      <div ref={imageRef} className="absolute inset-0 z-0 transform-gpu">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/bottom2-13.webp"
          alt="Aquatic destination background"
          fill
          className="object-cover object-center transform-gpu"
          quality={90}
          priority
        />
      </div>

      <div 
        ref={overlayRef} 
        className="absolute inset-0 z-10 bg-black/70 transform-gpu"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 transform-gpu" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 transform-gpu" />
      </div>

      <div ref={particlesRef} className="absolute inset-0 z-15 pointer-events-none" />

      <div 
        ref={textContainerRef} 
        className="relative z-20 flex flex-col items-center justify-center px-4 text-center transform-gpu"
      >
        <p 
          ref={line1Ref}
          className="font-primary text-[32px] font-light leading-tight tracking-[-0.02em] sm:text-[40px] md:text-[48px] lg:text-[56px] opacity-0 transform-gpu"
        >
          Designing, Building, &amp; Operating
        </p>
        <p 
          ref={line2Ref}
          className="font-primary text-[32px] font-light leading-tight tracking-[-0.02em] sm:text-[40px] md:text-[48px] lg:text-[56px] mt-4 opacity-0 transform-gpu"
        >
          Aquatic Destinations since 1989.
        </p>

        <div className="flex space-x-4 mt-8 opacity-0" ref={(el) => {
          if (el) {
            gsap.to(el, {
              opacity: 1,
              duration: 1,
              delay: 1.5,
              ease: 'power2.out'
            });
          }
        }}>
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>

        <div 
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0"
          ref={(el) => {
            if (el) {
              gsap.to(el, {
                opacity: 1,
                y: -20,
                duration: 1,
                delay: 2,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse',
                }
              });
            }
          }}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2">
            <span className="text-sm font-light tracking-widest">EST. 1989</span>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 opacity-0"
        ref={(el) => {
          if (el) {
            gsap.to(el, {
              opacity: 1,
              duration: 1,
              delay: 2.5,
              ease: 'power2.out',
              yoyo: true,
              repeat: -1,
            });
          }
        }}
      >
        <div className="w-px h-8 bg-white/50 mx-auto">
          <div className="w-px h-4 bg-white animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default ClosingBanner;