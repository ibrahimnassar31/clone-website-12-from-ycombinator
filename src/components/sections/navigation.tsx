"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Menu, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  const headerRef = useRef<HTMLElement | null>(null);
  const menuOverlayRef = useRef<HTMLDivElement | null>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);

  const navLinks = [
    { href: "/about", label: "About", description: "Our story and mission" },
    { href: "/services", label: "Services", description: "What we offer" },
    { href: "/portfolio", label: "Portfolio", description: "Our work" },
    { href: "/contact", label: "Contact", description: "Get in touch" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    gsap.fromTo(headerRef.current, 
      {
        y: -100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
      }
    );

    gsap.fromTo(logoRef.current,
      {
        scale: 0.8,
        opacity: 0,
        rotation: -5
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.5
      }
    );

    gsap.fromTo(hamburgerRef.current,
      {
        x: 50,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.7
      }
    );

    menuTimelineRef.current = gsap.timeline({ paused: true });
    
    menuTimelineRef.current
      .to(menuOverlayRef.current, {
        y: "0%",
        duration: 0.8,
        ease: "power3.inOut"
      })
      .fromTo(closeBtnRef.current, {
        x: 50,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.4")
      .fromTo(menuItemsRef.current, {
        y: 50,
        opacity: 0,
        skewY: 3
      }, {
        y: 0,
        opacity: 1,
        skewY: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out"
      }, "-=0.3");

    return () => {
      if (menuTimelineRef.current) menuTimelineRef.current.kill();
    };
  }, []);

  useEffect(() => {
    if (menuTimelineRef.current) {
      if (isMenuOpen) {
        menuTimelineRef.current.play();
      } else {
        menuTimelineRef.current.reverse();
      }
    }
  }, [isMenuOpen]);

  const handleMenuItemHover = (index: number) => {
    gsap.to(menuItemsRef.current[index], {
      x: 10,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMenuItemLeave = (index: number) => {
    gsap.to(menuItemsRef.current[index], {
      x: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleLogoHover = () => {
    gsap.to(logoRef.current, {
      scale: 1.05,
      rotation: 2,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleLogoLeave = () => {
    gsap.to(logoRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10 py-[15px] transition-all duration-300 ${
          scrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'
        } text-white`}
        style={{ fontFamily: 'var(--font-navigation)' }}
      >
        <Link 
          href="/home" 
          className="relative z-10"
          onMouseEnter={handleLogoHover}
          onMouseLeave={handleLogoLeave}
        >
          <Image
            ref={logoRef}
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/logo-Chp69Ke1-1.svg"
            alt="SPA Logo"
            width={100}
            height={40}
            className="w-[100px] h-auto"
            priority
          />
        </Link>

        <button 
            ref={hamburgerRef}
            onClick={() => setIsMenuOpen(true)} 
            className="flex items-center gap-x-2 group menu-btn"
            aria-label="Open menu"
          >
            <span className="text-sm font-normal tracking-wide group-hover:opacity-70 transition-opacity text-black">MENU</span>
            <div className="relative w-5 h-[14px] hamburger-container">
              <span className="hamburger-line block absolute w-full h-px bg-black top-0 transition-all duration-300"></span>
              <span className="hamburger-line block absolute w-full h-px bg-black bottom-0 transition-all duration-300"></span>
            </div>
          </button>
        
        <div className="flex items-center gap-x-8 lg:gap-x-10">
          
          
          <nav className="hidden lg:flex items-center gap-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-normal relative hover:opacity-70 transition-opacity nav-link text-black"
                onMouseEnter={(event) => {
                  gsap.to(event.target as HTMLElement, {
                    y: -2,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }}
                onMouseLeave={(event) => {
                  gsap.to(event.target as HTMLElement, {
                    y: 0,
                    duration: 0.2,
                    ease: "power2.out"
                  });
                }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 nav-underline"></span>
              </Link>
            ))}
          </nav>
        </div>
      </header>
      
      <div 
        ref={menuOverlayRef}
        className="fixed inset-0 bg-black z-[100] transform -translate-y-full"
        role="dialog"
        aria-modal="true"
      >
        <div className="container h-full mx-auto px-5 md:px-10 flex flex-col">
          <div className="flex items-center justify-between py-[15px]">
            <Link href="/home" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/logo-Chp69Ke1-1.svg"
                alt="SPA Logo"
                width={100}
                height={40}
                className="w-[100px] h-auto"
              />
            </Link>
            <button 
              ref={closeBtnRef}
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-x-2.5 text-white group"
              aria-label="Close menu"
            >
              <span className="text-sm tracking-wide group-hover:opacity-70 transition-opacity">CLOSE</span>
              <X size={24} className="group-hover:opacity-70 transition-opacity"/>
            </button>
          </div>
          
          <nav className="flex-grow flex flex-col items-center justify-center gap-y-8 -mt-10">
            {navLinks.map((link, index) => (
              <div
                key={link.href}
                className="menu-item-container"
                onMouseEnter={() => handleMenuItemHover(index)}
                onMouseLeave={() => handleMenuItemLeave(index)}
              >
                <Link
                  ref={(el) => { menuItemsRef.current[index] = el; }}
                  href={link.href}
                  className="text-4xl text-white font-light hover:opacity-70 transition-opacity duration-300 flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="menu-number text-white/50 text-2xl">0{index + 1}</span>
                  <div className="menu-text-container">
                    <span className="menu-text">{link.label}</span>
                    <span className="menu-description text-white/50 text-sm block">{link.description}</span>
                  </div>
                  <ChevronRight className="menu-arrow opacity-0 transition-opacity duration-300" size={20} />
                </Link>
              </div>
            ))}
          </nav>
          
          <div className="flex justify-center pb-10">
            <div className="flex gap-6">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;