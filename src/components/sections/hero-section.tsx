"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Play, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const timelineItems = [
  { title: "Inspiration", description: "Visionary Concepts" },
  { title: "Design", description: "Custom | Professional" },
  { title: "Engineering", description: "Precision Excellence" },
  { title: "Fabrication", description: "In-house Crafted" },
  { title: "Construction", description: "Seamless Mastery" },
  { title: "Finishing", description: "Luxury Detailing" },
  { title: "Experience", description: "Elevated | Tailored" },
  { title: "Legacy", description: "Enduring | Trusted" },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background image parallax and scale animation
      gsap.fromTo(imageRef.current,
        {
          scale: 1.2,
          y: 100,
        },
        {
          scale: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
        }
      );

      // Text reveal animation with clipping
      gsap.fromTo(headingRef.current,
        {
          opacity: 0,
          y: 80,
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1.5,
          delay: 0.5,
          ease: "power3.out",
        }
      );

      // Timeline items staggered animation
      if (timelineRef.current) {
        const items = timelineRef.current.children;
        gsap.fromTo(items,
          {
            opacity: 0,
            x: -60,
            rotationY: 45,
          },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.15,
            delay: 1,
            ease: "back.out(1.7)",
          }
        );
      }

      // CTA button animation
      gsap.fromTo(ctaRef.current,
        {
          opacity: 0,
          y: 40,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: 1.8,
          ease: "elastic.out(1, 0.8)",
        }
      );

      // Scroll indicator animation
      gsap.fromTo(scrollIndicatorRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 2.2,
          ease: "power2.out",
        }
      );

      // Continuous scroll indicator bounce
      gsap.to(scrollIndicatorRef.current?.querySelector("svg"), {
        y: 8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.5,
      });

      // Background image parallax on scroll
      gsap.to(imageRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text fade out on scroll
      gsap.to([headingRef.current, timelineRef.current, ctaRef.current], {
        opacity: 0,
        y: -50,
        ease: "power2.in",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleTimelineHover = (element: HTMLElement, index: number) => {
    const tl = gsap.timeline();
    tl.to(element, {
      x: 20,
      scale: 1.05,
      color: "#ffffff",
      duration: 0.4,
      ease: "power2.out",
    })
    .to(element.querySelector(".timeline-dot"), {
      scale: 1.5,
      backgroundColor: "#ffffff",
      duration: 0.3,
      ease: "back.out(1.7)",
    }, 0)
    .to(element.querySelector(".timeline-connector"), {
      scaleX: 1,
      backgroundColor: "#ffffff",
      duration: 0.6,
      ease: "power2.out",
    }, 0);
  };

  const handleTimelineHoverOut = (element: HTMLElement) => {
    const tl = gsap.timeline();
    tl.to(element, {
      x: 0,
      scale: 1,
      color: "inherit",
      duration: 0.4,
      ease: "power2.out",
    })
    .to(element.querySelector(".timeline-dot"), {
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      duration: 0.3,
      ease: "power2.out",
    }, 0)
    .to(element.querySelector(".timeline-connector"), {
      scaleX: 0,
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      duration: 0.4,
      ease: "power2.out",
    }, 0);
  };

  const handleCtaHover = (element: HTMLElement) => {
    gsap.to(element, {
      y: -5,
      scale: 1.02,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(element.querySelector("svg"), {
      x: 5,
      rotation: 45,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleCtaHoverOut = (element: HTMLElement) => {
    gsap.to(element, {
      y: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(element.querySelector("svg"), {
      x: 0,
      rotation: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const toggleVideoPlayback = () => {
    setIsVideoPlaying(!isVideoPlaying);
    // Here you would typically control video playback
    // For now, we'll just animate the play/pause button
    const button = document.querySelector('.video-control');
    if (button) {
      gsap.to(button, {
        scale: 1.2,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative flex items-center justify-center w-full min-h-screen bg-black text-white overflow-hidden"
    >
      {/* Background Image with Enhanced Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          ref={imageRef}
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/product2-1.webp"
          alt="Luxury indoor swimming pool with modern architecture"
          fill
          quality={100}
          className="object-cover scale-125"
          priority
        />
        
        {/* Enhanced Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/60 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-0" />
        
        {/* Animated Light Effects */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${3 + Math.random() * 2}s infinite ease-in-out ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between w-full h-full text-foreground px-5 md:px-10">
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col justify-center text-left mb-10 lg:mb-0">
          <h1 
            ref={headingRef}
            className="text-[48px] md:text-[60px] lg:text-[72px] leading-tight font-light -tracking-[0.02em] opacity-0"
          >
            Luxury in Motion.
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Where Water Inspires.
            </span>
          </h1>
          
          <div className="flex items-center gap-6 mt-8">
            <p className="text-[15px] font-normal tracking-wider border-l-2 border-white/30 pl-4">
              EST. 1989
            </p>
            
            {/* Video Playback Control */}
            <button
              onClick={toggleVideoPlayback}
              className="video-control flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors duration-300 group"
            >
              {isVideoPlaying ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause Experience</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Play Experience</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Timeline */}
        <div className="lg:w-[45%] xl:w-2/5 flex flex-col items-start space-y-2">
          <div className="w-full h-px bg-white/30 mb-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
          </div>
          
          <div ref={timelineRef} className="w-full space-y-1">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between w-full text-sm py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-pointer group relative overflow-hidden"
              >
                {/* Animated Dot */}
                <div className="timeline-dot absolute left-0 w-2 h-2 bg-white/50 rounded-full transition-all duration-300" />
                
                {/* Animated Connector */}
                <div 
                  className="timeline-connector absolute left-1 h-px bg-white/30 scale-x-0 origin-left transition-transform duration-500"
                  style={{ width: 'calc(100% - 2rem)' }}
                />
                
                <p className="text-[15px] font-medium relative z-10">{item.title}</p>
                <p className="text-white/60 text-xs relative z-10 transition-colors duration-300 group-hover:text-white/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <Link
            ref={ctaRef}
            href="/contact"
            className="flex items-center space-x-4 mt-8 group relative overflow-hidden rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-4 hover:bg-white/20 transition-all duration-500 opacity-0"
            onMouseEnter={(e) => handleCtaHover(e.currentTarget)}
            onMouseLeave={(e) => handleCtaHoverOut(e.currentTarget)}
          >
            <span className="text-base font-medium transition-all duration-300 group-hover:tracking-wider">
              Make a Connection
            </span>
            <div className="flex items-center justify-center w-9 h-9 border border-white rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-black">
              <ArrowRight className="w-4 h-4 transition-transform duration-300" />
            </div>
            
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000">
              <div className="w-1/2 h-full bg-white/10" />
            </div>
          </Link>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-10 text-white/80 opacity-0"
      >
        <p className="text-xs tracking-[0.2em] uppercase">Discover More</p>
        <div className="relative">
          <ChevronDown className="w-5 h-5" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-4 bg-white/50 animate-pulse" />
        </div>
      </div>

      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;