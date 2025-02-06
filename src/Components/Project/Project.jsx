
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";


const Project = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const cardData = [
        {
            id: 1,
            title: "CourseHive",
            description: "CourseHive is an online learning marketplace where users can buy and sell courses. The platform provides role-based functionalities for admins, teachers, and students, ensuring a secure and responsive learning environment.",
            link: "https://simple-firebase-4327b.web.app",
            github: "https://github.com/neyaz14/CourseHive",
            technology: ["React", "Node.Js", "Express.Js", "MongoDB"],
            color: "bg-yellow-500",
            img: "https://i.ibb.co.com/tMpV1zR3/p1.png"
        },
        {
            id: 2,
            title: "CrowdCube",
            description: "Its a full stack website which is made for other people who wants to run a campaign to raise funds from crowd.",
            link: "https://crowdcube-ac233.web.app/",
            github: "https://github.com/neyaz14/CrowdCube-client",
            technology: ["React", "Node.Js", "Express.Js", "MongoDB"],
            color: "bg-green-500", img: "https://i.ibb.co.com/fzQqWP02/p2.png"
        },
        {
            id: 3,
            title: "SoloShpere",
            description: "SoloSphere is an online marketplace where users can post jobs, bid on projects, and securely process payments. Inspired by platforms like Upwork, SoloSphere connects freelancers with clients efficiently.",
            link: "https://crowdcube-ac233.web.app/",
            github: "https://github.com/neyaz14/SoloShpere",
            technology: ["React", "Node.Js", "Express.Js", "MongoDB"],
            color: "bg-purple-600", img: "https://i.ibb.co.com/fzQqWP02/p2.png"

        }

    ];


    return (
        <div>

            <div className="min-h-screen  flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-4xl bg-[#1e1e3a] rounded-2xl shadow-2xl overflow-hidden"
                >
                    <div className="p-6 md:p-10  block bg-gradient-to-br from-[#2a2a4a] to-[#1a1a3a]
                  rounded-xl   text-center
                  hover:shadow-xl transition-all duration-300
                  border border-transparent hover:border-purple-500">
                        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 mb-4">
                            My Projects          </h1>
                        <p className="text-sm md:text-base text-gray-300 mb-8">
                            Explore my journey through projects, certifications, and technical expertise.
                            Each section represents a milestone in my continuous learning path.
                        </p>


                    </div>
                </motion.div>

            </div>

            <div
                ref={containerRef}
                className="h-[269vh] w-full relative">
                {cardData.map((card, index) => (
                    <StackCard
                        key={index}
                        card={card}
                        index={index}
                        totalCards={cardData.length}
                        scrollProgress={scrollYProgress}
                    />
                ))}
            </div>
        </div>
    );
};


const StackCard = ({ card, index, totalCards, scrollProgress }) => {
    const yProgress = useTransform(
        scrollProgress,
        [
            index / totalCards,
            (index + 1) / totalCards
        ],
        ["0%", "-60%"]
    );

    const scaleProgress = useTransform(
        scrollProgress,
        [
            index / totalCards,
            (index + 1) / totalCards
        ],
        [1, 0.9]
    );

    return (
        <motion.div
            style={{
                y: yProgress,
                scale: scaleProgress,
                top: `${index * 33.33}%`
            }}
            className={`
        absolute mx-auto w-[85%] h-[20%] flex items-center justify-center
        ${card.color} transition-all duration-100 bg-opacity-98
        sticky overflow-hidden mb-6 rounded-2xl`}>
            <div>
                <img src={card.img} alt="" className="w-[450px]" />
            </div>
            <div className="text-center text-white space-y-5 p-8 max-w-xl">
                <h2 className="text-4xl font-bold mb-10">{card.title}</h2>
                <p className="text-xl text-left">{card.description}</p>
                <div className="flex  gap-2">
                    <Link to={card.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary text-white font-bold">GitHub</Link>
                    <Link to={card.link} target="_blank" rel="noopener noreferrer" className="btn btn-accent text-white font-bold">Live Demo</Link>
                </div>
                <div className=''>
                    <h1 className='text-xl text-white my-3 text-left'>Technology I used in this Poject :</h1>
                    <div className='flex justify-start'>
                        {card.technology.map(i => <button className={`btn w-auto text-left text-white btn-xm bg-gray-700-500 border-none mx-2 ${i === "React" ? "bg-blue-800" : i === "MongoDB" ? "bg-green-950" : i === "Node.Js" ? "bg-green-800" : i === "MongoDB" ? "bg-green-900" : i === "Express.Js" ? "bg-gray-800" : ""}`}>{i}</button>)}
                    </div>

                </div>
            </div>
            <div className="flex gap-2">


            </div>
        </motion.div>
    );
};

export default Project;
