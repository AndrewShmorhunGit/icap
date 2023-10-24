import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { palette } from "@/styles/palette";

export const content =
  "Developed by Shmorhun Andrew for testing porpoises. All rights reserved.";

export const year = new Date().getFullYear();

export const links = [
  {
    icon: <AiFillGithub size={20} style={{ color: palette.main }} />,
    link: "https://github.com/AndrewShmorhunGit/icap",
  },
  {
    icon: <AiFillLinkedin size={20} style={{ color: palette.main }} />,
    link: "https://www.linkedin.com/in/andrew-shmorhun-850a76209/",
  },
];
