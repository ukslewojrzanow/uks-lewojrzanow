"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavDesktop() {
  const pathname = usePathname();
  return (
    <ul className="flex gap-12">
      <li>
        <Link
          href="/"
          className={`${
            pathname === "/"
              ? "nav_underline"
              : "opacity-80 hover:opacity-100 transition-opacity duration-300"
          }`}
        >
          Strona główna
        </Link>
      </li>
      <li>
        <Link
          href="/aktualnosci"
          className={`${
            pathname === "/aktualnosci"
              ? "nav_underline"
              : "opacity-80 hover:opacity-100 transition-opacity duration-300"
          }`}
        >
          Aktualności
        </Link>
      </li>
      <li>
        <Link
          href="/druzyny"
          className={`${
            pathname === "/druzyny"
              ? "nav_underline"
              : "opacity-80 hover:opacity-100 transition-opacity duration-300"
          }`}
        >
          Drużyny
        </Link>
      </li>
      <li>
        <Link
          href="/partnerzy"
          className={`${
            pathname === "/partnerzy"
              ? "nav_underline"
              : "opacity-80 hover:opacity-100 transition-opacity duration-300"
          }`}
        >
          Partnerzy
        </Link>
      </li>
      <li>
        <Link
          href="/kontakt"
          className={`${
            pathname === "/kontakt"
              ? "nav_underline"
              : "opacity-80 hover:opacity-100 transition-opacity duration-300"
          }`}
        >
          Kontakt
        </Link>
      </li>
    </ul>
  );
}

export default NavDesktop;
