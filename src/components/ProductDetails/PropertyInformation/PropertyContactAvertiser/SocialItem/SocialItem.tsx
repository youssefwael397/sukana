import React from "react"
import { SocialItemProps } from "../../../../../types/types";

const SocialItem: React.FC<SocialItemProps> = ({ label, icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="flex items-ceneter justify-center h-10 w-10 rounded-full bg-[#606060B2]"
    >
      <img src={icon} alt={label} className="w-6" />
    </a>
  );
};

export default SocialItem;