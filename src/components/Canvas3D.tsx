"use client"

import { Canvas } from "@react-three/fiber"
import { PropsWithChildren } from "react"

export function Canvas3D(props: PropsWithChildren) {
  return <Canvas>{props.children}</Canvas>
}
