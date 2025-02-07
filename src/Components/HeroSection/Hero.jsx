import React from 'react';
import { motion } from "framer-motion";
import "./Hero.css";
import Me from "../../assets/carl.jpeg";
import ProfilePic1 from "../../assets/profile-pic1.png";


const Hero = () => {
    return (
        <div className='md:my-5 my-10'>
            <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-6 md:px-12 lg:px-20">
                <div className="max-w-6xl flex flex-col md:flex-row items-center gap-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2 }}
                        className=" text-center md:text-left flex-1 space-y-10"
                    >
                        <h1 className="text-2xl mt-6 md:text-5xl font-bold">
                            Frontend <span className="text-purple-400">Developer</span>
                        </h1>
                        <h1 className="text-xl  font-bold">
                            This is <span className="text-purple-400">Neyaz Morshid</span>
                        </h1>
                        <p className="text-base sm:text-lg">
                            Tech Innovator | Crafting Innovative, Functional, and User-Friendly Websites
                        </p>
                        <div className="flex flex-col md:flex-row gap-8 md:justify-start mx-auto">
                            <button className="btn md:mx-0 mx-auto w-28 btn-neon">Resume</button>
                            <button className="btn btn-outline md:mx-0 mx-auto w-28 btn-neon">Contact</button>
                        </div>
                        <div className="flex gap-2 flex-wrap justify-center md:justify-start mt-4">
                            {["React", "Javascript", "Express Js", "Node.js", "MongoDB"].map((tech, index) => (
                                <span key={index} className="badge badge-outline px-6 py-4 bg-white bg-opacity-15 btn-neon text-sm ">{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, delay: 0.9 }}
                        className="flex-1 flex justify-center"
                    >
                        <img src={ProfilePic1} alt="Tech Illustration" className="w-48 sm:w-64 md:w-80 lg:w-96" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Hero;
