import Image from "next/image";

import bg from '../../public/background/home-bg.png'
import RenderModel from "./components/RenderModel";
import Wizard from "./components/Wizard";
import Navigation from "./components/navigation";

<link rel="icon" type="image/x-icon" href="./favicon.ico"></link>

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} alt="background-image" fill  className="w-full h-full -z-50 object-cover object-center opacity-25"/>

      <div className="w-full h-screen">
        {/* navigation and 3d model */}
        <Navigation/>
        <RenderModel>
          <Wizard/>
        </RenderModel>

      </div>
      
    </main>
  );
}
