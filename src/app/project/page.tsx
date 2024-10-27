import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const Project = () => {
  return (
    <>
    <Header/>
      <div className="justify-center px-4 mb-10 " >
        <p className="font-semibold text-rose-700 text-5xl mt-16 text-center">
          Projects
        </p>
        <div className="mt-20 flex flex-col md:flex-row flex-wrap justify-center gap-10 ">
          <div className="border-2 border-inherit w-full md:w-fit p-5 md:p-10 rounded-xl shadow-2xl">
            <Image
              src="/resume.jpg"
              alt="Resume Project"
              width={300}
              height={300}
            />
           
              <p className="font-semibold text-rose-700 mt-7 text-center text-2xl border-rose-700 border-2 p-1 rounded-xl">
                Static Resume
              </p>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Project;
