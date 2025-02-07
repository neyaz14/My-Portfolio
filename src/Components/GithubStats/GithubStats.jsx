import React from 'react';

const GithubStats = () => {
    return (
        <div>
            {/* git hub analytics */}
            <div >
                <p align="center" className='flex flex-col items-center justify-center mx-auto'>
                    <h1 className='text-3xl font-bold text-violet-500 my-10 '>GitHub Analytics</h1>
                    <a href="https://github.com/neyaz14" className='flex flex-col md:flex-row flex-wrap items-center justify-stretch gap-5 mx-auto'>
                        <img height="180em" src="https://github-readme-stats.vercel.app/api?username=neyaz14&show_icons=true&theme=radical" className='mx-auto'/>
                        <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=neyaz14&layout=compact&theme=radical" className='mx-auto'/>
                        <img height="180em" src="https://streak-stats.demolab.com/?user=neyaz14&theme=Radical" alt="GitHub Streak Stats" className='mx-auto'/>
                    </a>
                </p>
            </div>



            <div align="center">


                <h1 className='text-3xl font-bold text-violet-500 my-10 '>Things I have learnt and have a decent experience</h1>

                <div className='lg:flex mx-auto lg:w-[850px] justify-between'>
                    <table className='w-[350px]'>
                        <tr className="border border-opacity-30 border-violet-300  py-5">
                            <td align="center" width="96" className="mx-10 p-5">
                                <img src="https://skillicons.dev/icons?i=html" width="48" height="48" alt="HTML" />
                                HTML
                            </td>
                            <td align="center" width="96" className=" p-5">
                                8 months+
                            </td>

                        </tr>
                        <tr className="border border-opacity-30 border-violet-300 py-5">
                            <td align="center" width="96" className=" p-5">
                                <img src="https://skillicons.dev/icons?i=css" width="48" height="48" alt="CSS" />
                                CSS
                            </td>
                            <td align="center" width="96" className=" p-5">
                                8 months+
                            </td>
                        </tr>
                        <tr className="border border-opacity-30 border-violet-300 py-5">
                            <td align="center" width="96" className=" p-5">
                                <img src="https://skillicons.dev/icons?i=tailwind" width="48" height="48" alt="Tailwind" />
                                Tailwind
                            </td>
                            <td align="center" width="96" className=" p-5">
                                8 months+
                            </td>
                        </tr>
                        <tr className="border border-opacity-30 border-violet-300 py-5">
                            <td align="center" width="96" className=" p-5">
                                <img src="https://skillicons.dev/icons?i=js" width="48" height="48" alt="JavaScript" />
                                JavaScript
                            </td>
                            <td align="center" width="96" className=" p-5">
                                8 months+
                            </td>
                        </tr>
                    </table>
                    <table className='w-[350px]'>
                        <tr className="border border-opacity-30 border-violet-300 py-5">
                            <td align="center" width="96" className=" p-5">
                                <img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="React" />
                                React
                            </td>
                            <td align="center" width="96" className=" p-5">
                                6 months+
                            </td>
                        </tr>
                        <tr className="border border-opacity-30 border-violet-300 py-5">

                            <td align="center" width="96" className=" p-5">
                                <img src="https://skillicons.dev/icons?i=mongodb" width="48" height="48" alt="MongoDB" />
                                MongoDB
                            </td>
                            <td align="center" width="96" className=" p-5">
                                6 months+
                            </td>
                        </tr>
                        <tr className="border border-opacity-30 border-violet-300 py-5">

                            <td align="center" width="96" className=" p-5">
                                <img src="https://skillicons.dev/icons?i=expressjs" width="48" height="48" alt="Tailwind" />
                                Express.Js
                            </td>
                            <td align="center" width="96" className=" p-5">
                                6 months+
                            </td>
                        </tr>
                        <tr className="border border-opacity-30 border-violet-300 py-5">

                            <td align="center" width="96" className=" p-5">
                                <img src="https://skillicons.dev/icons?i=git" width="48" height="48" alt="Tailwind" />
                                Git
                            </td>
                            <td align="center" width="96" className=" p-5">
                                8 months+
                            </td>
                        </tr>
                    </table>
                </div>




                <h1 className='text-3xl font-bold text-violet-500 my-10 '>Things I am exploring right now </h1>
                <table className='w-[250px]'>
                    <tr className="border border-opacity-30 border-violet-300 py-5">
                        <td align="center" width="96" className=" p-5">
                            <img src="https://skillicons.dev/icons?i=nextjs" width="48" height="48" alt="Next.js" />
                            Next.js
                        </td>
                        <td align="center" width="96" className=" p-5" className=" p-5">
                            <img src="https://skillicons.dev/icons?i=react" width="48" height="48" alt="Next.js" />
                            Advance React
                        </td>
                    </tr>

                </table>
            </div>




        </div>
    );
};

export default GithubStats;
