import Link from 'next/link'
import React from 'react'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Chinese Traditional</span>
              <span>Cuisine</span>
            </h1>
            <h2 className="lowercase">The most famous cuisines all over the mainland!</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright &copy;2025 Chinese Traditional Cuisines :)</p>
      </footer>
    </div>
  )
}