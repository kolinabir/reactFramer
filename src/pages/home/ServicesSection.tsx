import BatteryReplacement from "@/components/ServiceTiles/BatteryReplacement";
import ChipsetReplacement from "@/components/ServiceTiles/ChipsetReplacement";
import DataRecovery from "@/components/ServiceTiles/DataRecovery";
import Container from "@/components/container";

const ServicesSection = () => {
  return (
    <Container className="my-40">
      <div className="flex-col  flex justify-between items-center space-y-5 text-center">
        <h1>Services that we provide</h1>
        <p className="max-w-[80ch] mb-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam velit
          neque Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          esse
        </p>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <BatteryReplacement></BatteryReplacement>
        <ChipsetReplacement></ChipsetReplacement>
        <DataRecovery></DataRecovery>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-red-500 h-[415px] rounded-2xl col-span-12 md:col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default ServicesSection;
