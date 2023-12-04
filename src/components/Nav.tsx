export function Nav() {
  return (
    <nav className="mt-1">
      <ul className="flex space-x-8">
        <li>
          <a
            className="hover:text-blue-400 underline font-bold"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="hover:text-blue-400 underline"
            href="/about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="hover:text-blue-400 underline"
            href="/projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="hover:text-blue-400 underline"
            href="/contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
