import Image from "next/image";

const MaintenanceQuote = () => {
  return (
    <section className="bg-background text-foreground">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center p-12 md:p-20 lg:p-24">
          <p className="max-w-lg text-lg leading-relaxed text-foreground">
            We don't just prevent issues — we anticipate them. Through regular
            inspections, diagnostics, and performance tuning, our maintenance
            programs are designed to catch minor problems before they become
            major challenges.
          </p>
        </div>
        <div className="relative min-h-[450px] lg:h-auto">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/install1-6.webp"
            alt="Interior pool design"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default MaintenanceQuote;