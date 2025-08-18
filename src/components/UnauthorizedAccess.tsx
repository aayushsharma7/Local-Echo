import { SignInButton, SignUpButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const UnauthorizedAccess = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4">
      <div className="-mb-10">
        <Image src="/logo4.png" alt="LocalEcho" width={250} height={250} />
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-gradient font-headline tracking-tight mb-5">
        Welcome to LocalEcho
      </h1>
      <p className="text-lg text-muted-foreground mb-6 max-w-lg">
        Sign in to view real-time community reports, track local issues, and connect with your neighbors.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <SignInButton>
          <Button size="lg">Sign In</Button>
        </SignInButton>
        <SignUpButton>
          <Button variant="outline" size="lg">Sign Up</Button>
        </SignUpButton>
      </div>
    </div>
    </div>
  )
}

export default UnauthorizedAccess
