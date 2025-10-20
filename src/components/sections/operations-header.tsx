import Image from "next/image";

const OperationsHeader = () => {
  return (
    <section className="bg-black text-white relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative text-center">
          <h1 className="font-light text-white uppercase break-words leading-none -tracking-[0.05em] select-none text-[20vw] sm:text-[18vw] md:text-[15vw] lg:text-[13rem]">
            Operations
          </h1>

          <div
            className="absolute w-[20vw] sm:w-[18vw] lg:w-[14rem] h-[30vw] sm:h-[27vw] lg:h-[21rem] z-10"
            style={{ top: '10%', left: '32%' }}
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/opp2-7.webp"
              alt="Pool operations"
              fill
              className="object-cover"
            />
          </div>

          <div
            className="absolute w-[22vw] sm:w-[20vw] lg:w-[16rem] h-[33vw] sm:h-[30vw] lg:h-[24rem] z-20"
            style={{ top: '35%', left: '56%' }}
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c5ac7b14-2867-4d12-81b1-6cb9bface704-serviceplusaquatics-com/assets/images/opp1-8.webp"
              alt="Pool detail"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsHeader;