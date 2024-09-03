import Image from "next/image";
import cattle from "../../public/chakraConcept/cattle.jpg";
import plant from "../../public/chakraConcept/plant.jpg";
import sapling from "../../public/chakraConcept/sapling.jpg";
import seed from "../../public/chakraConcept/seed.jpg";
import tree from "../../public/chakraConcept/tree2.jpg";

const About = () => {
  return (
    <>
      <div
        className="w-full h-[85%] place-items-center rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 overflow-hidden 
          grid md:grid-flow-col sm:grid-flow-row gap-12 md:grid-cols-2 py-2 overflow-y-scroll"
        style={{ boxShadow: "2px 2px 20px 1px rgba(0, 0, 0, 0.548)" }}
      >
        <div className="aboutText m-8">
          <h1 className="text-2xl pb-4">About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quae
            earum nobis quasi repellat. Amet facere nulla dolorum accusantium
            sit dolores odio excepturi facilis laboriosam officiis dolorem,
            nobis reprehenderit molestiae.
          </p>
        </div>
        <div
          className="aboutImagesGallery w-[300px] h-[300px] md:grid-cols-[150px] md:grid-rows-[150px]
        "
        >
          <div className="rounded-full">
            <div className="rounded-full">
              <Image
                src={seed}
                width={150}
                height={150}
                alt="Picture of the seed"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="rounded-full">
            <div className=" rounded-full">
              <Image
                src={sapling}
                width={150}
                height={150}
                alt="Picture of the seed"
                className=" rounded-full"
              />
            </div>
          </div>
          <div className="rounded-full">
            <div className=" rounded-full">
              <Image
                src={plant}
                width={150}
                height={150}
                alt="Picture of the seed"
                className=" rounded-full"
              />
            </div>
          </div>
          <div className="rounded-full">
            <div className=" rounded-full">
              <Image
                src={tree}
                width={150}
                height={150}
                alt="Picture of the seed"
                className=" rounded-full"
              />
            </div>
          </div>
          {/* <div className="rounded-full">
            <div className=" rounded-full">
              <Image
                src={flower}
                width={150}
                height={150}
                alt="Picture of the seed"
                className=" rounded-full"
              />
            </div>
          </div> */}
          <div className="rounded-full">
            <div className="rounded-full">
              <Image
                src={cattle}
                width={150}
                height={150}
                alt="Picture of the seed"
                className=" rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
