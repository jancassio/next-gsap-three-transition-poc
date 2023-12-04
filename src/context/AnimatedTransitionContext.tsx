"use client"

import React, { PropsWithChildren, createContext, useLayoutEffect } from "react"

import gsap from "gsap"

const timeline = gsap.timeline({ paused: true })
const Context = createContext(timeline)

export function useEnterAnimation(cb: () => gsap.core.Timeline) {
  const timeline = useAnimatedTransition()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timeline.add(cb())
      timeline.play()
    })
    return () => {
      ctx.kill()
    }
  }, [])
}

export function useLeaveAnimation(cb: () => gsap.core.Timeline) {
  const timeline = useAnimatedTransition()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timeline.addPause()
      timeline.add(cb())
      timeline.play()
    })
    return () => {
      ctx.kill()
    }
  }, [])
}

export function useAnimatedTransition() {
  return React.useContext(Context)
}

export function AnimatedTransitionProvider(props: PropsWithChildren) {
  return <Context.Provider value={timeline}>{props.children}</Context.Provider>
}
