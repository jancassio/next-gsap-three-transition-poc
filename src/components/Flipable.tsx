import React, { useEffect, useRef } from "react"
import { Flip } from "gsap/Flip"
import { useFlipState } from "@/context/FlipStateContext"
import { useLeaveTransition } from "@/context/AnimatedTransitionContext"
import gsap from "gsap"

type Props = {
  title: string
}

export function Flipable(props: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const flip = useFlipState()
  // console.log("[HomePageContents]: ", {
  //   flip,
  // })

  // useEffect(() => {
  //   const section = sectionRef.current
  //   const state = flip.get("title")
  //   if (state) {
  //     Flip.from(state, { duration: 0.4 })
  //   }
  //   return () => {
  //     const state = Flip.getState(section)
  //     flip.set("title", state)
  //   }
  // }, [])

  useLeaveTransition(() =>
    gsap
      .timeline()
      .add(gsap.to(sectionRef.current, { y: -100, opacity: 0 }))
      .add((...args) => {
        console.log("[Flipable]: ", { args })
        // const state = Flip.getState(sectionRef.current)
        // flip.set("title", state)
      })
  )

  return (
    <section className="flex space-x-1" ref={sectionRef}>
      {props.title.split("").map((value, index) => (
        <div
          className={`w-36 h-36 font-semibold text-6xl uppercase bg-indigo-700 grid place-content-center`}
          key={`${value}@${index}`}
        >
          {value}
        </div>
      ))}
    </section>
  )
}
