import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactComponent as Logo } from './file.svg';
import { ReactComponent as Star } from './star.svg';
import { ReactComponent as Heart } from './heard.svg';
import { Canvas } from '@react-three/fiber'; // Import Canvas from @react-three/fiber
import { OrbitControls } from '@react-three/drei'; // Import OrbitControls from @react-three/drei
import { Model } from './Scene'; // Import the generated Model component

export default function SimpleStackingCards() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Card 1 (bottom)
  const y1 = useTransform(scrollYProgress, [0.0, 0.3], [100, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.0, 0.3], [1, 1]);
  const rotate1 = useTransform(scrollYProgress, [0.3, 0.4], [0, -3]);
  const scale1 = useTransform(scrollYProgress, [0.3,0.4], [1, 0.95]);

  // Card 2 (middle)
  const y2 = useTransform(scrollYProgress, [0.1, 0.4], [1000, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.1, 0.4], [1, 1]);
  const rotate2 = useTransform(scrollYProgress, [0.4, 0.5], [0, -1.5]);
  const scale2 = useTransform(scrollYProgress, [0.4, 0.5], [1, 0.98]);

  // Card 3 (top)
  const y3 = useTransform(scrollYProgress, [0.2, 0.5], [2000, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.2, 0.5], [1, 1]);
  const rotate3 = useTransform(scrollYProgress, [0.5, 0.7], [0, -2]);
  const scale3 = useTransform(scrollYProgress, [0.5, 0.7], [1, 0.98]);

  return (
    <div className="h-[300vh] bg-gray-100" ref={sectionRef}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-[90vw] h-[80vh]">

          {/* Card 3 */}
          <motion.div
            style={{
              y: y3,
              opacity: opacity3,
              transformOrigin: "top left"
            }}
            className="absolute inset-0 z-30 flex flex-col lg:flex-row rounded-2xl shadow-xl bg-[#F4B8D6] text-black items-center justify-between text-2xl font-bold font-athletics p-6"
          >
            <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-6 relative">
              <div className="absolute top-4 left-4 lg:-top-10 lg:left-8">
                <Heart width={50} height={50} />
              </div>
              <div className="mt-24 lg:mt-10 text-4xl lg:text-6xl">
                <span>Authentic content,</span>{" "}
                <span className="ml-2 lg:ml-[-5rem]">always</span>
              </div>
              <span className="font-athletics text-sm text-black w-full lg:w-96">
                Side-step the tourist traps. We provide up-to-date information on the best hidden hotspots that'll make you feel like you're one of the locals.
              </span>
            </div>
            <div className="w-full h-full lg:w-1/2 mt-10 lg:mt-0">
                <Canvas>
                   {/* Lighting */}
                   <ambientLight intensity={0.5} />
                   <directionalLight position={[10, 10, 5]} intensity={1} />
                   
                   {/* Scale the model 10x */}
                   <Model scale={[50, 50, 50]} />
                   
                   {/* Add OrbitControls for full interaction */}
                   <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
                 </Canvas>
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
            className="absolute inset-0 z-20 flex flex-col lg:flex-row rounded-2xl shadow-xl bg-[#3C3AAD] text-white items-center justify-between text-2xl font-bold font-athletics p-6"
          >
            <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-6 relative">
              <div className="absolute top-4 left-4 lg:-top-10 lg:left-8">
                <Star width={50} height={50} />
              </div>
              <div className="mt-24 lg:mt-10 text-4xl lg:text-6xl">
                <span>One place for</span>{" "}
                <span className="ml-2 lg:ml-[-5rem]">everything</span>
              </div>
              <span className="font-athletics text-sm text-gray-300 w-full lg:w-96">
                Side-step the tourist traps. We provide up-to-date information on the best hidden hotspots that'll make you feel like you're one of the locals.
              </span>
            </div>
            <div className="w-full h-full lg:w-1/2 mt-10 lg:mt-0">
               <Canvas>
                   {/* Lighting */}
                   <ambientLight intensity={0.5} />
                   <directionalLight position={[10, 10, 5]} intensity={1} />
                   
                   {/* Scale the model 10x */}
                   <Model scale={[50, 50, 50]} />
                   
                   {/* Add OrbitControls for full interaction */}
                   <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
                 </Canvas>
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
            className="absolute inset-0 z-10 flex flex-col lg:flex-row rounded-2xl shadow-xl bg-[#520F33] text-white items-center justify-between text-2xl font-bold font-athletics p-6"
          >
            <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-6 relative">
              <div className="absolute top-4 left-4 lg:-top-10 lg:left-8">
                <Logo width={50} height={50} />
              </div>
              <div className="mt-24 lg:mt-10 text-4xl lg:text-6xl">
                <span>Family-friendly</span>{" "}
                <span className="ml-2 lg:ml-20">recommendations</span>
              </div>
              <span className="font-athletics text-sm text-gray-300 w-full lg:w-96">
                Side-step the tourist traps. We provide up-to-date information on the best hidden hotspots that'll make you feel like you're one of the locals.
              </span>
            </div>
            <div className="w-full h-full lg:w-1/2 mt-10 lg:mt-0">
             <Canvas>
                   {/* Lighting */}
                   <ambientLight intensity={0.5} />
                   <directionalLight position={[10, 10, 5]} intensity={1} />
                   
                   {/* Scale the model 10x */}
                   <Model scale={[50, 50, 50]} />
                   
                   {/* Add OrbitControls for full interaction */}
                  <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
                 </Canvas>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
