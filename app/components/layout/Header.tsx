import * as React from "react";
import { Link, NavLink } from "react-router";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/education", label: "Education" },
  { to: "/experience", label: "Experience" },
  { to: "/login", label: "Login" },
] as const;

function NavItem({
  to,
  label,
  end,
  onClick,
}: {
  to: string;
  label: string;
  end?: boolean;
  onClick?: () => void;
}) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "rounded-md px-3 py-2 text-sm font-medium transition-colors",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          isActive
            ? "bg-gray-900 text-white"
            : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

export default function Header() {
  const [open, setOpen] = React.useState(false);

  // Close mobile menu on Escape
  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
          aria-label="Go to home"
        >
          {/* Logo */}
          <img
            src="/media/logo.png"
            alt="Iman Abboud Logo"
            className="h-9 w-9 object-contain"
          />

          {/* Site Name */}
          <span className="text-base font-semibold tracking-tight text-gray-900">
            Iman Abboud <a className="text-emerald-700 ">dot</a> com
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavItem key={item.to} {...item} />
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 md:hidden"
          aria-label="Toggle menu"
          aria-controls="mobile-nav"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Simple hamburger / X */}
          <span className="sr-only">Menu</span>
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        className={[
          "md:hidden border-t bg-white",
          "overflow-hidden transition-all duration-200 ease-out",
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
        aria-hidden={!open}
      >
        <nav
          className={[
            "mx-auto max-w-5xl px-4 py-3",
            "transform transition-transform duration-200 ease-out",
            open ? "translate-y-0" : "-translate-y-2",
          ].join(" ")}
          aria-label="Mobile primary"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavItem
                key={item.to}
                {...item}
                onClick={() => setOpen(false)}
              />
            ))}
          </div>
        </nav>
      </div>

    </header>
  );
}
