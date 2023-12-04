"use client"

import { useLayoutEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import type { MeshStandardMaterial, Mesh } from "three"
import { OrbitControls } from "@react-three/drei"
import { type ThreeElements, useFrame, useThree } from "@react-three/fiber"
import { splitNormalizedColors } from "@/utils/threeUtils"

type Props = ThreeElements["mesh"] & {
  index: number
}

const primaryColor = "#FF006E"
const secondaryColor = "#FF0000"

function Box(props: Props) {
  const ref = useRef<Mesh>(null)
  const { raycaster } = useThree()
  const materialRef = useRef<MeshStandardMaterial>(null)
  const [color, setColor] = useState(() => primaryColor)

  useFrame(() => {
    if (ref.current === null) return
    ref.current.rotation.x += 0.01
  })

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {})
    if (!ref.current) return
    const direction = props.index % 2 === 0 ? 1 : -1
    gsap.fromTo(
      ref.current.position,
      { y: -2 * direction, repeat: -1, yoyo: true, ease: "power1.inOut"},
      { y: 2 * direction, repeat: -1, yoyo: true, duration: 4, ease: "power1.inOut"},
    )
    gsap.ticker.add(() => {
      if (!ref.current) return
      const intersects = raycaster.intersectObject(ref.current)
      if (intersects.length > 0) {
        setColor(secondaryColor)
      } else {
        setColor(primaryColor)
      }
    })
    return () => {
      ctx.revert()
    }
  }, [])

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (materialRef.current === null) return
      const [r, g, b] = splitNormalizedColors(color)
      gsap.to(materialRef.current.color, {
        r,
        g,
        b,
      })
    })

    return () => {
      ctx.revert()
    }
  }, [color])

  return (
    <mesh
      ref={ref}
      {...props}
      onPointerOver={() => setColor(secondaryColor)}
      onPointerOut={() => setColor(primaryColor)}
      onPointerLeave={() => setColor(primaryColor)}
      onPointerMissed={() => setColor(primaryColor)}
    >
      <meshStandardMaterial ref={materialRef} />
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  )
}

export function Sketch() {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box index={0} position={[-2, 0, 0]} />
      <Box index={1} position={[0, 0, 0]} />
      <Box index={2} position={[2, 0, 0]} />
      <OrbitControls />
    </>
  )
}
