import { useAnimatedTransition } from "@/context/AnimatedTransitionContext"
import { usePathname, useRouter } from "next/navigation"
import { useCallback } from "react"

export function useAnimatedRouter() {
  const router = useRouter()
  const pathname = usePathname()
  const transition = useAnimatedTransition()

  const push = useCallback((path: string) => {
    if (path === pathname) return;
    
    if( transition.timeline.totalTime() === 0) {
      router.push(path)
      return
    }
    
    transition.timeline.add(() => {
      router.push(path)
    }, ">")

    transition.timeline.play()
  }, [pathname])

  return { push }
}
