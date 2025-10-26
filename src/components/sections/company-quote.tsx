"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { Quote, Play, ChevronLeft, ChevronRight, Star, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const CompanyQuote = () => {
  const sectionRef = useRef(null);
  const bgImageRef = useRef(null);
  const quoteRef = useRef(null);
  const quoteTextRef = useRef<HTMLQuoteElement | null>(null);
  const quoteIconRef = useRef(null);
  const navigationRef = useRef(null);
  const decorativeElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef(null);
  
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const quotes = [
    {
      text: "Canada's premier aquatic experts, reshaping luxury, one custom-built project at a time. Where passion meets precision, and every ripple begins with a vision.",
      author: "Sarah Mitchell",
      position: "CEO & Founder",
      rating: 5
    },
    {
      text: "Transforming spaces into aquatic masterpieces. Our commitment to excellence and innovation has set the standard for luxury aquatic environments across the nation.",
      author: "Michael Chen",
      position: "Lead Designer",
      rating: 5
    },
    {
      text: "Every project tells a story of craftsmanship and dedication. We don't just build pools; we create experiences that last a lifetime.",
      author: "Emma Rodriguez",
      position: "Project Director",
      rating: 5
    }
  ];

  useEffect(() => {
    gsap.to(bgImageRef.current, {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo(quoteIconRef.current,
      {
        scale: 0,
        rotation: -180,
        opacity: 0
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)"
      }
    );

    const quoteChars = quoteTextRef.current?.querySelectorAll('.char') || [];
    tl.fromTo(quoteChars,
      {
        y: 50,
        opacity: 0,
        rotationX: -90
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.01,
        ease: "back.out(1.7)"
      },
      "-=0.5"
    );

    tl.fromTo('.author-info',
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2
      },
      "-=0.3"
    );

    tl.fromTo(navigationRef.current,
      {
        y: 30,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8
      },
      "-=0.5"
    );

    tl.fromTo(decorativeElementsRef.current,
      {
        scale: 0,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 0.6,
        duration: 1.5,
        stagger: 0.3,
        ease: "elastic.out(1, 0.3)"
      },
      "-=0.8"
    );

    tl.fromTo(progressRef.current,
      {
        width: 0,
        opacity: 0
      },
      {
        width: "33.33%",
        opacity: 1,
        duration: 1,
        ease: "power2.out"
      },
      "-=0.5"
    );

    decorativeElementsRef.current.forEach((el, index) => {
      gsap.to(el, {
        y: "random(-20, 20)",
        x: "random(-15, 15)",
        rotation: "random(-5, 5)",
        duration: "random(5, 7)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.5
      });
    });

    const quoteInterval = setInterval(() => {
      if (!isPlaying) {
        nextQuote();
      }
    }, 5000);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      clearInterval(quoteInterval);
    };
  }, [currentQuote, isPlaying]);

  const splitText = (text: string) => {
    return text.split('').map((char: string, index: number) => (
      <span key={index} className="char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const nextQuote = () => {
    gsap.to(quoteTextRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        gsap.to(quoteTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3
        });
        updateProgressBar();
      }
    });
  };

  const prevQuote = () => {
    gsap.to(quoteTextRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
        gsap.to(quoteTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3
        });
        updateProgressBar();
      }
    });
  };

  const updateProgressBar = () => {
    const progress = ((currentQuote + 1) / quotes.length) * 100;
    gsap.to(progressRef.current, {
      width: `${progress}%`,
      duration: 0.5,
      ease: "power2.out"
    });
  };

  const goToQuote = (index: number) => {
    gsap.to(quoteTextRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        setCurrentQuote(index);
        gsap.to(quoteTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.3
        });
        updateProgressBar();
      }
    });
  };

  return (
    <section ref={sectionRef} className="relative flex h-screen items-center justify-center bg-black text-foreground overflow-hidden">
      <div ref={bgImageRef} className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/product4-2.webp"
          alt="Quote background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
      
      <div ref={el => { decorativeElementsRef.current[0] = el; }} className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/5 blur-xl"></div>
      <div ref={el => { decorativeElementsRef.current[1] = el; }} className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-white/5 blur-xl"></div>
      <div ref={el => { decorativeElementsRef.current[2] = el; }} className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white/5 blur-xl"></div>
      
      <div className="container relative z-10 mx-auto px-5 text-center md:px-10">
        <div className="max-w-5xl mx-auto">
          <div ref={quoteIconRef} className="flex justify-center mb-8">
            <div className="relative">
              <Quote className="w-16 h-16 text-white/20" />
            </div>
          </div>
          
          <blockquote ref={quoteTextRef} className="relative">
            <p className="text-3xl md:text-4xl font-light leading-relaxed text-white">
              {splitText(quotes[currentQuote].text)}
            </p>
            
            <div className="author-info mt-12 flex flex-col items-center">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(quotes[currentQuote].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <cite className="text-white/80 not-italic">
                <span className="font-semibold">{quotes[currentQuote].author}</span>
                <span className="text-white/60 mx-2">•</span>
                <span className="text-sm">{quotes[currentQuote].position}</span>
              </cite>
            </div>
          </blockquote>
          
          <div ref={navigationRef} className="mt-12 flex flex-col items-center gap-6">
            <div className="w-full max-w-md h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                ref={progressRef}
                className="h-full bg-white transition-all duration-500"
                style={{ width: `${((currentQuote + 1) / quotes.length) * 100}%` }}
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={prevQuote}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white transition-all duration-300 hover:scale-110"
                aria-label="Previous quote"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div className="flex gap-2">
                {quotes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToQuote(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentQuote 
                        ? 'bg-white w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to quote ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextQuote}
                className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white transition-all duration-300 hover:scale-110"
                aria-label="Next quote"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 text-white/70 hover:text-white hover:border-white transition-all duration-300"
            >
              <Play className={`w-4 h-4 ${isPlaying ? 'hidden' : 'block'}`} />
              <span className="text-sm">{isPlaying ? 'Paused' : 'Auto-playing'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyQuote;