import React from 'react';
import Image from 'next/image';

const ClosingBanner = () => {
  return (
    <section className="relative flex h-[70vh] w-full items-center justify-center bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/bottom2-13.webp"
          alt="Quote background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={80}
        />
      </div>
      <div className="absolute inset-0 z-10 bg-black/70" />
      <div className="relative z-20 flex flex-col items-center justify-center px-4 text-center">
        <p className="font-primary text-[32px] font-light leading-tight tracking-[-0.02em] sm:text-[40px] md:text-[48px]">
          Designing, Building, &amp; Operating
        </p>
        <p className="font-primary text-[32px] font-light leading-tight tracking-[-0.02em] sm:text-[40px] md:text-[48px]">
          Aquatic Destinations since 1989.
        </p>
      </div>
    </section>
  );
};

export default ClosingBanner;