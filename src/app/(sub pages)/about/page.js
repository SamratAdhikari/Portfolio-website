import Image from "next/image";
import bg from '../../../../public/background/about-background.png'
import RenderModel from "../../components/RenderModel";
import Hat from "@/app/components/Hat";
import AboutDetails from "@/app/components/about";

export const metadata = {
  title: `About | Samrat Adhikari`,
  description: "Behold the portfolio of Wizard 'Samrat the Sagefire'",
};

export default function Home() {
  return (
    <>
      <Image src={bg} alt="background-image" className="-z-50 fixed top-0 left-0 w-full h-full -z-50 object-cover object-center opacity-25"/>

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Hat/>
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-accent">
            Samrat the Sagefire
            </h1>
          <p className="font-light text-foreground text-ls mt-[8px]">
            Behold Samrat, the Sagefire, melding magic and technology to sculpt new realms of possibilities.
            </p>
        </div>
      </div>

      <AboutDetails/>
    </>
  );
}
