"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { useState } from "react"
import { LoginModal } from "./LoginModal"
import { SignupModal } from "./SignupModal"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ClientLogin } from "./ClientLogin"
import { cn } from "@/lib/utils"

export function Header() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  const links = [
    { label: "Find Work", href: "#jobs" },
    { label: "Find Talent", href: "#talent" },
    { label: "How It Works", href: "#how" },
  ]

  return (
    <>
      <header
        className={cn(
          "sticky top-5 z-50",
          "mx-auto w-full max-w-5xl rounded-lg border shadow",
          "bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg"
        )}
      >
        <nav className="mx-auto flex items-center justify-between p-1.5">
          <div className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <Image
                  src="/quickhands.png"
                  height={32}
                  width={32}
                  alt="Quickhands Logo"
                  className="transition-transform duration-200 group-hover:scale-105"
                />
              </div>
              <span className="font-sans text-xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                Quickhands
              </span>
            </Link>
          </div>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              onClick={() => setShowLogin(true)}
              className="lg:block hidden"
            >
              Login
            </Button>

            <ClientLogin>
              <Button
                size="sm"
                className="h-10 px-6"
              >
                Register
              </Button>
            </ClientLogin>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
                showClose={false}
              >
                <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={buttonVariants({
                        variant: "ghost",
                        className: "justify-start",
                      })}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-2 p-4 bg-muted/30 border-t">
                  <Button variant="outline" onClick={() => setShowLogin(true)}>
                    Sign In
                  </Button>
                  <Button onClick={() => setShowSignup(true)}>
                    Get Started
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <LoginModal
        open={showLogin}
        onOpenChange={setShowLogin}
        onSignupClick={() => {
          setShowLogin(false)
          setShowSignup(true)
        }}
      />

      <SignupModal
        open={showSignup}
        onOpenChange={setShowSignup}
        onLoginClick={() => {
          setShowSignup(false)
          setShowLogin(true)
        }}
      />
    </>
  )
}
