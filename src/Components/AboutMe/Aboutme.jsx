import { motion } from "framer-motion";
import Me from "../../assets/carl.jpeg";
import "../HeroSection/Hero.css";
import GithubStats from "../GithubStats/GithubStats";
import ProfilePic from "../../assets/profile-pic.png";
import { Link } from "react-router-dom";
import { FileUser, Github } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white bg-[#0a0a1a] p-6 md:p-10">
      {/* Background Soft Shadow */}
      <div className="absolute inset-0 z-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/10 before:to-transparent before:blur-[80px] after:absolute after:inset-0 after:bg-gradient-to-b after:from-purple-500/5 after:to-transparent after:blur-[50px]"></div>

      <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-12 z-10">
        About Me
      </h2>
      <p className="text-gray-400 text-center mb-6 z-10">

      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 z-10">
        {/* Left Side - Text */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Hello, I'm{" "}
            <span className="text-purple-400">Neyaz Morshid</span>
          </h1>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
            I am a first-year Physics student at the University of Jahangirnagar with a strong passion for web development and competitive programming. While pursuing my studies in Physics, I am also dedicated to advancing my skills in web development through the MEAN stack. I have completed coursework in HTML, CSS, Tailwind, and JavaScript,React,Express Js,Mongodb and am actively expanding my expertise.
          </p>

          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <Link
              to="https://github.com/neyaz14"
              className="flex w-32 justify-center items-center bg-[#252539] p-3 rounded-lg hover:bg-green-900 transition"
            >
              <Github className='mr-3' />
              Github
            </Link>

            <Link
              to="https://drive.google.com/drive/folders/1Nw2bN4138zpvaBXkLZWYCxwVzHkCFAJO?usp=sharing"
              className="flex w-32 justify-center items-center bg-[#252539] p-3 rounded-lg hover:bg-red-900 transition"
            >
              <FileUser className='mr-3' />
              Resume
            </Link>

          </div>
        </div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-purple-400 overflow-hidden shadow-lg"
        >
          <img
            src={ProfilePic}
            alt="Profile"
            className="w-full h-full object-cover "
          />
        </motion.div>
      </div>




      <GithubStats></GithubStats>
    </section>
  );
};

export default AboutMe;
