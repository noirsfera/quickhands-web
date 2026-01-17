"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"


const footerLinks = {
  forClients: [
    { title: "Post a Project", href: "#" },
    { title: "Find Talent", href: "#" },
    { title: "How to Hire", href: "#" },
    { title: "Enterprise", href: "#" },
  ],
  forSpecialists: [
    { title: "Find Work", href: "#" },
    { title: "Create Profile", href: "#" },
    { title: "How to Win Jobs", href: "#" },
    { title: "Success Stories", href: "#" },
  ],
  company: [
    { title: "About Us", href: "#" },
    { title: "Contact", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Privacy Policy", href: "#" },
  ],
}

export function Footer() {
  

  return (
    <footer id="footer" className="w-full pb-0">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between p-10 container mx-auto">
        {/* Left side - Logo and description */}
        <div className="flex flex-col items-start justify-start gap-y-5 max-w-xs mx-0">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/quickhands.png" alt="Quickhands Logo" width={32} height={32} />
            <p className="text-xl font-bold text-foreground font-sans">Quickhands</p>
          </Link>
          <p className="tracking-tight text-muted-foreground font-medium font-sans leading-relaxed">
            The complete platform specialists and.
          </p>
        </div>

        {/* Right side - Links */}
        <div className="pt-5 md:pt-0 md:w-1/2">
          <div className="flex flex-col items-start justify-start md:flex-row md:items-start md:justify-between gap-y-8 lg:pl-10">
            {/* For Clients */}
            <ul className="flex flex-col gap-y-2">
              <li className="mb-2 text-sm font-semibold text-foreground font-sans">For Clients</li>
              {footerLinks.forClients.map((link) => (
                <li
                  key={link.title}
                  className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground"
                >
                  <Link href={link.href} className="font-sans hover:text-foreground transition-colors">
                    {link.title}
                  </Link>
                  <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                    <ChevronRight className="h-3 w-3" />
                  </div>
                </li>
              ))}
            </ul>

            {/* For Specialists */}
            <ul className="flex flex-col gap-y-2">
              <li className="mb-2 text-sm font-semibold text-foreground font-sans">For Specialists</li>
              {footerLinks.forSpecialists.map((link) => (
                <li
                  key={link.title}
                  className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground"
                >
                  <Link href={link.href} className="font-sans hover:text-foreground transition-colors">
                    {link.title}
                  </Link>
                  <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                    <ChevronRight className="h-3 w-3" />
                  </div>
                </li>
              ))}
            </ul>

            {/* Company */}
            <ul className="flex flex-col gap-y-2">
              <li className="mb-2 text-sm font-semibold text-foreground font-sans">Company</li>
              {footerLinks.company.map((link) => (
                <li
                  key={link.title}
                  className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground"
                >
                  <Link href={link.href} className="font-sans hover:text-foreground transition-colors">
                    {link.title}
                  </Link>
                  <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                    <ChevronRight className="h-3 w-3" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Flickering Grid Section */}
      <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p className="font-sans">&copy; 2026 Quickhands. All rights reserved.</p>
        </div>
      
    </footer>
  )
}
