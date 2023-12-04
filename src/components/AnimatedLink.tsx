"use client"

import { useAnimatedRouter } from "@/hooks/useAnimatedRouter"
import Link, { LinkProps } from "next/link"
import { PropsWithChildren } from "react"

type Props = PropsWithChildren<{
  href: LinkProps["href"]
}>

export function AnimatedLink(props: Props) {
  const router = useAnimatedRouter()

  const handleClick = () => {
    if (typeof props.href === "string") {
      router.push(props.href)
      return
    }

    if (typeof props.href === "object" && props.href.pathname) {
      router.push(props.href.pathname)
      return
    }

    throw new Error(`Invalid href. The given value was: ${props.href}`)
  }

  return <Link href={props.href} onClick={handleClick} passHref>{props.children}</Link>
}
