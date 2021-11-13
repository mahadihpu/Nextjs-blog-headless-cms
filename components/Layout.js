import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>specifications</span>
              <span>Modern Devices</span>
            </h1>
            <h2>Spread The Knowledge</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Mahadi's tech blog :)</p>
      </footer>
    </div>
  )
}