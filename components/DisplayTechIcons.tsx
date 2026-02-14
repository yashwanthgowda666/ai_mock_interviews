import Image from "next/image";

type Props = {
  techStack: string[];
};

const techMap: Record<string, string> = {
  react: "/react.svg",
  javascript: "/javascript.svg",
  css: "/css.svg",
  nodejs: "/nodejs.svg",
  mongodb: "/mongodb.svg",
};

const DisplayTechIcons = ({ techStack }: Props) => {
  return (
    <div className="flex flex-row">
      {techStack.slice(0, 3).map((tech, index) => {
        const key = tech.toLowerCase().replace(/\s+/g, "");
        const icon = techMap[key] || "/tech.svg";

        return (
          <div
            key={tech}
            className={`relative bg-dark-300 rounded-full p-2 ${
              index >= 1 ? "-ml-3" : ""
            }`}
          >
            <Image src={icon} alt={tech} width={20} height={20} />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayTechIcons;
