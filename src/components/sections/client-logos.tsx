import Image from "next/image";

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

const ClientLogos = () => {
    return (
        <section className="bg-background py-20 md:py-32">
            <div className="container">
                <div className="w-full border-t border-secondary" />
                <h3 className="mt-16 md:mt-24 mb-12 md:mb-16 text-center text-subheading font-normal uppercase tracking-wider text-muted-foreground">
                    Chosen by Visionaries
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-7 border-l border-t border-secondary">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="relative flex h-32 items-center justify-center border-b border-r border-secondary p-6 md:h-40 md:p-8"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={140}
                                height={60}
                                className="h-auto w-auto max-h-16 max-w-full object-contain opacity-70 transition-opacity duration-300 hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;