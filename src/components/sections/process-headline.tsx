import React from 'react';

const ProcessHeadline = () => {
  return (
    <section className="bg-background text-foreground font-primary">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 lg:py-28">
        <div className="flex flex-col items-center">
          <h1 className="text-center text-5xl font-light uppercase tracking-tight md:text-7xl lg:text-8xl">
            ENVISIONED, DESIGNED, REFINED
          </h1>
          <div className="mt-10 w-full max-w-3xl md:mt-16">
            <p className="text-center text-xl font-normal text-muted-foreground md:text-2xl">
              Transforming ideas into timeless aquatic masterpieces &mdash; built
              for beauty, strength, and enduring luxury.
            </p>
            <h1 className="mt-10 text-right text-5xl font-light italic md:mt-16 md:text-7xl">
              delivered.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessHeadline;