import Image from "next/image";
import Link from "next/link";

const StructuralExcellence = () => {
  return (
    <section className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="relative">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/install2-5.webp"
              alt="Luxury pool installation"
              width={590}
              height={738}
              className="h-auto w-full object-cover"
            />
            <div className="absolute bottom-8 left-8 flex h-[110px] w-[170px] flex-col items-center justify-center bg-secondary p-6 text-center text-secondary-foreground">
              <p className="text-4xl font-semibold">+100</p>
              <p className="mt-1 text-base">Pool Awards</p>
            </div>
          </div>
          <div className="lg:pt-20">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-foreground">
              OUR EXPERT
            </p>
            <h2 className="text-6xl font-light leading-none text-foreground">
              STRUCTURAL
              <br />
              <em className="font-serif italic">EXCELLENCE.</em>
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              Our expert teams handle full installation with speed and precision.
              Each pool includes advanced waterproofing systems, tested for
              leak-free performance from day one — delivering reliable,
              long-lasting results you can trust each and every time.
            </p>
            <div className="mt-12">
              <Link
                href="/products"
                className="inline-block rounded-full border border-primary px-8 py-3 text-base font-medium text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                See Products
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex h-full items-center">
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
              We don't just prevent issues — we anticipate them. Through
              regular inspections, diagnostics, and performance tuning, our
              maintenance programs are designed to catch minor problems before
              they become major challenges.
            </p>
          </div>
          <div className="flex h-full items-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/install1-6.webp"
              alt="Interior pool design"
              width={590}
              height={393}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructuralExcellence;