'use client'
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    title: "Preventive Maintenance",
    description: "Tailored annual or seasonal preventive care programs ensuring peak operation, longevity, and uninterrupted enjoyment of your aquatic investment.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/maint-9.webp",
    href: "#",
  },
  {
    title: "Water Quality Management",
    description: "Advanced monitoring, testing, and balancing create immaculate water quality for unparalleled clarity, safety, resulting in a pristine aquatic experience.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/water-10.webp",
    href: "#",
  },
  {
    title: "Mechanical System Servicing",
    description: "Luxury-level mechanical care—where pumps, filters, and automation operate in perfect harmony for uninterrupted aquatic experiences.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/oper-11.webp",
    href: "#",
  },
  {
    title: "Training & Documentation",
    description: "Specialized training and precision-crafted manuals empower your team to operate and maintain aquatic systems with absolute confidence.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/training-12.webp",
    href: "#",
  },
];

const OperationsServices = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const arrowRefs = useRef<(SVGSVGElement | null)[]>([]);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(containerRef.current, 
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        }
      );

      lineRefs.current.forEach((line, index) => {
        if (!line) return;
        
        gsap.fromTo(line,
          {
            scaleX: 0,
            transformOrigin: index === 0 ? "left" : "left",
          },
          {
            scaleX: 1,
            duration: 1.2,
            delay: index * 0.15,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });

      const items = itemRefs.current.filter(Boolean);
      
      gsap.fromTo(items,
        {
          opacity: 0,
          y: 60,
          rotationX: 10,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.4,
          stagger: {
            amount: 0.6,
            from: "start",
            grid: "auto",
            ease: "power3.out"
          },
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        }
      );

      titles.forEach((title, index) => {
        if (!title) return;
        
        gsap.fromTo(title,
          {
            opacity: 0,
            x: -30,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 1,
            delay: 0.3 + (index * 0.1),
            ease: "power2.out",
            scrollTrigger: {
              trigger: title,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });

      descriptions.forEach((desc, index) => {
        if (!desc) return;
        
        gsap.fromTo(desc,
          {
            opacity: 0,
            y: 20,
            filter: "blur(4px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            delay: 0.5 + (index * 0.1),
            ease: "power2.out",
            scrollTrigger: {
              trigger: desc,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            }
          }
        );
      });

      arrows.forEach((arrow, index) => {
        if (!arrow) return;
        
        gsap.fromTo(arrow,
          {
            opacity: 0,
            scale: 0,
            rotation: -45,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: 0.7 + (index * 0.1),
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: arrow,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            }
          }
        );

        gsap.to(arrow, {
          y: -3,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 1 + (index * 0.2)
        });
      });

      gsap.set(imageRefs.current, {
        opacity: 0,
        scale: 0.8,
        rotationY: 15,
        x: 50,
        filter: "blur(12px)"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (index: number) => {
    const tl = gsap.timeline();
    
    tl.to(imageRefs.current[index], {
      opacity: 1,
      scale: 1,
      rotationY: 0,
      x: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power3.out"
    });

    tl.to(titleRefs.current[index], {
      y: -8,
      color: "#ffffff",
      scale: 1.02,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.6");

    tl.to(descRefs.current[index], {
      y: -5,
      color: "#e5e7eb",
      x: 10,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.4");

    tl.to(arrowRefs.current[index], {
      x: 8,
      y: -8,
      rotation: 10,
      scale: 1.1,
      duration: 0.4,
      ease: "back.out(2.5)"
    }, "-=0.3");

    tl.to(itemRefs.current[index], {
      backgroundColor: "rgba(255, 255, 255, 0.03)",
      borderColor: "rgba(255, 255, 255, 0.2)",
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.5");

    tl.to(itemRefs.current[index], {
      y: -5,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.6");
  };

  const handleMouseLeave = (index: number) => {
    const tl = gsap.timeline();

    tl.to(imageRefs.current[index], {
      opacity: 0,
      scale: 0.8,
      rotationY: 15,
      x: 50,
      filter: "blur(12px)",
      duration: 0.6,
      ease: "power3.inOut"
    });

    tl.to([titleRefs.current[index], descRefs.current[index]], {
      y: 0,
      x: 0,
      scale: 1,
      color: "#ffffff",
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.5");

    tl.to(descRefs.current[index], {
      color: "#6b7280",
      duration: 0.3
    }, "-=0.3");

    tl.to(arrowRefs.current[index], {
      x: 0,
      y: 0,
      rotation: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    }, "-=0.3");

    tl.to(itemRefs.current[index], {
      backgroundColor: "rgba(0, 0, 0, 0)",
      borderColor: "rgba(255, 255, 255, 0.1)",
      y: 0,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.4");
  };

  const setImageRef = (el: HTMLDivElement | null, index: number) => {
    imageRefs.current[index] = el;
  };

  const setItemRef = (el: HTMLAnchorElement | null, index: number) => {
    itemRefs.current[index] = el;
  };

  const setTitleRef = (el: HTMLHeadingElement | null, index: number) => {
    titleRefs.current[index] = el;
  };

  const setDescRef = (el: HTMLParagraphElement | null, index: number) => {
    descRefs.current[index] = el;
  };

  const setArrowRef = (el: SVGSVGElement | null, index: number) => {
    arrowRefs.current[index] = el;
  };

  const setLineRef = (el: HTMLDivElement | null, index: number) => {
    lineRefs.current[index] = el;
  };

  const titles = titleRefs.current;
  const descriptions = descRefs.current;
  const arrows = arrowRefs.current;

  return (
    <section ref={sectionRef} className="bg-black text-white py-24 sm:py-32 overflow-hidden">
      <div ref={containerRef} className="container mx-auto px-4 sm:px-10 opacity-0">
        
        <div className="relative">
          {servicesData.map((_, index) => (
            <div
              key={`line-${index}`}
              ref={(el) => setLineRef(el, index)}
              className={`absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent ${
                index === 0 ? 'top-0' : 'bottom-0'
              }`}
              style={{ transform: 'scaleX(0)' }}
            />
          ))}
          
          <div className="border-t border-border">
            {servicesData.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group relative block border-b border-border overflow-hidden opacity-0"
                ref={(el) => setItemRef(el, index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="flex justify-between items-start py-10 md:py-14 relative z-20">
                  <div className="max-w-2xl pr-8">
                    <h3 
                      ref={(el) => setTitleRef(el, index)}
                      className="text-subheading font-normal text-white mb-4"
                    >
                      {service.title}
                    </h3>
                    <p 
                      ref={(el) => setDescRef(el, index)}
                      className="text-body text-muted-foreground"
                    >
                      {service.description}
                    </p>
                  </div>
                  <ArrowUpRight 
                    ref={(el) => setArrowRef(el, index)}
                    className="w-6 h-6 sm:w-8 sm:h-8 text-white flex-shrink-0 ml-4 mt-2"
                  />
                </div>

                <div 
                  ref={(el) => setImageRef(el, index)}
                  className="hidden lg:block absolute top-1/2 left-[55%] -translate-y-1/2 w-72 h-52 xl:w-[380px] xl:h-[253px] pointer-events-none z-10 overflow-hidden rounded-lg border border-white/10"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={service.imageSrc}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsServices;