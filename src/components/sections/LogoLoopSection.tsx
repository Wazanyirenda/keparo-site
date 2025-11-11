import LogoLoop from '../LogoLoop';
import Ansultech from '../../assets/Ansultech Fire Systems logo.png';
import Bafokeng from '../../assets/bafokeng_zambia_logo.png';
import CorridorLogistics from '../../assets/corridor logistics logo.jpeg';
import Cummins from '../../assets/Cummins logo.png';
import FQM from '../../assets/FQM logo.png';
import Lemmer from '../../assets/Lemmer Hydraulics logo.png';
import Lubambe from '../../assets/Lubambe_Logo.png';
import Lusanga from '../../assets/lusanga group logo.png';
import Mibula from '../../assets/mimbula-logo.png';
import Moxico from '../../assets/moxico-logo.webp';
import WBHO from '../../assets/WBHO logo.png';

const logos = [
  { src: Ansultech, alt: "Ansultech Fire Systems" },
  { src: Bafokeng, alt: "Bafokeng Zambia" },
  { src: CorridorLogistics, alt: "Corridor Logistics" },
  { src: Cummins, alt: "Cummins" },
  { src: FQM, alt: "FQM" },
  { src: Lemmer, alt: "Lemmer Hydraulics" },
  { src: Lubambe, alt: "Lubambe Copper Mine" },
  { src: Lusanga, alt: "Lusanga Group" },
  { src: Mibula, alt: "Mibula" },
  { src: Moxico, alt: "Moxico Resources" },
  { src: WBHO, alt: "WBHO" },
];

const LogoLoopSection = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 items-center w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Trusted by industry leaders across Zambia
          </h2>
        </div>
        <div className="mt-12">
          <LogoLoop
            logos={logos}
            speed={100}
            direction="left"
            logoHeight={40}
            gap={60}
            pauseOnHover
          />
        </div>
      </div>
    </section>
  );
};

export default LogoLoopSection;
