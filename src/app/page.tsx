import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero-section";
import CompanyQuote from "@/components/sections/company-quote";
import ProcessHeadline from "@/components/sections/process-headline";
import ServicesGrid from "@/components/sections/services-grid";
import ManufacturingSection from "@/components/sections/manufacturing-section";
import StructuralExcellence from "@/components/sections/structural-excellence";
import MaintenanceQuote from "@/components/sections/maintenance-quote";
import ClientLogos from "@/components/sections/client-logos";
import OperationsHeader from "@/components/sections/operations-header";
import OperationsServices from "@/components/sections/operations-services";
import ClosingBanner from "@/components/sections/closing-banner";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <HeroSection />
        <CompanyQuote />
        <ProcessHeadline />
        <ServicesGrid />
        <ManufacturingSection />
        <StructuralExcellence />
        <MaintenanceQuote />
        <ClientLogos />
        <OperationsHeader />
        <OperationsServices />
        <ClosingBanner />
      </main>
      <Footer />
    </div>
  );
}