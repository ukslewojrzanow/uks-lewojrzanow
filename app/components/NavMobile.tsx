"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavMobile() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {!isOpen ? (
        <RxHamburgerMenu
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <IoCloseOutline
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      {isOpen && (
        <div className="menu" onClick={() => setIsOpen(!isOpen)}>
          <ul className="grid gap-12 text-center uppercase">
            <li>
              <Link
                href="/"
                className={`${pathname === "/" && "nav_underline"}`}
              >
                Strona główna
              </Link>
            </li>
            <li>
              <Link
                href="/aktualnosci"
                className={`${pathname === "/aktualnosci" && "nav_underline"}`}
              >
                Aktualności
              </Link>
            </li>
            <li>
              <Link
                href="/druzyny"
                className={`${pathname === "/druzyny" && "nav_underline"}`}
              >
                Drużyny
              </Link>
            </li>
            <li>
              <Link
                href="/partnerzy"
                className={`${pathname === "/partnerzy" && "nav_underline"}`}
              >
                Partnerzy
              </Link>
            </li>
            <li>
              <Link
                href="/kontakt"
                className={`${pathname === "/kontakt" && "nav_underline"}`}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default NavMobile;
