import { PropsWithChildren } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Nav } from "@/components/Nav"

import "./globals.css"
import { Canvas3D } from "@/components/Canvas3D"
import { Sketch } from "./components/Sketch"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="inline-block relative p-4 bg-gray-800 z-10">
          <Nav />
        </header>
        <section className="fixed inset-0">
          <Canvas3D>
            <Sketch />
          </Canvas3D>
        </section>
        <main className="flex min-h-screen flex-col p-4 w-full z-50">
          {props.children}
        </main>
      </body>
    </html>
  )
}
