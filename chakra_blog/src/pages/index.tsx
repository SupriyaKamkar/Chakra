import Image from "next/image";
import { Merienda } from "next/font/google";
import MultiLayerParallax from "@/components/MultiLayerParallax";
import NavBar from "@/components/Navbar";
import WavyText from "@/components/WavyText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { CircularImageGallery } from "@/components/CircularImageGallery";
import ThreeDCarousel from "@/components/ThreeDCarousel";
import About from "@/components/About";

const inter = Merienda({ subsets: ["latin"] });

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const foregroundY = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    ["0%", "0%", "500%"]
  );

  const foregroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7],
    ["100%", "30%", "0%"]
  );

  return (
    <main className={inter.className}>
      <div className="h-screen">
        <div
          ref={ref}
          className="inset-0 z-0 bg-fixed bg-cover h-screen overflow-clip"
          // className="inset-0 z-0 bg-cover h-screen "
          style={{
            backgroundImage: `url(/parallax5/bg.png)`,
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        >
          <NavBar /> {/* make height 86% */}
          <div className="h-full w-full snap-y snap-mandatory overflow-y-scroll">
            <div className="h-[86%] w-full snap-always snap-center">
              <div className="h-full w-full p-6 ">
                <motion.div
                  initial={{
                    backgroundColor: "rgb(75 85 99 / 0.4)",
                  }}
                  animate={{
                    backgroundColor: [
                      "rgb(75 85 99 / 0.3)",
                      "rgb(75 85 99 / 0.2)",
                      "rgb(187 247 208 / 0.2)",
                    ],
                  }}
                  transition={{ ease: "easeIn", duration: 4 }}
                  className=" w-full h-full flex justify-center rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 overflow-hidden shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#010f,0_0_15px_#010f,0_0_30px_#010f]"
                >
                  <motion.h1 className="text-6xl mt-20  md:text-7xl md:mt-8 relative z-10 animated-background bg-gradient-to-r from-teal-700 via-cyan-500  to-teal-700 text-transparent  bg-clip-text font-extrabold  text-center select-auto ">
                    CHAKRA
                  </motion.h1>
                  <FontAwesomeIcon
                    icon={faRegistered}
                    className="mt-16 md:mt-6 text-teal-700 "
                  />
                  {/* working */}
                  {/* <div className="drop-container">
                <motion.div className=" drop "></motion.div>
              </div> */}

                  <div className="drop-container">
                    <motion.div
                      className="absolute w-1/2 h-1/2 "
                      initial={{
                        width: "50%",
                        height: "50%",
                        borderRadius: "100% 5% 100%  100%",
                        // background: "rgb(135, 206, 235)",
                        backgroundColor: "#b3cded",
                        transform: "rotate(-45deg)",
                        top: "-2.5rem",
                        marginLeft: "55px",
                        boxShadow:
                          "-10px 10px 12px #769ee4, inset -6px 6px 10px #8fb0e7,inset 2px 6px 10px #4b88d3, inset 20px -20px 22px white,inset 40px -40px 44px #a8ceff",
                      }}
                      animate={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "100% 100% 100% 100%",
                        transform: [
                          "rotate(-45deg)",
                          "rotate(-45deg)",
                          "rotate(0deg)",
                        ],
                        backgroundColor: [
                          "rgb(135, 206, 235)",
                          "rgb(135, 206, 235)",
                          "rgb(255, 145, 0)",
                        ],
                        top: "0",
                        marginLeft: "-5px",
                        backgroundImage: [
                          "radial-gradient(circle,rgba(224, 255, 255, 1) 45%,rgba(245, 158, 11, 0.2191001400560224) 90%)",
                          "radial-gradient(circle,rgba(224, 255, 255, 1) 45%,rgba(245, 158, 11, 0.2191001400560224) 90%)",
                          "radial-gradient(circle,rgba(245, 158, 11, 1) 30%,rgba(255, 100, 37, 1) 60%,rgba(236, 72, 153, 1) 81%)",
                        ],
                        boxShadow: [
                          "-10px 10px 12px #769ee4, inset -6px 6px 10px #8fb0e7,inset 2px 6px 10px #4b88d3, inset 20px -20px 22px white,inset 40px -40px 44px #a8ceff",
                          "-10px 10px 12px #769ee4, inset -6px 6px 10px #8fb0e7,inset 2px 6px 10px #4b88d3, inset 20px -20px 22px white,inset 40px -40px 44px #a8ceff",
                          "0 0 15px hsla(0deg, 0%, 0%, 0.5)",
                        ],
                        // "none",
                        // "-10px 10px 12px #fba11b, inset -6px 6px 10px #fb7c1b,inset 2px 6px 10px #e56b1a, inset 20px -20px 22px rgb(255, 255, 255),inset 40px -40px 44px #ffc1a8;",
                      }}
                      transition={{ ease: "easeOut", duration: 3 }}
                    ></motion.div>
                  </div>
                  <motion.div
                    className="absolute inset-0 z-20"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: "easeIn", duration: 3.5 }}
                    style={{
                      backgroundImage: `url(parallax5/fore.png)`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                  >
                    {" "}
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className="h-full w-full p-6 snap-always snap-center">
              {/* <ThreeDCarousel></ThreeDCarousel> */}
              <About></About>
            </div>
          </div>
          {/* <div className="w-full bg-transparent">
            <div className="max-w-lg space-y-4 mx-auto py-24 bg-transparent">
               <CircularImageGallery></CircularImageGallery> 
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                quae earum nobis quasi repellat. Amet facere nulla dolorum
                accusantium sit dolores odio excepturi facilis laboriosam
                officiis dolorem, nobis reprehenderit molestiae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                quae earum nobis quasi repellat. Amet facere nulla dolorum
                accusantium sit dolores odio excepturi facilis laboriosam
                officiis dolorem, nobis reprehenderit molestiae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                quae earum nobis quasi repellat. Amet facere nulla dolorum
                accusantium sit dolores odio excepturi facilis laboriosam
                officiis dolorem, nobis reprehenderit molestiae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                quae earum nobis quasi repellat. Amet facere nulla dolorum
                accusantium sit dolores odio excepturi facilis laboriosam
                officiis dolorem, nobis reprehenderit molestiae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                quae earum nobis quasi repellat. Amet facere nulla dolorum
                accusantium sit dolores odio excepturi facilis laboriosam
                officiis dolorem, nobis reprehenderit molestiae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                quae earum nobis quasi repellat. Amet facere nulla dolorum
                accusantium sit dolores odio excepturi facilis laboriosam
                officiis dolorem, nobis reprehenderit molestiae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
                quae earum nobis quasi repellat. Amet facere nulla dolorum
                accusantium sit dolores odio excepturi facilis laboriosam
                officiis dolorem, nobis reprehenderit molestiae.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </main>
  );
}
