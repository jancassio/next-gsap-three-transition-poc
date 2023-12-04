"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import {
  useEnterAnimation,
  useLeaveAnimation,
} from "@/context/AnimatedTransitionContext"

export function HomePageContents() {
  const section = useRef<HTMLDivElement>(null)

  useEnterAnimation(() =>
    gsap
      .timeline()
      .fromTo(
        section.current,
        { opacity: 0, y: -200 },
        { opacity: 1, y: 0, duration: 2 }
      )
  )

  // useLeaveAnimation(() =>
  //   gsap.timeline({ paused: true }).to(section.current, {
  //     opacity: 0,
  //     y: 200,
  //     duration: 1,
  //   })
  // )

  return (
    <>
      <section ref={section} className="my-8">
        <h2 className="text-4xl font-bold">Home</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, ab quis
          eaque tempore consequatur iusto sint, autem totam repellendus
          quibusdam vero laboriosam voluptatum perferendis dignissimos error
          molestias ipsum accusamus tempora.
        </p>
      </section>
    </>
  )
}
