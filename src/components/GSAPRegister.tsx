"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { Flip } from "gsap/Flip"

export function GSAPRegister() {
  useEffect(() => {
    // register new gsap tools here
    gsap.registerPlugin(Flip)
  }, [])

  return null
}
