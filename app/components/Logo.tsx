"use client";
import LogoWhite from "@/public/ukslogowhite.png";
import LogoBlack from "@/public/ukslogoblack.png";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  const { theme } = useTheme();
  return (
    <Link href="/" className="h-full w-auto" title="Przejdź do strony głównej">
      <Image
        src={theme === "dark" ? LogoWhite : LogoBlack}
        alt="Logo UKS Rusiec"
        className="nav-logo"
      />
    </Link>
  );
}

export default Logo;
