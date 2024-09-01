import React from "react";
import ItemLayout from "./ItemLayout";
import Image from "next/image";

const AboutDetails = () => {
    return (
        <section className="py-20 w-full">
            <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
                <ItemLayout
                    className={
                        "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
                    }
                >
                    <h2 className="font-bold text-xl md:text-2xl text-left w-full capitalize">
                        Sorcerer of Digital Enchantment
                    </h2>
                    <p className="text-justify font-light text-xs sm:text-sm md:text-base">
                        In the enchanted realms of digital sorcery, I am Samrat,
                        a sage of Machine Learning and Data Science, conjuring
                        insights from the cosmic tapestry of data. As a web
                        alchemist, I meld React and Django, crafting portals
                        that bridge realms. Delving into the mystic arts of
                        cryptography and blockchain, I unlock secrets of
                        security and decentralization, while in the ethereal
                        dance of simulative research, I explore unseen
                        territories. Ever the seeker, I relentlessly pursue new
                        skills and technologies, for in the ever-shifting
                        currents of innovation lies the key to shaping reality
                        itself.
                    </p>
                </ItemLayout>

                <ItemLayout
                    className={
                        "col-span-full xs:col-span-6 lg:col-span-4 text-accent"
                    }
                >
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        10+
                        <sub className="font-semibold text-base">clients</sub>
                    </p>
                </ItemLayout>

                <ItemLayout
                    className={
                        "col-span-full xs:col-span-6 lg:col-span-4 text-accent"
                    }
                >
                    <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
                        4+
                        <sub className="font-semibold text-base">
                            years of experience
                        </sub>
                    </p>
                </ItemLayout>

                <ItemLayout
                    className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
                >
                    <div className="relative w-full h-[400px]">
                        {" "}
                        {/* Adjust height as needed */}
                        <Image
                            src="https://github-readme-stats.vercel.app/api/top-langs?username=SamratAdhikari&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
                            alt="Top Languages"
                            layout="fill"
                            objectFit="contain" // Options: 'contain', 'cover'
                        />
                    </div>
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
                    <div className="relative w-full h-[350px]">
                        {" "}
                        {/* Adjust height as needed */}
                        <Image
                            src="https://github-readme-stats.vercel.app/api?username=SamratAdhikari&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
                            alt="GitHub Stats"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-full"}>
                    <div className="relative w-full h-[240px]">
                        {/* Adjust height as needed */}
                        <Image
                            src="https://skillicons.dev/icons?i=py,cs,js,html,css,r,azure,heroku,django,flask,opencv,mysql,mongodb,postgres,pytorch,tensorflow,docker,arduino,postman,linux,raspberrypi,c,cpp,firebase,bootstrap,react,wordpress,sqlite,figma,notion,cloudflare,matlab,vim,vercel,git,vscode,threejs,tailwind,aws"
                            alt="Skills"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <div className="relative w-full h-[250px]">
                        {/* Adjust height as needed */}
                        <Image
                            src="https://github-readme-streak-stats.herokuapp.com/?user=SamratAdhikari&theme=dark&hide_border=true&type=jpeg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
                            alt="Streak Stats"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </ItemLayout>

                <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
                    <div className="relative w-full h-[250px]">
                        {/* Adjust height as needed */}
                        <Image
                            src="https://github-readme-stats.vercel.app/api/pin/?username=SamratAdhikari&repo=Life-Expectancy-EDA&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
                            alt="Repo Pin"
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </ItemLayout>
            </div>
        </section>
    );
};

export default AboutDetails;
