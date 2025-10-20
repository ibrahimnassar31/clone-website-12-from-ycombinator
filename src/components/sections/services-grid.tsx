import React from 'react';
import { Drill, Pencil, Wrench } from 'lucide-react';

const CraneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 256 256"
    fill="currentColor"
    {...props}
  >
    <path d="M228.12,17.14a8,8,0,0,0-7.88-.2L102,80H32A16,16,0,0,0,16,96V200a16,16,0,0,0,16,16h88a16,16,0,0,0,16-16V168a7.81,7.81,0,0,0-.34-2.3L113.54,92,216,37.33V160H200v-8a8,8,0,0,0-16,0v8a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V24A8,8,0,0,0,228.12,17.14ZM98.05,96l19.2,64H64V96ZM48,96v64H32V96ZM32,200h0V176h88v24Z" />
  </svg>
);

const servicesData = [
  {
    icon: Drill,
    title: 'Manufacturing',
    description: 'From raw material to refined retreat, we manage every step — delivering precision-engineered results that embody excellence, efficiency, utilizing cutting-edge manufacturing expertise.',
  },
  {
    icon: Pencil,
    title: 'Design',
    description: 'A licensed engineering firm — Where your vision is sculpted with precision and artistry, transforming ideas into signature, enduring design.',
  },
  {
    icon: CraneIcon,
    title: 'Building',
    description: 'A trusted partner to visionaries—transforming architectural aquatic concepts into timeless destinations through artisan precision, luxurious finishes, and flawless execution that inspires, captivates, and endures.',
  },
  {
    icon: Wrench,
    title: 'Servicing',
    description: 'Elegant pools deserve elegant care — we combine cutting-edge automation, elevated service, and exclusive supply to protect the beauty and function of your aquatic retreat.',
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-background text-foreground">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-border">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="bg-background p-8 md:p-12 flex flex-col items-start border-r border-b border-border">
                <div className="mb-6">
                  <Icon className="h-8 w-8 text-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-normal text-foreground mb-4">{service.title}</h3>
                <p className="text-base font-normal text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;