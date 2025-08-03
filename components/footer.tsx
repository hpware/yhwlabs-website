import Image from "next/image";
import Link from "next/link";
import { GithubIcon, ExternalLink } from "lucide-react";

const socials = [
  {
    name: "github",
    url: "https://github.com/hpware",
    icon: <GithubIcon />,
  },
];

const colLinks = [
  [
    {
      name: "Home",
      link: "/",
    },
  ],
  [
    {
      name: "Status Page",
      link: "https://status.yhw.tw/",
    },
    {
      name: "Email",
      link: "mailto:ceo-vp@yhw.tw",
    },
    {
      name: "幫助翻譯",
      link: "/zh/help_traslating",
    },
  ],
];

export default function Footer() {
  return (
    <div className="relative bottom-0 inset-x-0 min-h-1/2 ">
      <hr className="bg-black/50 dark:bg-white/50 flex-wrap w-[calc(100%-30px)] justify-center align-middle self-center content-center text-center m-auto" />
      <div className="justify-center align-middle flex flex-row flex-wrap gap-2 mt-4 mb-2 p-1">
        {/* Profile Section */}
        <div className="flex flex-col w-full md:w-[calc(50%-30px)] p-2 m-2 md:pl-12">
          <span className="text-xl">yhwLabs</span>
          <span className="text-sm text-gray-400/70">
            Where everything starts.
          </span>
          <div className="flex flex-row flex-wrap">
            {socials.map((i) => (
              <a
                href={i.url}
                aria-label={i.name}
                key={i.url}
                target="_blank"
                className="m-1 hover:text-gray-500/60 hover:dark:text-white/60 transition-all duration-300"
              >
                {i.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col w-full md:w-[calc(50%-30px)] p-2 m-2">
          <h3 className="text-xl m-2">
            <i>Links</i>
          </h3>
          <div className="flex flex-col md:flex-row ml-4">
            {colLinks.map((idiv, index) => (
              <div
                className={`flex flex-col gap-2 ${
                  index === 1 ? "mt-4 md:mt-0 md:ml-12" : "mr-12"
                }`}
                key={idiv[0].name}
              >
                {idiv.map((i) => (
                  <Link
                    key={i.link}
                    href={i.link}
                    target="_blank"
                    className="hover:text-gray-600/50 hover:dark:text-gray-300/50 transition-all duration-300 flex flex-row items-center"
                  >
                    {i.name}
                    {(i.link.includes("//") || i.link.includes("mailto:")) && (
                      <ExternalLink className="w-4 ml-1" />
                    )}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright & Version */}
      <div className="flex flex-col">
        <div className="text-center md:text-right text-gray-500 p-4">
          &copy; {new Date().getFullYear()} yhwLabs || v0.1a
        </div>
      </div>
    </div>
  );
}
