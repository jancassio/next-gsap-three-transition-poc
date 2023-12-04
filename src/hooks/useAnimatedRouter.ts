import { useAnimatedTransition } from "@/context/AnimatedTransitionContext"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export function useAnimatedRouter() {
  const router = useRouter()
  const timeline = useAnimatedTransition()
  
  const push = useCallback(
    (path: string) => {
      timeline.add(() => {
        router.push(path)
      }, '+=1')
      
      timeline.play()
    },
    []
  )

  return { push }
}
