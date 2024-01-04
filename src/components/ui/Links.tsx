import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

// export const AnimatedLink = () => {
//   return (
//     <section className="border-2 border-red-500 mt-[10.88rem]">
//       <div className="max-w-5xl mx-auto">
//         <Link
//           heading="Home"
//           imgSrc="/imgs/random/11.jpg"
//           href="#"
//         />
//         <Link
//           heading="Works"
//           imgSrc="/imgs/random/6.jpg"
//           href="#"
//         />
//         <Link
//           heading="About"
//           imgSrc="/imgs/random/4.jpg"
//           href="#"
//         />
//         <Link
//           heading="Graphics"
//           imgSrc="/imgs/random/5.jpg"
//           href="#"
//         />
//         <Link
//           heading="CV"
//           imgSrc="/imgs/random/10.jpg"
//           href="#"
//         />
//       </div>
//     </section>
//   );
// };

interface LinksProps {
   handleRoute: React.MouseEventHandler<HTMLElement>;
  to: string;
  children: string;
  imgSrc: string
}

export const Links: React.FunctionComponent<LinksProps> = ({ handleRoute, imgSrc, to, children }) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={to}
      onClick={handleRoute}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="relative flex items-center justify-between duration-500 border-b-2"
    >
      
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block md:text-[4rem] font-black text-[#fff] transition-colors duration-500 border-2 "
        >
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
       
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 object-cover w-32 h-24 rounded-lg md:h-48 md:w-64"
        alt={`Image representing a link for ${children}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};