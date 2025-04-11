import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "info@vidyalai.com",
      href: "mailto:info@vidyalai.com",
      isLink: true,
    },
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      isLink: true,
    },
    {
      icon: MapPin,
      text: "123 Education St, Learning City",
      href: null,
      isLink: false,
    },
  ];

  const quickLinks = [
    { text: "About Us", href: "#about" },
    { text: "Subjects", href: "#subjects" },
    { text: "Tutors", href: "#tutors" },
    { text: "Contact", href: "#contact" },
  ];

  // const parentResources = [
  //   { text: "Parent Guide to AP Courses", href: "#" },
  //   { text: "AP Study Tips", href: "#" },
  //   { text: "Success Stories", href: "#" },
  //   { text: "FAQs for Parents", href: "#" }
  // ]

  // Split courses into two separate arrays for the two columns
  const coursesLinksColumnOne = [
    { text: "AP Biology", href: "/ap-biology" },
    { text: "AP Chemistry", href: "/ap-chemistry" },
    { text: "AP Physics 1: Algebra-Based", href: "/ap-physics" },
    { text: "AP Physics 2: Algebra-Based", href: "/ap-physics" },
    { text: "AP Physics C: Electricity and Magnetism", href: "/ap-physics" },
    { text: "AP Physics C: Mechanics", href: "/ap-physics" },
  ];

  const coursesLinksColumnTwo = [
    { text: "AP Calculus", href: "/ap-calculus" },
    { text: "AP Calculus AB", href: "/ap-calculus-ab" },
    { text: "AP Calculus BC", href: "/ap-calculus-bc" },
    { text: "AP Statistics", href: "/ap-statistics" },
    { text: "AP Macroeconomics", href: "/ap-macroeconomics" },
    { text: "AP Microeconomics", href: "/ap-microeconomics" },
  ];

  const legalLinks = [
    { text: "Privacy Policy", href: "https://www.vidyalai.com/privacy-policy" },
    { text: "Terms of Service", href: "https://www.vidyalai.com/terms-and-conditions" },
  ];

  return (
    <footer
      className="w-full border-t border-gray-200 bg-white py-12 md:py-16 lg:py-20"
      id="contact"
    >
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-3">
        {/* Company Information */}
        <div className="space-y-4">
          <Link href="/" className="flex">
            <div className="relative h-16 w-32 md:h-16 md:w-32 ml-[-18px]">
              <Image
                src="/logo.svg"
                alt="Vidyalai Logo"
                fill
                className="object-fill"
              />
            </div>
          </Link>
          <p className="max-w-xs text-base text-text-secondary">
            Empowering students to achieve academic excellence through
            personalized AP tutoring.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <SocialLink
                key={social.label}
                icon={social.icon}
                label={social.label}
                href={social.href}
              />
            ))}
          </div>
        </div>

        {/* Footer Links Sections */}
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-12">
          {/* Contact Section */}
          <div className="space-y-4 lg:col-span-3">
            <h3 className="text-lg font-bold text-black">Contact Us</h3>
            <ul className="space-y-3 text-base text-text-secondary">
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
          </div>

          {/* Quick Links Section - smaller width */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-bold text-black">Quick Links</h3>
            <ul className="space-y-3 text-base text-text-secondary">
              {quickLinks.map((link, index) => (
                <FooterLink key={index} text={link.text} href={link.href} />
              ))}
            </ul>
          </div>

          {/* Courses Links Section - more space */}
          <div className="space-y-4 lg:col-span-7">
            <h3 className="text-lg font-bold text-black">AP Courses</h3>
            <div className="grid grid-cols-2 gap-x-4">
              {/* First column of courses */}
              <div>
                <ul className="space-y-2 text-base text-text-secondary">
                  {coursesLinksColumnOne.map((resource, index) => (
                    <FooterLink
                      key={index}
                      text={resource.text}
                      href={resource.href}
                    />
                  ))}
                </ul>
              </div>

              {/* Second column of courses */}
              <div>
                <ul className="space-y-2 text-base text-text-secondary">
                  {coursesLinksColumnTwo.map((resource, index) => (
                    <FooterLink
                      key={index}
                      text={resource.text}
                      href={resource.href}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Legal */}
      <div className="container mt-10 border-t border-gray-200 pt-6 md:pt-8 px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-center text-sm text-text-secondary">
            &copy; {currentYear} Vidyalai. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-text-secondary">
            {legalLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-primary transition-colors touch-manipulation hover:underline"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// Component for social media links
function SocialLink({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20 transition-colors touch-manipulation"
      aria-label={`Follow Vidyalai on ${label}`}
    >
      <Icon className="h-5 w-5" />
      <span className="sr-only">{label}</span>
    </Link>
  );
}

// Component for contact items
function ContactItem({
  icon: Icon,
  text,
  href,
  isLink,
}: {
  icon: React.ElementType;
  text: string;
  href: string;
  isLink: boolean;
}) {
  return (
    <li className="flex items-center gap-2 hover:text-primary transition-colors touch-manipulation">
      <Icon className="h-4 w-4 text-primary flex-shrink-0" />
      {isLink ? (
        <a href={href} className="hover:underline">
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </li>
  );
}

// Component for footer links
function FooterLink({ text, href }: { text: string; href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-primary transition-colors touch-manipulation block py-1 hover:underline"
      >
        {text}
      </Link>
    </li>
  );
}
