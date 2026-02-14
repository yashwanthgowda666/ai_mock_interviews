import { interviewCovers, mappings } from "@/constants";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const techIconBaseURL =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

/* ---------------- NORMALIZE TECH NAME ---------------- */

const normalizeTechName = (tech: string) => {
  const key = tech
    .toLowerCase()
    .replace(/\.js$/, "")
    .replace(/\s+/g, "");

  return mappings[key as keyof typeof mappings] || key;
};

/* ---------------- CHECK ICON EXISTS ---------------- */

const checkIconExists = async (url: string) => {
  try {
    const res = await fetch(url, { method: "HEAD" });
    return res.ok;
  } catch {
    return false;
  }
};

/* ---------------- GET TECH LOGOS ---------------- */

export const getTechLogos = async (techArray: string[]) => {
  const results = await Promise.all(
    techArray.map(async (tech) => {
      const normalized = normalizeTechName(tech);

      const url = `${techIconBaseURL}/${normalized}/${normalized}-original.svg`;

      const exists = await checkIconExists(url);

      return {
        tech,
        url: exists ? url : "/tech.svg", // fallback icon from public folder
      };
    })
  );

  return results;
};

/* ---------------- RANDOM COVER ---------------- */

export const getRandomInterviewCover = () => {
  const randomIndex = Math.floor(Math.random() * interviewCovers.length);
  return `/covers${interviewCovers[randomIndex]}`;
};
