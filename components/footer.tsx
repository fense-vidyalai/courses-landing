import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, X, Instagram, Mail, Phone, MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/vidyalailearning" },
    { icon: X, label: "X", href: "https://x.com/i/flow/login?redirect_after_login=%2Fvidyalai" },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/vidyalailearning/" },
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: "info@vidyalai.com",
      href: "mailto:info@vidyalai.com",
      isLink: true,
    },
    {
      icon: Phone,
      text: "+1-315-712-3901",
      href: "tel:+13157123901",
      isLink: true,
    },
    {
      icon: MapPin,
      text: "UBT Technologies LLC, 30 North Gould Street,Sheridan, Wyoming, United States - 82801",
      href: null,
      isLink: false,
    },
  ]

  const quickLinks = [
    { text: "About Us", href: "#about" },
    { text: "Subjects", href: "#subjects" },
    { text: "Tutors", href: "#tutors" },
    { text: "Contact", href: "#contact" },
  ]

  // Split courses into two separate arrays for the two columns
  const coursesLinksColumnOne = [
    { text: "AP Biology", href: "/ap/ap-biology" },
    { text: "AP Chemistry", href: "/ap/ap-chemistry" },
    { text: "AP Physics 1: Algebra-Based", href: "/ap/ap-physics-1" },
    { text: "AP Physics 2: Algebra-Based", href: "/ap/ap-physics-2" },
    { text: "AP Physics C: Electricity and Magnetism", href: "/ap/ap-physics-c-electricity-and-magnetism" },
    { text: "AP Physics C: Mechanics", href: "/ap/ap-physics-c-mechanics" },
  ]

  const coursesLinksColumnTwo = [
    { text: "AP Calculus", href: "/ap/ap-calculus" },
    { text: "AP Calculus AB", href: "/ap/ap-calculus-ab" },
    { text: "AP Calculus BC", href: "/ap/ap-calculus-bc" },
    { text: "AP Statistics", href: "/ap/ap-statistics" },
    { text: "AP Microeconomics", href: "/ap/ap-microeconomics" },
    { text: "AP Macroeconomics", href: "/ap/ap-macroeconomics" },
  ]

  const legalLinks = [
    { text: "Privacy Policy", href: "https://www.vidyalai.com/privacy-policy" },
    { text: "Terms of Service", href: "https://www.vidyalai.com/terms-and-conditions" },
  ]

  return (
    <footer className="relative w-full bg-gradient-to-b from-white to-gray-50 pt-16 pb-8" id="contact">
      {/* Top decorative border with gradient that matches the logo colors */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>

      <div className="container px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:gap-8 lg:grid-cols-12">
          {/* Company Information & Newsletter */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              {/* Responsive Logo with hover effect */}
              <Link href="/" className="inline-block group">
                <div className="relative h-14 w-36 sm:h-16 sm:w-40 md:h-20 md:w-44 overflow-visible transition-all duration-300 group-hover:scale-105">
                  <Image
                    src="/logo.svg"
                    alt="Vidyalai Logo"
                    fill
                    className="object-contain z-10"
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.05))"
                    }}
                  />
                </div>
              </Link>
              <p className="text-base text-text-secondary leading-relaxed">
                Empowering students to achieve academic excellence through personalized AP tutoring and comprehensive
                support.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <SocialLink key={social.label} icon={social.icon} label={social.label} href={social.href} />
                ))}
              </div>
            </div>
          </div>

          {/* Footer Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {/* Contact Section */}
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-black relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
                  Contact Us
                </h3>
                <ul className="space-y-4 text-base text-text-secondary">
                  {contactInfo.map((item, index) => (
                    <ContactItem
                      key={index}
                      icon={item.icon}
                      text={item.text}
                      href={item.href || ""}
                      isLink={item.isLink}
                    />
                  ))}
                </ul>

                {/* Quick Links Section */}
                <h3 className="text-lg font-bold text-black relative pb-2 mt-8 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-base text-text-secondary grid grid-cols-2">
                  {quickLinks.map((link, index) => (
                    <FooterLink key={index} text={link.text} href={link.href} />
                  ))}
                </ul>
              </div>

              {/* AP Courses - Two Columns */}
              <div className="space-y-5 md:col-span-2">
                <h3 className="text-lg font-bold text-black relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
                  AP Courses
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
                  {/* First column of courses */}
                  <div>
                    <ul className="space-y-2 text-base text-text-secondary">
                      {coursesLinksColumnOne.map((resource, index) => (
                        <FooterLink key={index} text={resource.text} href={resource.href} />
                      ))}
                    </ul>
                  </div>

                  {/* Second column of courses */}
                  <div>
                    <ul className="space-y-2 text-base text-text-secondary">
                      {coursesLinksColumnTwo.map((resource, index) => (
                        <FooterLink key={index} text={resource.text} href={resource.href} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Copyright and Legal */}
        <div className="mt-16 pt-6 border-t border-gray-200 h-32">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-secondary">&copy; {currentYear} Vidyalai. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-text-secondary hover:text-primary transition-colors duration-200 hover:underline"
                >
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Component for social media links
function SocialLink({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ElementType
  label: string
  href: string
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 transform hover:scale-105"
      aria-label={`Follow Vidyalai on ${label}`}
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">{label}</span>
    </Link>
  )
}

// Component for contact items
function ContactItem({
  icon: Icon,
  text,
  href,
  isLink,
}: {
  icon: React.ElementType
  text: string
  href: string
  isLink: boolean
}) {
  return (
    <li className="flex items-center gap-3 group">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      {isLink ? (
        <a href={href} className="text-text-secondary hover:text-primary transition-colors duration-200">
          {text}
        </a>
      ) : (
        <span className="text-text-secondary">{text}</span>
      )}
    </li>
  )
}

// Component for footer links
function FooterLink({ text, href }: { text: string; href: string }) {
  return (
    <li className="group">
      <Link
        href={href}
        className="inline-flex items-center py-1 text-text-secondary hover:text-primary transition-colors duration-200"
      >
        <ChevronRight className="h-3.5 w-3.5 mr-1.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
        <span className="group-hover:translate-x-1 transition-transform duration-200">{text}</span>
      </Link>
    </li>
  )
}