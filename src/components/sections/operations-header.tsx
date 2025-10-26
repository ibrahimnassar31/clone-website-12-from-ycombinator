'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const OperationsHeader = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse", 
      },
    });

    gsap.set(titleRef.current, { y: 100, opacity: 0 });
    gsap.set(image1Ref.current, { y: 150, opacity: 0 });
    gsap.set(image2Ref.current, { y: 200, opacity: 0 });

    tl.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
    })
      .to(
        image1Ref.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=0.8" 
      )
      .to(
        image2Ref.current,
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=0.8" 
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative text-center">
          <h1 ref={titleRef} className="font-light text-white uppercase break-words leading-none -tracking-[0.05em] select-none text-[20vw] sm:text-[18vw] md:text-[15vw] lg:text-[13rem]">
            Operations
          </h1>

          <div
            ref={image1Ref}
            className="absolute w-[20vw] sm:w-[18vw] lg:w-[14rem] h-[30vw] sm:h-[27vw] lg:h-[21rem] z-10"
            style={{ top: "10%", left: "32%" }}
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/opp2-7.webp"
              alt="Pool operations"
              fill
              className="object-cover"
            />
          </div>

          <div
            ref={image2Ref}
            className="absolute w-[22vw] sm:w-[20vw] lg:w-[16rem] h-[33vw] sm:h-[30vw] lg:h-[24rem] z-20"
            style={{ top: "35%", left: "56%" }}
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/opp1-8.webp"
              alt="Pool detail"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsHeader;