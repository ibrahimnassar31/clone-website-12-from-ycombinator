import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const servicesData = [
  {
    title: "Preventive Maintenance",
    description: "Tailored annual or seasonal preventive care programs ensuring peak operation, longevity, and uninterrupted enjoyment of your aquatic investment.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/maint-9.webp",
    href: "#",
  },
  {
    title: "Water Quality Management",
    description: "Advanced monitoring, testing, and balancing create immaculate water quality for unparalleled clarity, safety, resulting in a pristine aquatic experience.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/water-10.webp",
    href: "#",
  },
  {
    title: "Mechanical System Servicing",
    description: "Luxury-level mechanical care—where pumps, filters, and automation operate in perfect harmony for uninterrupted aquatic experiences.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/oper-11.webp",
    href: "#",
  },
  {
    title: "Training & Documentation",
    description: "Specialized training and precision-crafted manuals empower your team to operate and maintain aquatic systems with absolute confidence.",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/training-12.webp",
    href: "#",
  },
];

const OperationsServices = () => {
  return (
    <section className="bg-black text-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-10">
        <h1 className="text-left text-[13.5vw] sm:text-8xl lg:text-[130px] font-light leading-none -tracking-[0.02em] mb-20 sm:mb-28">
          OPERATIONS
        </h1>
        <div className="border-t border-border">
          {servicesData.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group relative block border-b border-border"
            >
              <div className="flex justify-between items-start py-10 md:py-14">
                <div className="max-w-2xl pr-8">
                  <h3 className="text-subheading font-normal text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-body text-muted-foreground">
                    {service.description}
                  </p>
                </div>
                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-white flex-shrink-0 ml-4 mt-2 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="hidden lg:block absolute top-1/2 left-[55%] -translate-y-1/2 w-72 h-52 xl:w-[350px] xl:h-[233px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  width={350}
                  height={233}
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperationsServices;