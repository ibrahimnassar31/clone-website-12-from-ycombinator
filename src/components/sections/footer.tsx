import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="font-body bg-black text-white flex flex-col items-center px-5 md:px-10 lg:px-20 pt-[100px] pb-[50px]">
      <div className="w-full max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-12 lg:gap-x-[150px] mb-[50px]">
          {/* EXPLORE */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[11px] font-normal tracking-[2px] text-muted-foreground mb-[10px]">EXPLORE</h1>
            <Link href="/contact" className="text-sm text-foreground hover:text-gray-400 transition-colors">Make a Connection</Link>
            <Link href="/about" className="text-sm text-foreground hover:text-gray-400 transition-colors">About us</Link>
            <Link href="/products" className="text-sm text-foreground hover:text-gray-400 transition-colors">Products</Link>
            <Link href="/services" className="text-sm text-foreground hover:text-gray-400 transition-colors">Services</Link>
            <Link href="/careers" className="text-sm text-foreground hover:text-gray-400 transition-colors">Careers</Link>
            <Link href="/policies" className="text-sm text-foreground hover:text-gray-400 transition-colors">Policies</Link>
            <Link href="/team" className="text-sm text-foreground hover:text-gray-400 transition-colors">Team Portal</Link>
          </div>

          {/* FOLLOW US */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[11px] font-normal tracking-[2px] text-muted-foreground mb-[10px]">FOLLOW US</h1>
            <a href="https://www.instagram.com/serviceplusaquatics/?hl=en" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-gray-400 transition-colors">Instagram</a>
            <a href="https://www.facebook.com/ServicePlusAquatics/" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-gray-400 transition-colors">Facebook</a>
            <a href="https://www.linkedin.com/company/service-plus-aquatics?originalSubdomain=ca" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-gray-400 transition-colors">LinkedIn</a>
          </div>

          {/* CONTACT US */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[11px] font-normal tracking-[2px] text-muted-foreground mb-[10px]">CONTACT US</h1>
            <a href="mailto:reception@serviceplusaquatics.com" className="text-sm text-foreground hover:text-gray-400 transition-colors">reception@serviceplusaquatics.com</a>
            <a href="tel:1-905-569-7899" className="text-sm text-foreground hover:text-gray-400 transition-colors">1-905-569-7899</a>
          </div>
        </div>

        {/* Company Info */}
        <div className="mb-[50px]">
          <h1 className="text-xl font-semibold mb-2">SPA</h1>
          <p className="text-sm text-muted-foreground">Where Visionary Engineering Meets Aquatic Elegance.</p>
          <p className="text-sm text-muted-foreground">Luxury aquatic environments crafted with passion and precision.</p>
        </div>

        {/* Bottom bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center pt-5 border-t border-border gap-2 md:gap-4">
          <p className="text-xs text-muted-foreground">© 2025 SPA, All Rights Reserved</p>
          <p className="text-xs text-muted-foreground">Website By: Justin Parisio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;