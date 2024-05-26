import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { use } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdFavorite } from "react-icons/md";
function FooterComponent() {
  return (
    <div className="relative flex justify-center items-center bottom-0 text-3xl  mb-1 text-white">
      <div className="flex flex-col md:flex-row gap-1">
        <div className="text-base">Made by:</div>
        <div className="flex flex-row">
          <MdFavorite className="animate-pulse text-red-600" />
          <div className="animate-bounce font-bold">Furkan Ergüldürenler</div>
          <MdFavorite className="animate-pulse text-red-600" />
        </div>
        <div className="flex flex-row justify-center items-center gap-4">
          <Link href="https://www.instagram.com/erg09/" target="_blank">
            <FaInstagram />
          </Link>
          <Link
            href="https://www.linkedin.com/in/furkan-erguldurenler/"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/Furkan-Erg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>

          <Link
            href="mailto:furkanerguldurenler@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;
