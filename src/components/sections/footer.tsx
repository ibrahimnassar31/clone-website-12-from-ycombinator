'use client'
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const headingRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const linkRefs = useRef<(HTMLAnchorElement | HTMLSpanElement | null)[]>([]);
  const companyInfoRef = useRef<HTMLDivElement>(null);
  const companyTitleRef = useRef<HTMLHeadingElement>(null);
  const companyDescRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const underlineRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    gsap.set(sectionRefs.current, { opacity: 0, y: 30 });
    gsap.set(headingRefs.current, { opacity: 0, y: 20 });
    gsap.set(linkRefs.current, { opacity: 0, y: 15 });
    gsap.set(companyInfoRef.current, { opacity: 0, y: 20 });
    gsap.set(companyTitleRef.current, { opacity: 0, scale: 0.9 });
    gsap.set(companyDescRefs.current, { opacity: 0, y: 10 });
    gsap.set(bottomBarRef.current, { opacity: 0, y: 10 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        end: "bottom bottom",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(sectionRefs.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    })
    .to(headingRefs.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.6")
    .to(linkRefs.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out"
    }, "-=0.4")
    .to(companyInfoRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.2")
    .to(companyTitleRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.3")
    .to(companyDescRefs.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out"
    }, "-=0.2")
    .to(bottomBarRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.1");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleLinkHover = (index: number, isEntering: boolean) => {
    if (isEntering) {
      gsap.to(linkRefs.current[index], {
        x: 5,
        color: "#a0a0a0",
        duration: 0.3,
        ease: "power2.out"
      });
      
      if (underlineRefs.current[index]) {
        gsap.to(underlineRefs.current[index], {
          width: "100%",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    } else {
      gsap.to(linkRefs.current[index], {
        x: 0,
        color: "#ffffff",
        duration: 0.3,
        ease: "power2.out"
      });
      
      if (underlineRefs.current[index]) {
        gsap.to(underlineRefs.current[index], {
          width: "0%",
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  };

  const handleCompanyInfoHover = (isEntering: boolean) => {
    if (isEntering) {
      gsap.to(companyTitleRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(companyDescRefs.current, {
        x: 5,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out"
      });
    } else {
      gsap.to(companyTitleRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(companyDescRefs.current, {
        x: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out"
      });
    }
  };

  const setSectionRef = (el: HTMLDivElement | null, index: number) => {
    sectionRefs.current[index] = el;
  };

  const setHeadingRef = (el: HTMLHeadingElement | null, index: number) => {
    headingRefs.current[index] = el;
  };

  const setLinkRef = (el: HTMLAnchorElement | HTMLSpanElement | null, index: number) => {
    linkRefs.current[index] = el;
  };

  const setUnderlineRef = (el: HTMLSpanElement | null, index: number) => {
    underlineRefs.current[index] = el;
  };

  const setCompanyDescRef = (el: HTMLParagraphElement | null, index: number) => {
    companyDescRefs.current[index] = el;
  };

  return (
    <footer ref={footerRef} className="font-body bg-black text-white flex flex-col items-center px-5 md:px-10 lg:px-20 pt-[100px] pb-[50px] overflow-hidden">
      <div className="w-full max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-12 lg:gap-x-[150px] mb-[50px]">
          <div 
            ref={(el) => setSectionRef(el, 0)} 
            className="flex flex-col gap-4"
          >
            <h1 
              ref={(el) => setHeadingRef(el, 0)} 
              className="text-[11px] font-normal tracking-[2px] text-muted-foreground mb-[10px]"
            >
              EXPLORE
            </h1>
            <div className="relative">
              <Link 
                href="/contact" 
                ref={(el) => setLinkRef(el, 0)}
                className="text-sm text-foreground relative overflow-hidden block"
                onMouseEnter={() => handleLinkHover(0, true)}
                onMouseLeave={() => handleLinkHover(0, false)}
              >
                Make a Connection
                <span 
                  ref={(el) => setUnderlineRef(el, 0)}
                  className="absolute bottom-0 left-0 h-[1px] bg-gray-400 w-0"
                />
              </Link>
            </div>
            <div className="relative">
              <Link 
                href="/about" 
                ref={(el) => setLinkRef(el, 1)}
                className="text-sm text-foreground relative overflow-hidden block"
                onMouseEnter={() => handleLinkHover(1, true)}
                onMouseLeave={() => handleLinkHover(1, false)}
              >
                About us
                <span 
                  ref={(el) => setUnderlineRef(el, 1)}
                  className="absolute bottom-0 left-0 h-[1px] bg-gray-400 w-0"
                />
              </Link>
            </div>
            <div className="relative">
              <Link 
                href="/products" 
                ref={(el) => setLinkRef(el, 2)}
                className="text-sm text-foreground relative overflow-hidden block"
                onMouseEnter={() => handleLinkHover(2, true)}
                onMouseLeave={() => handleLinkHover(2, false)}
              >
                Products
                <span 
                  ref={(el) => setUnderlineRef(el, 2)}
                  className="absolute bottom-0 left-0 h-[1px] bg-gray-400 w-0"
                />
              </Link>
            </div>
            <div className="relative">
              <Link 
                href="/services" 
                ref={(el) => setLinkRef(el, 3)}
                className="text-sm text-foreground relative overflow-hidden block"
                onMouseEnter={() => handleLinkHover(3, true)}
                onMouseLeave={() => handleLinkHover(3, false)}
              >
                Services
                <span 
                  ref={(el) => setUnderlineRef(el, 3)}
                  className="absolute bottom-0 left-0 h-[1px] bg-gray-400 w-0"
                />
              </Link>
            </div>
            <div className="relative">
              <Link 
                href="/careers" 
                ref={(el) => setLinkRef(el, 4)}
                className="text-sm text-foreground relative overflow-hidden block"
                onMouseEnter={() => handleLinkHover(4, true)}
                onMouseLeave={() => handleLinkHover(4, false)}
              >
                Careers
                <span 
                  ref={(el) => setUnderlineRef(el, 4)}
                  className="absolute bottom-0 left-0 h-[1px] bg-gray-400 w-0"
                />
              </Link>
            </div>
            <div className="relative">
              <Link 
                href="/policies" 
                ref={(el) => setLinkRef(el, 5)}
                className="text-sm text-foreground relative overflow-hidden block"
                onMouseEnter={() => handleLinkHover(5, true)}
                onMouseLeave={() => handleLinkHover(5, false)}
              >
                Policies
                <span 
                  ref={(el) => setUnderlineRef(el, 5)}
                  className="absolute bottom-0 left-0 h-[1px] bg-gray-400 w-0"
                />
              </Link>
            </div>
            <div className="relative">
              <Link 
                href="/team" 
                ref={(el) => setLinkRef(el, 6)}
                className="text-sm text-foreground relative overflow-hidden block"
                onMouseEnter={() => handleLinkHover(6, true)}
                onMouseLeave={() => handleLinkHover(6, false)}
              >
                Team Portal
                <span 
                  ref={(el) => setUnderlineRef(el, 6)}
                  className="absolute bottom-0 left-0 h-[1px] bg-gray-400 w-0"
                />
              </Link>
            </div>
          </div>

          <div 
            ref={(el) => setSectionRef(el, 1)} 
            className="flex flex-col gap-4"
          >
            <h1 
              ref={(el) => setHeadingRef(el, 1)} 
              className="text-[11px] font-normal tracking-[2px] text-muted-foreground mb-[10px]"
            >
              FOLLOW US
            </h1>
            <div className="relative">
              <a 
                href="https://www.instagram.com/serviceplusaquatics/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer" 
                ref={(el) => setLinkRef(el, 7)}
                className="text-sm text-foreground relative overflow-hidden block"
                onMouseEnter={() => handleLinkHover(7, true)}
                onMouseLeave={() => handleLinkHover(7, false)}
              >
                Instagram
                <span 
                  ref={(el) => setUnderlineRef(el, 7)}
                  className="absolute bottom-0 left-0 h-[1px] bg-gray-400 w-0"
                />
              </a>
            </div>
            <div className="relative">
              <a 
                href="https://www.facebook.com/ServicePlusAquatics/" 
                target="_blank" 
                rel="noopener noreferrer" 
                ref={(el) => setLinkRef(el, 8)}
                className="text-sm text-foreground relative overflow-hidden block"
                onMouseEnter={() => handleLinkHover(8, true)}
                onMouseLeave={() => handleLinkHover(8, false)}
              >
                Facebook
                <span 
                  ref={(el) => setUnderlineRef(el, 8)}
                  className="absolute bottom-0 left-0 h-[1px] bg-gray-400 w-0"
                />
              </a>
            </div>
            <div className="relative">
              <a 
                href="https://www.linkedin.com/company/service-plus-aquatics?originalSubdomain=ca" 
                target="_blank" 
                rel="noopener noreferrer" 
                ref={(el) => setLinkRef(el, 9)}
                className="text-sm text-foreground relative overflow-hidden block"
                onMouseEnter={() => handleLinkHover(9, true)}
                onMouseLeave={() => handleLinkHover(9, false)}
              >
                LinkedIn
                <span 
                  ref={(el) => setUnderlineRef(el, 9)}
                  className="absolute bottom-0 left-0 h-[1px] bg-gray-400 w-0"
                />
              </a>
            </div>
          </div>

          <div 
            ref={(el) => setSectionRef(el, 2)} 
            className="flex flex-col gap-4"
          >
            <h1 
              ref={(el) => setHeadingRef(el, 2)} 
              className="text-[11px] font-normal tracking-[2px] text-muted-foreground mb-[10px]"
            >
              CONTACT US
            </h1>
            <div className="relative">
              <a 
                href="mailto:reception@serviceplusaquatics.com" 
                ref={(el) => setLinkRef(el, 10)}
                className="text-sm text-foreground relative overflow-hidden block"
                onMouseEnter={() => handleLinkHover(10, true)}
                onMouseLeave={() => handleLinkHover(10, false)}
              >
                reception@serviceplusaquatics.com
                <span 
                  ref={(el) => setUnderlineRef(el, 10)}
                  className="absolute bottom-0 left-0 h-[1px] bg-gray-400 w-0"
                />
              </a>
            </div>
            <div className="relative">
              <a 
                href="tel:1-905-569-7899" 
                ref={(el) => setLinkRef(el, 11)}
                className="text-sm text-foreground relative overflow-hidden block"
                onMouseEnter={() => handleLinkHover(11, true)}
                onMouseLeave={() => handleLinkHover(11, false)}
              >
                1-905-569-7899
                <span 
                  ref={(el) => setUnderlineRef(el, 11)}
                  className="absolute bottom-0 left-0 h-[1px] bg-gray-400 w-0"
                />
              </a>
            </div>
          </div>
        </div>

        <div 
          ref={companyInfoRef}
          className="mb-[50px] cursor-pointer"
          onMouseEnter={() => handleCompanyInfoHover(true)}
          onMouseLeave={() => handleCompanyInfoHover(false)}
        >
          <h1 
            ref={companyTitleRef}
            className="text-xl font-semibold mb-2 transition-transform duration-300"
          >
            SPA
          </h1>
          <p 
            ref={(el) => setCompanyDescRef(el, 0)}
            className="text-sm text-muted-foreground transition-transform duration-300"
          >
            Where Visionary Engineering Meets Aquatic Elegance.
          </p>
          <p 
            ref={(el) => setCompanyDescRef(el, 1)}
            className="text-sm text-muted-foreground transition-transform duration-300"
          >
            Luxury aquatic environments crafted with passion and precision.
          </p>
        </div>

        <div 
          ref={bottomBarRef}
          className="w-full flex flex-col md:flex-row justify-between items-start md:items-center pt-5 border-t border-border gap-2 md:gap-4"
        >
          <p className="text-xs text-muted-foreground">© 2025 SPA, All Rights Reserved</p>
          <p className="text-xs text-muted-foreground">Website By: Justin Parisio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;