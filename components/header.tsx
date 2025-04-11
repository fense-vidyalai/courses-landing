"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#subjects", label: "Subjects" },
  { href: "#tutors", label: "Tutors" },
  { href: "#contact", label: "Contact" },
];

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  isMobile?: boolean;
}

const NavLink = ({ href, label, onClick, isMobile }: NavLinkProps) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const adjustedHref = isHome ? href : `/${href}`;
  return(
  <Link
    href={adjustedHref}
    className={`text-base font-medium text-black hover:text-primary transition-colors smooth-scroll
      ${isMobile ? "py-2 touch-manipulation" : ""}`}
    onClick={onClick}
  >
    {label}
  </Link>
)};

const ActionButton = ({
  href,
  variant = "primary",
  className = "",
  onClick,
  children,
}: {
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  children: React.ReactNode;
}) => {
  const baseStyles =
    "text-base font-medium transition-all duration-300 transform hover:scale-105";
  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-dark"
      : "bg-white text-primary border border-primary hover:bg-primary/10";

  const button = (
    <Button
      className={`rounded-md ${variantStyles} ${baseStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );

  return href ? <Link href={href}>{button}</Link> : button;
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMobile();

  const handleMobileClick = () => setIsMenuOpen(false);

  return (
    <>
      <header className="w-full bg-white border-b border-gray-100">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-32 w-32 md:h-48 md:w-48">
              <Image
                src="/logo.svg"
                alt="Vidyalai Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-10 ml-8">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex md:gap-3">
            <ActionButton
              href="https://www.vidyalai.com/signup"
              variant="secondary"
              className="px-6 py-2 h-10"
            >
              Sign Up
            </ActionButton>
            <ActionButton
              href="https://www.vidyalai.com/request?exam=AP"
              className="px-6 py-2 h-10"
            >
              Request Lesson
            </ActionButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-black p-1 touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="container py-4 bg-white md:hidden border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  onClick={handleMobileClick}
                  isMobile={true}
                />
              ))}
              <ActionButton
                href="https://www.vidyalai.com/signup"
                variant="secondary"
                className="w-full px-3 py-2 mt-2"
                onClick={handleMobileClick}
              >
                Sign Up
              </ActionButton>
              <ActionButton
                href="https://www.vidyalai.com/request?exam=AP"
                className="w-full px-3 py-2 mt-2"
                onClick={handleMobileClick}
              >
                Request Lesson
              </ActionButton>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile Sticky CTA */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-primary/10 p-2 rounded-full mr-2">
              <Phone className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-xs text-gray-500">Need help?</p>
              <p className="text-xs font-bold text-black">Call us now</p>
            </div>
          </div>
          <div className="flex gap-2">
            <ActionButton
              href="https://www.vidyalai.com/signup"
              variant="secondary"
              className="px-3 py-2 h-10 text-sm"
            >
              Sign Up
            </ActionButton>
            <ActionButton
              href="https://www.vidyalai.com/request?exam=AP"
              className="px-3 py-2 h-10 text-sm"
            >
              Request Lesson
            </ActionButton>
          </div>
        </div>
      )}
    </>
  );
}