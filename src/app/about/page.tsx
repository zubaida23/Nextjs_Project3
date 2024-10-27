import React from "react";
import Image from "next/image";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const About = () => {
  return (
    <>
    <Header/>
      <div className="flex flex-col justify-center min-h-screen bg-gradient-to-r from-pink-300 via-red-100 to-pink-200">
        <p className="font-semibold text-rose-700 text-5xl mt-16 self-center">
          About Me
        </p>
        <div className="flex justify-center mt-8">
          <Image
            className="rounded-full border-rose-700 border-4 object-cover"
            src="/pix.jfif"
            alt="profile-pic"
            width={100}  // Ensure width and height are equal
            height={100} 
          />
        </div>
        <p className='ml-3 mt-4 mr-3 text-justify text-lg leading-relaxed text-gray-600 text-2xl mb-4 italic'>
          <b>Assalam O Alikum, I'm Zubaida Khatoon, a front-end developer and graphic designer with expertise in creating dynamic 
            and user-friendly interfaces. Recently, I&apos;ve been diving into TypeScript and React, working on assignments and quizzes 
            that help strengthen my foundational knowledge and skill set. My work spans various interesting projects, such as an image 
            gallery built with HTML, CSS, and JavaScript. Additionally, I am actively enhancing UI components within a chat application 
            and focusing on creating responsive, accessible designs that deliver seamless experiences across devices.. In addition to my 
            coding capabilities, I bring creative flair to my projects with proficiency in Adobe Illustrator, Photoshop, Canva, and Figma 
            for graphic design.With a passion for clean and effective designs, I am dedicated to delivering visually appealing and responsive 
            user experiences. My approach combines technical know-how and design creativity, making me versatile in building engaging applications 
            and designs a like  Your dedication to learning, problem-solving, and enhancing your front-end skills is evident, and you&apos;re also 
            applying for an AI course in the SIC program to further expand your knowledge. You communicate in both Urdu and English, and your commitment 
            to personal growth and development in tech is impressive!
          </b>
        </p>
      </div>
      <Footer/>
    </>
  );
};

export default About;
