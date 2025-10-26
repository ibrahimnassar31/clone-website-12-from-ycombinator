"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { PencilRuler, PackageCheck, ZoomIn, Factory, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ManufacturingSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const imageOverlayRef = useRef<HTMLDivElement | null>(null);
  const headingLinesRef = useRef<(HTMLHeadingElement | null)[]>([]);
  const badgeRef = useRef<HTMLSpanElement | null>(null);
  const descriptionCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const hrRef = useRef<HTMLHRElement | null>(null);
  const [isImageHovered, setIsImageHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageContainerRef.current,
        {
          clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
          rotationY: -30,
          scale: 0.8,
          opacity: 0,
        },
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          rotationY: 0,
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        {
          scale: 1.4,
          rotation: -3,
          filter: 'brightness(0.7) contrast(1.2)',
        },
        {
          scale: 1,
          rotation: 0,
          filter: 'brightness(1) contrast(1)',
          duration: 2.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        imageOverlayRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1.5,
          delay: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.to(imageContainerRef.current, {
        yPercent: -10,
        rotationY: 5,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.fromTo(
        badgeRef.current,
        {
          opacity: 0,
          scale: 0,
          rotation: -180,
          y: 50,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          y: 0,
          duration: 1.2,
          ease: 'elastic.out(1.2, 0.5)',
          scrollTrigger: {
            trigger: badgeRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      headingLinesRef.current.forEach((line, index) => {
        if (!line) return;

        gsap.fromTo(
          line,
          {
            opacity: 0,
            x: index % 2 === 0 ? -150 : 150,
            rotationY: index % 2 === 0 ? -45 : 45,
            z: -300,
            filter: 'blur(20px)',
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            z: 0,
            filter: 'blur(0px)',
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: line,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.15,
          }
        );

        if (line.classList.contains('italic')) {
          gsap.to(line, {
            y: -15,
            rotation: 2,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
      });

      descriptionCardsRef.current.forEach((card, index) => {
        if (!card) return;

        const icon = card.querySelector('.icon-wrapper');
        const text = card.querySelector('.description-text');

        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: 80,
            rotationY: 30,
            scale: 0.9,
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.25,
          }
        );

        gsap.fromTo(
          icon,
          {
            rotation: -180,
            scale: 0,
            y: -50,
          },
          {
            rotation: 0,
            scale: 1,
            y: 0,
            duration: 1,
            ease: 'elastic.out(1.5, 0.8)',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.25 + 0.4,
          }
        );

        gsap.fromTo(
          text,
          {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
            filter: 'blur(10px)',
          },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.25 + 0.6,
          }
        );

        card.addEventListener('mouseenter', () => {
          const tl = gsap.timeline();
          tl.to(card, {
            x: -15,
            y: -5,
            rotationY: -8,
            scale: 1.02,
            duration: 0.6,
            ease: 'power2.out',
          })
          .to(icon, {
            rotation: 360,
            scale: 1.2,
            y: -5,
            duration: 0.8,
            ease: 'back.out(1.7)',
          }, 0)
          .to(text, {
            color: '#ffffff',
            duration: 0.4,
            ease: 'power2.out',
          }, 0);
        });

        card.addEventListener('mouseleave', () => {
          const tl = gsap.timeline();
          tl.to(card, {
            x: 0,
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.8,
            ease: 'elastic.out(1, 0.8)',
          })
          .to(icon, {
            rotation: 0,
            scale: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          }, 0)
          .to(text, {
            color: '#9ca3af',
            duration: 0.4,
            ease: 'power2.out',
          }, 0);
        });
      });

      gsap.fromTo(
        hrRef.current,
        {
          scaleX: 0,
          transformOrigin: 'left center',
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: hrRef.current,
            start: 'top 95%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.to(headingLinesRef.current, {
              y: progress * 40,
              rotationY: progress * 5,
              duration: 0.3,
              stagger: 0.05,
              ease: 'none',
            });
          },
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleImageHover = () => {
    setIsImageHovered(true);
    
    const tl = gsap.timeline();
    tl.to(imageContainerRef.current, {
      rotationY: -15,
      scale: 1.05,
      y: -10,
      duration: 0.8,
      ease: 'power2.out',
    })
    .to(imageRef.current, {
      scale: 1.1,
      rotation: 1,
      filter: 'brightness(1.1) contrast(1.1)',
      duration: 0.6,
      ease: 'power2.out',
    }, 0)
    .to(imageOverlayRef.current, {
      opacity: 0.8,
      duration: 0.4,
      ease: 'power2.out',
    }, 0)
    .to('.zoom-indicator', {
      scale: 1.2,
      opacity: 1,
      duration: 0.3,
      ease: 'back.out(1.7)',
    }, 0);
  };

  const handleImageHoverOut = () => {
    setIsImageHovered(false);
    
    const tl = gsap.timeline();
    tl.to(imageContainerRef.current, {
      rotationY: 0,
      scale: 1,
      y: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.8)',
    })
    .to(imageRef.current, {
      scale: 1,
      rotation: 0,
      filter: 'brightness(1) contrast(1)',
      duration: 0.6,
      ease: 'power2.out',
    }, 0)
    .to(imageOverlayRef.current, {
      opacity: 0.3,
      duration: 0.4,
      ease: 'power2.out',
    }, 0)
    .to('.zoom-indicator', {
      scale: 1,
      opacity: 0.7,
      duration: 0.3,
      ease: 'power2.out',
    }, 0);
  };

  return (
    <section 
      ref={sectionRef}
      className="bg-black text-white dark py-20 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-24 items-start">
        
        <div 
          ref={imageContainerRef}
          className="relative w-full aspect-[4/3] lg:aspect-[3/4] lg:row-span-2 lg:col-start-1 lg:row-start-1 overflow-hidden rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm cursor-pointer group"
          style={{ 
            clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
            transformStyle: 'preserve-3d',
          }}
          onMouseEnter={handleImageHover}
          onMouseLeave={handleImageHoverOut}
        >
          <div 
            ref={imageRef}
            className="relative w-full h-full"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/autocad4-4.webp"
              alt="Aerial view of a custom pool manufacturing process"
              layout="fill"
              objectFit="cover"
              className="transition-all duration-1000"
            />
          </div>
          
          <div 
            ref={imageOverlayRef}
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 opacity-0 transition-opacity duration-500"
          />
          
          <div className="zoom-indicator absolute top-4 right-4 opacity-70 transition-all duration-300">
            <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 border border-white/20">
              <ZoomIn className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <Factory className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-white">Manufacturing Process</span>
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                Precision engineering and custom fabrication in our state-of-the-art facility
              </p>
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${30 + (i % 3) * 20}%`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="lg:col-start-2">
          <div 
            className="space-y-2 font-bold text-5xl sm:text-6xl xl:text-[5.5rem] leading-none tracking-tighter"
            style={{ perspective: '1200px' }}
          >
            <h2
              ref={(el) => { headingLinesRef.current[0] = el; }}
              className="flex items-center"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <span 
                ref={badgeRef}
                className="border border-white/80 text-sm lg:text-base font-normal py-1 px-3 rounded-full mr-4 bg-white/10 backdrop-blur-sm"
                style={{ display: 'inline-block' }}
              >
                SPA
              </span>
              <span>CUSTOM</span>
            </h2>
            <h2
              ref={(el) => { headingLinesRef.current[1] = el; }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              MANUFACTURING.
            </h2>
            <h2
              ref={(el) => { headingLinesRef.current[2] = el; }}
              className="italic"
              style={{ transformStyle: 'preserve-3d' }}
            >
              BUILT-
            </h2>
            <h2
              ref={(el) => { headingLinesRef.current[3] = el; }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              IN-HOUSE.
            </h2>
          </div>
        </div>

        <div className="lg:col-start-2 mt-4 lg:mt-0">
          <div className="space-y-8 max-w-lg">
            <div
              ref={(el) => { descriptionCardsRef.current[0] = el; }}
              className="flex items-start gap-6 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 cursor-pointer group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="icon-wrapper flex-shrink-0 border border-white/30 rounded-full p-3 group-hover:border-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                <PencilRuler className="w-6 h-6 text-white" strokeWidth={1.5}/>
              </div>
              <p className="description-text text-white/80 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                From concept to completion, we meticulously self-perform every detail—crafting automated, quality-assured components designed to elevate the most refined and luxurious aquatic environments worldwide.
              </p>
            </div>
            
            <hr 
              ref={hrRef}
              className="border-white/20"
            />

            <div
              ref={(el) => { descriptionCardsRef.current[1] = el; }}
              className="flex items-start gap-6 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 cursor-pointer group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="icon-wrapper flex-shrink-0 border border-white/30 rounded-full p-3 group-hover:border-green-400 group-hover:bg-green-500/20 transition-all duration-300">
                <PackageCheck className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <p className="description-text text-white/80 text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                From vision to reality, we self-perform every phase—ensuring seamless collaboration, accelerated timelines, and exceptional results in crafting custom aquatic destinations of unmatched quality and precision.
              </p>
            </div>
          </div>

      
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;