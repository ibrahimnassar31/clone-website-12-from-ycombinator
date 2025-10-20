import Image from 'next/image';
import { PencilRuler, PackageCheck } from 'lucide-react';

const ManufacturingSection = () => {
  return (
    <section className="bg-black text-white dark py-20 lg:py-32">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-24 items-start">
        
        {/* Heading */}  
        <div className="lg:col-start-2">
          <div className="space-y-2 font-bold text-5xl sm:text-6xl xl:text-[5.5rem] leading-none tracking-tighter">
            <h2 className="flex items-center">
              <span className="border border-white text-sm lg:text-base font-normal py-1 px-3 rounded-full mr-4">
                SPA
              </span>
              <span>CUSTOM</span>
            </h2>
            <h2>MANUFACTURING.</h2>
            <h2 className="italic">BUILT-</h2>
            <h2>IN-HOUSE.</h2>
          </div>
        </div>
        
        {/* Image */}
        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:row-span-2 lg:col-start-1 lg:row-start-1">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/autocad4-4.webp"
            alt="Aerial view of a custom pool manufacturing process"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Descriptions */}
        <div className="lg:col-start-2 mt-4 lg:mt-0">
          <div className="space-y-8 max-w-lg">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 border border-muted-foreground rounded-full p-3 mt-1">
                <PencilRuler className="w-6 h-6 text-white" strokeWidth={1.5}/>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                From concept to completion, we meticulously self-perform every detail—crafting automated, quality-assured components designed to elevate the most refined and luxurious aquatic environments worldwide.
              </p>
            </div>
            
            <hr className="border-muted-foreground/50"/>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 border border-muted-foreground rounded-full p-3 mt-1">
                <PackageCheck className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                From vision to reality, we self-perform every phase—ensuring seamless collaboration, accelerated timelines, and exceptional results in crafting custom aquatic destinations of unmatched quality and precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;