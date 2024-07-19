import Link from "next/link";
import SanityImage from "./SanityImage";
import { Button } from "./ui/button";
import { Linkedin } from "lucide-react";

type sectionTeamProps = {
  heading?: string;
  subheading?: string;
  teamMembers: {
    name: string;
    role: string;
    gender: string;
    image?: any;
    bio?: string;
    linkedin?: string;
  }[];
};

function Team({ heading, subheading, teamMembers }: sectionTeamProps) {
  console.log(teamMembers);
  return (
    <section className="my-2 py-2">
      <div className="gap-16 items-center px-4 py-10 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16">
        {heading && (
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            {heading}
          </h1>
        )}
        {subheading && (
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-muted-foreground">
            {subheading}
          </h2>
        )}
        <div className="lg:col-span-3">
          <div className="grid gap-8 mt-8 lg:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative aspect-square">
                  {member.image ? (
                    <SanityImage
                      source={member.image}
                      alt={`${member.name}'s image`}
                      className="object-cover w-full h-full rounded-full"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={
                        member.gender === "male"
                          ? "/Team-Member-Male-Placeholder.png"
                          : "/Team-Member-Female-Placeholder.jpg"
                      }
                      alt={`${member.name}'s placeholder image`}
                      className="object-cover w-full h-full rounded-full"
                    />
                  )}
                </div>
                <div className="mt-4 text-center flex justify-center items-center flex-col gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                  {member.bio && <p className="mt-2">{member.bio}</p>}
                  {member.linkedin && (
                    <Link
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="mt-2 flex justify-center items-center gap-1">
                        {" "}
                        <Linkedin className="size-4" /> LinkedIn
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
