import Image from "next/image";
import seed from "../../public/chakraConcept/seed.jpg";
import sapling from "../../public/chakraConcept/sapling.jpg";
import tree from "../../public/chakraConcept/tree.jpg";
import plant from "../../public/chakraConcept/plant.jpg";
import cattle from "../../public/chakraConcept/cattle.jpg";

const About = () => {
  return (
    <>
      <div
        className="w-full h-[85%] place-items-center rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 overflow-hidden 
          grid md:grid-flow-col sm:grid-flow-row gap-6"
        style={{ boxShadow: "2px 2px 20px 1px rgba(0, 0, 0, 0.548)" }}
      >
        <div></div>
        <div className="aboutImagesGallery">
          <Image
            src={seed}
            width={150}
            height={150}
            alt="Picture of the seed"
            className=" rounded-full"
          />

          <Image
            src={sapling}
            width={150}
            height={150}
            alt="Picture of the seed"
            className=" rounded-full"
          />
          <Image
            src={plant}
            width={150}
            height={150}
            alt="Picture of the seed"
            className=" rounded-full"
          />
          <Image
            src={tree}
            width={150}
            height={150}
            alt="Picture of the seed"
            className=" rounded-full"
          />
          <Image
            src={cattle}
            width={150}
            height={150}
            alt="Picture of the seed"
            className=" rounded-full"
          />
        </div>
      </div>
    </>
  );
};
export default About;
