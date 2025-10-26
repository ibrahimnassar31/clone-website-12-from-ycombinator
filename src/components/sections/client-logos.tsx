import React from 'react';

interface Logo {
  src: string;
  alt: string;
}

interface LogoRowProps {
  logos: Logo[];
  direction: 'left' | 'right';
}

const logos = [
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/marriott-2.svg", alt: "Marriott" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/westbank-3.svg", alt: "Westbank" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/tridel-4.svg", alt: "Tridel" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/ritz-5.svg", alt: "Ritz Carlton" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/fourseasons-6.svg", alt: "Four Seasons" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/hariri-7.svg", alt: "Hariri Pontarini Architects" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/big-8.svg", alt: "BIG" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/gulf-9.svg", alt: "Great Gulf" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/cf-10.svg", alt: "CF" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/ibi-11.svg", alt: "IBI Group" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/fitz-12.svg", alt: "Fitzrovia" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/kingsett-13.svg", alt: "Kingsett" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/mattamy-14.svg", alt: "Mattamy Homes" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/minto-15.svg", alt: "Minto" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/ed-16.svg", alt: "EllisDon" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/dialog-17.svg", alt: "Dialog" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/bpd-18.svg", alt: "BDP Quadrangle" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/granite-19.svg", alt: "Granite Club" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/boulevard-20.svg", alt: "The Boulevard Club" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/amica-21.svg", alt: "Amica" },
  { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/svgs/first-22.svg", alt: "FirstService" },
];

const LogoRow = ({ logos, direction }: LogoRowProps) => {
  const duplicatedLogos = [...logos, ...logos, ...logos];
  
  return (
    <div className="relative overflow-hidden border-b border-gray-200">
      <div 
        className={`flex ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        style={{ width: 'fit-content' }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex h-32 md:h-40 items-center justify-center px-8 md:px-12 flex-shrink-0"
            style={{ minWidth: '200px' }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-auto w-auto max-h-16 max-w-[140px] object-contain opacity-60 transition-opacity duration-300 hover:opacity-100"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ClientLogos = () => {
  const row1 = logos.slice(0, 7);
  const row2 = logos.slice(7, 14);
  const row3 = logos.slice(14, 22);

  return (
    <>
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      <section className="bg-black py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="w-full border-t border-gray-200" />
          <h3 className="mt-16 md:mt-24 mb-12 md:mb-16 text-center text-sm font-normal uppercase tracking-wider text-gray-500">
            Chosen by Visionaries
          </h3>
          
          <div className="border-t border-gray-200 overflow-hidden">
            <LogoRow logos={row1} direction="left" />
            <LogoRow logos={row2} direction="right" />
            <LogoRow logos={row3} direction="left" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientLogos;