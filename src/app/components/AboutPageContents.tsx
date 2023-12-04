"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import {
  useEnterAnimation,
  useLeaveAnimation,
} from "@/context/AnimatedTransitionContext"

export function AboutPageContents() {
  const section = useRef<HTMLDivElement>(null)
  const title = useRef<HTMLDivElement>(null)
  const text = useRef<HTMLDivElement>(null)

  useEnterAnimation(() =>
    gsap
      .timeline()
      .add(gsap.fromTo(title.current, { y: 100 }, { y: 0 }))
      .add(gsap.fromTo(text.current, { y: 500 }, { y: 0 }))
  )

  useLeaveAnimation(() =>
    gsap
      .timeline()
      .add(gsap.to(title.current, { y: -100, opacity: 0 }))
      .add(gsap.to(text.current, { y: -100, opacity: 0 }))
  )

  return (
    <section ref={section} className="my-8">
      <div className="overflow-hidden h-auto">
        <h2 ref={title} className="text-4xl font-bold">
          About
        </h2>
      </div>
      <div className="overflow-hidden h-auto">
        <p ref={text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, ab quis
          eaque tempore consequatur iusto sint, autem totam repellendus
          quibusdam vero laboriosam voluptatum perferendis dignissimos error
          molestias ipsum accusamus tempora.
        </p>
      </div>
    </section>
  )
}
