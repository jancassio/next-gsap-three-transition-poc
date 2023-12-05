import { AnimatedLink } from "./AnimatedLink"

export function Nav() {
  return (
    <nav className="mt-1">
      <ul className="flex space-x-8">
        <li>
          <AnimatedLink href="/">
            <span className="hover:text-blue-400 underline font-bold">Home</span>
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="/about">
            <span className="hover:text-blue-400 underline">About</span>
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="/projects">
            <span className="hover:text-blue-400 underline">Projects</span>
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink href="/contact">
            <span className="hover:text-blue-400 underline">Contact</span>
          </AnimatedLink>
        </li>
      </ul>
    </nav>
  )
}
