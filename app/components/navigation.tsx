import ThemeToggle from "./ThemeToggle";

import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import Logo from "./Logo";

function Navigation() {
  return (
    <nav className="nav_div">
      <Logo />
      <div className="max-[780]:hidden">
        <NavDesktop />
      </div>
      <div className="flex items-center gap-8">
        <div className="min-[780]:hidden">
          <NavMobile />
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navigation;
