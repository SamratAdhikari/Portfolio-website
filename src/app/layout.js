import { Inter } from "next/font/google";
import "./globals.css";
import { clsx } from "clsx";
import FireFliesBG from "./components/FireFliesBG";
import Sound from "./components/Sound";

const inter = Inter({ 
  subsets: ["latin"],     
  variable: '--font-inter',

});

export const metadata = {
  title: "Home | Samrat Adhikari",
  description: "Behold the portfolio of Wizard 'Samrat the Sagefire'",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, 'bg-background text-foreground font-inter')}>
        {children}
        <FireFliesBG/>
        <Sound/>
        <div id="modal-root">
        </div>
        {/* <div id="modal"/> */}
      </body>
    </html>
  );
}
