import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import ContactForm from "@/app/components/contact/ContactForm";

export const metadata = {
  title: `Contact | Samrat Adhikari`,
  description: "Behold the portfolio of Wizard 'Samrat the Sagefire'",
};


export default function Contact() {
	return (
		<>
			<Image
				src={bg}
				alt="background-image"
				className="-z-50 fixed top-0 left-0 w-full h-full -z-50 object-cover object-center opacity-25"
			/>
      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Summon the Wizard
          </h1>

          <p className="text-center font-light text-sm xs:text-base">
          Summon me, seekers of digital realms! Let's embark on a quest together, weaving magic through code and creativity. Together, we'll craft wonders that transcend the ordinary, illuminating the path to our collective digital dreams.
          </p>

        </div>

        <ContactForm/>
      </article>
		</>
	);
}
