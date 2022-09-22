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
const Home = () => {
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
      </div>
    </div>
  );
};

export default Home;
