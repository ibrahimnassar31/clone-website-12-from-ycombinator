import React from 'react';
import Image from 'next/image';

const CompanyQuote = () => {
  return (
    <section className="relative flex h-screen items-center justify-center bg-black text-foreground">
      <div className="absolute inset-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/product4-2.webp"
          alt="Quote background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/70" />
      <div className="container relative z-10 mx-auto px-5 text-center md:px-10">
        <p className="max-w-5xl mx-auto text-3xl md:text-4xl font-light leading-relaxed">
          {"Canada's premier aquatic experts, reshaping luxury, one custom-built project at a time. Where passion meets precision, and every ripple begins with a vision."}
        </p>
      </div>
    </section>
  );
};

export default CompanyQuote;