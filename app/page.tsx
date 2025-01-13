"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedin, FaPlay } from "react-icons/fa6";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaLayerGroup } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { TbBrandSpotify } from "react-icons/tb";
import { motion } from "framer-motion";
import { TiThMenu } from "react-icons/ti";

const Page = () => {
  const [activeBrand, setActiveBrand] = useState("starks");
  const [activeVision, setActiveVision] = useState("Idea");
  const [toggleNav, setToggleNav] = useState(false);

  const handleBrandClick = ({ brand }: { brand: string }) => {
    setActiveBrand(brand);
  };
  const handleVisionClick = ({ brand }: { brand: string }) => {
    setActiveVision(brand);
  };

  const brandsData = [
    {
      name: "John, Management",
      brand: "Starks",
      image: "/john.jpeg",
      details:
        "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.",
    },
    {
      name: "Testimony, Co-founder",
      brand: "ExecutivePros",
      image: "/executive-pro-ceo.jpeg",
      details:
        "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
    },
    {
      name: "Edwin, Former CTO",
      brand: "Stac AI",
      image: "/edwin.jpeg",
      details:
        "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the wa",
    },
    {
      name: "Iwaria, Founder",
      brand: "Iwaria",
      image: "/wwwl.jpeg",
      details:
        "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.",
    },
    {
      name: "Christiana, Founder",
      brand: "Beaupreneur",
      image: "/christina.webp",
      details:
        "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver—they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = brandsData.findIndex(
        (brand) => brand.brand === activeBrand
      );
      const nextIndex = (currentIndex + 1) % brandsData.length;
      setActiveBrand(brandsData[nextIndex].brand);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeBrand, brandsData]);

  useEffect(() => {
    if (!activeBrand) {
      setActiveBrand(brandsData[0].brand);
    }
  }, [activeBrand, brandsData]);

  const companyVison = [
    {
      brand: "Idea",
      vision: "Your vision is unique.",
      image: "/camera-man.svg",
      content:
        "Nurture Your Idea into a Blueprint for Success with our strategic insights and industry expertise. Your vision is unique, let’s us shape it.",
    },
    {
      brand: "Design",
      vision: "Crafting the blueprint for success.",
      image: "/plan-design.svg",
      content:
        "Design is more than aesthetics, it’s about creating user experiences that resonate and convert. Our design experts shape your vision into a stunning reality.",
    },
    {
      brand: "Develop",
      vision: "Turning blueprints into reality.",
      image: "/plan-develop.svg",
      content:
        "We breathe life into designs, building robust platforms ready to disrupt markets. Harness the experience of our development team to bring your Concept to Life.",
    },
    {
      brand: "Launch",
      vision: "Your launchpad to the market.",
      image: "/plan-launch.svg",
      content:
        "Launching is just the beginning, we ensure your product makes a splash and keeps making waves, ensuring a continual customer acquisition.",
    },
  ];

  const targets = [50, 120, 10, 10];
  const [counts, setCounts] = useState(targets.map(() => 0));
  const [isCounting, setIsCounting] = useState(false);
  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && !isCounting) {
            setIsCounting(true);
            handleCount(index);
          }
        });
      },
      { threshold: 1.0 }
    );

    counterRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [isCounting]);

  const handleCount = (index: number) => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, i) =>
          i === index && count < targets[index] ? count + 1 : count
        )
      );
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
    }, targets[index] * 50);
  };

  return (
    <div
      style={{
        backgroundColor: "rgb(3,5,22)",
        background:
          "linear-gradient(180deg, rgba(3,5,22,1) 0%, rgba(7,22,38,1) 100%)",
      }}
      className="lg:p-24 md:p-24 p-10 overflow-x-hidden"
    >
      <div className="w-full fixed top-0 left-0 py-[1.8rem] flex md:justify-around lg:justify-around justify-between lg:gap-[24rem] gap-10 px-10 md:px-0 lg:px-0 items-center z-30 backdrop-blur-md">
        <div className="flex items-center gap-20">
          <Link href="/" className="text-3xl font-bold blur-[1px]">
            c forcythe
          </Link>
          <div className="hidden md:flex items-center gap-4 text-base">
            <Link href="#">
              <span className="">About</span>
            </Link>
            <Link href="#">
              <span className="">Services</span>
            </Link>
            <Link href="#">
              <span className="">Portfolio</span>
            </Link>
            <Link href="#">
              <span className="">Studio</span>
            </Link>
            <Link href="#">
              <span className="">Foundation</span>
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="relative w-fit group">
            <button
              data-cal-namespace=""
              data-cal-link="forcythe/discovery"
              data-cal-config='{"layout":"month_view"}'
              className=" w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
               bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md 
               "
            >
              Book a Call
            </button>
            <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]" />
          </div>
        </div>
        <div
          onClick={() => setToggleNav(!toggleNav)}
          className=" bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer"
        >
          <TiThMenu />
        </div>
      </div>
      {toggleNav && (
        <div
          className="rounded-[20px] fixed shadow-lg text-left shadow-black py-10 pr-24 pl-8 w-fit right-[8%] z-[999] top-36 space-y-4"
          style={{ backgroundColor: "rgb(3,5,22)" }}
        >
          <p>About</p>
          <p>Services</p>
          <p>Portfolio</p>
          <p>Studio</p>
          <p>Foundation</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
      )}
      <main className="w-full mt-[6.3rem] md:mt-[6.8rem]">
        <div className="md:min-h-screen bg-[url('./images/header-background.svg')] bg-no-repeat bg-top">
          <div className="section-padding">
            <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">
              <div className="max-w-[56rem]">
                <h1 className="md:text-[80px] lg:text-[80px] text-[40px] font-semibold leading-none">
                  We build <span className="text-[#064386]">products</span> that
                  shape a better
                </h1>
                <div className="md:min-h-[60px] lg:min-h-[60px] min-h-[30px]" />
                <div className="mb-8 max-w-3xl">
                  <div className="">
                    <p className="text-base md:text-lg lg:text-[18px] mb-8 leading-7">
                      We’re the architects of digital excellence across
                      industries. We redefine business with cutting-edge digital
                      strategies that invokes sector-wide transformation.
                    </p>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="relative w-fit group">
                    <button
                      data-cal-namespace=""
                      data-cal-link="forcythe/discovery"
                      data-cal-config='{"layout":"month_view"}'
                      className=" w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
               bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md 
               "
                    >
                      Book a Call
                      <FaPlay />
                    </button>

                    <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:py-10 lg:py-10 py-4">
            <div className="min-h-[60px]">
              <div className="">
                <div className="">
                  <p className="md:text-[2rem] text-[21px] leading-[2.5rem] sm:text-[2.2rem] font-semibold sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center">
                    Success in <span className="text-[#60a6e7]">Motion</span> –
                    Our clients’ journey
                  </p>
                </div>
              </div>

              <>
                <div
                  className="overflow-hidden min-w-full"
                  style={{
                    whiteSpace: "nowrap",
                    position: "relative",
                    width: "100%",
                    height: "300px",
                  }}
                >
                  <motion.div
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 40,
                      ease: "linear",
                    }}
                    style={{
                      display: "flex",
                    }}
                  >
                    <div className="flex gap-3 items-center w-full">
                      <Image
                        src="/images.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images1.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images2.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images3.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="flex gap-3 items-center w-full">
                      <Image
                        src="/images4.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images1.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images2.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                    </div>
                    {/* Duplicate the sets of images for continuous scrolling */}
                    <div className="flex gap-3 items-center w-full">
                      <Image
                        src="/images.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images1.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images2.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images3.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="flex gap-3 items-center w-full">
                      <Image
                        src="/images4.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images1.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images2.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                    </div>
                  </motion.div>
                </div>

                <div
                  className="lg:block md:block hidden overflow-hidden min-w-full"
                  style={{
                    whiteSpace: "nowrap",
                    position: "relative",
                    width: "100%",
                    height: "300px",
                  }}
                >
                  <motion.div
                    animate={{ x: ["0%", "100%"] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 40,
                      ease: "linear",
                    }}
                    style={{
                      display: "flex",
                    }}
                  >
                    <div className="flex gap-3 items-center w-full">
                      <Image
                        src="/images.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images1.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images2.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images3.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="flex gap-3 items-center w-full">
                      <Image
                        src="/images4.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images1.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images2.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                    </div>
                    {/* Duplicate the sets of images for continuous scrolling */}
                    <div className="flex gap-3 items-center w-full">
                      <Image
                        src="/images.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images1.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images2.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images3.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                    </div>
                    <div className="flex gap-3 items-center w-full">
                      <Image
                        src="/images4.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images1.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images2.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                      <Image
                        src="/images.jpg"
                        alt="image"
                        width={500}
                        height={500}
                      />
                    </div>
                  </motion.div>
                </div>
              </>
            </div>
            <div
              style={{
                backgroundColor: "rgb(3,5,22)",
                background:
                  "linear-gradient(0deg, rgba(3, 5, 22, 0) 20%, rgba(3, 5, 22, 1) 80%)",
              }}
              className="flex flex-col gap-5"
            />
          </div>
        </div>

        <div className="pb-6">
          <div className="pb-8">
            <h1 className="lg:text-[41px] text-[31px] font-semibold text-center lg:px-60">
              Discover the{" "}
              <span className="text-[#60a6e7]">transformative stories</span> of
              startups that scaled new heights with us
            </h1>
          </div>
          <div className="w-full overflow-hidden">
            <div className="w-full border-[1px] border-[#06438C] gap-1 rounded-full grid grid-cols-5 lg:min-w-[750px]">
              {brandsData.map((brand) => (
                <div
                  key={brand.brand}
                  onClick={() => handleBrandClick({ brand: brand.brand })}
                  className={`w-full md:px-[1.1rem]  lg:px-[1.1rem] ${
                    activeBrand === brand.brand ? "bg-[#0c2645]" : ""
                  } ${activeBrand === "Starks" && "rounded-l-full"} ${
                    activeBrand === "Beaupreneur" && "rounded-r-full"
                  }  py-6 cursor-pointer transition-all duration-300`}
                >
                  <div className="w-fit h-full col mx-auto md:gap-1.5 lg:gap-1.5 text-white md:text-[17px] lg:text-[17px] gap-1 font-medium min-w-fit flex items-center justify-center">
                    <button>{brand.brand}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {brandsData
            .filter((brand) => brand.brand === activeBrand)
            .map((brand, key) => (
              <div
                key={key}
                className={`mt-5 ${
                  activeBrand === "ExecutivePros"
                    ? "lg:ml-[16rem]"
                    : activeBrand === "Stac AI"
                    ? "lg:ml-[33rem]"
                    : activeBrand === "Iwaria"
                    ? "lg:ml-[20rem]"
                    : activeBrand === "Beaupreneur"
                    ? "lg:ml-[40rem]"
                    : ""
                }
                
                w-full h-full md:w-[60%] leading-8 space-y-2 lg:w-[45%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-[#0c2645]`}
              >
                <div className="sm:basis-[58%] flex-col flex justify-between space-y-6 py-2 pr-3">
                  <p className="text-[20px] font-bold">{brand.brand}</p>
                  <p className="text-[16px] font-semibold mb-2">
                    {brand.details}
                  </p>
                  <p className="text-[15px] font-semibold mb-4">{brand.name}</p>
                </div>
                <div className="w-full h-full sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0">
                  <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl" />
                  <Image
                    alt={brand.name}
                    loading="lazy"
                    className="rounded-xl relative object-top"
                    width={150}
                    height={150}
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      objectFit: "cover",
                      color: "transparent",
                    }}
                    src={brand.image}
                  />
                </div>
              </div>
            ))}
        </div>

        <div className="section-padding py-20">
          <div className="mb-12 xl:mb-0 max-w-[45rem]">
            <div className="">
              <p className="text-[2rem] leading-[2.5rem] font-semibold sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]">
                From <span className="text-[#60a6e7]">Spark</span> to{" "}
                <span className="text-[#60a6e7]">Spotlight</span>: we take you
                every step of the way to success.
              </p>
            </div>
          </div>
          <div className="flex lg:items-end flex-col md:flex-row">
            <div className="basis-1/2 flex mb-8 md:mb-0">
              <div className="md:pr-10">
                <div className="border-4 border-[#b3d0f2] mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
                  {companyVison.map((brand) => (
                    <div
                      //   key={brand.brand}
                      //   onClick={() => handleVisionClick({ brand: brand.brand })}
                      //   className={`${
                      //     activeVision === brand.brand
                      //       ? "bg-gray-300 text-black"
                      //       : "text-white"
                      //   } overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full bg-transparent text-center text-base font-medium cursor-pointer transition-all duration-300`}
                      // >
                      key={brand.brand}
                      onClick={() => handleVisionClick({ brand: brand.brand })}
                      className={`${
                        activeVision === brand.brand
                          ? "bg-[#60a6e7] text-black"
                          : "text-white"
                      } overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full bg-transparent text-center text-base font-medium cursor-pointer transition-all duration-300`}
                      style={{
                        backgroundColor:
                          activeVision === brand.brand
                            ? "#60a6e7"
                            : "transparent", // Tailwind's gray-300 hex
                      }}
                    >
                      <div className="w-fit h-full col mx-auto gap-1.5 text-[17px] font-medium min-w-fit flex items-center justify-center">
                        <button>{brand.brand}</button>
                      </div>
                    </div>
                  ))}
                </div>

                {companyVison
                  .filter((brand) => brand.brand === activeVision)
                  .map((brand, key) => (
                    <>
                      <div key={key} className="">
                        <p className="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12">
                          {brand.vision}
                        </p>
                      </div>
                      <div className="">
                        <p className="text-darkGrey text-[18px] md:text-lg mb-8 leading-7">
                          {brand.content}
                        </p>
                      </div>
                    </>
                  ))}

                <div className="relative w-fit group">
                  <button
                    className="action-button custom-animate w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
               bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md 
               "
                  >
                    Book a call
                    <FaPlay />
                  </button>
                  <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]" />
                </div>
              </div>
            </div>

            {companyVison
              .filter((brand) => brand.brand === activeVision)
              .map((brand, key) => (
                <div
                  key={key}
                  className="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0"
                >
                  <Image
                    alt={brand.brand}
                    loading="lazy"
                    width={200}
                    height={200}
                    decoding="async"
                    className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]"
                    style={{ color: "transparent" }}
                    src={brand.image}
                  />
                </div>
              ))}
          </div>
        </div>
        <div
          style={{
            backgroundColor: "rgb(12,38,69)",
            background:
              "linear-gradient(0deg, rgba(12,38,69,1) 20%, rgba(3,5,22,1) 70%)",
          }}
          className="section-padding py-14"
        >
          <div className="">
            <div className="">
              <p className="text-[2rem] leading-[2.5rem] text-[#60a6e7] py-2 font-semibold sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-accent2 text-center">
                Your best call for B2B/B2C product innovation
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
            <div className="relative flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left">
              <div className="w-auto text-white z-10 bg-transparent rounded-[inherit]">
                <div className="w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-darkGrey custom-animate">
                  <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                    <FaLayerGroup />
                  </div>
                  <h4 className="text-2xl font-medium mb-5">Experience</h4>
                  <div className="">
                    <div className="">
                      <p className="mb-0 text-darkGrey text-[17.5px]">
                        Decades of collective wisdom. Leverage our extensive
                        experience to avoid common pitfalls and accelerate your
                        business growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
                style={{
                  filter: "blur(2px)",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background:
                    "radial-gradient(30.7% 10% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
                  animation: "moveAround 10s infinite linear",
                }}
              />
              <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]" />
            </div>
            <div className="relative flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left">
              <div className="w-auto text-white z-10 bg-transparent rounded-[inherit]">
                <div className="w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-darkGrey custom-animate">
                  <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                    <FaLayerGroup />
                  </div>
                  <h4 className="text-2xl font-medium mb-5">Quick Support</h4>
                  <div className="">
                    <div className="">
                      <p className="mb-0 text-[17.5px]">
                        We are your reliable partner, always there when you need
                        us, ensuring smooth operations at every stage of your
                        growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
                style={{
                  filter: "blur(2px)",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background:
                    "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
                }}
              />
              <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]" />
            </div>
            <div className="relative flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left">
              <div className="w-auto text-white z-10 bg-transparent rounded-[inherit]">
                <div className="w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-darkGrey custom-animate">
                  <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                    <FaLayerGroup />
                  </div>
                  <h4 className="text-2xl font-medium mb-5">Cost Savings</h4>
                  <div className="">
                    <div className="">
                      <p className="mb-0 text-darkGrey text-[17.5px]">
                        Maximising impact, minimising costs efficiency is key.
                        We provide cost-effective solutions without compromising
                        on quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
                style={{
                  filter: "blur(2px)",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  background:
                    "radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
                }}
              />
              <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]" />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "rgb(12,38,69)",
            background:
              "linear-gradient(180deg, rgba(12,38,69,1) 20%, rgba(3,5,22,1) 60%)",
          }}
          className="py-14 md:py-20 xl:py-28"
        >
          <div className="max-w-[52rem] mx-auto bg-[url('./images/arc.svg')] lg:bg-[url('./images/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
            <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
              <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
                <div className="">
                  <p className="text-xl md:text-2xl lg:text-3xl font-medium">
                    We build solutions that help{" "}
                    <span className="text-[#60a6e7]">businesses</span> of all
                    sizes to <span className="text-[#60a6e7]">scale</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-evenly sm:justify-between items-center gap-3">
                {/* {["Clients", "Projects", "Team Leads", "Glorious Years"].map(
                  (label, index) => (
                    <div key={index} className="flex flex-col gap-3 w-fit">
                      <div
                        ref={(el) => (counterRefs.current[index] = el)}
                        className="text-[15px] sm:text-base md:text-lg font-semibold whitespace-nowrap max-w-full overflow-hidden text-ellipsis"
                        style={{ textAlign: "center" }}
                      >
                        <h1 className="text-[45px] text-[#60a6e7] font-semibold pb-2">
                          {counts[index] < targets[index]
                            ? counts[index]
                            : `${targets[index]}+`}
                        </h1>
                        {label}
                      </div>
                    </div>
                  )
                )} */}

                {["Clients", "Projects", "Team Leads", "Glorious Years"].map(
                  (label, index) => (
                    <div key={index} className="flex flex-col gap-3 w-fit">
                      <div
                        ref={(el) => {
                          counterRefs.current[index] = el;
                        }}
                        className="md:text-[15px] lg:text-lg text-[12px] font-semibold whitespace-nowrap max-w-full overflow-hidden text-ellipsis"
                        style={{ textAlign: "center" }}
                      >
                        <h1 className="lg:text-[45px] text-[#60a6e7] font-semibold pb-2">
                          {counts[index] < targets[index]
                            ? counts[index]
                            : `${targets[index]}+`}
                        </h1>
                        {label}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 lg:mb-24">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
            <div className="">
              <div className="">
                <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0">
                  Read our articles, news and product blog
                </p>
              </div>
            </div>
            <div className="relative w-fit group">
              <a href="/blog">
                <span
                  className="action-button custom-animate w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
               bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md 
               "
                >
                  Visit Blog
                  <FaPlay />
                </span>
              </a>
              <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]" />
            </div>
          </div>
          <div className="lg:flex md:flex w-full justify-between space-y-6 md:space-y-0 lg:space-y-0 gap-6">
            <div className="hover:scale-105 transition-all ease-linear scale-100 duration-500 md:flex justify-between flex-col gap-8 md:gap-10 lg:gap-12">
              <div>
                <Image
                  src="/images3.jpg"
                  className="rounded-lg"
                  width={350}
                  height={350}
                  alt=""
                />
                <div className="border-l-2 tracking-wide mt-4 px-2">
                  <div className="pb-6">
                    <p className="text-[22px] font-semibold">Blog</p>
                    <p className="text-gray-400">
                      The Reformist May 29th, 2024
                    </p>
                  </div>
                  <p className="font-bold text-[28px]">
                    Will AI take over Art?
                  </p>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition-all ease-linear scale-100 duration-500 md:flex justify-between flex-col gap-8 md:gap-10 lg:gap-12">
              <div>
                <Image
                  src="/images.jpg"
                  className="rounded-lg"
                  width={350}
                  height={350}
                  alt=""
                />
                <div className="border-l-2 tracking-wide mt-4 px-2">
                  <div className="pb-6">
                    <p className="text-[22px] font-semibold">Blog</p>
                    <p className="text-gray-400">
                      The Reformist May 29th, 2024
                    </p>
                  </div>
                  <p className="font-bold text-[28px]">
                    Cryptocurrency vs Tokens
                  </p>
                </div>
              </div>
            </div>
            <div className="hover:scale-105 transition-all ease-linear scale-100 duration-500 md:flex justify-between flex-col gap-8 md:gap-10 lg:gap-12">
              <div>
                <Image
                  src="/images3.jpg"
                  className="rounded-lg"
                  width={350}
                  height={350}
                  alt=""
                />
                <div className="border-l-2 tracking-wide mt-4 px-2">
                  <div className="pb-6">
                    <p className="text-[22px] font-semibold">Blog</p>
                    <p className="text-gray-400">
                      The Reformist May 29th, 2024
                    </p>
                  </div>
                  <p className="font-bold text-[28px]">
                    Cryptocurrency and Crypto <br /> asset Ready to Scale?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "rgb(7,22,38)",
            background:
              "linear-gradient(0deg, rgba(7,22,38,1) 20%, rgba(3,5,22,1) 69%)",
          }}
          className="section-padding py-10 text-center bg-[071626] bg-opacity-0"
        >
          <div className="max-w-[45rem] mx-auto">
            <h2 className="text-[1.6rem] font-semibold leading-[2.5rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6">
              <span className="text-[#60a6e7]">Ready to Scale?</span>
              <br /> Join successful brands that chose us as their
              <span className="text-[#60a6e7]"> growth accelerator</span>
            </h2>
            <div className="w-fit mx-auto mb-5">
              <div className="relative w-fit group">
                <button
                  data-cal-namespace=""
                  data-cal-link="forcythe/discovery"
                  data-cal-config='{"layout":"month_view"}'
                  className="action-button custom-animate w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full 
               bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md 
               "
                >
                  Book a Call
                </button>
                <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="section-padding pb-10 pt-4 bg-secondaryBackground">
        <div className="lg:grid lg:grid-cols-3 my-10">
          <div className="max-w-lg mb-10 lg:mb-0">
            <div className="w-full grid grid-cols-4">
              <input
                className="py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]"
                type="text"
                placeholder="Your Email Address"
              />
              <button className="py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate rounded-e-full text-sm font-medium border border-l-0 border-white">
                Subscribe
              </button>
            </div>
            <div className="flex gap-3 mt-5 items-center">
              <div className="w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center">
                <input
                  className="appearance-none checked:bg-white checked:border-transparent w-[10px] h-[10px] text-center rounded-full"
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                />
              </div>
              <label htmlFor="agreement" className="text-sm cursor-pointer">
                I agree to receive other notifications from Forcythe
              </label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0">
            <div className="lg:pl-14 md:col-span-2 md:pr-10">
              <Link href="#" className="text-2xl font-bold blur-[1px]">
                c forcythe
              </Link>
              <p className="text-[18px] pt-6 font-normal">
                We are the growth company for businesses looking to scale. We
                are dedicated to transforming businesses with bespoke digital
                solutions that drive growth.
              </p>
              <div className="mt-10 hidden md:flex items-center gap-2">
                <a
                  target="_blank"
                  className="w-10 h-10 cursor-pointer rounded-full border-[1px] border-[#60a6e7] flex justify-center items-center"
                  href="https://www.facebook.com/forcythe/"
                >
                  <FaFacebookF size={24} color="#60a6e7" />
                </a>
                <a
                  target="_blank"
                  className="w-10 h-10 cursor-pointer rounded-full border-[1px] border-[#60a6e7] flex justify-center items-center"
                  href="https://www.instagram.com/forcythe"
                >
                  <FaInstagram size={24} color="#60a6e7" />
                </a>
                <a
                  target="_blank"
                  className="w-10 h-10 cursor-pointer rounded-full border-[1px] border-[#60a6e7] flex justify-center items-center"
                  href="https://twitter.com/forcythe_"
                >
                  <BsTwitterX size={24} color="#60a6e7" />
                </a>
                <a
                  target="_blank"
                  className="w-10 h-10 cursor-pointer rounded-full border-[1px] border-[#60a6e7] flex justify-center items-center"
                  href="https://www.linkedin.com/company/forcythe/"
                >
                  <FaLinkedin size={24} color="#60a6e7" />
                </a>
                <a
                  target="_blank"
                  className="w-10 h-10 cursor-pointer rounded-full border-[1px] border-[#60a6e7] flex justify-center items-center"
                  href="https://www.youtube.com/@forcythe"
                >
                  <IoLogoYoutube size={24} color="#60a6e7" />
                </a>
                <a
                  target="_blank"
                  className="w-10 h-10 cursor-pointer rounded-full border-[1px] border-[#60a6e7] flex justify-center items-center"
                  href="https://podcasters.spotify.com/pod/show/the-future-insight"
                >
                  <TbBrandSpotify size={24} color="#60a6e7" />
                </a>
              </div>
            </div>
            <div className="lg:pl-10">
              <h3 className="mb-8 text-2xl font-bold">Company</h3>
              <ul className="flex flex-col gap-2">
                <li className="text-base text-accent2 font-medium">
                  <a href="/about">
                    <span>About</span>
                  </a>
                </li>
                <li className="text-base text-accent2 font-medium">
                  <a href="/services">
                    <span>Services</span>
                  </a>
                </li>
                <li className="text-base text-accent2 font-medium">
                  <a href="/services#portfolio">
                    <span>Portfolio</span>
                  </a>
                </li>
                <li className="text-base text-accent2 font-medium">
                  <a href="#">
                    <span>Studio</span>
                  </a>
                </li>
                <li className="text-base text-accent2 font-medium">
                  <a href="#">
                    <span>Foundation</span>
                  </a>
                </li>
                <li className="text-base text-accent2 font-medium">
                  <a href="#">
                    <span>Careers</span>
                  </a>
                </li>
                <li className="text-base text-accent2 font-medium">
                  <a href="#">
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright border-t-[1px] border-accent">
          <p className="text-accent2 text-sm mt-5 text-center md:text-left">
            Copyright © 2025 Forcythe. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
