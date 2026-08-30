import LogoIMG from "@/public/ukslogo.png";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="h-full w-auto" title="Przejdź do strony głównej">
      <Image src={LogoIMG} alt="Logo UKS Rusiec" className="nav-logo" />
    </Link>
  );
}

export default Logo;
