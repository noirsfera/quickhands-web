"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserButton, SignedOut, SignedIn, SignInButton, SignUpButton } from "@clerk/nextjs"

interface LoginModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSignupClick: () => void
}

export function LoginModal({ open, onOpenChange, onSignupClick }: LoginModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-sans text-2xl">Welcome back</DialogTitle>
          <DialogDescription className="font-sans">Continue with Google to access your account</DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Button className="font-sans w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn></Button>
          <div className="text-center text-sm">
            <span className="font-sans text-muted-foreground">{"Don't have an account? "}</span>
            
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
