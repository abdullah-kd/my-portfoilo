import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import hero from "../images/hero.png";
import social from "../images/social.png";
import web from "../images/web.png";
import ui from "../images/ui.png";
import support from "../images/support.png";

import omi from "../images/omni.png";
import customer from "../images/customer-4.jpg";
import customer2 from "../images/customer-2.jpg";
import customer3 from "../images/ben.jpg";
import customer4 from "../images/steve.jpg";
import customer5 from "../images/dave.jpg";
import customer6 from "../images/customer-5.jpg";
import customer7 from "../images/customer-1.jpg";
import team from "../images/team.jpg";
import team2 from "../images/team-2.jpg";
import blog1 from "../images/blog-1.jpg";

import blog2 from "../images/blog-2.jpg";
import blog3 from "../images/blog-3.jpg";
import logo1 from "../images/logo-1.png";
import logo2 from "../images/logo-2.png";
import logo4 from "../images/logo-4.png";
import logo5 from "../images/logo-5.png";
import logo3 from "../images/logo-3.svg";
import logo6 from "../images/logo-6.svg";
import card1 from "../images/card-1.png";
import card2 from "../images/card-2.png";
import card3 from "../images/card-3.png";
import card4 from "../images/card-4.png";
const Home = () => {
  const swiperNavNextRef = useRef(null);
  const swiperNavPrevRef = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);
  return (
    <div>
      <div className=" max-w-7xl px-5 mx-auto ">
        <section className="hero flex h-screen gap-14 py-20 justify-center items-center">
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
        <section className="py-20  lg:px-10 s:px-5">
          <div className="flex justify-between  mb-16 md:flex-col md:mb-8 ">
            <h2 className="font-body font-semibold text-4xl  xs:text-3xl ">
              You'll be in good company
            </h2>
            <p className="font-body font-light text-md leading-loose">
              A creative agency like no other
            </p>
          </div>
          <div className="grid grid-cols-3 gap-20 px-10 items-center place-items-center md:grid-cols-2 s:grid-cols-1 s:gap-10">
            <img className="logo" alt="logo" src={logo6} />
            <img className="logo" alt="logo" src={logo3} />
            <img className="logo logo--3" alt="logo" src={logo1} />
            <img className="logo" alt="logo" src={logo4} />
            <img className="logo" alt="logo" src={logo5} />
            <img className="logo  " alt="logo" src={logo2} />
          </div>
        </section>
        <section className="servce px-32 py-16 lg:px-10 s:px-5 mx-auto ">
          <h1 className=" font-body font-semibold text-4xl mb-14 text-center">
            My Servce
          </h1>
          <div className="grid grid-cols-2 gap-14 md:grid-cols-1   ">
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className=""
            >
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
            <div
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className=""
            >
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

        <section className="my--project py-16 px-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-body font-semibold text-4xl  s:text-2xl  ">
              My Project
            </h2>
            <p className="font-body font-light text-md leading-loose md:text-sm">
              my best project evre
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-1 ">
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
          <h1 className="font-body text-center font-semibold text-5xl mb-2 s:text-3xl">
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
                <h3 className="font-body font-midem text-2xl mb-4 leading-relaxed s:text-lg">
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
                <h3 className="font-body font-midem text-2xl mb-4 leading-relaxed s:text-lg">
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
                <h3 className="font-body font-midem text-2xl mb-4 leading-relaxed s:text-lg">
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
          <div className="flex justify-between items-center mb-28 s:flex-col s:justify-start;">
            <h2 className="font-body font-semibold text-4xl   ">
              Meet Our Heroes{" "}
            </h2>
            <p className="font-body font-light text-md leading-loose">
              A creative agency like no other
            </p>
          </div>
          <div className=" grid grid-cols-4 gap-x-10 gap-y-28 lg:grid-cols-2 s:grid-cols-1">
            <div className="bg-[#111] flex flex-col relative rounded-md   items-center">
              <img
                className=" inline-block rounded-full absolute  -translate-y-1/2   border-2 border-white"
                alt="customer"
                src={customer4}
              />
              <p className="font-body text-2xl font-medium mt-28 mb-2 s:mt-20 ">
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
            <div className="bg-[#111] flex flex-col relative rounded-md   items-center">
              <img
                className=" inline-block rounded-full absolute  -translate-y-1/2  border-2 border-white"
                alt="customer"
                src={customer5}
              />
              <p className="font-body text-2xl font-medium mt-28 mb-2 s:mt-20 ">
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
            <div className="bg-[#111] flex flex-col relative rounded-md   items-center">
              <img
                className=" inline-block rounded-full absolute  -translate-y-1/2   border-2 border-white"
                alt="customer"
                src={customer6}
              />
              <p className="font-body text-2xl font-medium mt-28 mb-2 s:mt-20 ">
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
            <div className="bg-[#111] flex flex-col relative rounded-md px-2   items-center ">
              <img
                className=" inline-block rounded-full absolute  -translate-y-1/2   border-2 border-white"
                alt="customer"
                src={customer7}
              />
              <p className="font-body text-2xl font-medium mt-28 mb-2  s:mt-20">
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
        <section className="range  py-28">
          <div className="grid grid-cols-2 gap-16 items-center md:grid-cols-1 md:justify-center ">
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
        <section className="sumfun py-12">
          <h1 className="font-body text-center  font-medum text-2xl mb-8">
            Some Fun Facts
          </h1>
          <div className="px-10  grid grid-cols-2 gap-y-16 place-items-center s:grid-cols-1">
            <div className="flex items-center justify-center gap-3">
              <img className=" w-20 s:w-16" alt="card" src={card4} />
              <div>
                <h2 className=" font-body font-medium mb-1 text-7xl s:text-5xl">
                  10
                </h2>
                <span className="font-body font-normal text-neutral-400  block ">
                  Years on market
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img className=" w-20 s:w-16" alt="card" src={card2} />
              <div>
                <h2 className=" font-body font-medium mb-1 text-7xl s:text-5xl">
                  330+
                </h2>
                <span className="font-body font-normal text-neutral-400  block ">
                  Project done
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img className=" w-20 s:w-16" alt="card" src={card3} />
              <div>
                <h2 className=" font-body font-medium mb-1 text-7xl s:text-5xl">
                  14
                </h2>
                <span className="font-body font-normal text-neutral-400  block ">
                  Hero's member
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <img className=" w-20 s:w-16" alt="card" src={card1} />
              <div>
                <h2 className=" font-body font-medium mb-1 text-7xl s:text-5xl">
                  700+
                </h2>
                <span className="font-body font-normal text-neutral-400  block ">
                  Cups of coffee
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 items-center justify-center  gap-16 py-16 md:grid-cols-1 ">
          <div className="">
            <p className="font-body text-2xl font-medium mb-10  xs:text-lg">
              Start Your Project With Us
            </p>
            <input
              className="block w-full mb-7  px-3 py-3 bg-[#000] rounded-md border-[1px]  border-gray-500 placeholder:text-gray-300 placeholder:text-lg placeholder:font-body"
              type="text"
              placeholder="Name*"
            />
            <input
              className="block w-full mb-7  px-3 py-3 bg-[#000] rounded-md border-[1px]  border-gray-500 placeholder:text-gray-300 placeholder:text-lg placeholder:font-body"
              type="email"
              placeholder="Email*"
            />
            <input
              className="block w-full mb-7  px-3 py-3 bg-[#000] rounded-md border-[1px]  border-gray-500 placeholder:text-gray-300 placeholder:text-lg placeholder:font-body"
              type="text"
              placeholder="Phone Number"
            />
            <input
              className="block w-full mb-7  px-3 py-3 bg-[#000] rounded-md border-[1px]  border-gray-500 placeholder:text-gray-300 placeholder:text-lg placeholder:font-body"
              type="url"
              placeholder="Website URL*"
            />
            <textarea
              className="block w-full mb-7  px-3 pb-24 pt-3 bg-[#000] rounded-md border-[1px]  border-gray-500 placeholder:text-gray-300 placeholder:text-lg placeholder:font-body"
              placeholder="Project Details"
            ></textarea>
            <button className="btn text-xl w-full font-medium">
              Send Project
            </button>
          </div>

          <div className=" read-only: w-4/5">
            <div className="   icon-bg pt-7 pl-7"></div>
            <img className=" -mt-32 ml-10 z-10" src={team2} alt="team" />
          </div>
        </section>
        <section className="py-28">
          <div className="flex justify-between gap-y-3 items-center mb-12 ">
            <h2 className="font-body font-semibold text-4xl s:text-3xl   ">
              Blogs
            </h2>
            <p className="btn font-body font-medium text-lg   leading-loose s:text-base">
              All Post
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10 md:grid-cols-2 s:grid-cols-1">
            <div className=" hover:bg-[#222] rounded-sm overflow-hidden">
              <img src={blog1} alt="blog" />
              <div className="p-5 bg-[#111] ">
                <Link className=" bg-[#F5CB5C] w-fit font-body font-medium text-[18px] hover:bg-[#F2BE2F] px-2 py-1  text-black rounded-full  leading-loose">
                  Markiting
                </Link>
                <h2 className="font-body font-semibold text-3xl mt-4 mb-10  ">
                  Curating a workplace that inspires all of us
                </h2>
                <span className="font-body text-base font-normal text-neutral-400 mb-5 block ">
                  February 3, 2021
                </span>
              </div>
            </div>
            <div className=" hover:bg-[#222] rounded-sm overflow-hidden">
              <img src={blog2} alt="blog" />
              <div className="p-5 bg-[#111] ">
                <Link className=" bg-[#F5CB5C] w-fit font-body font-medium text-[18px] hover:bg-[#F2BE2F] px-2 py-1  text-black rounded-full  leading-loose">
                  Design
                </Link>
                <h2 className="font-body font-semibold text-3xl mt-4 mb-10  ">
                  Designers who changed the web with Webflow
                </h2>
                <span className="font-body text-base font-normal text-neutral-400 mb-5 block ">
                  jun 8, 2022
                </span>
              </div>
            </div>
            <div className=" hover:bg-[#222] rounded-sm overflow-hidden">
              <img src={blog3} alt="blog" />
              <div className="p-5 bg-[#111] ">
                <Link className=" bg-[#F5CB5C] w-fit font-body font-medium text-[18px] hover:bg-[#F2BE2F] px-2 py-1  text-black rounded-full  leading-loose">
                  Code
                </Link>
                <h2 className="font-body font-semibold text-3xl mt-4 mb-10  ">
                  Communication between departments
                </h2>
                <span className="font-body text-base font-normal text-neutral-400 mb-5 block ">
                  March 4, 2021
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 text-center">
          <span className="font-body text-xl font-normal text-neutral-300  block md:mb-4 ">
            Stay In Touch
          </span>
          <h1 className=" tracking-tighter font-body font-bold  leading-[1.2]  text-9xl mb-6 md:text-7xl xs:text-5xl ">
            Ready To Talk
          </h1>
          <span className="font-body text-xl font-normal text-neutral-300 mb-10 block ">
            Fell Free To Contact Us
          </span>
          <Link className=" btn text-lg">Contact Us</Link>
        </section>
        <section className="pt-28">
          <div className="flex justify-between items-center mb-3 s:flex-col s:justify-start s:items-start s:gap-2 ">
            <h2 className="font-body font-semibold text-3xl   ">Knud</h2>
            <div className="flex gap-8 ">
              <i className=" text-lg">
                {" "}
                <FaFacebookF />
              </i>
              <i className=" text-lg">
                {" "}
                <FaInstagram />
              </i>
              <i className=" text-lg">
                {" "}
                <FaTwitter />
              </i>
              <i className=" text-lg">
                {" "}
                <FaLinkedinIn />
              </i>
            </div>
          </div>
          <div className="flex justify-between  items-center s:flex-col s:items-start">
            <div className=" w-1/2 s:w-full">
              <h2 className="font-body text-neutral-400 font-semibold text-3xl mt-4 mb-8  ">
                Knud is an award UI/UX designs and branding agency based in New
                York, USA.
              </h2>
              <ul className="flex gap-3 mb-6">
                <Link className=" font-body font-normal text-lg text-neutral-400 duration-300 hover:text-neutral-100">
                  Home
                </Link>
                <Link className=" font-body font-normal text-lg text-neutral-400 duration-300 hover:text-neutral-100">
                  About
                </Link>
                <Link className=" font-body font-normal text-lg text-neutral-400 duration-300 hover:text-neutral-100">
                  Style Guide
                </Link>
                <Link className=" font-body font-normal text-lg text-neutral-400 duration-300 hover:text-neutral-100">
                  Licensing
                </Link>
              </ul>
            </div>
            <div>
              <span className="font-body text-lg font-normal text-neutral-300 mb-[2px] block ">
                hello@knud.com
              </span>
              <span className="font-body text-lg font-normal text-neutral-300 block ">
                +1(953) 214 3344
              </span>
            </div>
          </div>
          <p className="font-body  text-neutral-400 mt-4 ">
            Knud by{" "}
            <Link className="text-neutral-100   hover:text-white">
              Abdullah
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
