import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { i18n } from "@/i18n.config";

function LanguageToggle({ language }: { language: string }) {
  const allLanguages = i18n.languages;
  const currentLanguage = allLanguages.find((lang) => lang.locale === language);

  return (
    <div className="flex items-center relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"outline"} size={"sm"}>
            {currentLanguage
              ? currentLanguage.id.toUpperCase()
              : language.toUpperCase()}
            <ChevronDown className="w-5 h-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-1 border-0">
          {allLanguages.map((lang) => (
            <DropdownMenuItem key={lang.id}>
              <Link href={`/${lang.locale}`}>{lang.title}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default LanguageToggle;
