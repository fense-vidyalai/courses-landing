import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-gray-200 bg-white py-12 md:py-16 lg:py-20" id="contact">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-3">
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
            Empowering students to achieve academic excellence through personalized AP tutoring.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20 transition-colors touch-manipulation"
              aria-label="Follow Vidyalai on Facebook"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20 transition-colors touch-manipulation"
              aria-label="Follow Vidyalai on Twitter"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="rounded-full bg-primary/10 p-2 text-primary hover:bg-primary/20 transition-colors touch-manipulation"
              aria-label="Follow Vidyalai on Instagram"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-black">Contact Us</h3>
            <ul className="space-y-3 text-base text-text-secondary">
              <li className="flex items-center gap-2 hover:text-primary transition-colors touch-manipulation">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:info@vidyalai.com" className="hover:underline">
                  info@vidyalai.com
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors touch-manipulation">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+15551234567" className="hover:underline">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-2 hover:text-primary transition-colors touch-manipulation">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span>123 Education St, Learning City</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-black">Quick Links</h3>
            <ul className="space-y-3 text-base text-text-secondary">
              <li>
                <Link
                  href="#about"
                  className="hover:text-primary transition-colors touch-manipulation block py-1 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#subjects"
                  className="hover:text-primary transition-colors touch-manipulation block py-1 hover:underline"
                >
                  Subjects
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors touch-manipulation block py-1 hover:underline"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-primary transition-colors touch-manipulation block py-1 hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-black">Resources for Parents</h3>
            <ul className="space-y-3 text-base text-text-secondary">
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors touch-manipulation block py-1 hover:underline"
                >
                  Parent Guide to AP Courses
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors touch-manipulation block py-1 hover:underline"
                >
                  AP Study Tips
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors touch-manipulation block py-1 hover:underline"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-primary transition-colors touch-manipulation block py-1 hover:underline"
                >
                  FAQs for Parents
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-10 border-t border-gray-200 pt-6 md:pt-8 px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-center text-sm text-text-secondary">&copy; {currentYear} Vidyalai. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-text-secondary">
            <Link href="#" className="hover:text-primary transition-colors touch-manipulation hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors touch-manipulation hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
