"use client";
import Ticker from "framer-motion-ticker";
import { useState } from "react";
import Link from "next/link";
export function WebsitesListTicker({
  items,
}: {
  items: {
    image: string;
    text: string;
    url: string;
  }[];
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div>
      <Ticker
        duration={10}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        isPlaying={isPlaying}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`m-[5px] h-[200px] w-[250px] text-white rounded group transition-all duration-300`}
          >
            <img
              src={item.image}
              alt={`The preview for ${item.url}`}
              className="rounded group-hover:blur-lg transition-all duration-300"
            />
            <span className="hidden group-hover:block group-focus:block transition-all duration-300 -translate-y-12 translate-x-2 ">
              {item.text}
            </span>
            <Link
              href={item.url}
              target="_blank"
              className="hidden group-hover:block group-focus:block transition-all duration-300 -translate-y-12 translate-x-2 hover:text-blue-200 hover:underline"
            >
              {item.url}
            </Link>
          </div>
        ))}
      </Ticker>
    </div>
  );
}
