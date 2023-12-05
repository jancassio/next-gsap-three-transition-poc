"use client"

import { PropsWithChildren } from "react"
import { useAnimatedRouter } from "@/hooks/useAnimatedRouter"

type Props = PropsWithChildren<{
  href: string
}>

export function AnimatedLink(props: Props) {
  const router = useAnimatedRouter()

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    if (typeof props.href === "string") {
      router.push(props.href)
      return
    }

    if (typeof props.href === "object" && props.href) {
      router.push(props.href)
      return
    }

    throw new Error(`Invalid href. The given value was: ${props.href}`)
  }

  return (
    <a href={props.href} onClick={handleClick}>
      {props.children}
    </a>
  )
}
