import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Map,
  Phone,
  Pin,
  Twitter,
  PenSquare,
  Youtube,
} from "lucide-react";
import { Separator } from "./ui/separator";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { getSocialMedia } from "@/sanity/sanity-utils";

const font = Montserrat({
  weight: "900",
  subsets: ["latin"],
});

type SocialMediaData = {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  pinterest?: string;
  youtube?: string;
  tripadvisor?: string;
};

export default async function Footer() {
  const socialMedia: SocialMediaData[] = await getSocialMedia();

  // Map of social media names to icons
  const socialMediaIcons: {
    [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  } = {
    facebook: Facebook,
    instagram: Instagram,
    twitter: Twitter,
    linkedin: Linkedin,
    pinterest: Pin,
    youtube: Youtube,
    tripadvisor: Map,
  };

  return (
    <footer className="p-4 sm:p-6 bg-[#27272A]">
      <Separator className="my-6 lg:my-8 bg-transparent" decorative={false} />
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start mt-4 sm:mt-0 gap-4 col-span-2">
            <Link href="/">
              <h1
                className={cn(
                  "md:block text-2xl font-extrabold tracking-tight leading-none text-primary mb-2",
                  font.className
                )}
              >
                Farol Discover
              </h1>
            </Link>
            <span className="text-sm text-[#a1a1aa]">
              Specialized travel agency that offers unique guided and
              self-guided walking and trekking tours throughout the enchanting
              landscapes of Portugal.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              {socialMedia.map((media: SocialMediaData) => {
                return Object.keys(media).map((key) => {
                  if (key in socialMediaIcons) {
                    const Icon = socialMediaIcons[key];
                    return (
                      media[key as keyof SocialMediaData] && (
                        <Link
                          key={key}
                          href={media[key as keyof SocialMediaData] as string}
                          className="text-primary hover:text-gray-900 dark text-[#a1a1aa]:hover:text-white"
                        >
                          <Icon className="w-5 h-5" />
                        </Link>
                      )
                    );
                  }
                  return null; // add this return to avoid errors
                });
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:gap-6 sm:grid-cols-2 col-span-2">
            <div className="md:mx-auto">
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Contact Us
              </h2>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="mailto:info@faroldiscover.pt"
                    className="text-sm no-underline text-[#a1a1aa] hover:text-white flex items-center whitespace-nowrap"
                  >
                    <Mail className="w-4 h-4 mr-2 text-[#a1a1aa] flex-shrink-0" />
                    info@faroldiscover.pt
                  </Link>
                </li>
                <li>
                  {/* Phone */}
                  <Link
                    href="tel:+351 917 104 248"
                    className="text-sm no-underline text-[#a1a1aa] hover:text-white flex items-center whitespace-nowrap"
                  >
                    <Phone className="w-4 h-4 mr-2 text-[#a1a1aa] flex-shrink-0" />
                    +351 917 104 248
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-sm no-underline text-[#a1a1aa] hover:text-white flex items-center whitespace-nowrap"
                  >
                    <PenSquare className="w-4 h-4 mr-2 text-[#a1a1aa] flex-shrink-0" />
                    Contact Form
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:mx-auto">
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul className="flex flex-col gap-4">
                <li>
                  <Link
                    href="https://www.livroreclamacoes.pt/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm no-underline text-[#a1a1aa] hover:text-white"
                  >
                    Livro de Reclamações
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm no-underline text-[#a1a1aa] hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-sm no-underline text-[#a1a1aa] hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        <Separator className="my-6 lg:my-8 bg-[#a1a1aa]" decorative={true} />
        <div className="text-sm text-white text-center flex flex-col gap-2">
          <div className="flex flex-wrap gap-4 justify-center items-center w-full mb-4">
            <Link
              href="https://visitalgarve.pt/equipamento/10439/farol-discover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/algarve_membro_white.png"
                width={150}
                height={150}
                alt="Visit Algarve Member"
              />
            </Link>
            <Link
              href="https://visitalgarve.pt/equipamento/10439/farol-discover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/visit_algarve_white.png"
                width={150}
                height={150}
                alt="Visit Algarve Member"
              />
            </Link>
            <Link
              href="https://www.visitalentejo.pt/pt/catalogo/o-que-fazer/animacao-turistica/farol-discover/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/visit_alentejo_white.png"
                width={150}
                height={150}
                alt="Visit Alentejo"
              />
            </Link>
            <Link
              href="https://visitalgarve.pt/equipamento/10439/farol-discover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Via_algarviana.svg"
                width={150}
                height={150}
                alt="Visit Algarve Member"
              />
            </Link>
          </div>
          <span className="text-xs text-[#a1a1aa] text-balance">
            <strong>License Numbers:</strong> RNAVT:10982 | RNAAT:148/2024
          </span>
          <span className="text-xs text-[#a1a1aa]">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              Farol Discover™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
