"use client"

import React, { PropsWithChildren, createContext, useLayoutEffect } from "react"
import gsap from "gsap"

const contextValue = {
  timeline: gsap.timeline({ paused: true }),
}

export type ContextValue = typeof contextValue

const Context = createContext<ContextValue>(contextValue)

export function useEnterTransition(cb: () => gsap.core.Timeline) {
  const transition = useAnimatedTransition()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      transition.timeline.add(cb())
      transition.timeline.play()
    })
    return () => {
      ctx.kill()
      transition.timeline.clear()
    }
  }, [])
}

export function useLeaveTransition(cb: () => gsap.core.Timeline) {
  const transition = useAnimatedTransition()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      transition.timeline.addPause()
      transition.timeline.add(cb())
      transition.timeline.play()
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
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  )
}
