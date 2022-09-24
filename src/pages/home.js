import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import hero from "../images/hero.png";
import social from "../images/social.png";
import web from "../images/web.png";
import ui from "../images/ui.png";
import support from "../images/support.png";
import logo1 from "../images/logos/logo-1.png";
import logo3 from "../images/logos/logo-3.png";
import logo2 from "../images/logos/logo-2.png";
import logo4 from "../images/logos/logo-4.png";
import logo5 from "../images/logos/logo-5.png";
import omi from "../images/omni.png";
import customer from "../images/customer-4.jpg";
import customer2 from "../images/customer-2.jpg";
import customer3 from "../images/ben.jpg";
import customer4 from "../images/steve.jpg";
import customer5 from "../images/dave.jpg";
import customer6 from "../images/customer-5.jpg";
import customer7 from "../images/customer-1.jpg";
import team from "../images/team.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  const swiperNavNextRef = useRef(null);
  const swiperNavPrevRef = useRef(null);
  return (
    <div>
      <div className=" max-w-7xl px-5 mx-auto">
        <section className="hero flex gap-14 py-20 justify-center items-center">
          <div className=" w-11/12">
            <h1 className="font-body font-semibold text-6xl mb-8">
              I am Abdullah
            </h1>
            <p className="font-body font-light text-md leading-loose mb-5 ">
              but also the leap into electronic typesetting, remaining
              essentially unchanged.It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
            <button className="btn text-lg font-medium duration-300">
              Learn More &#8594;
            </button>
          </div>
          <div>
            <img alt="hero imgae" src={hero} />
          </div>
        </section>
        <section className="servce px-32 py-16 lg:px-10 s:px-5 ">
          <h1 className=" font-body font-semibold text-4xl mb-14 text-center">
            My Servce
          </h1>
          <div className="grid grid-cols-2 gap-14 md:grid-cols-1   ">
            <div className="">
              <div className="flex">
                <div className="icon-bg pt-7 pl-7">
                  <img className="w-16" alt="web" src={web} />
                </div>
                <h2 className="font-body font-semibold text-2xl mb-3 mt-40 -ml-40  ">
                  Web Devlopment
                </h2>
              </div>
              <p className="font-body font-light text-md leading-loose mb-5 ml-10">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker
              </p>
            </div>
            <div className="">
              <div className="flex">
                <div className="icon-bg pt-7 pl-7">
                  <img className="w-16" alt="web" src={ui} />
                </div>
                <h2 className="font-body font-semibold text-2xl mb-3 mt-40 -ml-40  ">
                  UI/UX
                </h2>
              </div>
              <p className="font-body font-light text-md leading-loose mb-5 ml-10">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker
              </p>
            </div>
            <div className="">
              <div className="flex">
                <div className="icon-bg pt-7 pl-7">
                  <img className="w-16" alt="web" src={social} />
                </div>
                <h2 className="font-body font-semibold text-2xl mb-3 mt-40 -ml-40  ">
                  Social Manegment
                </h2>
              </div>
              <p className="font-body font-light text-md leading-loose mb-5 ml-10">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker
              </p>
            </div>
            <div className="">
              <div className="flex">
                <div className="icon-bg pt-7 pl-7">
                  <img className="w-16" alt="web" src={support} />
                </div>
                <h2 className="font-body font-semibold text-2xl mb-3 mt-40 -ml-40  ">
                  Support
                </h2>
              </div>
              <p className="font-body font-light text-md leading-loose mb-5 ml-10">
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker
              </p>
            </div>
          </div>
        </section>
        <section className="py-16  lg:px-10 s:px-5">
          <h1 className=" font-body font-semibold text-md mb-6 text-center">
            AS FEATURED IN
          </h1>
          <div className="flex justify-around">
            <img className="logo" alt="logo" src={logo1} />
            <img className="logo" alt="logo" src={logo3} />
            <img className="logo" alt="logo" src={logo2} />
            <img className="logo" alt="logo" src={logo4} />
            <img className="logo" alt="logo" src={logo5} />
          </div>
        </section>
        <section className="my--project py-16 px-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-body font-semibold text-4xl   ">My Project</h2>
            <p className="font-body font-light text-md leading-loose">
              my best project evre
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className=" relative overflow-hidden rounded-md ">
              <img alt="project" src={omi} />

              <div className=" show--project absolute duration-300 bottom-0 tra pl-3 translate-y-48  w-full hover:translate-y-0">
                <h2 className="font-body font-semibold text-4xl mb-2 pb-2 border-[#F2BE2F] mt-4 border-b-2 inline-block   ">
                  Omni Resturant
                </h2>
                <ul className="ml-4 flex flex-col gap-2 mb-3">
                  <li className="font-body text-lg font-medium">
                    - ordring food
                  </li>
                  <li className="font-body text-lg font-medium">
                    - booking table
                  </li>
                  <li className="font-body text-lg font-medium">
                    - Lorem Ipsum passages
                  </li>
                  <li className="font-body text-lg font-medium">
                    - release of Letraset sheets
                  </li>
                </ul>
                <a className="inline-block font-body font-medium text-xl ml-4 px-5 py-1 rounded-full text-black mb-2 bg-[#F2BE2F]">
                  vistit
                </a>
              </div>
            </div>
            <div className=" relative overflow-hidden rounded-md ">
              <img alt="project" src={omi} />

              <div className=" show--project absolute duration-300 bottom-0 tra pl-3 translate-y-48  w-full hover:translate-y-0">
                <h2 className="font-body font-semibold text-4xl mb-2 pb-2 border-[#F2BE2F] mt-4 border-b-2 inline-block   ">
                  Omni Resturant
                </h2>
                <ul className="ml-4 flex flex-col gap-2 mb-3">
                  <li className="font-body text-lg font-medium">
                    - ordring food
                  </li>
                  <li className="font-body text-lg font-medium">
                    - booking table
                  </li>
                  <li className="font-body text-lg font-medium">
                    - Lorem Ipsum passages
                  </li>
                  <li className="font-body text-lg font-medium">
                    - release of Letraset sheets
                  </li>
                </ul>
                <a className="inline-block font-body font-medium text-xl ml-4 px-5 py-1 rounded-full text-black mb-2 bg-[#F2BE2F]">
                  vistit
                </a>
              </div>
            </div>
            <div className=" relative overflow-hidden rounded-md ">
              <img alt="project" src={omi} />

              <div className=" show--project absolute duration-300 bottom-0 tra pl-3 translate-y-48  w-full hover:translate-y-0">
                <h2 className="font-body font-semibold text-4xl mb-2 pb-2 border-[#F2BE2F] mt-4 border-b-2 inline-block   ">
                  Omni Resturant
                </h2>
                <ul className="ml-4 flex flex-col gap-2 mb-3">
                  <li className="font-body text-lg font-medium">
                    - ordring food
                  </li>
                  <li className="font-body text-lg font-medium">
                    - booking table
                  </li>
                  <li className="font-body text-lg font-medium">
                    - Lorem Ipsum passages
                  </li>
                  <li className="font-body text-lg font-medium">
                    - release of Letraset sheets
                  </li>
                </ul>
                <a className="inline-block font-body font-medium text-xl ml-4 px-5 py-1 rounded-full text-black mb-2 bg-[#F2BE2F]">
                  vistit
                </a>
              </div>
            </div>
            <div className=" relative overflow-hidden rounded-md ">
              <img alt="project" src={omi} />

              <div className=" show--project absolute duration-300 bottom-0 tra pl-3 translate-y-48  w-full hover:translate-y-0">
                <h2 className="font-body font-semibold text-4xl mb-2 pb-2 border-[#F2BE2F] mt-4 border-b-2 inline-block   ">
                  Omni Resturant
                </h2>
                <ul className="ml-4 flex flex-col gap-2 mb-3">
                  <li className="font-body text-lg font-medium">
                    - ordring food
                  </li>
                  <li className="font-body text-lg font-medium">
                    - booking table
                  </li>
                  <li className="font-body text-lg font-medium">
                    - Lorem Ipsum passages
                  </li>
                  <li className="font-body text-lg font-medium">
                    - release of Letraset sheets
                  </li>
                </ul>
                <a className="inline-block font-body font-medium text-xl ml-4 px-5 py-1 rounded-full text-black mb-2 bg-[#F2BE2F]">
                  vistit
                </a>
              </div>
            </div>
          </div>
          <p className=" text-center font-body font-light text-md mt-5">
            Check out some more of{" "}
            <a className=" border-b-2 cursor-pointer duration-300  border-white hover:border-[#F2BE2F]">
              my work
            </a>
          </p>
        </section>
        <section className="what--say py-16 ">
          <h1 className="font-body text-center font-semibold text-5xl mb-2">
            Our client feedback
          </h1>
          <p className="font-body text-center font-light text-md leading-loose mb-14 ">
            what they thonk about us
          </p>
          <Swiper
            cssMode={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: swiperNavPrevRef.current,
              nextEl: swiperNavNextRef.current,
            }}
            effect="fade"
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = swiperNavPrevRef.current;
              swiper.params.navigation.nextEl = swiperNavNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" max-w-2xl mx-auto text-center">
                <img
                  className=" inline-block mb-6 rounded-full border-2 border-white"
                  alt="customer"
                  src={customer}
                />
                <h3 className="font-body font-midem text-2xl mb-4 leading-relaxed">
                  from classy cocktail parties to formal occasions and weddings.
                  We have your work wear covered too With flowy summer dresses
                  and lightweight
                </h3>
                <p className="font-body font-normal text-neutral-400 ">
                  Jhon Deo
                </p>
                <span className="font-body font-normal text-neutral-400 mb-5 block ">
                  Knudo customer
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" max-w-2xl mx-auto text-center">
                <img
                  className=" inline-block mb-6 rounded-full border-2 border-white"
                  alt="customer"
                  src={customer2}
                />
                <h3 className="font-body font-midem text-2xl mb-4 leading-relaxed">
                  from classy cocktail parties to formal occasions and weddings.
                  We have your work wear covered too With flowy summer why dont
                  chosse.
                </h3>
                <p className="font-body font-normal text-neutral-400 ">
                  Ahmad Barzan
                </p>
                <span className="font-body font-normal text-neutral-400 mb-5 block ">
                  Knudo customer
                </span>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" max-w-2xl mx-auto text-center">
                <img
                  className=" inline-block mb-6 rounded-full border-2 border-white"
                  alt="customer"
                  src={customer3}
                />
                <h3 className="font-body font-midem text-2xl mb-4 leading-relaxed">
                  from classy cocktail parties to formal occasions and weddings.
                  We have your work wear covered too With flowy summer dresses
                  and lightweight
                </h3>
                <p className="font-body font-normal text-neutral-400 ">
                  Sarkawt Muhammad
                </p>
                <span className="font-body font-normal text-neutral-400 mb-5 block ">
                  Knudo customer
                </span>
              </div>
            </SwiperSlide>

            <div className="swiprNavNext"></div>
          </Swiper>
        </section>
        <section className="specal-clint py-12">
          <div className="flex justify-between items-center mb-28">
            <h2 className="font-body font-semibold text-4xl   ">
              Meet Our Heroes{" "}
            </h2>
            <p className="font-body font-light text-md leading-loose">
              A creative agency like no other
            </p>
          </div>
          <div className=" grid grid-cols-2 gap-x-10 gap-y-28">
            <div className="bg-[#333533] flex flex-col relative rounded-md   items-center">
              <img
                className=" inline-block rounded-full absolute  -translate-y-1/2  w-40 border-2 border-white"
                alt="customer"
                src={customer4}
              />
              <p className="font-body text-2xl font-medium mt-28 mb-2 ">
                Sarkawt Muhammad
              </p>
              <span className="font-body font-normal text-neutral-400 mb-10 block ">
                Knudo customer
              </span>
              <div className="flex gap-8 mb-10">
                <Link className=" text-xl text-yellow-300 hover:text-gray-300">
                  {" "}
                  <FaFacebookF />
                </Link>

                <i className=" text-xl">
                  {" "}
                  <FaInstagram />
                </i>
                <i className=" text-xl">
                  {" "}
                  <FaTwitter />
                </i>
                <i className=" text-xl">
                  {" "}
                  <FaLinkedinIn />
                </i>
              </div>
            </div>
            <div className="bg-[#333533] flex flex-col relative rounded-md   items-center">
              <img
                className=" inline-block rounded-full absolute  -translate-y-1/2  w-40 border-2 border-white"
                alt="customer"
                src={customer5}
              />
              <p className="font-body text-2xl font-medium mt-28 mb-2 ">
                Abdullah Subhi
              </p>
              <span className="font-body font-normal text-neutral-400 mb-10 block ">
                Knudo customer
              </span>
              <div className="flex gap-8 mb-10">
                <i className=" text-xl">
                  {" "}
                  <FaFacebookF />
                </i>
                <i className=" text-xl">
                  {" "}
                  <FaInstagram />
                </i>
                <i className=" text-xl">
                  {" "}
                  <FaTwitter />
                </i>
                <i className=" text-xl">
                  {" "}
                  <FaLinkedinIn />
                </i>
              </div>
            </div>
            <div className="bg-[#333533] flex flex-col relative rounded-md   items-center">
              <img
                className=" inline-block rounded-full absolute  -translate-y-1/2  w-40 border-2 border-white"
                alt="customer"
                src={customer6}
              />
              <p className="font-body text-2xl font-medium mt-28 mb-2 ">
                Barzan Rzgar
              </p>
              <span className="font-body font-normal text-neutral-400 mb-10 block ">
                Knudo customer
              </span>
              <div className="flex gap-8 mb-10">
                <i className=" text-xl">
                  {" "}
                  <FaFacebookF />
                </i>
                <i className=" text-xl">
                  {" "}
                  <FaInstagram />
                </i>
                <i className=" text-xl">
                  {" "}
                  <FaTwitter />
                </i>
                <i className=" text-xl">
                  {" "}
                  <FaLinkedinIn />
                </i>
              </div>
            </div>
            <div className="bg-[#333533] flex flex-col relative rounded-md   items-center">
              <img
                className=" inline-block rounded-full absolute  -translate-y-1/2  w-40 border-2 border-white"
                alt="customer"
                src={customer7}
              />
              <p className="font-body text-2xl font-medium mt-28 mb-2 ">
                Sara Subhi
              </p>
              <span className="font-body font-normal text-neutral-400 mb-10 block ">
                Knudo customer
              </span>
              <div className="flex gap-8 mb-10">
                <i className=" text-xl">
                  {" "}
                  <FaFacebookF />
                </i>
                <i className=" text-xl">
                  {" "}
                  <FaInstagram />
                </i>
                <i className=" text-xl">
                  {" "}
                  <FaTwitter />
                </i>
                <i className=" text-xl">
                  {" "}
                  <FaLinkedinIn />
                </i>
              </div>
            </div>
          </div>
        </section>
        <section className="range py-16">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-body  font-semibold text-2xl mb-6">
                Our Skills For Supper Project
              </h1>
              <div className="sliders flex flex-col gap-6 ">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-body font-normal text-neutral-400  block ">
                      Graphic Design
                    </span>
                    <span className="font-body font-normal text-neutral-400  block ">
                      %80
                    </span>
                  </div>
                  <div class=" w-full rounded-lg  h-[2px]">
                    <div class="  w-4/5 bg-white rounded-lg h-[2px]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-body font-normal text-neutral-400  block ">
                      Landing Genration
                    </span>
                    <span className="font-body font-normal text-neutral-400  block ">
                      %40
                    </span>
                  </div>
                  <div class=" w-full rounded-lg  h-[2px]">
                    <div class="  w-2/5  bg-gray-400 rounded-lg h-[2px]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-body font-normal text-neutral-400  block ">
                      Photoshop
                    </span>
                    <span className="font-body font-normal text-neutral-400  block ">
                      %70
                    </span>
                  </div>
                  <div class=" w-full rounded-lg  h-[2px]">
                    <div class="   w-[70%]  bg-gray-200 rounded-lg h-[2px]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-body font-normal text-neutral-400  block ">
                      Web Devlopment
                    </span>
                    <span className="font-body font-normal text-neutral-400  block ">
                      %100
                    </span>
                  </div>
                  <div class=" w-full rounded-lg  h-[2px]">
                    <div class="  w-full bg-white rounded-lg h-[2px]"></div>
                  </div>
                </div>
                <Link className=" w-fit btn font-medium mt-5  text-left  ">
                  View Our Work
                </Link>
              </div>
            </div>
            <div className=" read-only: w-4/5">
              <div className="   icon-bg pt-7 pl-7"></div>
              <img className=" -mt-32 ml-10 z-10" src={team} alt="team" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
