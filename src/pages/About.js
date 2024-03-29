import React from 'react';
import heroesbg from '../assets/about/heroes-bg.png';
import aboutmain from '../assets/about/about-main.jpg';
import banner from '../assets/about/book-banner.png';
import {
  CarOutlined,
  ShopOutlined,
  ToolOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

const bgStyle = {
  backgroundImage: `url(${heroesbg})`,
  alignItems: 'center',
  backgroundSize: 'unset',
};

const About = () => {
  return (
    <div>
      <div className="relative h-72 -mt-16 -z-10">
        <div
          className="absolute inset-0 bg-white opacity-10"
          style={{ ...bgStyle, zIndex: -1 }}
        ></div>
      </div>
      <nav aria-label="Breadcrumb" className="flex mx-14 -mt-36">
        <ol className="flex overflow-hidden rounded-lg  border border-gray-dark  text-gray-dark">
          <li className="flex items-center">
            <a
              href="/"
              className="flex h-10 items-center gap-1.5 bg-gray-light px-4 transition hover:text-gray-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="ms-1.5 text-xs font-medium"> Home </span>
            </a>
          </li>
          <li className="relative flex items-center">
            <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-light [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>
            <a
              href="/about"
              className="flex h-10 items-center bg-orange pe-4 ps-8 text-xs font-medium transition hover:text-gray-dark"
            >
              About
            </a>
          </li>
        </ol>
      </nav>
      <div className="mx-4 md:mx-14 mt-8 md:mt-28">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 p-4 md:p-12">
            <img className="rounded-lg shadow-lg max-w-full" src={aboutmain} alt="" />
          </div>
          <div className="w-full md:w-1/2 p-4 md:p-12">
            <h3 className="text-left text-lg font-bold">About Company</h3>
            <h1 className="text-left text-4xl md:text-6xl font-bold my-4">
              You start the engine and your adventure begins
            </h1>
            <p className="text-left text-gray-dark">
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="flex mt-8 justify-center gap-4 md:gap-16">
              <div className="flex flex-col items-center">
                <CarOutlined className="text-6xl text-orange" />
                <span className="flex items-center">
                  <h1 className="text-left md:text-4xl font-bold my-4">
                    20/
                  </h1>
                  <p className="text-gray-dark font-bold">Car Types</p>
                </span>
              </div>
              <div className="flex flex-col items-center">
                <ShopOutlined className="text-6xl text-orange" />
                <span className="flex items-center">
                  <h1 className="text-left md:text-4xl font-bold my-4">
                    85/
                  </h1>
                  <p className="text-gray-dark font-bold">Rental Outlets</p>
                </span>
              </div>
              <div className="flex flex-col items-center">
                <ToolOutlined className="text-6xl text-orange" />
                <span className="flex items-center">
                  <h1 className="text-left md:text-4xl font-bold my-4">
                    75/
                  </h1>
                  <p className="text-gray-dark font-bold">Repair Shop</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="bg-[#2d2d2d] opacity-80">
          <img src={banner} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="md:text-4xl font-bold ">
            Get in touch with us{' '}
            <span className="text-orange">
              {' '}
              <PhoneOutlined /> +216 55 682 011
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
