import Link from "next/link";

import {
  Facebook,
  Instagram,
  Linkedin,
  Map,
  Pin,
  Twitter,
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
  console.log(socialMedia);

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
    <footer className="p-4 sm:p-6">
      <Separator className="my-6 lg:my-8" />
      <div className="max-w-screen-xl mx-auto">
        <div className="sm:flex sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <Link href="/">
              <h1
                className={cn(
                  "md:block text-2xl font-extrabold tracking-tight leading-none",
                  font.className
                )}
              >
                Farol Discover
              </h1>
            </Link>
            <span className="text-sm text-muted-foreground text-balance">
              License Numbers: RNAVT:10982 | RNAAT:148/2024
            </span>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()}{" "}
              <Link href="/" className="hover:underline">
                Farol Discover™
              </Link>
              . All Rights Reserved.
            </span>
          </div>
          <div className="flex flex-col items-start sm:items-end justify-end mt-4 sm:mt-0 gap-4">
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
                          className="text-muted-foreground hover:text-gray-900 dark:hover:text-white"
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
            <div className="mt-4">
              {/* <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="ml-4 text-sm text-muted-foreground hover:underline"
              >
                Terms of Service
              </Link> */}
              <Link
                href="https://www.livroreclamacoes.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-sm text-muted-foreground hover:underline"
              >
                Livro de Reclamações
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
