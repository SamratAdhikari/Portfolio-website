import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "../../components/projects";
import { projectsData } from "../../data";
import RenderModel from "../../components/RenderModel";
import Staff from "../../components/Staff";

export const metadata = {
    title: `Projects | Samrat Adhikari`,
    description: "Behold the portfolio of Wizard 'Samrat the Sagefire'",
};

export default function Home() {
    return (
        <>
            <Image
                src={bg}
                alt="background-image"
                className="fixed top-0 left-0 w-full h-full -z-50 object-cover object-center opacity-25"
                priority={true}
            />
            <ProjectList projects={projectsData} />
            <div
                className="flex items-center justify-center fixed top-16 lg:top-20 
      -translate-x-1/2 lg:translate-x-0 left-1/2 lg:-left-24 h-screen -z-10"
            >
                <RenderModel>
                    <Staff />
                </RenderModel>
            </div>
        </>
    );
}
