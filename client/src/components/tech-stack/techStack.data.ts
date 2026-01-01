// techStack.data.ts
import {
  FaReact,
  FaNodeJs,
  FaAngular,
  FaFigma,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import { SiExpress, SiNestjs, SiGraphql, SiMongodb } from "react-icons/si";

export const techStack = [
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Angular", icon: FaAngular, color: "text-red-500" },
  { name: "Figma", icon: FaFigma, color: "text-purple-400" },


  { name: "Express", icon: SiExpress, color: "text-gray-300" },
  { name: "NestJS", icon: SiNestjs, color: "text-rose-500" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },

  { name: "Docker", icon: FaDocker, color: "text-sky-400" },
  { name: "AWS", icon: FaAws, color: "text-amber-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },

];
