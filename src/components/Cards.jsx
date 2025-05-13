import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactComponent as Logo } from './file.svg';
import { ReactComponent as Star } from './star.svg';
import { ReactComponent as Heart } from './heard.svg';


export default function SimpleStackingCards() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Card transforms
  const y1 = useTransform(scrollYProgress, [0.0, 0.3], [100, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.0, 0.3], [1, 1]);
  const rotate1 = useTransform(scrollYProgress, [0.3, 0.4], [0, -3]);
  const scale1 = useTransform(scrollYProgress, [0.3, 0.4], [1, 0.95]);

  const y2 = useTransform(scrollYProgress, [0.1, 0.4], [1000, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.4], [1, 1]);
  const rotate2 = useTransform(scrollYProgress, [0.4, 0.5], [0, -1.5]);
  const scale2 = useTransform(scrollYProgress, [0.4, 0.5], [1, 0.98]);

  const y3 = useTransform(scrollYProgress, [0.2, 0.5], [2000, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.2, 0.5], [1, 1]);
  const rotate3 = useTransform(scrollYProgress, [0.5, 0.7], [0, -2]);
  const scale3 = useTransform(scrollYProgress, [0.5, 0.7], [1, 0.98]);

  return (
    <div className="h-[300vh] bg-gray-100" ref={sectionRef}>
      <div className="sticky top-0 h-screen font-athletics flex items-center justify-center overflow-hidden">
        <div className="relative w-[95vw] sm:w-[90vw] max-w-[1400px] h-[85vh] sm:h-[80vh] ipad:h-full">

          {/* Card 3 */}
          <motion.div
            style={{ y: y3, opacity: opacity3, transformOrigin: "top left" }}
            className="absolute inset-0 z-30 flex flex-col rounded-3xl shadow-xl bg-[#F4B8D6] text-black p-6
                       h-[85vh] sm:h-[80vh] ipad:h-1/2"
          >
            <div className="flex flex-col gap-12 items-start text-left">
              <Heart className="w-14 h-14 mt-20 text-black" />
              <h2 className="text-3xl md:text-4xl lg:text-6xl">
                Authentic content, <br /> always
              </h2>
              <p className="text-sm md:text-base max-w-md -mt-6">
                Side-step the tourist traps. We provide up-to-date information on the best hidden hotspots that'll make you feel like you're one of the locals.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            style={{
              y: y2,
              rotate: rotate2,
              scale: scale2,
              opacity: opacity2,
              transformOrigin: "top left"
            }}
            className="absolute inset-0 z-20 flex flex-col rounded-3xl shadow-xl bg-[#3C3AAD] text-white p-6
                       h-[85vh] sm:h-[80vh] ipad:h-1/2"
          >
            <div className="flex flex-col gap-12 items-start text-left">
              <Star className="w-14 h-14 mt-20 text-white" />
              <h2 className="text-3xl md:text-4xl lg:text-6xl">
                One place for <br />everything
              </h2>
              <p className="text-sm md:text-base max-w-md -mt-6 text-gray-300">
                Side-step the tourist traps. We provide up-to-date information on the best hidden hotspots that'll make you feel like you're one of the locals.
              </p>
            </div>
          </motion.div>

          {/* Card 1 */}
          <motion.div
            style={{
              y: y1,
              rotate: rotate1,
              scale: scale1,
              opacity: opacity1,
              transformOrigin: "top left"
            }}
            className="absolute inset-0 z-10 flex flex-col rounded-3xl shadow-xl bg-[#520F33] text-white p-6
                       h-[85vh] sm:h-[80vh] ipad:h-1/2"
          >
            <div className="flex flex-col gap-12 items-start text-left">
              <Logo className="w-14 h-14 text-white mt-20" />
              <h2 className="text-3xl md:text-4xl lg:text-6xl">
                Family-friendly <br /> recommendations
              </h2>
              <p className="text-sm md:text-base -mt-6 max-w-md text-gray-300">
                Side-step the tourist traps. We provide up-to-date information on the best hidden hotspots that'll make you feel like you're one of the locals.
              </p>
            </div>
             <div className="w-full h-full md:w-1/2 mt-10 md:mt-0">
   
  </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
