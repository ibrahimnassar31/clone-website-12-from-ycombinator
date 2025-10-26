"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StructuralExcellence = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const block1Ref = useRef<HTMLDivElement | null>(null);
  const img1WrapRef = useRef<HTMLDivElement | null>(null);
  const img1Ref = useRef<HTMLImageElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const kickerRef = useRef<HTMLParagraphElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const copy1Ref = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);

  const block2Ref = useRef<HTMLDivElement | null>(null);
  const copy2Ref = useRef<HTMLParagraphElement | null>(null);
  const img2WrapRef = useRef<HTMLDivElement | null>(null);
  const img2Ref = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.set([kickerRef.current, titleRef.current, copy1Ref.current, ctaRef.current], { opacity: 0, y: 30 });
      gsap.set([img1Ref.current, img2Ref.current], { scale: 1.05, rotateZ: 0.3, transformOrigin: "center center" });
      gsap.set(badgeRef.current, { y: 20, opacity: 0 });
      gsap.set([copy2Ref.current], { opacity: 0, y: 24 });

      const sweep = document.createElement("div");
      sweep.className =
        "pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_40%_at_40%_20%,black,transparent)] bg-[radial-gradient(1000px_400px_at_20%_-10%,rgba(255,255,255,0.12),transparent),radial-gradient(900px_500px_at_100%_120%,rgba(255,255,255,0.06),transparent)]";
      if (sectionRef.current) {
        sectionRef.current.appendChild(sweep);
      }
      gsap.set(sweep, { opacity: 0 });

      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: block1Ref.current,
          start: "top 70%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl1
        .to(sweep, { opacity: prefersReduced ? 0 : 1, duration: 0.8 })
        .to(kickerRef.current, { opacity: 1, y: 0, duration: prefersReduced ? 0 : 0.5 }, "<+0.1")
        .to(titleRef.current, { opacity: 1, y: 0, duration: prefersReduced ? 0 : 0.7 }, "<+0.05")
        .to(copy1Ref.current, { opacity: 1, y: 0, duration: prefersReduced ? 0 : 0.6 }, "<+0.05")
        .to(ctaRef.current, { opacity: 1, y: 0, duration: prefersReduced ? 0 : 0.6 }, "<+0.05")
        .to(img1Ref.current, { scale: 1, rotateZ: 0, duration: prefersReduced ? 0 : 1 }, "<")
        .to(badgeRef.current, { opacity: 1, y: 0, duration: prefersReduced ? 0 : 0.6 }, "<+0.1");

      gsap.to(badgeRef.current, {
        y: -18,
        ease: "none",
        scrollTrigger: {
          trigger: img1WrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: block2Ref.current,
          start: "top 75%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      tl2
        .to(copy2Ref.current, { opacity: 1, y: 0, duration: prefersReduced ? 0 : 0.6 })
        .to(img2Ref.current, { scale: 1, rotateZ: 0, duration: prefersReduced ? 0 : 0.9 }, "<+0.1");

      const addHover = (wrap: HTMLElement | null, img: HTMLElement | null) => {
        if (!wrap || !img) return;
        wrap.addEventListener("mouseenter", () => {
          gsap.to(img, { scale: 1.04, rotateZ: 0.6, duration: 0.5, ease: "power3.out" });
        });
        wrap.addEventListener("mouseleave", () => {
          gsap.to(img, { scale: 1, rotateZ: 0, duration: 0.6, ease: "power3.out" });
        });
        wrap.addEventListener("mousemove", (e: MouseEvent) => {
          const rect = wrap.getBoundingClientRect();
          const rx = ((e.clientX - rect.left) / rect.width - 0.5) * 6; // tilt
          const ry = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
          gsap.to(img, { rotateY: rx, rotateX: ry, transformPerspective: 800, duration: 0.4, ease: "power2.out" });
        });
      };

      addHover(img1WrapRef.current, img1Ref.current);
      addHover(img2WrapRef.current, img2Ref.current);

      const ctaEl = ctaRef.current;
      if (ctaEl) {
        const onMove = (e: MouseEvent) => {
          const rect = ctaEl.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(ctaEl, { x: x * 0.08, y: y * 0.12, duration: 0.3, ease: "power2.out" });
        };
        const onLeave = () => gsap.to(ctaEl, { x: 0, y: 0, duration: 0.4, ease: "power3.out" });
        ctaEl.addEventListener("mousemove", onMove);
        ctaEl.addEventListener("mouseleave", onLeave);
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div ref={block1Ref} className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-24">
          <div ref={img1WrapRef} className="relative will-change-transform">
            <div className="overflow-hidden rounded-md">
              <Image
                ref={img1Ref}
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/install2-5.webp"
                alt="Luxury pool installation"
                width={590}
                height={738}
                className="h-auto w-full object-cover will-change-transform"
                priority
              />
            </div>
            <div
              ref={badgeRef}
              className="absolute bottom-8 left-8 flex h-[110px] w-[170px] flex-col items-center justify-center bg-secondary p-6 text-center text-secondary-foreground shadow-2xl"
            >
              <p className="text-4xl font-semibold">+100</p>
              <p className="mt-1 text-base">Pool Awards</p>
            </div>
          </div>

          <div className="lg:pt-20">
            <p ref={kickerRef} className="mb-6 text-xs uppercase tracking-[0.3em] text-foreground">
              OUR EXPERT
            </p>
            <h2 ref={titleRef} className="text-5xl md:text-6xl font-light leading-[0.95] text-foreground">
              STRUCTURAL
              <br />
              <em className="font-serif italic">EXCELLENCE.</em>
            </h2>
            <p ref={copy1Ref} className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              Our expert teams handle full installation with speed and precision. Each pool includes advanced waterproofing systems, tested for leak-free performance from day one — delivering reliable, long-lasting results you can trust each and every time.
            </p>
            <div className="mt-12">
              <Link
                href="/products"
                ref={ctaRef}
                className="inline-block rounded-full border border-primary px-8 py-3 text-base font-medium text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground will-change-transform"
              >
                See Products
              </Link>
            </div>
          </div>
        </div>

        <div ref={block2Ref} className="mt-32 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex h-full items-center">
            <p ref={copy2Ref} className="max-w-lg text-base leading-relaxed text-muted-foreground">
              We don't just prevent issues — we anticipate them. Through regular inspections, diagnostics, and performance tuning, our maintenance programs are designed to catch minor problems before they become major challenges.
            </p>
          </div>
          <div ref={img2WrapRef} className="flex h-full items-center will-change-transform">
            <div className="overflow-hidden rounded-md w-full">
              <Image
                ref={img2Ref}
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/install1-6.webp"
                alt="Interior pool design"
                width={590}
                height={393}
                className="h-auto w-full object-cover will-change-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructuralExcellence;
