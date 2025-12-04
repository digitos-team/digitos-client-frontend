import { Link } from 'react-router-dom'
import { Linkedin, Mail, Phone, Instagram, X as XIcon } from 'lucide-react'
import RgbLight from '../assets/RgbLight.png'
import { MapPin } from "lucide-react";

const quickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Career', path: '/career' },
]


const digitosHandles = [
  {
    name: "Digitos LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/digitos-it-solution/"
  },
  {
    name: "Digitos Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/digitos_it_solutions?igsh=Zzl3MGppZ2llZ2Nn&utm_source=qr"
  },
  {
    name: "Digitos X",
    icon: XIcon,   // Updated to the 'X' logo
    url: "https://x.com/digitos_it?s=11"
  },
]

const nextIgnitionHandles = [
  {
    name: "NextIgnition LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/company/nextignition-official/"
  },
  {
    name: "NextIgnition Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/next__ignition?igsh=ZnZ4N2ZmdHJvMHpo&utm_source=qr"
  },
  {
    name: "NextIgnition X",
    icon: XIcon,
    url: "https://x.com/next_ignition?s=11"
  },
]

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container-grid grid gap-6 sm:gap-8 md:gap-10 py-8 sm:py-10 md:py-14 md:grid-cols-4">

        {/* Brand + Tagline */}
        <div className="space-y-3 sm:space-y-4 md:col-span-1">
          <img
            src={RgbLight}
            alt="Digitos Logo"
            className="w-28 sm:w-36 md:w-48 object-contain"
          />

          <p className="text-xs sm:text-sm text-white/80">
            Revolutionizing industries with next-gen AI, smart automation,
            and custom-built software solutions for a future-ready digital ecosystem.
          </p>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent">
            Contact
          </p>

          <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3 text-xs sm:text-sm text-white/80">
            <a
              href="https://maps.app.goo.gl/5XVDchMPkCC9cRyb9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 shrink-0" />
              <span>Plot No 7, N-11 K-Cidco, Chattrapati Sambhajinagar</span>
            </a>


            <p className="flex items-center gap-2">
              <Phone size={14} className="text-accent sm:w-4 sm:h-4" />
              <a href="tel:+917620195100" className="hover:underline">
                +91 7620195100
              </a>
            </p>


            <a
              href="mailto:support@digitiositsolutionspvtltd.com"
              className="flex items-center gap-2 transition hover:text-yellow-400 break-all"
            >
              <Mail size={14} className="text-accent shrink-0 sm:w-4 sm:h-4" />
              support@digitiositsolutionspvtltd.com
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent">
            Quick Links
          </p>

          <div className="mt-3 sm:mt-4 flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/80">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="transition hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Sections */}
        <div className="space-y-5 sm:space-y-8">

          {/* Digitos */}
          <div>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent">
              Social Handles
            </p>
            <div className="mt-2 sm:mt-3 flex gap-3 sm:gap-4 flex-wrap">
              {digitosHandles.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 p-1.5 sm:p-2 text-white transition hover:border-accent hover:text-accent"
                >
                  <Icon size={16} className="sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>


        </div>
      </div>

      <div className="border-t border-white/10 py-4 sm:py-6 text-center text-[10px] sm:text-xs text-white/60">
        © {new Date().getFullYear()} Digitos IT Solutions Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
