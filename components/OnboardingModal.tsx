"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface OnboardingModalProps {
  children: React.ReactNode
}

export function OnboardingModal({ children }: OnboardingModalProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    relevantInfo: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to submit onboarding")
      }

      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const handleContinue = () => {
    setOpen(false)
    router.push(`/profile/${formData.firstName.toLowerCase()}`)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-[520px]">
        {!success ? (
          <>
            {/* ---------------- FORM VIEW ---------------- */}
            <DialogHeader>
              <DialogTitle className="text-2xl">
                Welcome to QuickHands
              </DialogTitle>
              <DialogDescription>
                Complete your profile to get started.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="profession">Profession</Label>
                <Input
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="relevantInfo">Relevant Information</Label>
                <textarea
                  id="relevantInfo"
                  name="relevantInfo"
                  value={formData.relevantInfo}
                  onChange={handleChange}
                  required
                  className="min-h-[100px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}

              <DialogFooter>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Profile...
                    </>
                  ) : (
                    "Complete Onboarding"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <>
            {/* ---------------- SUCCESS VIEW ---------------- */}
            <DialogHeader>
              <DialogTitle className="text-2xl">
                Welcome to QuickHands Africa 👋
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-4 py-4 text-sm leading-relaxed">
              <p>
                Your account is now active. You’re ready to start finding
                jobs and growing your business using your skills.
              </p>

              <div>
                <p className="font-medium mb-2">
                  With QuickHands Africa, you get:
                </p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>Unlimited access to job opportunities</li>
                  <li>Safe and secure payments</li>
                  <li>Direct communication with verified users</li>
                </ol>
              </div>

              <p>
                For tips, updates, and new opportunities, please follow us
                on our social media platforms.
              </p>

              <p>
                Complete your profile, stay active, and start connecting
                with clients today.
              </p>

              <p className="font-medium">
                Welcome on board,
                <br />
                The QuickHands Africa Team
              </p>
            </div>

            <DialogFooter>
              <Button onClick={handleContinue} className="w-full">
                Continue
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
